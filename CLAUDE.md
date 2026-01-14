# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vidos Authorizer Example application that demonstrates how to integrate with the Vidos Authorizer service for verifying credentials in OID4VP (OpenID for Verifiable Presentations) flows. It's a React + TypeScript + Vite application using shadcn/ui for components.

**Key Links:**

- Main site: https://vidos.id
- Dashboard: https://dashboard.vidos.id
- Documentation: https://docs.vidos.id

## Prerequisites

This project uses **Bun** as the package manager and runtime. Install from https://bun.sh

## Common Commands

### Development

```bash
bun install           # Install dependencies
bun run dev          # Start dev server with hot reload
```

### Code Quality

```bash
bun run type-check   # Run TypeScript type checking (no emit)
bun run lint         # Lint code with Biome
bun run format       # Format and fix code with Biome
```

### Build & Preview

```bash
bun run build        # Type check and build for production
bun run preview      # Preview production build locally
```

### API Types Generation

```bash
bun run generate-api:prod  # Generate types from production OpenAPI spec
bun run generate-api:local # Generate types from local OpenAPI spec file
```

The production command fetches the latest OpenAPI spec from `https://vidos.id/docs/spec/openapi/authorizer.service.yaml` and generates types to `src/api/authorizer.ts`. **Do not manually edit the generated file.**

## Architecture

### Tech Stack

- **Build Tool:** Vite 7 with React plugin
- **Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS v4 (using @tailwindcss/vite plugin)
- **UI Components:** shadcn/ui (New York style)
- **API Client:** openapi-fetch with auto-generated types from openapi-typescript
- **Code Quality:** Biome (linting + formatting)

### Code Style

- **Indentation:** Tabs (enforced by Biome)
- **Quotes:** Double quotes for JavaScript/TypeScript (enforced by Biome)
- **Import Organization:** Auto-organized by Biome assist actions

### Project Structure

```
src/
├── api/
│   ├── authorizer.ts          # Auto-generated OpenAPI types (DO NOT EDIT)
│   └── client.ts              # Authorizer API client factory
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── stages/                # Three-stage flow components
│   │   ├── CreateStage/       # Stage 1: Configure authorization
│   │   ├── AuthorizationStage/# Stage 2: Present QR/DC API button
│   │   └── ResultStage/       # Stage 3: Display verification results
│   ├── AuthorizationFlow.tsx  # Main flow orchestrator
│   ├── ProgressIndicator.tsx  # Stage progress visualization
│   └── JsonCollapsible.tsx    # Collapsible JSON display
├── context/
│   └── AuthorizationContext.tsx # Global app state management
├── hooks/
│   ├── useCreateAuthorization.ts # Create authorization requests
│   ├── useAuthorizationStatus.ts # Poll authorization status
│   └── usePolicyResponse.ts      # Fetch policy evaluation results
├── types/
│   └── app.ts                 # Core TypeScript types and interfaces
├── utils/
│   ├── queryBuilder.ts        # Build DCQL queries
│   ├── requestBuilder.ts      # Build authorization request bodies
│   ├── dcapi.ts               # Digital Credentials API utilities
│   └── validation.ts          # Input validation helpers
├── config/
│   └── credential-cases.ts    # Credential definitions (PID, MDL, etc.)
├── lib/
│   └── utils.ts               # Utility functions (cn helper, etc.)
├── App.tsx                    # Main application component
└── main.tsx                   # React entry point
```

### Path Aliases

The project uses TypeScript path aliases configured in `tsconfig.json`:

- `@/*` maps to `src/*`
- Import components as `@/components/ui/button`
- Import utils as `@/lib/utils`
- Resolved at build time via `vite-tsconfig-paths` plugin

### API Client Architecture

The application uses a type-safe API client pattern:

1. **Type Generation:** OpenAPI spec → TypeScript types via `openapi-typescript`
2. **Client Creation:** `createAuthorizerClient()` in `src/api/client.ts` creates a typed `openapi-fetch` client
3. **Usage:** The client is instantiated with base URL and API key, providing full IntelliSense for all Vidos Authorizer endpoints

The client automatically handles:

- Authorization header with Bearer token
- Type-safe request/response bodies
- Path parameters and query strings

### Component System

Uses shadcn/ui with:

- **Style:** "new-york" variant
- **Icon Library:** lucide-react
- **Utilities:** `cn()` helper from `class-variance-authority` + `tailwind-merge`
- **Animations:** tw-animate-css for Tailwind animations

To add new shadcn/ui components, use the shadcn CLI (configuration in `components.json`).

## Application Architecture

### Three-Stage Flow Pattern

The app implements a wizard-style flow with three distinct stages managed by `AuthorizationContext`:

1. **Create Stage** (`stage: "create"`)
   - Configure authorizer URL (persisted to localStorage)
   - Build multiple credential requests with attribute selection
   - Configure response mode (direct_post, direct_post.jwt, dc_api, dc_api.jwt)
   - Generates DCQL query from credential requests

2. **Authorization Stage** (`stage: "authorization"`)
   - Displays QR code with `openid4vp://` URI for standard flows
   - **OR** presents "Get Credentials" button for DC API flows
   - Polls authorization status every 2 seconds
   - Transitions to Result stage when status becomes terminal

3. **Result Stage** (`stage: "result"`)
   - Shows authorization outcome (authorized/rejected/expired/error)
   - Displays policy evaluation results with credential attributes
   - Provides structured view of which attributes were verified

### State Management Pattern

**Global State:** React Context + useReducer pattern in `AuthorizationContext.tsx`

Key state properties:
- `stage`: Current flow stage
- `credentialRequests`: Array of credential requests with unique IDs
- `responseModeConfig`: Response mode and DC API protocol settings
- `authorizationId`: Created authorization ID
- `authorizeUrl`: OID4VP URL (null for DC API flows)
- `digitalCredentialGetRequest`: DC API request object (null for standard flows)
- `policyResponse`: Verification results from authorizer
- `authorizationStatus`: Lifecycle status (created → pending → authorized/rejected/expired/error)

### Response Mode Architecture

The application supports multiple response modes for credential presentation:

**Standard OID4VP Modes:**
- `direct_post`: Response posted directly to authorizer
- `direct_post.jwt`: Signed JWT response posted to authorizer

**Digital Credentials API (DC API) Modes:**
- `dc_api`: Browser native credential flow (unsigned)
- `dc_api.jwt`: Browser native credential flow (signed)

DC API modes require:
- `protocol`: Either `openid4vp-v1-unsigned` or `openid4vp-v1-signed`
- `expectedOrigins`: Array of allowed origins (for signed protocol only)
- Browser support check via `navigator.credentials.get()`

The `requestBuilder.ts` utility builds appropriate request bodies based on the selected mode.

### DCQL Query Building

Credential requests are converted to DCQL (Digital Credentials Query Language) format via `queryBuilder.ts`. The query structure varies by credential format:

**SD-JWT credentials:** Use `vct` (verifiable credential type)
**mDoc credentials:** Use `doctype` and `namespace`

Multiple credential requests result in multiple entries in the DCQL query array.

### Credential Definitions

`src/config/credential-cases.ts` defines supported credential types:
- **PID:** Person Identification Data (supports both dc+sd-jwt and mso_mdoc)
- **MDL:** Mobile Driving License (mso_mdoc only)
- **Photo ID:** Generic photo identification (both formats)

Each credential case includes:
- Document type and format mappings
- Available attributes with display names
- Format-specific attribute paths (mDoc vs SD-JWT paths differ)
- Credential type identifiers (vct for SD-JWT, doctype/namespace for mDoc)

## TypeScript Configuration

- **Strict mode enabled** with additional strictness:
  - `noUnusedLocals`, `noUnusedParameters`
  - `noFallthroughCasesInSwitch`
  - `noUncheckedSideEffectImports`
  - `erasableSyntaxOnly` (for type-only imports)
- **Target:** ES2022 with DOM types
- **Module Resolution:** bundler mode with Vite
- Uses `vite-tsconfig-paths` plugin for path alias resolution

## Important Notes

- When regenerating API types with `bun run generate-api:prod`, the entire `src/api/authorizer.ts` file is replaced
- Biome is configured to work with Tailwind directives in CSS files
- The project uses Vite 7's new features and Tailwind v4's Vite plugin (not PostCSS)
- Authorization URL is persisted to localStorage for convenience across sessions
- The tsconfig files `tsconfig.app.json` and `tsconfig.node.json` have been removed; all configuration is now in `tsconfig.json`
- DC API functionality requires HTTPS context and modern browser support (check via `checkDCAPISupport()`)

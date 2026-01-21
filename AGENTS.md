# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Plan Mode

- Make the plan extremely concise. Sacrifice grammar for the sake of concision.
- At the end of each plan, give me a list of unresolved questions to answer, if any.

## Project Overview

Vidos Authorizer Demo: React+TS+Vite app demonstrating OID4VP credential verification flows. Uses Bun, shadcn/ui, Tailwind v4, Biome.

**Links:** https://vidos.id | https://dashboard.vidos.id | https://docs.vidos.id

**For detailed architecture, data flows, and navigation:** See [docs/CODEBASE_MAP.md](docs/CODEBASE_MAP.md)

## Commands

```bash
bun install              # deps
bun run dev              # dev server
bun run type-check       # TS check (no emit)
bun run lint             # Biome lint
bun run format           # Biome format+fix
bun run build            # type-check + prod build
bun run generate-api:prod # regen src/api/authorizer.ts from OpenAPI (NEVER edit manually)
```

## Architecture

**Stack:** Vite 7, React 19, TS strict mode, Tailwind v4 Vite plugin (not PostCSS), shadcn/ui "new-york", openapi-fetch client

**Code Style:** Tabs, double quotes (Biome enforced)

**Path Aliases:** `@/*` → `src/*` (via vite-tsconfig-paths)

**API Client:** OpenAPI spec → `openapi-typescript` → `src/api/authorizer.ts` (auto-generated) → `createAuthorizerClient()` in `src/api/client.ts` creates typed fetch client

### Three-Stage Flow (AuthorizationContext.tsx)

Wizard-style React Context + useReducer managing:

1. **Create Stage** (`stage: "create"`)
   - Configure authorizer URL (localStorage persisted)
   - Build credential requests array (multiple allowed)
   - Select response mode: `direct_post`, `direct_post.jwt`, `dc_api`, `dc_api.jwt`
   - Generate DCQL query via `queryBuilder.ts`

2. **Authorization Stage** (`stage: "authorization"`)
   - Standard flows: QR code with `openid4vp://` URI
   - DC API flows: "Get Credentials" button invoking `navigator.credentials.get()`
   - Polls status every 2s via `useAuthorizationStatus`
   - Transitions on terminal status

3. **Result Stage** (`stage: "result"`)
   - Shows outcome: authorized/rejected/expired/error
   - Displays policy evaluation results fetched by `usePolicyResponse`

**State Properties:**

- `stage`, `credentialRequests`, `responseModeConfig`, `authorizationId`
- `authorizeUrl` (null for DC API), `digitalCredentialGetRequest` (null for standard)
- `policyResponse`, `authorizationStatus`

### Response Modes

**Standard OID4VP:** `direct_post`, `direct_post.jwt` (posted to authorizer)
**DC API:** `dc_api`, `dc_api.jwt` (browser native flow)

DC API requires:

- `protocol`: `openid4vp-v1-unsigned` or `openid4vp-v1-signed`
- `expectedOrigins` array (signed only)
- Browser support check: `checkDCAPISupport()` in `dcapi.ts`

`requestBuilder.ts` constructs request bodies based on mode.

### DCQL Query Building

`queryBuilder.ts` converts credential requests to DCQL:

- **SD-JWT:** uses `vct` (verifiable credential type)
- **mDoc:** uses `doctype` + `namespace`

### Credential Definitions

`src/config/credential-cases.ts` defines PID, MDL, Photo ID with:

- Format mappings (dc+sd-jwt / mso_mdoc)
- Attribute definitions + display names
- Format-specific paths (mDoc vs SD-JWT differ)
- Type identifiers (vct / doctype+namespace)

## Key Files

- `AuthorizationContext.tsx`: global state, stage transitions
- `src/hooks/useCreateAuthorization.ts`: creates auth requests
- `src/hooks/useAuthorizationStatus.ts`: polls status
- `src/hooks/usePolicyResponse.ts`: fetches verification results
- `src/utils/requestBuilder.ts`: builds request bodies per response mode
- `src/utils/queryBuilder.ts`: builds DCQL from credential requests
- `src/utils/dcapi.ts`: DC API support detection + request building
- `src/config/credential-cases.ts`: credential type definitions

## Critical Notes

- `src/api/authorizer.ts` auto-generated: NEVER manually edit
- Single `tsconfig.json` (app+node configs removed)
- DC API needs HTTPS + modern browser
- Authorization URL persisted to localStorage

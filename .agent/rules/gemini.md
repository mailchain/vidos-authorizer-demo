---
trigger: always_on
description: |
---

# Vidos Authorizer Example - Project Context & Rules

## 1. Project Overview
This application is a reference implementation for the **Vidos Authorizer**, demonstrating credential verification in OID4VP-based flows.
- **Type**: Frontend Single Page Application (SPA).
- **Core Framework**: React 19 + Vite 7.
- **UI Framework**: shadcn/ui.

## 2. Technology Stack
*   **Runtime & Package Manager**: [Bun](https://bun.sh) (v1.x). **ALWAYS** use `bun` for installing packages and running scripts.
*   **Language**: TypeScript.
    *   **Config**: Strict mode, ES2022 target.
    *   **Type Check**: `bun run type-check`. Run this after making changes to verify compilation success.
*   **Styling**: **Tailwind CSS v4** via `@tailwindcss/vite`.
    *   **Components**: **shadcn/ui** (New York style).
    *   **Icons**: `lucide-react`.
    *   **Animations**: `tw-animate-css`.
    *   **Utils**: `cn()` helper (clsx + tailwind-merge).
*   **Linting & Formatting**: **Biome**.
    *   **Do NOT** use ESLint or Prettier.
    *   **Lint**: `bun run lint`.
    *   **Format**: `bun run format`.
*   **API Client**: `openapi-fetch`.
    *   Schema: `src/api/authorizer.ts` (auto-generated).
    *   Generation: `bun run generate-api`.

## 3. Directory Structure & Path Aliases
*   **Aliases**: Use `@/` to resolve to `./src/`.
    *   Example: `import { Button } from "@/components/ui/button"`.

```
src/
├── api/             # API integration
│   ├── authorizer.ts  # Generates OpenAPI types (READ-ONLY)
│   └── client.ts      # Client factory (createAuthorizerClient)
├── components/      # React components
│   └── ui/            # shadcn/ui primitives
├── lib/             # Utilities
│   └── utils.ts       # cn() helper
├── App.tsx          # Main component / Router
└── main.tsx         # Entry point
```

## 4. Workflow & Coding Standards
1.  **Format Code**: ALWAYS run `bun run format` after changes.
2.  **Strict Types**: No `any`.
3.  **UI Components**:
    *   Use `shadcn/ui` components from `@/components/ui`.
    *   To add new primitives, use `bunx --bun shadcn@latest add [component]`.
4.  **API Integration**:
    *   **Pattern**: Use `createAuthorizerClient` from `@/api/client`.
    *   **Types**: Allow `openapi-fetch` to infer types from the generated schema.
    *   **Regeneration**: Run `bun run generate-api` if API specs change.
5.  **Clean Code**:
    *   Use double quotes and tabs (Biome defaults).
    *   Sort imports (Biome handles this).

## 5. Development Commands
*   `bun install`: Install dependencies.
*   `bun run dev`: Start dev server.
*   `bun run type-check`: Verify TypeScript types.
*   `bun run lint`: Run Biome linter.
*   `bun run format`: Fix formatting/linting issues.
*   `bun run build`: Build for production.

## 6. User Preferences (inferred)
*   **OS**: macOS.
*   **Shell**: zsh.
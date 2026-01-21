# Commands

Package manager: Bun.

```bash
bun install               # deps
bun run dev               # dev server
bun run type-check        # TS check (no emit)
bun run lint              # Biome lint
bun run format            # Biome format+fix
bun run build             # type-check + prod build
bun run generate-api:local # regen src/api/authorizer.ts from OpenAPI (never edit manually)
bun run generate-api:prod # regen src/api/authorizer.ts from OpenAPI (never edit manually)
```

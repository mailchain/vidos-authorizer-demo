# AGENTS.md

Vidos Authorizer Demo: React+TS+Vite app for OID4VP credential verification flows.

Package manager: Bun (`bun install`).

Non-standard commands:

- `bun run type-check` - TS check (no emit)
- `bun run lint` - Biome lint
- `bun run format` - Biome format+fix
- `bun run build` - type-check + prod build
- `bun run generate-api:local` - regenerate `src/api/authorizer.ts` from OpenAPI with local `authorizer.service.yaml`
- `bun run generate-api:prod` - regenerate `src/api/authorizer.ts` from OpenAPI with remote prod OpenAPI spec

More guidance:

- [Plan mode](docs/agents/plan-mode.md)
- [Commands](docs/agents/commands.md)
- [Architecture](docs/agents/architecture.md)
- [Key files](docs/agents/key-files.md)
- [Critical notes](docs/agents/critical-notes.md)
- [References](docs/agents/references.md)

## 1. Implementation
- [x] 1.1 Create `src/config/policyDefinitions.ts` with policy metadata map (name → description + docs URL)
- [x] 1.2 Add PolicyDefinition interface to `src/types/app.ts` if needed
- [x] 1.3 Update `PolicyResultItem` in `PolicyResults.tsx` to display description below policy name
- [x] 1.4 Add clickable documentation link icon/button in `PolicyResultItem`
- [x] 1.5 Handle unknown policies gracefully (fallback to policy name only)

## 2. Validation
- [x] 2.1 Run type-check: `bun run type-check`
- [x] 2.2 Run lint: `bun run lint`
- [x] 2.3 Run build: `bun run build`
- [x] 2.4 Manual testing: verify policy descriptions and links display correctly in results page

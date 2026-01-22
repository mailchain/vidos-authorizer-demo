## 1. Implementation
- [ ] 1.1 Create `src/config/policyDefinitions.ts` with policy metadata map (name → description + docs URL)
- [ ] 1.2 Add PolicyDefinition interface to `src/types/app.ts` if needed
- [ ] 1.3 Update `PolicyResultItem` in `PolicyResults.tsx` to display description below policy name
- [ ] 1.4 Add clickable documentation link icon/button in `PolicyResultItem`
- [ ] 1.5 Handle unknown policies gracefully (fallback to policy name only)

## 2. Validation
- [ ] 2.1 Run type-check: `bun run type-check`
- [ ] 2.2 Run lint: `bun run lint`
- [ ] 2.3 Run build: `bun run build`
- [ ] 2.4 Manual testing: verify policy descriptions and links display correctly in results page

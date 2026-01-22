## 1. Implementation

- [x] 1.1 Create `src/components/ui/PrettyJson.tsx` with syntax highlighting and collapsible nodes
- [x] 1.2 Add Tailwind classes for JSON token colors (key, string, number, boolean, null)
- [x] 1.3 Update `JsonCollapsible.tsx` to use `PrettyJson` component
- [x] 1.4 Update `ResultStage/index.tsx` raw policy response to use `PrettyJson`
- [x] 1.5 Update `PolicyResults.tsx` result.data display to use `PrettyJson`

## 2. Validation

- [x] 2.1 Run `bun run type-check` and fix any type errors
- [x] 2.2 Run `bun run lint` and fix any lint errors
- [x] 2.3 Run `bun run build` and verify successful production build
- [x] 2.4 Manual test: verify JSON rendering on result page with nested objects

## 3. Enhancements

- [x] 3.1 Fix default expansion - expand all nodes by default
- [x] 3.2 Add maxStringLength prop with middle ellipsis for long strings
- [x] 3.3 Add copy button for individual field values with success feedback
- [x] 3.4 Add copy entire JSON button with "Copied!" feedback

## 4. UX Improvements

- [x] 4.1 Make Copy JSON button sticky/floating in top right corner
- [x] 4.2 Improve dark mode colors for policy result backgrounds (error/success)
- [x] 4.3 Show Copy JSON button only when hovering over JSON view

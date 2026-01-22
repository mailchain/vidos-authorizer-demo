# Change: Add Pretty JSON Display

## Why
Raw `JSON.stringify` output is hard to read for large nested objects. Users reviewing policy results, authorization data, and debug info need syntax highlighting and collapsible sections to efficiently navigate JSON structures.

## What Changes
- Add lightweight pretty JSON rendering with syntax highlighting (color-coded keys, strings, numbers, booleans, null)
- Add collapsible nested objects/arrays for easier navigation
- Keep raw textarea for JSON editing (no change to edit experience)
- Pure CSS + minimal JS approach—no external JSON viewer libraries

## Impact
- Affected specs: NEW `json-display` capability
- Affected code:
  - `src/components/JsonCollapsible.tsx` - use new pretty renderer
  - `src/components/stages/ResultStage/index.tsx` - raw policy response display
  - `src/components/stages/ResultStage/PolicyResults.tsx` - policy result data display

## 1. Core Implementation

- [x] 1.1 Define `ConfigExport` type interface for JSON schema (authorizer URL, instance type, custom credential cases)
- [x] 1.2 Create `src/utils/configExport.ts` with `exportConfig()` and `validateImportedConfig()` functions
- [x] 1.3 Add `importConfig` action to `useFlowStore` for bulk updating config state

## 2. UI Components

- [x] 2.1 Create `ConfigExportImport.tsx` component with export button (downloads JSON) and import button (file input)
- [x] 2.2 Add collapsible "Advanced" section to `AuthorizerConfig.tsx` containing the export/import controls
- [x] 2.3 Add guidance note explaining feature usefulness (primary: mobile transfer; secondary: backup, sharing)
- [x] 2.4 Show confirmation dialog before import (warns about overwriting existing config)
- [x] 2.5 Display success/error feedback after import operation

## 3. Validation & Edge Cases

- [x] 3.1 Validate imported JSON schema (required fields, correct types)
- [x] 3.2 Handle malformed JSON gracefully with user-friendly error messages
- [x] 3.3 Handle version compatibility (include schema version in export)

## 4. Testing & Polish

- [x] 4.1 Run type-check and lint
- [x] 4.2 Manual test: export config, import on fresh browser, verify all settings restored
- [x] 4.3 Manual test: import invalid JSON, verify error handling

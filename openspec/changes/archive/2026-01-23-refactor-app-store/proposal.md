# Change: Refactor App Store Using Zustand Slices Pattern

## Why

The `useFlowStore` (345 lines, 30+ state properties, 35+ actions) has grown into a monolithic store mixing:

- Authorization session state (stage, authorizationId, authorizeUrl, etc.)
- Credential configuration (credentialRequests, credentialSets, responseModeConfig)
- Custom credential cases (customCredentialCases CRUD)
- Raw JSON mode (useRawJsonMode, rawJsonContent, customJsonRequests)
- Instance config (instanceType, ownAuthorizerUrl)
- UI state (showPreview, error)
- Debug state (lastRequest, lastResponse)

This causes:

1. **Re-render issues** - Components like CreateStage/index.tsx subscribe to 12+ properties; any change triggers re-renders
2. **Cognitive load** - Hard to understand which state belongs to which domain
3. **Maintenance burden** - All actions interleaved; error-clearing logic duplicated across ~15 actions
4. **Testing difficulty** - Can't test slices in isolation

## What Changes

1. **Rename store** from `useFlowStore` to `useAppStore` (clearer purpose)

2. **Split into domain slices** using Zustand slices pattern:
   - `configSlice` - instanceType, ownAuthorizerUrl
   - `credentialRequestsSlice` - credentialRequests CRUD, credentialSets CRUD
   - `responseModeSlice` - responseModeConfig
   - `customCasesSlice` - customCredentialCases CRUD
   - `jsonModeSlice` - useRawJsonMode, rawJsonContent, customJsonRequests
   - `sessionSlice` - stage, authorizationId, authorizeUrl, digitalCredentialGetRequest, expiresAt
   - `uiSlice` - showPreview, error
   - `debugSlice` - lastRequest, lastResponse

3. **Add typed selectors** per slice for optimal subscriptions
4. **Extract shared logic** (error clearing) into slice helper
5. **Keep single store** - slices combine into one store with one persist config
6. **Update consumers** to use new name and slice-specific selectors

## Impact

- **Affected code**: `src/stores/useFlowStore.ts` → `src/stores/AppStore/`
- **Affected consumers**: 26 files importing useFlowStore (rename + update selectors)
- **Breaking change**: Hook renamed `useFlowStore` → `useAppStore`
- **Bundle size**: Negligible change (code reorganization only)
- **Persistence**: Unchanged (same localStorage key and partialize config)

## Risk Assessment

- **Low risk**: Slices pattern is official Zustand recommendation
- **Refactor-only**: No new features, no behavior changes
- **Simple migration**: Find/replace hook name

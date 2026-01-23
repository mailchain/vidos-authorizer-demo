# Tasks: Refactor App Store Using Zustand Slices Pattern

## 1. Setup

- [x] 1.1 Create `src/stores/AppStore/` directory structure
- [x] 1.2 Create `src/stores/AppStore/types.ts` with all slice interfaces and `AuthorizationState`
- [x] 1.3 Verify TypeScript strict mode works with StateCreator types

## 2. Implement Slices

- [x] 2.1 Create `slices/configSlice.ts` (instanceType, ownAuthorizerUrl)
- [x] 2.2 Create `slices/credentialRequestsSlice.ts` (credentialRequests, credentialSets CRUD)
- [x] 2.3 Create `slices/responseModeSlice.ts` (responseModeConfig)
- [x] 2.4 Create `slices/customCasesSlice.ts` (customCredentialCases CRUD)
- [x] 2.5 Create `slices/jsonModeSlice.ts` (useRawJsonMode, rawJsonContent, customJsonRequests)
- [x] 2.6 Create `slices/sessionSlice.ts` (stage, authorizationId, authorizeUrl, digitalCredentialGetRequest, expiresAt, startFresh, backToCreateStage, importConfig)
- [x] 2.7 Create `slices/uiSlice.ts` (showPreview, error, setError, resetError)
- [x] 2.8 Create `slices/debugSlice.ts` (lastRequest, lastResponse)

## 3. Combine and Export

- [x] 3.1 Create `src/stores/AppStore/index.ts` combining all slices with persist middleware
- [x] 3.2 Create `src/stores/AppStore/selectors.ts` with typed selectors per domain
- [x] 3.3 Verify persist middleware works (same localStorage key, same partialize fields)

## 4. Update Consumers

- [x] 4.1 Update `src/components/AuthorizationFlow.tsx`
- [x] 4.2 Update `src/components/stages/CreateStage/` (10 files)
- [x] 4.3 Update `src/components/stages/AuthorizationStage/` (2 files)
- [x] 4.4 Update `src/components/stages/ResultStage/index.tsx`
- [x] 4.5 Update `src/components/CustomCredentialCaseManager.tsx`
- [x] 4.6 Update `src/components/CustomCredentialCaseDialog.tsx`
- [x] 4.7 Update `src/components/SavedJsonRequestDialog.tsx`
- [x] 4.8 Update `src/hooks/useFlowTransitions.ts`
- [x] 4.9 Update `src/queries/` (4 files)

## 5. Cleanup

- [x] 5.1 Delete `src/stores/useFlowStore.ts`

## 6. Validation

- [x] 6.1 Run `bun run type-check` - zero errors
- [x] 6.2 Run `bun run lint` - zero errors
- [x] 6.3 Run `bun run build` - successful build
- [x] 6.4 Manual test: Create authorization flow works
- [x] 6.5 Manual test: Persisted state survives page reload
- [x] 6.6 Manual test: startFresh and backToCreateStage work correctly

## Dependencies

- Tasks 2.x can run in parallel
- Task 3.x depends on all 2.x complete
- Task 4.x depends on 3.x complete
- Task 5.x depends on 4.x complete
- Task 6.x depends on 5.x complete

# Design: App Store Slices Refactor

## Context

Current `useFlowStore` is a single 345-line store with 30+ properties and 35+ actions. Per Zustand best practices, large stores should be split into slices for maintainability and performance.

**Naming**: Rename to `useAppStore` - clearer than "flow" which is vague. The store manages the OID4VP authorization verification workflow.

**Stakeholders**: All frontend components using authorization state
**Constraints**: Must maintain backward compatibility for state shape; persist middleware config unchanged

## Goals / Non-Goals

**Goals**:

- Improve code organization via domain-driven slices
- Enable targeted re-renders via slice-specific selectors
- Reduce cognitive load for developers
- Follow Zustand 5.x TypeScript patterns
- Clearer naming that reflects purpose

**Non-Goals**:

- Change state shape
- Add new features
- Change persistence behavior
- Split into multiple stores (keeping single store)

## Decisions

### Decision 1: Rename to `useAppStore`

- `useFlowStore` → `useAppStore`
- `FlowState` → `AuthorizationState`
- File: `src/stores/useFlowStore.ts` → `src/stores/AppStore/index.ts`

**Why**: "Flow" is generic. "Authorization" describes what this store manages - the OID4VP credential verification authorization workflow.

### Decision 2: Use Zustand Slices Pattern

```typescript
import { create, StateCreator } from "zustand";

// Slice type with cross-slice access
type ConfigSlice = {
  instanceType: InstanceType;
  ownAuthorizerUrl: string;
  setInstanceType: (type: InstanceType) => void;
  setOwnAuthorizerUrl: (url: string) => void;
};

// Slice creator with proper typing
const createConfigSlice: StateCreator<
  AuthorizationState, // Full combined type
  [], // Middleware mutators
  [], // Chained middleware
  ConfigSlice // This slice type
> = (set) => ({
  instanceType: getManagedAuthorizerUrl() ? "managed" : "own",
  ownAuthorizerUrl: "",
  setInstanceType: (instanceType) => set({ instanceType, error: null }),
  setOwnAuthorizerUrl: (ownAuthorizerUrl) =>
    set({ ownAuthorizerUrl, error: null }),
});

// Combine slices
const useAppStore = create<AuthorizationState>()(
  persist(
    (...a) => ({
      ...createConfigSlice(...a),
      ...createCredentialRequestsSlice(...a),
      ...createResponseModeSlice(...a),
      ...createCustomCasesSlice(...a),
      ...createJsonModeSlice(...a),
      ...createSessionSlice(...a),
      ...createUiSlice(...a),
      ...createDebugSlice(...a),
    }),
    persistConfig,
  ),
);
```

**Why**: Official Zustand pattern. Enables type-safe cross-slice access.

### Decision 3: Slice Organization

| Slice                   | State                                                                        | Actions                                                | Persisted                     |
| ----------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------- |
| configSlice             | instanceType, ownAuthorizerUrl                                               | 2 setters                                              | Yes                           |
| credentialRequestsSlice | credentialRequests, credentialSets                                           | 8 CRUD actions                                         | No                            |
| responseModeSlice       | responseModeConfig                                                           | 1 setter                                               | No                            |
| customCasesSlice        | customCredentialCases                                                        | 3 CRUD actions                                         | Yes                           |
| jsonModeSlice           | useRawJsonMode, rawJsonContent, customJsonRequests                           | 5 actions                                              | Yes (customJsonRequests only) |
| sessionSlice            | stage, authorizationId, authorizeUrl, digitalCredentialGetRequest, expiresAt | 5 setters, startFresh, backToCreateStage, importConfig | No                            |
| uiSlice                 | showPreview, error                                                           | 3 actions                                              | No                            |
| debugSlice              | lastRequest, lastResponse                                                    | 2 setters                                              | No                            |

**Why**: Groups by domain. Keeps persistence config unchanged.

### Decision 4: Typed Selectors Per Slice

```typescript
// Exported selectors for optimal subscriptions
export const configSelectors = {
  instanceType: (state: AuthorizationState) => state.instanceType,
  ownAuthorizerUrl: (state: AuthorizationState) => state.ownAuthorizerUrl,
  authorizerUrl: selectAuthorizerUrl, // Existing computed selector
};

// Usage in components - only re-renders when specific field changes
const instanceType = useAppStore(configSelectors.instanceType);
```

**Why**: Prevents unnecessary re-renders.

### Decision 5: File Structure

```
src/stores/
  AppStore/
    index.ts              # Main export, combine slices, persist config
    types.ts              # All slice and combined types
    slices/
      configSlice.ts
      credentialRequestsSlice.ts
      responseModeSlice.ts
      customCasesSlice.ts
      jsonModeSlice.ts
      sessionSlice.ts
      uiSlice.ts
      debugSlice.ts
    selectors.ts          # All typed selectors
```

**Why**: Co-locates related code. Clear organization.

### Decision 6: Error Clearing Pattern

Current code clears `error: null` in ~15 actions. Centralize:

```typescript
// Helper to wrap set with error clearing
const setWithErrorClear = (
  set: SetState<AuthorizationState>,
  partial: Partial<AuthorizationState>,
) => set({ ...partial, error: null });
```

**Why**: DRY principle.

## Alternatives Considered

### Alternative A: Keep `useFlowStore` Name

Keep existing name for backward compatibility.

**Rejected**: "Flow" is vague. Better to rename now while refactoring.

### Alternative B: Multiple Stores

Create separate stores (useConfigStore, useCredentialsStore, etc.).

**Rejected**: Complicates cross-store access. `removeCredentialRequest` needs `credentialSets`.

### Alternative C: Keep Monolithic + Add Selectors Only

Just add selectors without restructuring.

**Rejected**: Doesn't address cognitive load. 345 lines still hard to navigate.

## Risks / Trade-offs

| Risk                      | Likelihood | Impact | Mitigation                        |
| ------------------------- | ---------- | ------ | --------------------------------- |
| Type inference breaks     | Medium     | High   | Use explicit StateCreator types   |
| Consumer migration errors | Medium     | Low    | Simple find/replace for hook name |
| Persist middleware issues | Low        | Medium | Keep partialize config identical  |

## Migration Plan

1. Create new `AppStore/` directory structure
2. Move state/actions to slices
3. Update all 26 consumers (find/replace `useFlowStore` → `useAppStore`)
4. Delete old `useFlowStore.ts`
5. Run type-check, lint, build

**Rollback**: Revert PR. No data migration needed (same localStorage structure).

## Open Questions

None - naming clarified.

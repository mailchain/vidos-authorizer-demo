# Key Files

## State

- `src/stores/appStore/` - Zustand store (slices pattern)
  - `index.ts` - combined store with persist middleware
  - `types.ts` - slice interfaces
  - `selectors.ts` - typed selectors
  - `slices/` - domain slices (config, session, credentialRequests, etc.)

## Queries

- `src/queries/useCreateAuthorizationMutation.ts` - creates auth requests
- `src/queries/useAuthorizationStatusQuery.ts` - polls status
- `src/queries/usePolicyResponseQuery.ts` - fetches verification results
- `src/queries/useDCAPIMutation.ts` - DC API credential request

## Utils

- `src/utils/requestBuilder.ts` - builds request bodies per response mode
- `src/utils/queryBuilder.ts` - builds DCQL from credential requests
- `src/utils/dcapi.ts` - DC API support detection + request building

## Config

- `src/config/credential-cases/` - credential type definitions (PID, MDL, Photo ID)

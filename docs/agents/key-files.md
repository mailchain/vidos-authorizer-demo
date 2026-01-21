# Key Files

- `AuthorizationContext.tsx`: global state, stage transitions
- `src/hooks/useCreateAuthorization.ts`: creates auth requests
- `src/hooks/useAuthorizationStatus.ts`: polls status
- `src/hooks/usePolicyResponse.ts`: fetches verification results
- `src/utils/requestBuilder.ts`: builds request bodies per response mode
- `src/utils/queryBuilder.ts`: builds DCQL from credential requests
- `src/utils/dcapi.ts`: DC API support detection + request building
- `src/config/credential-cases.ts`: credential type definitions

# Architecture

## Stack

- Vite 7, React 19, TypeScript strict mode
- Tailwind v4 Vite plugin (not PostCSS)
- shadcn/ui "new-york"
- Zustand 5 (slices pattern)
- openapi-fetch client

## Conventions

- Tabs, double quotes (Biome enforced)
- Path alias: `@/*` -> `src/*` (via vite-tsconfig-paths)

## API Client

- OpenAPI spec -> `openapi-typescript` -> `src/api/authorizer.ts` (auto-generated)
- `createAuthorizerClient()` in `src/api/client.ts` creates typed fetch client

## App Store (`src/stores/appStore/`)

Zustand store with slices pattern. Import: `import { useAppStore } from "@/stores/appStore"`.

**Slices:**
- `configSlice` - instanceType, ownAuthorizerUrl
- `credentialRequestsSlice` - credentialRequests, credentialSets CRUD
- `responseModeSlice` - responseModeConfig
- `customCasesSlice` - customCredentialCases CRUD
- `jsonModeSlice` - useRawJsonMode, rawJsonContent, customJsonRequests
- `sessionSlice` - stage, authorizationId, authorizeUrl, startFresh, backToCreateStage
- `uiSlice` - showPreview, error
- `debugSlice` - lastRequest, lastResponse

**Selectors:** `selectAuthorizerUrl` + domain selectors in `selectors.ts`.

**Persist:** localStorage key `vidos-flow-storage`, partializes config/customCases/customJsonRequests.

## Three-Stage Flow

1. **Create Stage** (`stage: "create"`)
   - Configure authorizer URL (persisted)
   - Build credential requests + credential sets (DCQL)
   - Select response mode: `direct_post`, `direct_post.jwt`, `dc_api`, `dc_api.jwt`

2. **Authorization Stage** (`stage: "authorization"`)
   - Standard: QR code with `openid4vp://` URI
   - DC API: "Get Credentials" button → `navigator.credentials.get()`
   - Polls status via `useAuthorizationStatusQuery`

3. **Result Stage** (`stage: "result"`)
   - Shows authorized/rejected/expired/error
   - Displays policy results via `usePolicyResponseQuery`

## Response Modes

- Standard OID4VP: `direct_post`, `direct_post.jwt` (posted to authorizer)
- DC API: `dc_api`, `dc_api.jwt` (browser native flow)
- DC API requires HTTPS + modern browser support
- DC API requires `protocol` (`openid4vp-v1-unsigned` or `openid4vp-v1-signed`)
- Signed DC API requires `expectedOrigins` array
- Browser support check: `checkDCAPISupport()` in `dcapi.ts`
- `requestBuilder.ts` constructs request bodies based on mode

## DCQL Query Building

- `queryBuilder.ts` converts credential requests to DCQL
- SD-JWT uses `vct` (verifiable credential type)
- mDoc uses `doctype` + `namespace`

## Credential Definitions

- `src/config/credential-cases.ts` defines PID, MDL, Photo ID
- Format mappings (dc+sd-jwt / mso_mdoc)
- Attribute definitions + display names
- Format-specific paths (mDoc vs SD-JWT differ)
- Type identifiers (vct / doctype+namespace)

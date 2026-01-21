# Architecture

## Stack

- Vite 7, React 19, TypeScript strict mode
- Tailwind v4 Vite plugin (not PostCSS)
- shadcn/ui "new-york"
- openapi-fetch client

## Conventions

- Tabs, double quotes (Biome enforced)
- Path alias: `@/*` -> `src/*` (via vite-tsconfig-paths)

## API Client

- OpenAPI spec -> `openapi-typescript` -> `src/api/authorizer.ts` (auto-generated)
- `createAuthorizerClient()` in `src/api/client.ts` creates typed fetch client

## Three-Stage Flow (AuthorizationContext.tsx)

Wizard-style React Context + useReducer managing:

1. **Create Stage** (`stage: "create"`)
   - Configure authorizer URL (persisted to localStorage)
   - Build credential requests array (multiple allowed)
   - Select response mode: `direct_post`, `direct_post.jwt`, `dc_api`, `dc_api.jwt`
   - Generate DCQL query via `queryBuilder.ts`

2. **Authorization Stage** (`stage: "authorization"`)
   - Standard flows: QR code with `openid4vp://` URI
   - DC API flows: "Get Credentials" button invoking `navigator.credentials.get()`
   - Polls status every 2s via `useAuthorizationStatus`
   - Transitions on terminal status

3. **Result Stage** (`stage: "result"`)
   - Shows outcome: authorized/rejected/expired/error
   - Displays policy evaluation results fetched by `usePolicyResponse`

**State Properties:**

- `stage`, `credentialRequests`, `responseModeConfig`, `authorizationId`
- `authorizeUrl` (null for DC API), `digitalCredentialGetRequest` (null for standard)
- `policyResponse`, `authorizationStatus`

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

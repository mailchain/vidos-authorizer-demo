# Change: Add Support Contact and Debug Info Export to Result Page

## Why
When users experience authorization failures or unexpected results, they currently have no easy way to contact support or provide debugging information. This creates friction in troubleshooting and prevents efficient problem resolution. By adding a support contact action and debugging info export capability, users can quickly reach out for help and attach relevant technical details, improving the support experience and reducing time-to-resolution for issues.

## What Changes
- Add a "Contact Support" action button on the result page that opens a mailto link to Vidos support
- Add a "Copy debugging info" action next to the contact button that downloads a JSON file containing:
  - The original authorization request body sent to the Authorizer
  - The authorization response received from the Authorizer
  - The authorization status data
  - Timestamp and basic metadata
- Display both actions on the result page regardless of success or failure status
- Provide clear labels and descriptions so users understand what information will be shared
- Include the authorization ID in the support email subject line for easy case tracking

## Impact
- Affected specs: `result-page-support` (new capability)
- Affected code:
  - `src/components/stages/ResultStage/index.tsx` - Add support contact UI and debug export functionality
  - `src/utils/debugExport.ts` - New utility for generating debug info JSON
  - `src/stores/useFlowStore.ts` - Already stores `lastRequest` and `lastResponse` (no changes needed)
  - Configuration - Need to define support email address (environment variable or constant)

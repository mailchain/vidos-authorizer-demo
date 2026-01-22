# Change: Add Vidos Managed Instance as Default Authorizer URL Option

## Why

Currently, users must manually enter an authorizer URL, which requires them to first create their own Vidos Gateway and Authorizer instances via the Vidos Dashboard. This creates friction for users who just want to try the demo application. By providing a preselected "Vidos Managed instance" option, users can immediately start using the demo without any setup, while still allowing more involved users to create and configure their own instances.

## What Changes
- Replace the single URL input field with a radio button selection between "Vidos Managed instance" (default) and "Own instance"
- Configure the managed instance URL via environment variable (e.g., `VITE_MANAGED_AUTHORIZER_URL`)
- Pre-populate the "Vidos Managed instance" option with the configured managed instance URL
- Show the URL input field only when "Own instance" is selected
- Display a link to an instance configuration documentation page when "Vidos Managed instance" is selected
- Update help text to distinguish between the managed instance (no setup required) and own instance (requires Vidos Dashboard or Terraform configuration)
- Persist the selected option (managed vs. own) in localStorage along with the URL

## Impact
- Affected specs: `authorizer-config` (new capability)
- Affected code:
  - `src/components/stages/CreateStage/AuthorizerConfig.tsx` - UI component update
  - `src/stores/useFlowStore.ts` - Add instance type state
  - Type definitions in `src/types/app.ts` - Add instance type
  - Environment configuration - Add `VITE_MANAGED_AUTHORIZER_URL` variable
  - `.env.example` - Document the environment variable
- Documentation:
  - New documentation page needed describing managed instance configuration (or reference to existing docs)

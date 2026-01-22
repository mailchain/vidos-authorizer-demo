# Change: Add Configuration Export/Import

## Why

Users who create custom credential cases and configure their own authorizer URL need a way to back up and transfer these configurations between browsers, devices, or share with team members. Currently, these configurations are only stored in localStorage with no portability.

**Primary use case:** Transfer configuration to mobile devices where manually entering custom credential case definitions (with formats, namespaces, attributes) would be tedious and error-prone.

**Secondary use cases:** Backup/restore, sharing configs with team members, migrating between browsers.

## What Changes

- Add export functionality to download current custom configuration as JSON file
- Add import functionality to load configuration from JSON file
- Configuration includes:
  - Custom authorizer URL (if "Own instance" is selected)
  - Instance type selection
  - Custom credential cases (user-defined credential types with formats and attributes)
- Place export/import controls in a new "Advanced" collapsible section within AuthorizerConfig

## Impact

- Affected specs: New `config-export-import` capability
- Affected code:
  - `src/components/stages/CreateStage/AuthorizerConfig.tsx` - Add Advanced section with export/import UI
  - `src/stores/useFlowStore.ts` - Add import action for bulk config update
  - New utility for config serialization/validation

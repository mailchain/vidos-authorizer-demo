# policy-display Specification

## Purpose
This specification defines how policy evaluation results are displayed in the authorization results page. Policy results are returned by the authorizer service and include information about which policies were evaluated, which service performed the evaluation, and whether each policy passed or failed.

The system displays policy results with contextual information to help users understand:
- What each policy checks (via descriptions)
- Where to find detailed documentation (via clickable links)
- Which service evaluated the policy (validator, authorizer, or verifier)
- The outcome of the policy evaluation (pass/fail with detailed data or error messages)

Policy metadata is maintained in a centralized configuration (`src/config/policyDefinitions.ts`) that maps policy identifiers to their descriptions and documentation URLs. The system supports both service-specific policies (identified by `"service.policy"` such as `"validator.format"`) and default policies (identified by policy name only). When rendering a policy result, the system first attempts to match the service-specific policy definition, then falls back to a default definition if available.
## Requirements
### Requirement: Policy Metadata Definitions

The system SHALL maintain centralized definitions for each policy type containing a short description and documentation URL.

#### Scenario: Service-specific policy lookup

- **WHEN** a policy result includes both a service name and policy name
- **THEN** the system first attempts to retrieve the definition using the key `"service.policy"` (e.g., `"validator.format"`)
- **AND** if not found, falls back to the policy name only (e.g., `"format"`)
- **AND** displays the matched description and documentation URL alongside the policy name

#### Scenario: Default policy lookup

- **WHEN** a policy result has only a policy name without a service-specific definition
- **THEN** the system retrieves the policy definition using the policy name as the key
- **AND** displays the description and documentation URL alongside the policy name

#### Scenario: Unknown policy handling

- **WHEN** a policy name is not found in the definitions (neither service-specific nor default)
- **THEN** the system displays the policy name without description or documentation link
- **AND** does not display an error or warning because of the missing metadata

### Requirement: Policy Description Display

The system SHALL display a short description for each policy result in the results page.

#### Scenario: Policy description shown

- **WHEN** viewing a policy result with a known policy type
- **THEN** the description appears below or near the policy name
- **AND** uses subdued styling to distinguish it from the policy name

### Requirement: Policy Documentation Links

The system SHALL provide clickable links to documentation for each policy type.

#### Scenario: Documentation link clicked

- **WHEN** a user clicks a policy documentation link
- **THEN** the documentation opens in a new browser tab
- **AND** the link points to the Vidos documentation for that policy

#### Scenario: Documentation link styling

- **WHEN** viewing a policy result with a documentation link
- **THEN** the link is visually identifiable as clickable (icon, color, or underline)
- **AND** appears near the policy name and description


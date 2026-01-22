# policy-display Specification

## Purpose
TBD - created by archiving change add-policy-descriptions-and-docs. Update Purpose after archive.
## Requirements
### Requirement: Policy Metadata Definitions

The system SHALL maintain centralized definitions for each policy type containing a short description and documentation URL.

#### Scenario: Policy definition lookup

- **WHEN** a policy result is rendered
- **THEN** the system retrieves the policy description and documentation URL from the definitions
- **AND** displays them alongside the policy name

#### Scenario: Unknown policy handling

- **WHEN** a policy name is not found in the definitions
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


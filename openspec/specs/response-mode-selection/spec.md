# response-mode-selection Specification

## Purpose
Provides users with the ability to select response modes for OID4VP authorization requests, including direct_post and browser Digital Credentials API modes with protocol-specific requirements.

## Requirements
### Requirement: Response Mode Options
The system SHALL provide four response mode options for authorization requests.

#### Scenario: Direct Post mode available
- **WHEN** a user selects a response mode
- **THEN** `direct_post` mode SHALL be available as an option
- **AND** no additional configuration SHALL be required for this mode

#### Scenario: Direct Post JWT mode available
- **WHEN** a user selects a response mode
- **THEN** `direct_post.jwt` mode SHALL be available as an option
- **AND** no additional configuration SHALL be required for this mode

#### Scenario: DC API mode available
- **WHEN** a user selects a response mode
- **THEN** `dc_api` mode SHALL be available as an option
- **AND** protocol selection SHALL be required when this mode is selected

#### Scenario: DC API JWT mode available
- **WHEN** a user selects a response mode
- **THEN** `dc_api.jwt` mode SHALL be available as an option
- **AND** protocol selection SHALL be required when this mode is selected

### Requirement: DC API Protocol Selection
The system SHALL require protocol selection when DC API response modes are chosen.

#### Scenario: Protocol options displayed for DC API modes
- **WHEN** a user selects `dc_api` or `dc_api.jwt` response mode
- **THEN** protocol selection options SHALL be displayed
- **AND** `openid4vp-v1-unsigned` (unsigned) option SHALL be available
- **AND** `openid4vp-v1-signed` (signed) option SHALL be available

#### Scenario: Protocol not required for direct post modes
- **WHEN** a user selects `direct_post` or `direct_post.jwt` response mode
- **THEN** protocol selection SHALL NOT be displayed
- **AND** no protocol SHALL be required for the authorization request

### Requirement: Expected Origins for Signed Protocol
The system SHALL require expectedOrigins array when signed DC API protocol is selected.

#### Scenario: Expected origins required for signed protocol
- **WHEN** a user selects `dc_api` or `dc_api.jwt` response mode
- **AND** selects `openid4vp-v1-signed` protocol
- **THEN** an expectedOrigins field SHALL be displayed
- **AND** the expectedOrigins field SHALL accept an array of origin URLs
- **AND** the expectedOrigins field SHALL be required before submission

#### Scenario: Expected origins not required for unsigned protocol
- **WHEN** a user selects `dc_api` or `dc_api.jwt` response mode
- **AND** selects `openid4vp-v1-unsigned` protocol
- **THEN** expectedOrigins field SHALL NOT be displayed
- **AND** no expectedOrigins SHALL be included in the authorization request

#### Scenario: Valid origin URL format
- **WHEN** a user enters origin URLs in expectedOrigins field
- **THEN** each origin SHALL be validated as a valid URL format
- **AND** examples like `["https://example.com"]` SHALL be accepted

### Requirement: Query Type Restriction
The system SHALL enforce query type restrictions based on selected response mode.

#### Scenario: DC API modes only support DCQL
- **WHEN** a user selects `dc_api` or `dc_api.jwt` response mode
- **THEN** only DCQL query type SHALL be supported
- **AND** DIF Presentation Exchange query type SHALL NOT be available

#### Scenario: Direct post modes support both query types
- **WHEN** a user selects `direct_post` or `direct_post.jwt` response mode
- **THEN** both DCQL query type SHALL be supported
- **AND** DIF Presentation Exchange query type SHALL be supported

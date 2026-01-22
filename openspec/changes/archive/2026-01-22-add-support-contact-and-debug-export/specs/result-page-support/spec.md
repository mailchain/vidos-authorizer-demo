# Result Page Support Capability

## ADDED Requirements

### Requirement: Support Contact Action
The application SHALL provide a support contact action on the result page that enables users to reach out for help.

#### Scenario: Contact support button displayed on success
- **WHEN** a user reaches the result page with an "authorized" status
- **THEN** a "Contact Support" button or link SHALL be visible
- **AND** the button SHALL be clearly labeled and accessible

#### Scenario: Contact support button displayed on failure
- **WHEN** a user reaches the result page with "rejected", "error", or "expired" status
- **THEN** a "Contact Support" button or link SHALL be visible
- **AND** the button SHALL be clearly labeled and accessible

#### Scenario: Contact support opens email client
- **WHEN** a user clicks the "Contact Support" action
- **THEN** the default email client SHALL open with a pre-filled mailto link
- **AND** the recipient SHALL be the configured Vidos support email address
- **AND** the subject line SHALL include the authorization ID for easy case tracking
- **AND** the email body MAY include helpful context or instructions

### Requirement: Debug Info Export Action
The application SHALL provide an action to export debugging information that can be attached to support requests.

#### Scenario: Debug export action displayed on success
- **WHEN** a user reaches the result page with an "authorized" status
- **THEN** a "Copy debugging info" or "Download debug info" action SHALL be visible
- **AND** the action SHALL be positioned near the support contact button

#### Scenario: Debug export action displayed on failure
- **WHEN** a user reaches the result page with "rejected", "error", or "expired" status
- **THEN** a "Copy debugging info" or "Download debug info" action SHALL be visible
- **AND** the action SHALL be positioned near the support contact button

#### Scenario: Debug export downloads JSON file
- **WHEN** a user clicks the debug export action
- **THEN** a JSON file SHALL be downloaded to the user's device
- **AND** the filename SHALL include a timestamp for uniqueness (e.g., `vidos-debug-YYYY-MM-DD-HHmmss.json`)

### Requirement: Debug Info Content
The exported debug information SHALL include relevant data for troubleshooting authorization issues.

#### Scenario: Debug info includes request data
- **WHEN** a debug info file is exported
- **THEN** the file SHALL contain the original authorization request body sent to the Authorizer
- **AND** the request data SHALL be formatted as valid JSON

#### Scenario: Debug info includes response data
- **WHEN** a debug info file is exported
- **THEN** the file SHALL contain the authorization response received from the Authorizer
- **AND** the response data SHALL be formatted as valid JSON

#### Scenario: Debug info includes status data
- **WHEN** a debug info file is exported
- **THEN** the file SHALL contain the current authorization status information
- **AND** the status data SHALL include the authorization ID and status value

#### Scenario: Debug info includes metadata
- **WHEN** a debug info file is exported
- **THEN** the file SHALL contain a timestamp of when the export was generated
- **AND** the file MAY include additional metadata such as browser information or app version

### Requirement: Support Actions Positioning
The support actions SHALL be positioned appropriately within the result page layout.

#### Scenario: Support section is visible but not intrusive
- **WHEN** a user views the result page
- **THEN** the support actions SHALL be positioned after the authorization status display
- **AND** the support actions SHALL be positioned before the "Try Again" and "New Request" buttons
- **AND** the support actions SHALL be visually distinct but not overly prominent

### Requirement: User Guidance for Debug Export
The application SHALL provide clear guidance about what information the debug export contains.

#### Scenario: Debug export description shown
- **WHEN** a user views the debug export action
- **THEN** descriptive text SHALL explain what information will be included in the export
- **AND** the description SHALL indicate the data is technical debugging information
- **AND** the description SHALL mention the file can be attached to support emails

### Requirement: Data Privacy in Debug Export
The debug export SHALL NOT contain sensitive user credentials or personal information.

#### Scenario: No wallet credentials in export
- **WHEN** a debug info file is exported
- **THEN** the file SHALL NOT contain any credential values or claims from the wallet
- **AND** the file SHALL only contain the authorization request structure and metadata

#### Scenario: No authentication tokens in export
- **WHEN** a debug info file is exported
- **THEN** the file SHALL NOT contain any bearer tokens or authentication credentials
- **AND** the file SHALL only contain publicly shareable authorization metadata

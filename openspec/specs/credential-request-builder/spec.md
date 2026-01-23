# credential-request-builder Specification

## Purpose

This specification defines the credential request builder feature that allows users to construct one or more credential requests for OID4VP authorization flows. Users can select document types (PID, MDL, Photo ID), choose appropriate formats based on document type availability, and build complex authorization requests with multiple credentials.

## Requirements

### Requirement: Document Type Selection

The application SHALL allow users to select a document type for each credential request from the supported types.

#### Scenario: Display available document types

- **WHEN** a user adds a new credential request
- **THEN** the application SHALL display all available document types
- **AND** the document types SHALL include PID (Person Identification Data), MDL (Mobile Driving Licence), and Photo ID

#### Scenario: Select document type

- **WHEN** a user selects a document type
- **THEN** the selected document type SHALL be stored in the credential request
- **AND** the format selection SHALL be updated to show only formats available for that document type

### Requirement: Format Selection Based on Document Type

The application SHALL filter format options based on the selected document type according to credential case definitions.

#### Scenario: PID format availability

- **WHEN** a user selects PID as the document type
- **THEN** the format options SHALL include both `dc+sd-jwt` and `mso_mdoc`
- **AND** the user SHALL be able to select either format

#### Scenario: MDL format availability

- **WHEN** a user selects MDL as the document type
- **THEN** the format options SHALL include only `mso_mdoc`
- **AND** `dc+sd-jwt` SHALL NOT be available as an option

#### Scenario: Photo ID format availability

- **WHEN** a user selects Photo ID as the document type
- **THEN** the format options SHALL include both `dc+sd-jwt` and `mso_mdoc`
- **AND** the user SHALL be able to select either format

#### Scenario: Format reset on document type change

- **WHEN** a user changes the document type for an existing credential request
- **THEN** the previously selected format SHALL be cleared if it is not available for the new document type
- **AND** the format selection SHALL be updated to show only formats available for the new document type

### Requirement: Multiple Credential Requests

The application SHALL allow users to add and remove multiple credential requests within a single authorization.

#### Scenario: Add multiple credential requests

- **WHEN** a user clicks "Add Credential Request"
- **THEN** a new credential request builder SHALL be added to the interface
- **AND** the user SHALL be able to configure the document type and format independently for each request
- **AND** there SHALL be no limit on the number of credential requests that can be added

#### Scenario: Remove credential request

- **WHEN** a user clicks the remove button on a credential request
- **THEN** that credential request SHALL be removed from the authorization
- **AND** the remaining credential requests SHALL remain unchanged

#### Scenario: Cannot remove last credential request

- **WHEN** only one credential request exists
- **THEN** the remove button SHALL be disabled or hidden
- **AND** the user SHALL NOT be able to remove the last credential request

#### Scenario: Multiple credentials with different formats

- **WHEN** a user adds multiple credential requests
- **THEN** the user SHALL be able to select different document types for each request
- **AND** the user SHALL be able to select different formats for each request
- **AND** example combinations SHALL include PID (dc+sd-jwt) + MDL (mso_mdoc)

### Requirement: Credential Request Validation

The application SHALL validate that at least one valid credential request exists before allowing authorization creation.

#### Scenario: Valid credential request configuration

- **WHEN** at least one credential request has both a document type and format selected
- **THEN** the "Create Authorization" button SHALL be enabled
- **AND** the user SHALL be able to proceed to create the authorization

#### Scenario: Missing document type or format

- **WHEN** any credential request is missing either a document type or format
- **THEN** the "Create Authorization" button SHALL be disabled
- **AND** a validation error SHALL indicate which credential request is incomplete

#### Scenario: No credential requests

- **WHEN** no credential requests exist in the builder
- **THEN** the "Create Authorization" button SHALL be disabled
- **AND** a validation error SHALL indicate "At least one credential request is required"

### Requirement: Credential Request Ordering

The application SHALL preserve the order of credential requests as defined by the user.

#### Scenario: Maintain credential request order

- **WHEN** a user adds multiple credential requests
- **THEN** the credential requests SHALL be sent to the API in the order they were added
- **AND** the order SHALL be visually indicated in the UI (e.g., numbered or ordered list)

#### Scenario: Reorder credential requests (future enhancement)

- **WHEN** drag-and-drop reordering is implemented
- **THEN** users SHALL be able to reorder credential requests
- **AND** the new order SHALL be reflected in the API request

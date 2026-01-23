# attribute-selection Specification

## Purpose

Defines the user interface and behavior for selecting which attributes to request in a credential authorization request. This specification ensures users can hand-pick individual attributes or conveniently select all attributes, with appropriate validation and format-specific attribute display.

## Requirements

### Requirement: Individual Attribute Selection

The system SHALL allow users to select and deselect individual attributes for each credential request.

#### Scenario: Select individual attribute
- **WHEN** a user clicks on an unselected attribute
- **THEN** the attribute is marked as selected
- **AND** the attribute is added to the credential request configuration

#### Scenario: Deselect individual attribute
- **WHEN** a user clicks on a selected attribute
- **THEN** the attribute is marked as unselected
- **AND** the attribute is removed from the credential request configuration

#### Scenario: Visual indication of selection state
- **WHEN** an attribute is selected
- **THEN** the UI displays a clear visual indicator (e.g., checkbox, highlight, or badge)
- **AND** the visual indicator differentiates selected from unselected attributes

---

### Requirement: Select All Convenience

The system SHALL provide a one-click option to select all available attributes for a credential request.

#### Scenario: Select all attributes
- **WHEN** a user activates the "select all" control
- **THEN** all available attributes for the current document type and format are marked as selected
- **AND** all attributes are added to the credential request configuration

#### Scenario: Deselect all attributes via select all control
- **WHEN** all attributes are currently selected
- **AND** a user activates the "select all" control
- **THEN** all attributes are marked as unselected
- **AND** the credential request configuration is updated accordingly

#### Scenario: Select all state reflects individual selections
- **WHEN** all individual attributes are manually selected
- **THEN** the "select all" control displays an "all selected" state
- **WHEN** one or more attributes are unselected
- **THEN** the "select all" control displays a "partial" or "none selected" state

---

### Requirement: Format-Specific Attribute Display

The system SHALL display the correct set of attributes based on the selected document type and format.

#### Scenario: Display attributes for mDoc format
- **WHEN** a credential request uses the `mso_mdoc` format
- **THEN** the system displays attributes with mDoc-specific paths
- **AND** only attributes available for the selected document type in mDoc format are shown

#### Scenario: Display attributes for SD-JWT format
- **WHEN** a credential request uses the `dc+sd-jwt` format
- **THEN** the system displays attributes with SD-JWT-specific paths
- **AND** only attributes available for the selected document type in SD-JWT format are shown

#### Scenario: Update attributes when format changes
- **WHEN** a user changes the credential format selection
- **THEN** the attribute list is updated to reflect the new format's available attributes
- **AND** previously selected attributes are cleared or re-mapped if applicable

#### Scenario: Document type determines available attributes
- **WHEN** a user selects a document type (e.g., PID, MDL, Photo ID)
- **THEN** only attributes defined for that document type are displayed
- **AND** the attribute list is specific to the document type definition

---

### Requirement: Attribute Validation

The system SHALL ensure that at least one attribute is selected before allowing the credential request to be created.

#### Scenario: Prevent submission with no attributes
- **WHEN** no attributes are selected for a credential request
- **AND** the user attempts to proceed or create the authorization request
- **THEN** the system displays a validation error
- **AND** the user is prevented from proceeding until at least one attribute is selected

#### Scenario: Allow submission with one or more attributes
- **WHEN** one or more attributes are selected for a credential request
- **AND** the user attempts to create the authorization request
- **THEN** the validation passes
- **AND** the authorization request is created with the selected attributes

#### Scenario: Validation feedback on attribute count
- **WHEN** the attribute selection is invalid (zero attributes)
- **THEN** the system displays a clear error message indicating that at least one attribute must be selected
- **AND** the error message is positioned near the attribute selection UI

---

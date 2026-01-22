# authorizer-config Specification

## Purpose
TBD - created by archiving change add-managed-instance-option. Update Purpose after archive.
## Requirements
### Requirement: Instance Type Selection
The application SHALL provide users with a choice between a Vidos Managed instance and their own custom instance for the authorizer URL.

#### Scenario: Default to managed instance
- **WHEN** a user first opens the application
- **THEN** the "Vidos Managed instance" option SHALL be preselected
- **AND** the managed instance URL SHALL be automatically set

#### Scenario: Switch to own instance
- **WHEN** a user selects the "Own instance" radio option
- **THEN** a URL input field SHALL be displayed
- **AND** the user SHALL be able to enter their custom authorizer URL

#### Scenario: Switch back to managed instance
- **WHEN** a user switches from "Own instance" back to "Vidos Managed instance"
- **THEN** the URL input field SHALL be hidden
- **AND** the authorizer URL SHALL be automatically set to the managed instance URL

### Requirement: Instance Type Persistence
The application SHALL persist the selected instance type across browser sessions.

#### Scenario: Persist managed instance selection
- **WHEN** a user selects "Vidos Managed instance"
- **THEN** the selection SHALL be saved to localStorage
- **AND** upon returning to the application, "Vidos Managed instance" SHALL remain selected

#### Scenario: Persist own instance selection and URL
- **WHEN** a user selects "Own instance" and enters a custom URL
- **THEN** both the instance type and URL SHALL be saved to localStorage
- **AND** upon returning to the application, "Own instance" SHALL be selected with the custom URL populated

### Requirement: Managed Instance URL Configuration
The application SHALL use a configurable Vidos Managed instance URL as the default, set via environment variable.

#### Scenario: Environment variable is set
- **WHEN** the application initializes and `VITE_MANAGED_AUTHORIZER_URL` is defined
- **THEN** the managed instance URL SHALL be set to the value from the environment variable
- **AND** users SHALL be able to create authorizations without additional configuration

#### Scenario: Environment variable is missing
- **WHEN** the application initializes and `VITE_MANAGED_AUTHORIZER_URL` is not defined
- **THEN** the application SHALL require the user to select "Own instance"
- **AND** the "Vidos Managed instance" option SHALL be disabled

### Requirement: Contextual Help Text
The application SHALL provide help text that explains the difference between managed and own instances.

#### Scenario: Help text for managed instance
- **WHEN** "Vidos Managed instance" is selected
- **THEN** help text SHALL indicate no setup is required
- **AND** users SHALL understand this is for demo/testing purposes

#### Scenario: Configuration documentation link for managed instance
- **WHEN** "Vidos Managed instance" is selected
- **THEN** a link to documentation describing the managed instance configuration SHALL be displayed
- **AND** clicking the link SHALL navigate to the configuration details page

#### Scenario: Help text for own instance
- **WHEN** "Own instance" is selected
- **THEN** help text SHALL reference the Vidos Dashboard
- **AND** a link to the setup guide (GATEWAY_SETUP.md) SHALL be provided

### Requirement: URL Input Validation
The application SHALL validate custom authorizer URLs when "Own instance" is selected.

#### Scenario: Valid custom URL
- **WHEN** a user enters a valid URL in "Own instance" mode
- **THEN** no error message SHALL be displayed
- **AND** the URL SHALL be accepted for use

#### Scenario: Invalid custom URL
- **WHEN** a user enters an invalid URL in "Own instance" mode
- **THEN** an error message SHALL be displayed
- **AND** the user SHALL be prevented from proceeding until a valid URL is entered

#### Scenario: Empty URL in own instance mode
- **WHEN** "Own instance" is selected and the URL field is empty
- **THEN** the user SHALL be able to type in the field
- **AND** no error SHALL be shown until the user attempts to proceed


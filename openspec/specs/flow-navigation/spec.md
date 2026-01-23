# flow-navigation Specification

## Purpose

This specification defines the three-stage flow navigation system that guides users through the OID4VP credential verification workflow: creating authorization requests, presenting QR/DC API for wallet interaction, and displaying authorization results.

## Requirements

### Requirement: Three-Stage Flow Structure

The application SHALL implement three distinct stages in the authorization flow: CREATE AUTHORIZATION, AUTHORIZATION, and RESULT.

#### Scenario: Application initialization

- **WHEN** the application first loads
- **THEN** the user SHALL be presented with the CREATE AUTHORIZATION stage
- **AND** the navigation indicator SHALL highlight the CREATE AUTHORIZATION stage

#### Scenario: Stage ordering

- **WHEN** a user navigates through the flow
- **THEN** the stages SHALL be presented in the order: CREATE AUTHORIZATION → AUTHORIZATION → RESULT
- **AND** each stage SHALL be accessible only after completing the previous stage (except for the initial CREATE AUTHORIZATION stage)

### Requirement: Progress Indicator Display

The application SHALL display a visual progress indicator showing all three stages and highlighting the current stage.

#### Scenario: Visual indication of current stage

- **WHEN** the user is on any stage of the flow
- **THEN** a progress indicator SHALL be visible
- **AND** the current stage SHALL be visually highlighted
- **AND** all three stage names SHALL be displayed (CREATE, AUTHORIZATION, RESULT)

#### Scenario: Progress indicator on CREATE AUTHORIZATION stage

- **WHEN** the user is on the CREATE AUTHORIZATION stage
- **THEN** the CREATE stage SHALL be highlighted in the progress indicator
- **AND** the AUTHORIZATION and RESULT stages SHALL be visually distinct from the current stage

#### Scenario: Progress indicator on AUTHORIZATION stage

- **WHEN** the user is on the AUTHORIZATION stage
- **THEN** the AUTHORIZATION stage SHALL be highlighted in the progress indicator
- **AND** the CREATE and RESULT stages SHALL be visually distinct from the current stage

#### Scenario: Progress indicator on RESULT stage

- **WHEN** the user is on the RESULT stage
- **THEN** the RESULT stage SHALL be highlighted in the progress indicator
- **AND** the CREATE and AUTHORIZATION stages SHALL be visually distinct from the current stage

### Requirement: Forward Stage Transitions

The application SHALL transition to the next stage based on user actions and flow state.

#### Scenario: Transition from CREATE to AUTHORIZATION

- **WHEN** the user successfully creates an authorization request
- **THEN** the application SHALL automatically transition to the AUTHORIZATION stage
- **AND** the progress indicator SHALL update to highlight the AUTHORIZATION stage

#### Scenario: Transition from AUTHORIZATION to RESULT for direct_post modes

- **WHEN** the authorization status polling detects a terminal status (authorized, rejected, error, or expired)
- **THEN** the application SHALL automatically transition to the RESULT stage
- **AND** the progress indicator SHALL update to highlight the RESULT stage

#### Scenario: Transition from AUTHORIZATION to RESULT for dc_api modes

- **WHEN** the dc_api credential submission returns a terminal status
- **THEN** the application SHALL automatically transition to the RESULT stage
- **AND** the progress indicator SHALL update to highlight the RESULT stage

### Requirement: State Reset

The application SHALL provide a mechanism to reset the flow and return to the CREATE AUTHORIZATION stage from any point in the flow.

#### Scenario: Reset from AUTHORIZATION stage

- **WHEN** a user chooses to start over from the AUTHORIZATION stage
- **THEN** the application SHALL clear all authorization state
- **AND** return to the CREATE AUTHORIZATION stage
- **AND** the progress indicator SHALL highlight the CREATE AUTHORIZATION stage

#### Scenario: Reset from RESULT stage

- **WHEN** a user chooses to start over from the RESULT stage
- **THEN** the application SHALL clear all authorization and result state
- **AND** return to the CREATE AUTHORIZATION stage
- **AND** the progress indicator SHALL highlight the CREATE AUTHORIZATION stage

#### Scenario: Preserve configuration on reset

- **WHEN** a user resets the flow
- **THEN** the authorizer URL configuration SHALL be preserved
- **AND** previously entered credential request configuration MAY be preserved for user convenience

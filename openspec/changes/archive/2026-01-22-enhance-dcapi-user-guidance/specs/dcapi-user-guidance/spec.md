# Spec: DC API User Guidance

**Capability:** `dcapi-user-guidance`  
**Related Change:** `enhance-dcapi-user-guidance`

## ADDED Requirements

### Requirement: Pre-Interaction Guidance Display

The DC API button component SHALL display informative guidance to users before they interact with the "Request Credentials" button.

#### Scenario: User views DC API authorization stage

**Given** the user is on the Authorization stage  
**And** the selected response mode is DC API (`dc_api` or `dc_api.jwt`)  
**When** the DCAPIButton component renders  
**Then** the component SHALL display explanatory text that includes:
- A statement that clicking the button will trigger the browser Digital Credentials API
- A notification that the browser will show a native confirmation dialog
- Clarification that the confirmation dialog originates from the browser, not the application
- An instruction to click "Continue" in the browser's dialog to proceed with the credential request flow

**And** the guidance text SHALL be visible before any user interaction with the button  
**And** the text SHALL use the existing `text-sm text-muted-foreground` styling pattern for consistency  
**And** the guidance SHALL be contained within the same muted background section as the button

---

### Requirement: Browser Dialog Origin Clarification

The guidance SHALL explicitly clarify the source of the confirmation dialog to prevent user confusion.

#### Scenario: User reads pre-interaction guidance

**Given** the DCAPIButton component is rendered  
**When** the user reads the guidance text  
**Then** the text SHALL explicitly state that the confirmation dialog comes from the browser  
**And** the text SHALL distinguish the browser dialog from application UI  
**And** the messaging SHALL set clear expectations about the browser-native interaction

---

### Requirement: Continue Action Instruction

The guidance SHALL provide clear instruction on how to proceed when the browser dialog appears.

#### Scenario: User understands required action

**Given** the user has read the pre-interaction guidance  
**When** the browser displays its native confirmation dialog (after button click)  
**Then** the user SHALL be aware they need to click "Continue"  
**And** this instruction SHALL be mentioned in the pre-interaction guidance  
**And** the instruction SHALL be clear and actionable

---

## REMOVED Requirements

None. This change introduces a new capability for user guidance.

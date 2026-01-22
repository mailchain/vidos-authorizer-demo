# dcapi-user-guidance Specification

## Purpose

This specification defines the user guidance requirements for the Digital Credentials (DC) API authorization flow. It ensures users receive clear, pre-interaction messaging that explains the browser's native Digital Credentials API confirmation dialog, reducing confusion and improving completion rates. The guidance clarifies the dialog's origin (browser vs. application) and provides explicit instructions for proceeding with the credential request.
## Requirements
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

### Requirement: Response Mode Selection Guidance

The response mode selector SHALL provide clear descriptions for each DC API mode option to help users understand the differences.

#### Scenario: User selects response mode

**Given** the user is on the Create stage building a credential request  
**When** the ResponseModeSelector component renders  
**Then** the component SHALL display the following DC API mode options:
- `dc_api` with description: "Browser API with plain response"
- `dc_api.jwt` with description: "Browser API with signed & encrypted response"

**And** each description SHALL use `text-xs text-muted-foreground` styling  
**And** descriptions SHALL be displayed below the mode label  
**And** the descriptions SHALL help users distinguish between plain and secured response modes

---

### Requirement: Browser Support Status Display

The application SHALL inform users when their browser does not support the Digital Credentials API.

#### Scenario: User's browser lacks DC API support

**Given** the user's browser does not support the Digital Credentials API  
**When** the ResponseModeSelector component renders  
**Then** the DC API mode options (`dc_api` and `dc_api.jwt`) SHALL be disabled  
**And** a "Browser not supported" link SHALL be displayed next to each DC API option  
**And** the link SHALL direct users to browser compatibility information at caniuse.com  
**And** the link SHALL use `text-xs text-muted-foreground` styling with underline  
**And** the mode labels SHALL appear with reduced opacity to indicate disabled state

#### Scenario: User's browser supports DC API

**Given** the user's browser supports the Digital Credentials API  
**When** the ResponseModeSelector component renders  
**Then** the DC API mode options SHALL be enabled and selectable  
**And** no "Browser not supported" message SHALL be displayed

---

### Requirement: DC API Protocol Selection Guidance

When a DC API mode is selected, the application SHALL provide protocol selection options with appropriate guidance.

#### Scenario: User selects DC API mode

**Given** the user has selected a DC API response mode (`dc_api` or `dc_api.jwt`)  
**When** the DC API protocol selection section appears  
**Then** the component SHALL display two protocol options:
- "Unsigned (Simpler)" for `openid4vp-v1-unsigned` protocol
- "Signed (More Secure)" for `openid4vp-v1-signed` protocol

**And** the protocol selection SHALL be contained in a bordered container with `bg-muted/50` background  
**And** the default selection SHALL be `openid4vp-v1-unsigned`

#### Scenario: User selects signed protocol

**Given** the user has selected a DC API mode  
**When** the user selects the "Signed (More Secure)" protocol option  
**Then** the component SHALL display an informational message  
**And** the message SHALL state: "The signed protocol will use the current application origin ({origin}) to validate the response."  
**And** the message SHALL show the actual origin URL where `{origin}` appears  
**And** the message SHALL use `text-xs text-muted-foreground` styling

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


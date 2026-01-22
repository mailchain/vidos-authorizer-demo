# Proposal: Enhance DC API User Guidance

**Change ID:** `enhance-dcapi-user-guidance`  
**Status:** Draft  
**Created:** 2026-01-21  

## Problem Statement

The current DC API flow does not adequately inform users about what will happen when they click the "Request Credentials" button. Users are not warned that:
1. The browser will trigger the Digital Credentials API (`navigator.credentials.get()`)
2. The browser (not the application) will show a native confirmation dialog
3. The user must click "Continue" in the browser's dialog to proceed with the flow

This lack of clarity can cause confusion and abandonment when users encounter unexpected browser dialogs without context.

## Proposed Solution

Add informative messaging to the DC API button component that explains:
- What happens when the button is clicked (invokes browser Digital Credentials API)
- That a browser-native confirmation dialog will appear
- That the dialog comes from the browser, not the application
- That users should click "Continue" to proceed

The messaging should be displayed **before** the button is clicked, providing clear expectations for the user journey.

## User Impact

**Positive:**
- Reduced confusion when browser dialogs appear
- Increased trust through transparency about the browser interaction
- Higher completion rates for DC API flows
- Better user experience through clear expectations

**Negative:**
- Slightly more text to read before interacting
- Minor increase in component complexity

## Scope

**In Scope:**
- Enhancing `DCAPIButton` component with pre-interaction informative text
- Explaining browser confirmation dialog behavior
- Clarifying the "Continue" action needed

**Out of Scope:**
- Modifying the actual DC API invocation logic
- Changing the browser's native dialog behavior
- Adding support for different browsers' dialog variations
- Modifying other stages or components

## Dependencies

None. This is a purely UI/UX enhancement that does not depend on backend changes or external services.

## Alternatives Considered

1. **Tooltip on hover:** Less visible, easy to miss
2. **Modal before invocation:** Adds friction with extra click
3. **Help icon with popover:** Requires user action to see info
4. **Current approach (inline text):** ✅ Most accessible and visible

## Success Criteria

- Users see clear explanation before clicking the DC API button
- Messaging explicitly mentions browser confirmation dialog
- Instructions include the "Continue" action
- No breaking changes to existing DC API functionality
- Type checking, linting, and build pass successfully

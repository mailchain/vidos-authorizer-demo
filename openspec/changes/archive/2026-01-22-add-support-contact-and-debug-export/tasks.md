# Implementation Tasks

## 1. Define Support Configuration
- [x] 1.1 Determine support contact options (Modified: using Vidos contact form and GitHub issues instead of email)
- [x] 1.2 Add support URLs as constants in configuration (`src/config/support.ts`)
- [x] 1.3 Define support subject template that includes authorization ID (for future mailto if needed)

## 2. Create Debug Export Utility
- [x] 2.1 Create `src/utils/debugExport.ts` file
- [x] 2.2 Implement function to generate debug info object from store data
- [x] 2.3 Implement function to download JSON file with debug info
- [x] 2.4 Add timestamp and metadata (browser info, app version) to export
- [x] 2.5 Sanitize sensitive data if necessary (review what should be included)

## 3. Update ResultStage Component
- [x] 3.1 Import debug export utility and support configuration
- [x] 3.2 Add contact support buttons (Vidos contact form + GitHub issues)
- [x] 3.3 Add "Download Debug Info" button with download action
- [x] 3.4 Position support actions appropriately in the UI (below status, above action buttons)
- [x] 3.5 Add descriptive text explaining what the debug info contains
- [x] 3.6 Style support section to be visually distinct but not intrusive
- [x] 3.7 Ensure actions are visible in both success and failure states

## 4. Add UI Components (if needed)
- [x] 4.1 Using bordered box with muted background to highlight support options
- [x] 4.2 Added appropriate icons (MessageCircle for contact, Download for export, ExternalLink indicator)

## 5. Testing & Validation
- [x] 5.1 Test contact form links open correctly in new tabs
- [x] 5.2 Test debug info export downloads valid JSON file
- [x] 5.3 Verify debug info contains expected data (request, response, status)
- [x] 5.4 Test in success scenario (authorized status) - Support section visible in all states
- [x] 5.5 Test in failure scenarios (rejected, error, expired statuses) - Support section visible in all states
- [x] 5.6 Verify no sensitive data is unintentionally exposed in debug export - Only includes request/response/status data
- [x] 5.7 Run type-check, lint, and build

## 6. Documentation (optional)
- [x] 6.1 Not needed - Feature is self-explanatory in UI
- [x] 6.2 Not needed - Debug export format is straightforward JSON with clear field names

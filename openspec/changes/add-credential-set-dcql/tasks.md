## 1. Type Definitions

- [ ] 1.1 Keep `id` field on `CredentialRequestWithId` but allow user customization (pre-fill UUID)
- [ ] 1.2 Create `CredentialSetOption` type (array of credential IDs - strings)
- [ ] 1.3 Create `CredentialSet` interface with `id`, `options: string[][]`, `required: boolean`
- [ ] 1.4 Add `credentialSets` array to AppState type

## 2. Store Updates

- [ ] 2.1 Add `credentialSets` state to `useFlowStore`
- [ ] 2.2 Add CRUD actions: `addCredentialSet`, `updateCredentialSet`, `removeCredentialSet`
- [ ] 2.3 Add `updateCredentialId` action to change credential ID (auto-updates all set references)
- [ ] 2.4 Reset credential sets on flow reset
- [ ] 2.5 Auto-cleanup: remove orphan references when credential deleted
- [ ] 2.6 Auto-remove empty options after cleanup

## 3. Query Builder Updates

- [ ] 3.1 Update `DCQLCredential` interface - use user-provided `id` (not UUID)
- [ ] 3.2 Update `DCQLQuery` interface to include optional `credential_sets`
- [ ] 3.3 Update `buildDCQLQueryMultiple` to accept credential sets parameter
- [ ] 3.4 Generate `credential_sets` array when sets are configured
- [ ] 3.5 Preserve backward compatibility (no sets = current behavior, no credential_sets field)

## 4. UI Components

- [ ] 4.1 Add editable ID input to `CredentialRequestBuilder` (pre-filled UUID, user-editable)
- [ ] 4.2 Add copy-to-clipboard button next to ID field
- [ ] 4.3 Add credential set membership indicator to `CredentialRequestBuilder` (shows which sets include this credential)
- [ ] 4.4 Make membership indicator clickable - scrolls to and highlights the credential set
- [ ] 4.5 Create `CredentialSetBuilder` component for single set (ID input, options, required toggle)
- [ ] 4.6 Add editable ID input to `CredentialSetBuilder` (pre-filled UUID, user-editable)
- [ ] 4.7 Create `CredentialSetList` component to manage multiple sets
- [ ] 4.8 Add credential set section to CreateStage (collapsible, after credential requests)
- [ ] 4.9 Option selector: dropdown showing only credentials not already in that option
- [ ] 4.10 Add "OR" separator/divider between options in credential set UI
- [ ] 4.11 Add "Add to set" action on credential requests (visible only when sets exist)
- [ ] 4.12 "Add to set" dropdown: select set, then add to existing option or create new option
- [ ] 4.13 Credential sets section collapsed by default
- [ ] 4.14 Add inline help text explaining OR/AND logic

## 5. Validation

- [ ] 5.1 Validate credential ID uniqueness (warn on duplicate, don't block)
- [ ] 5.2 Validate all option references in credential sets exist in credential requests
- [ ] 5.3 Validate at least one option per credential set (if sets defined)
- [ ] 5.4 Validate each option has at least one credential selected
- [ ] 5.5 Validate credential set has at least one option (don't auto-delete empty sets)
- [ ] 5.6 Display validation errors with specific messages

## 6. Integration

- [ ] 6.1 Wire credential sets to request builder
- [ ] 6.2 Update request builder to pass credential sets
- [ ] 6.3 Ensure JSON preview panel shows credential_sets when configured

## 7. Testing

- [ ] 7.1 Type-check passes
- [ ] 7.2 Lint passes
- [ ] 7.3 Build succeeds
- [ ] 7.4 Manual test: duplicate document types (MDL for ID + MDL for address)
- [ ] 7.5 Manual test: credential sets with OR logic (mdl-id OR photo_card-id)
- [ ] 7.6 Manual test: credential sets with AND logic (multiple creds per option)
- [ ] 7.7 Manual test: optional credential sets (required: false)
- [ ] 7.8 Manual test: DCQL output matches spec example format

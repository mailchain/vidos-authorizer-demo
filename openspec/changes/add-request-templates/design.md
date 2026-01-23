## Context

Users need quick ways to configure common credential verification scenarios without manually selecting document types, formats, attributes, and credential sets each time. Templates provide pre-built configurations for real-world use cases.

## Goals / Non-Goals

**Goals:**
- Provide ~15 built-in templates for common verification scenarios
- Organize templates by use case domain with simple cases first
- Allow direct authorization from template (no builder step required)
- Allow loading template into builder for customization
- Support custom user-defined templates (save/delete)
- Include templates in existing export/import flow
- Fully editable after template application (template is just a starting point)

**Non-Goals:**
- Template versioning or migration
- Template sharing via URL/link
- Server-side template storage
- Template categories beyond use case domains

## Decisions

### 1. Template Data Structure

```typescript
interface RequestTemplate {
  id: string;                      // Unique identifier
  name: string;                    // Display name
  description: string;             // Brief explanation of use case
  category: TemplateCategory;      // Use case domain
  credentialRequests: CredentialRequest[];
  credentialSets: CredentialSet[];
  isBuiltIn: boolean;              // true for predefined, false for custom
}

type TemplateCategory = 
  | "age-verification"
  | "identity"
  | "address"
  | "kyc"
  | "driving"
  | "flexible";
```

**Rationale:**
- Matches existing `CredentialRequest` and `CredentialSet` types from builder
- Category enables grouping in UI
- `isBuiltIn` flag distinguishes system vs user templates

### 2. Template Tab UI

**Decision:** Separate "Templates" tab alongside Builder and JSON tabs. Templates tab is the default tab.

**Layout:**
- Category headers with templates grouped underneath
- Each template shows: name, description, credential count badge
- Selected template has visual indicator (e.g., border highlight, checkmark)
- Two actions per template: "Use Template" (select and stay) and "Load to Builder" (select and switch to Builder)
- Custom templates section at bottom with "Save Current as Template" button
- Custom templates show "Custom" badge to distinguish from built-in
- Same action buttons as Builder tab: "Create Authorization" and "Preview"

**Rationale:**
- Default tab promotes template discovery for new users
- Dedicated tab gives templates visibility without cluttering builder
- Two-action approach supports both quick-use and customization workflows
- Grouping by category helps users find relevant templates
- Consistent action buttons across tabs reduces confusion

### 3. Template Application Behavior

**Decision:** "Use Template" selects template and stays on Templates tab; "Load to Builder" selects and switches to Builder tab. Both replace current credential requests/sets.

**Selection indicator:**
- Selected template shows visual indicator (highlight, checkmark, or similar)
- Indicator disappears when user modifies configuration in Builder tab
- No "modified" state tracking - just selected or not selected

**Rationale:**
- Clear mental model: template is a starting point, not additive
- No ambiguity about what "apply" means
- User can always undo by selecting different template or resetting
- Simple selection state (no complex modified tracking)

### 4. Built-in Templates List

Organized by category, simple cases first within each. Each template has a descriptive name and a description explaining the use case and credentials/attributes requested.

**Age Verification:**

| # | Name | Description |
|---|------|-------------|
| 1 | Age 18+ via PID | Verify age over 18 using PID credential. Requests: PID `age_over_18`. |
| 2 | Age 18+ via PID or mDL | Verify age over 18 accepting either PID or mDL. Requests: PID SD-JWT OR PID mDoc OR mDL mDoc, `age_over_18` attribute. |
| 3 | Age 21+ via mDL | Verify age over 21 using driving license. Requests: mDL `age_over_21`. |

**Identity:**

| # | Name | Description |
|---|------|-------------|
| 4 | Name and Date of Birth via PID | Basic identity verification. Requests: PID `family_name`, `given_name`, `birth_date`. |
| 5 | Name, DOB and Photo via PID | Identity with visual verification. Requests: PID `family_name`, `given_name`, `birth_date`, `portrait`. |
| 6 | Full Identity via PID | Comprehensive identity data. Requests: PID `family_name`, `given_name`, `birth_date`, `nationality`, `document_number`. |

**Address:**

| # | Name | Description |
|---|------|-------------|
| 7 | Address via PID | Verify residential address. Requests: PID `resident_country`, `resident_city`, `resident_street`, `resident_postal_code`. |
| 8 | Identity and Address via PID | Combined identity and residence check. Requests: PID `family_name`, `given_name`, `birth_date`, plus full address fields. |

**KYC:**

| # | Name | Description |
|---|------|-------------|
| 9 | KYC Basic via PID | Minimal KYC compliance. Requests: PID `family_name`, `given_name`, `birth_date`, `nationality`. |
| 10 | KYC Standard via PID | Standard financial KYC. Requests: PID name, DOB, nationality, address, `document_number`. |
| 11 | KYC Enhanced via PID | Enhanced due diligence. Requests: PID full identity, full address, `issuing_authority`, `issuing_country`. |

**Driving:**

| # | Name | Description |
|---|------|-------------|
| 12 | Driving Privileges via mDL | Verify license validity and categories. Requests: mDL `driving_privileges`, `expiry_date`. |
| 13 | Driver Identity via mDL | Full driver verification. Requests: mDL `family_name`, `given_name`, `birth_date`, `portrait`, `driving_privileges`. |
| 14 | Car Rental (Age + License) | Age verification plus driving license. Requests: PID `age_over_18` AND mDL `driving_privileges`. Two required credentials. |

**Flexible:**

| # | Name | Description |
|---|------|-------------|
| 15 | Basic Identity via PID or mDL | Accept identity from either credential. Requests: PID OR mDL with `family_name`, `given_name`, `birth_date`. |

### 5. Custom Templates Storage

**Decision:** Store in Zustand with localStorage persistence, same pattern as `customCredentialCases`

**Rationale:**
- Consistent with existing patterns
- Already have persist middleware configured
- Export/import extends naturally

### 6. Export/Import Schema Extension

**Decision:** Extend existing config schema to include `customRequestTemplates` array

```typescript
interface ConfigExport {
  schemaVersion: "1.1";  // Bump version
  instanceType: "managed" | "own";
  ownAuthorizerUrl?: string;
  customCredentialCases: CredentialCaseDefinition[];
  customRequestTemplates: RequestTemplate[];  // NEW
}
```

**Rationale:**
- Single export file for all user customizations
- Backward compatible (missing field = empty array)
- Simpler than separate template export

### 7. Template ID Generation

**Decision:** Built-in templates use descriptive kebab-case IDs (e.g., `age-18-multi-source`). Custom templates use UUID.

**Rationale:**
- Readable IDs for built-in templates aid debugging
- UUIDs for custom prevent conflicts

### 8. Template Validation Rules

**Custom template save validation:**
- Name: required, max 50 characters
- Description: optional, max 200 characters
- Must have at least one valid credential request

**Built-in template validation:**
- App startup validation ensures built-in templates reference valid credential cases
- If validation fails, log error and exclude invalid template from list

**Apply-time validation:**
- Custom templates validated when applied (not on list display)
- If template references deleted credential case, show error on apply
- Imported templates that reference missing cases show error on apply

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Templates become outdated if credential cases change | Built-in templates tightly coupled with built-in cases; startup validation catches issues |
| Too many templates overwhelm users | Category grouping + simple cases first + search/filter if needed later |
| Custom template references deleted custom credential case | Validate on apply, show error message |
| Imported template references missing credential case | Validate on apply, show error message |
| Schema version bump breaks old imports | Handle missing `customRequestTemplates` as empty array |
| Duplicate template names (custom vs built-in) | Allowed - custom templates in separate section with "Custom" badge |

## Migration Plan

None required - purely additive feature. Existing configs import with empty templates array.

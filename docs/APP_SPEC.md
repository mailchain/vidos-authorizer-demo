# Vidos Authorizer Example App - Specification

## Overview

This application demonstrates a multi-stage authorization flow using the OID4VP (OpenID for Verifiable Presentations) specification. The app allows users to create and execute verifiable credential authorization requests through the Vidos Authorizer API.

## Application Flow

The application consists of three main stages:

```
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│  1. CREATE          │ ──► │  2. AUTHORIZATION   │ ──► │  3. RESULT          │
│     AUTHORIZATION   │     │                     │     │                     │
└─────────────────────┘     └─────────────────────┘     └─────────────────────┘
```

---

## Stage 1: Create Authorization

### 1.1 Authorizer Configuration

**Input: Vidos Authorizer URL**
- Text input field for entering the Vidos Authorizer URL
- This is a publicly accessible URL made available via Vidos Gateway
- Example format: `https://gateway.vidos.id/authorizer`
- Validation: Must be a valid URL

### 1.2 Credential Request Builder

Users can build authorization requests by adding one or more credential requests.

#### 1.2.1 Document Types

The following document types are supported:

| Document Type | Display Name | Available Formats |
|--------------|--------------|-------------------|
| `pid` | Person Identification Data (PID) | `dc+sd-jwt`, `mso_mdoc` |
| `mdl` | Mobile Driving Licence (MDL) | `mso_mdoc` only |
| `photo_id` | Photo ID | `dc+sd-jwt`, `mso_mdoc` |

**Note:** Format availability is defined per document type in the credential case definitions (see `CREDENTIAL_CASES.ts`).

#### 1.2.2 Multiple Credential Requests

- Users can add multiple credential requests to a single authorization request
- Example: PID (dc+sd-jwt) + MDL (mso_mdoc) in one request
- No limit on the number of credential requests
- Duplicate credential requests are technically allowed but discouraged (UI should warn)

### 1.3 Attribute Selection

For each credential request, users can select which attributes to request.

**Selection Options:**
- **Hand-pick attributes**: Select individual attributes from the available list
- **Select all**: Convenience option to select all available attributes

Each document type has its own set of requestable attributes defined in the credential case definitions.

#### Example Attributes by Document Type

**PID (Person Identification Data):**
- `family_name`
- `given_name`
- `birth_date`
- `age_over_18`
- `age_over_21`
- `nationality`
- `resident_address`
- `resident_city`
- `resident_postal_code`
- `resident_country`
- `gender`
- `birth_place`
- `issuing_authority`
- `issuing_country`
- `document_number`
- `issuance_date`
- `expiry_date`
- `portrait`

**MDL (Mobile Driving Licence):**
- `family_name`
- `given_name`
- `birth_date`
- `issue_date`
- `expiry_date`
- `issuing_country`
- `issuing_authority`
- `document_number`
- `portrait`
- `driving_privileges`
- `un_distinguishing_sign`
- `administrative_number`
- `sex`
- `height`
- `weight`
- `eye_colour`
- `hair_colour`
- `birth_place`
- `resident_address`
- `resident_city`
- `resident_postal_code`
- `resident_country`
- `age_over_18`
- `age_over_21`

**Photo ID:**
- `family_name`
- `given_name`
- `birth_date`
- `portrait`
- `document_number`
- `issuing_authority`
- `issuing_country`
- `issuance_date`
- `expiry_date`

### 1.4 Response Mode Selection

Users must select a response mode for the authorization request:

| Response Mode | Description | Additional Options |
|--------------|-------------|-------------------|
| `direct_post` | Wallet posts response directly to verifier endpoint | None |
| `direct_post.jwt` | Wallet posts JWT-wrapped response to verifier endpoint | None |
| `dc_api` | Browser Digital Credentials API | Protocol selection required |
| `dc_api.jwt` | Browser Digital Credentials API with JWT response | Protocol selection required |

**DC API Protocol Options:**
When selecting `dc_api` or `dc_api.jwt` response modes, users must choose a protocol:

| Protocol | Value | Description | Additional Requirements |
|----------|-------|-------------|------------------------|
| Unsigned | `openid4vp-v1-unsigned` | Unsigned request (simpler) | None |
| Signed | `openid4vp-v1-signed` | Signed request (more secure) | `expectedOrigins` required |

**Important:** For signed protocols, the application must provide `expectedOrigins` - an array of origin URLs that are allowed to make the request (e.g., `["https://example.com"]`).

**Query Type Restriction:**
- `direct_post` / `direct_post.jwt`: Supports both DCQL and DIF Presentation Exchange query types
- `dc_api` / `dc_api.jwt`: **Only supports DCQL query type**

### 1.5 Advanced Options (Future Enhancement)

For advanced users, the following options should be available:

#### Phase 1: Custom Attribute Entry
- Manual text entry for custom attribute paths
- Useful for testing non-standard attributes

#### Phase 2: Raw JSON Request
- Complete request can be entered as raw JSON
- Bypasses the UI builder entirely
- Useful for debugging or testing edge cases

---

## Stage 2: Authorization

After successfully creating an authorization request, the app transitions to the authorization stage.

### 2.1 Direct Post Modes (`direct_post`, `direct_post.jwt`)

**Display Elements:**
1. **QR Code**
   - Contains the authorization URL (`authorizeUrl` from API response)
   - Scannable by wallet applications
   - Should be prominently displayed

2. **Clickable Authorization URL**
   - For same-device authorization (no QR scan needed)
   - Opens wallet app directly on mobile devices
   - Text link below QR code

**Polling Behavior:**
- App polls `/authorizations/{authorizationId}/status` endpoint
- Poll interval: Every 2-3 seconds
- Status values: `created`, `pending`, `authorized`, `rejected`, `error`, `expired`
- Transition to Result stage when status is terminal (`authorized`, `rejected`, `error`, `expired`)

### 2.2 DC API Modes (`dc_api`, `dc_api.jwt`)

**Display Elements:**
1. **Description Text**
   - Explains that the browser's Digital Credentials API will be invoked
   - Example: "Click the button below to request credentials using your browser's Digital Credentials API"

2. **Trigger Button**
   - Prominent button to initiate the DC API flow
   - Example text: "Request Credentials"
   - On click: Invokes `navigator.credentials.get()` with the appropriate parameters

**Application Responsibilities:**
- The application is responsible for invoking the browser's DC API
- After receiving the credential response from the DC API, the application must submit it to the Vidos Authorizer
- This involves POSTing to the dedicated DC API endpoints (NOT direct_post):
  - `dc_api` mode → POST to `/openid4/vp/v1_0/{authorizationId}/dc_api`
  - `dc_api.jwt` mode → POST to `/openid4/vp/v1_0/{authorizationId}/dc_api.jwt`

**API Response for DC API Modes:**
When creating an authorization request with `dc_api` or `dc_api.jwt` response mode, the API returns a `digitalCredentialGetRequest` object (instead of `authorizeUrl`):

```typescript
// Response from createAuthorization for dc_api modes
{
  authorizationId: string;
  expiresAt: string;
  nonce: string;
  digitalCredentialGetRequest: {
    protocol: "openid4vp-v1-unsigned" | "openid4vp-v1-signed";
    data: {
      response_type: "vp_token";
      response_mode: "dc_api" | "dc_api.jwt";
      nonce: string;
      client_metadata?: { /* ... */ };
      dcql_query: { /* ... */ };
    }
  }
}
```

**DC API Flow:**
```javascript
// Step 1: Use the digitalCredentialGetRequest from API response
const { digitalCredentialGetRequest } = createAuthorizationResponse;

// Step 2: Invoke browser's Digital Credentials API
const credential = await navigator.credentials.get({
  digital: {
    requests: [digitalCredentialGetRequest]
  }
});

// Step 3: Submit credential response to Vidos Authorizer
// Use the dedicated dc_api endpoint (NOT direct_post)
const result = await fetch(
  `${authorizerUrl}/openid4/vp/v1_0/${authorizationId}/dc_api`, // or dc_api.jwt
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      origin: window.location.origin,
      digitalCredentialGetResponse: credential.data // The response from DC API
    })
  }
);

// Step 4: Check result - returns authorization status directly
const { status } = await result.json();
// status: "authorized" | "rejected" | "error" | "expired"
```

**Key Differences from Direct Post:**
- No QR code or authorization URL is displayed
- No status polling needed - the dc_api endpoint returns the final status directly
- Application must handle the DC API invocation and response submission

---

## Stage 3: Result

The final stage displays the authorization result fetched from the Vidos Authorizer API.

### 3.1 Fetching Results

- Call `/authorizations/{authorizationId}/policy-response` endpoint
- Response contains an array of policy evaluation results

### 3.2 Result Display

**Structure:**
```
┌─────────────────────────────────────────────────────────┐
│ Authorization Result                                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Credential 1: PID (dc+sd-jwt)              [STATUS] │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ Policy: signature_validation          ✓ Success    │ │
│ │ Policy: expiry_check                  ✓ Success    │ │
│ │ Policy: issuer_trust                  ⚠ Warning    │ │
│ │ Policy: revocation_check              ✓ Success    │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Credential 2: MDL (mso_mdoc)               [STATUS] │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │ Policy: signature_validation          ✓ Success    │ │
│ │ Policy: expiry_check                  ✗ Error      │ │
│ │ Policy: issuer_trust                  ✓ Success    │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Per-Credential Separation:**
- Each credential in the response should be displayed in its own section
- Clear visual separation between credentials

**Policy Results Display:**
Each credential will have multiple policy results. Display:

| Status | Visual Indicator | Color |
|--------|-----------------|-------|
| Success | ✓ Checkmark | Green |
| Warning | ⚠ Warning triangle | Yellow/Amber |
| Error | ✗ Cross | Red |

**Initial Implementation Focus:**
- Display status (success/warning/error) for each policy
- Group by credential
- Show policy name and status

**Future Enhancement:**
- Expandable sections for detailed policy data
- Show extracted credential attributes
- Display error details when available

### 3.3 Error States

**Authorization Rejected:**
- Display message indicating the wallet rejected the request
- Show any error description provided

**Authorization Expired:**
- Display message indicating the request timed out
- Prompt to start over

**Authorization Error:**
- Display error message from API
- Show technical details if available

### 3.4 Start Over

**Action Button:**
- "Start New Authorization" or "Start Over" button
- Resets application state
- Returns to Stage 1 (Create Authorization)

---

## UI Components

### Navigation/Progress Indicator

Display current stage in the flow:

```
○───────●───────○
Create  Auth   Result
```

- Highlight current stage
- Allow navigation back to previous completed stages (optional)

### Form Validation

All forms should include:
- Required field indicators
- Real-time validation feedback
- Clear error messages
- Submit button disabled until form is valid

### Responsive Design

- Mobile-first approach
- QR code should be appropriately sized for scanning
- Forms should be easily usable on mobile devices

---

## API Integration

### Endpoints Used

| Endpoint | Method | Stage | Purpose |
|----------|--------|-------|---------|
| `/openid4/vp/v1_0/authorizations` | POST | Create | Create authorization request |
| `/openid4/vp/v1_0/authorizations/{id}/status` | GET | Authorization | Poll for status (direct_post modes) |
| `/openid4/vp/v1_0/authorizations/{id}/policy-response` | GET | Result | Fetch policy results |
| `/openid4/vp/v1_0/{id}/dc_api` | POST | Authorization | Submit DC API credential response |
| `/openid4/vp/v1_0/{id}/dc_api.jwt` | POST | Authorization | Submit DC API JWT credential response |

**Note:** The `direct_post` and `direct_post.jwt` endpoints exist but are called by the wallet directly, not by this application.

### Error Handling

- Handle 400/401/404/500 responses gracefully
- Display user-friendly error messages
- Provide retry options where appropriate

---

## State Management

### Application State

```typescript
interface AppState {
  // Current stage
  stage: 'create' | 'authorization' | 'result';

  // Create stage
  authorizerUrl: string;
  credentialRequests: CredentialRequest[];
  responseMode: ResponseMode;
  dcApiProtocol?: DcApiProtocol;
  expectedOrigins?: string[]; // Required for signed protocol

  // Authorization stage
  authorizationId: string | null;
  authorizeUrl: string | null; // For direct_post modes
  digitalCredentialGetRequest: DigitalCredentialGetRequest | null; // For dc_api modes
  authorizationStatus: AuthorizationStatus | null;

  // Result stage
  policyResults: PolicyResult[] | null;

  // Error state
  error: AppError | null;
}

interface CredentialRequest {
  documentType: 'pid' | 'mdl' | 'photo_id';
  format: 'dc+sd-jwt' | 'mso_mdoc';
  attributes: string[];
}

type ResponseMode = 'direct_post' | 'direct_post.jwt' | 'dc_api' | 'dc_api.jwt';
type DcApiProtocol = 'openid4vp-v1-unsigned' | 'openid4vp-v1-signed';
type AuthorizationStatus = 'created' | 'pending' | 'authorized' | 'rejected' | 'error' | 'expired';

interface DigitalCredentialGetRequest {
  protocol: DcApiProtocol;
  data: {
    response_type: string;
    response_mode: string;
    nonce: string;
    client_metadata?: Record<string, unknown>;
    dcql_query: Record<string, unknown>;
  };
}
```

### Persistence (Optional)

- Consider storing `authorizerUrl` in localStorage for convenience
- Do not persist sensitive authorization data

---

## File Structure

```
src/
├── components/
│   ├── stages/
│   │   ├── CreateAuthorization/
│   │   │   ├── AuthorizerConfig.tsx
│   │   │   ├── CredentialRequestBuilder.tsx
│   │   │   ├── AttributeSelector.tsx
│   │   │   ├── ResponseModeSelector.tsx
│   │   │   └── index.tsx
│   │   ├── Authorization/
│   │   │   ├── QRCodeDisplay.tsx
│   │   │   ├── DCApiTrigger.tsx
│   │   │   ├── StatusPoller.tsx
│   │   │   └── index.tsx
│   │   └── Result/
│   │       ├── PolicyResultCard.tsx
│   │       ├── CredentialResultSection.tsx
│   │       └── index.tsx
│   └── ui/
│       └── (shadcn components)
├── config/
│   └── credential-cases.ts
├── hooks/
│   ├── useAuthorizationStatus.ts
│   └── usePolicyResults.ts
├── api/
│   ├── authorizer.ts (generated types)
│   └── client.ts
├── types/
│   └── app.ts
└── App.tsx
```

---

## Credential Case Definitions

Create a configuration file that defines available document types, formats, and attributes:

```typescript
// src/config/credential-cases.ts

export interface CredentialCase {
  id: string;
  displayName: string;
  formats: CredentialFormat[];
}

export interface CredentialFormat {
  id: 'dc+sd-jwt' | 'mso_mdoc';
  displayName: string;
  attributes: CredentialAttribute[];
}

export interface CredentialAttribute {
  id: string;
  displayName: string;
  path: string[]; // JSONPath for the attribute
  required?: boolean;
}

export const CREDENTIAL_CASES: CredentialCase[] = [
  {
    id: 'pid',
    displayName: 'Person Identification Data (PID)',
    formats: [
      {
        id: 'dc+sd-jwt',
        displayName: 'SD-JWT',
        attributes: [/* ... */]
      },
      {
        id: 'mso_mdoc',
        displayName: 'mDoc',
        attributes: [/* ... */]
      }
    ]
  },
  {
    id: 'mdl',
    displayName: 'Mobile Driving Licence (MDL)',
    formats: [
      {
        id: 'mso_mdoc',
        displayName: 'mDoc',
        attributes: [/* ... */]
      }
    ]
  },
  {
    id: 'photo_id',
    displayName: 'Photo ID',
    formats: [
      {
        id: 'dc+sd-jwt',
        displayName: 'SD-JWT',
        attributes: [/* ... */]
      },
      {
        id: 'mso_mdoc',
        displayName: 'mDoc',
        attributes: [/* ... */]
      }
    ]
  }
];
```

---

## Implementation Priorities

### Phase 1: Core Functionality
1. Basic three-stage flow navigation
2. Authorizer URL configuration via Vidos Gateway
3. Single credential request with document type and format selection
4. Basic attribute selection (select all only)
5. Direct post response mode only
6. QR code display
7. Status polling
8. Basic result display (status only)
9. Start over functionality

### Phase 2: Enhanced Features
1. Multiple credential requests
2. Individual attribute selection
3. DC API response modes
4. Detailed result display with policy breakdown
5. Better error handling and user feedback

### Phase 3: Advanced Features
1. Custom attribute entry
2. Raw JSON request input
3. Result data expansion/details view
4. Persistent settings
5. Authorization history (optional)

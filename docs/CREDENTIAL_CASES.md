# Credential Case Definitions

This document defines the credential types, formats, and attributes available for authorization requests.

## Document Types Overview

| ID | Display Name | Supported Formats |
|----|--------------|-------------------|
| `pid` | Person Identification Data (PID) | `dc+sd-jwt`, `mso_mdoc` |
| `mdl` | Mobile Driving Licence (MDL) | `mso_mdoc` |
| `photo_id` | Photo ID | `dc+sd-jwt`, `mso_mdoc` |

---

## PID - Person Identification Data

### Format: `dc+sd-jwt` (SD-JWT)

**Credential Type (vct):** `urn:eu.europa.ec.eudi:pid:1`

| Attribute ID | Display Name | JSONPath | Required |
|-------------|--------------|----------|----------|
| `family_name` | Family Name | `$.family_name` | Yes |
| `given_name` | Given Name | `$.given_name` | Yes |
| `birth_date` | Date of Birth | `$.birth_date` | Yes |
| `age_over_18` | Age Over 18 | `$.age_over_18` | No |
| `age_over_21` | Age Over 21 | `$.age_over_21` | No |
| `age_in_years` | Age in Years | `$.age_in_years` | No |
| `age_birth_year` | Birth Year | `$.age_birth_year` | No |
| `family_name_birth` | Family Name at Birth | `$.family_name_birth` | No |
| `given_name_birth` | Given Name at Birth | `$.given_name_birth` | No |
| `birth_place` | Place of Birth | `$.birth_place` | No |
| `birth_country` | Country of Birth | `$.birth_country` | No |
| `birth_state` | State of Birth | `$.birth_state` | No |
| `birth_city` | City of Birth | `$.birth_city` | No |
| `resident_address` | Resident Address | `$.resident_address` | No |
| `resident_country` | Resident Country | `$.resident_country` | No |
| `resident_state` | Resident State | `$.resident_state` | No |
| `resident_city` | Resident City | `$.resident_city` | No |
| `resident_postal_code` | Resident Postal Code | `$.resident_postal_code` | No |
| `resident_street` | Resident Street | `$.resident_street` | No |
| `resident_house_number` | Resident House Number | `$.resident_house_number` | No |
| `gender` | Gender | `$.gender` | No |
| `nationality` | Nationality | `$.nationality` | No |
| `issuance_date` | Issuance Date | `$.issuance_date` | No |
| `expiry_date` | Expiry Date | `$.expiry_date` | No |
| `issuing_authority` | Issuing Authority | `$.issuing_authority` | No |
| `document_number` | Document Number | `$.document_number` | No |
| `administrative_number` | Administrative Number | `$.administrative_number` | No |
| `issuing_country` | Issuing Country | `$.issuing_country` | No |
| `issuing_jurisdiction` | Issuing Jurisdiction | `$.issuing_jurisdiction` | No |

### Format: `mso_mdoc` (mDoc)

**DocType:** `eu.europa.ec.eudi.pid.1`
**Namespace:** `eu.europa.ec.eudi.pid.1`

| Attribute ID | Display Name | Element Identifier | Required |
|-------------|--------------|-------------------|----------|
| `family_name` | Family Name | `family_name` | Yes |
| `given_name` | Given Name | `given_name` | Yes |
| `birth_date` | Date of Birth | `birth_date` | Yes |
| `age_over_18` | Age Over 18 | `age_over_18` | No |
| `age_over_21` | Age Over 21 | `age_over_21` | No |
| `age_in_years` | Age in Years | `age_in_years` | No |
| `age_birth_year` | Birth Year | `age_birth_year` | No |
| `family_name_birth` | Family Name at Birth | `family_name_birth` | No |
| `given_name_birth` | Given Name at Birth | `given_name_birth` | No |
| `birth_place` | Place of Birth | `birth_place` | No |
| `birth_country` | Country of Birth | `birth_country` | No |
| `birth_state` | State of Birth | `birth_state` | No |
| `birth_city` | City of Birth | `birth_city` | No |
| `resident_address` | Resident Address | `resident_address` | No |
| `resident_country` | Resident Country | `resident_country` | No |
| `resident_state` | Resident State | `resident_state` | No |
| `resident_city` | Resident City | `resident_city` | No |
| `resident_postal_code` | Resident Postal Code | `resident_postal_code` | No |
| `resident_street` | Resident Street | `resident_street` | No |
| `resident_house_number` | Resident House Number | `resident_house_number` | No |
| `gender` | Gender | `gender` | No |
| `nationality` | Nationality | `nationality` | No |
| `issuance_date` | Issuance Date | `issuance_date` | No |
| `expiry_date` | Expiry Date | `expiry_date` | No |
| `issuing_authority` | Issuing Authority | `issuing_authority` | No |
| `document_number` | Document Number | `document_number` | No |
| `administrative_number` | Administrative Number | `administrative_number` | No |
| `issuing_country` | Issuing Country | `issuing_country` | No |
| `issuing_jurisdiction` | Issuing Jurisdiction | `issuing_jurisdiction` | No |
| `portrait` | Portrait | `portrait` | No |
| `portrait_capture_date` | Portrait Capture Date | `portrait_capture_date` | No |

---

## MDL - Mobile Driving Licence

### Format: `mso_mdoc` (mDoc)

**DocType:** `org.iso.18013.5.1.mDL`
**Namespace:** `org.iso.18013.5.1`

| Attribute ID | Display Name | Element Identifier | Required |
|-------------|--------------|-------------------|----------|
| `family_name` | Family Name | `family_name` | Yes |
| `given_name` | Given Name | `given_name` | Yes |
| `birth_date` | Date of Birth | `birth_date` | Yes |
| `issue_date` | Issue Date | `issue_date` | No |
| `expiry_date` | Expiry Date | `expiry_date` | No |
| `issuing_country` | Issuing Country | `issuing_country` | No |
| `issuing_authority` | Issuing Authority | `issuing_authority` | No |
| `document_number` | Document Number | `document_number` | No |
| `portrait` | Portrait | `portrait` | No |
| `driving_privileges` | Driving Privileges | `driving_privileges` | No |
| `un_distinguishing_sign` | UN Distinguishing Sign | `un_distinguishing_sign` | No |
| `administrative_number` | Administrative Number | `administrative_number` | No |
| `sex` | Sex | `sex` | No |
| `height` | Height | `height` | No |
| `weight` | Weight | `weight` | No |
| `eye_colour` | Eye Colour | `eye_colour` | No |
| `hair_colour` | Hair Colour | `hair_colour` | No |
| `birth_place` | Place of Birth | `birth_place` | No |
| `resident_address` | Resident Address | `resident_address` | No |
| `resident_city` | Resident City | `resident_city` | No |
| `resident_state` | Resident State | `resident_state` | No |
| `resident_postal_code` | Resident Postal Code | `resident_postal_code` | No |
| `resident_country` | Resident Country | `resident_country` | No |
| `age_in_years` | Age in Years | `age_in_years` | No |
| `age_birth_year` | Birth Year | `age_birth_year` | No |
| `age_over_18` | Age Over 18 | `age_over_18` | No |
| `age_over_21` | Age Over 21 | `age_over_21` | No |
| `issuing_jurisdiction` | Issuing Jurisdiction | `issuing_jurisdiction` | No |
| `nationality` | Nationality | `nationality` | No |
| `family_name_national_character` | Family Name (National) | `family_name_national_character` | No |
| `given_name_national_character` | Given Name (National) | `given_name_national_character` | No |
| `signature_usual_mark` | Signature / Usual Mark | `signature_usual_mark` | No |

---

## Photo ID

### Format: `dc+sd-jwt` (SD-JWT)

**Credential Type (vct):** `urn:eu.europa.ec.eudi:photo_id:1`

| Attribute ID | Display Name | JSONPath | Required |
|-------------|--------------|----------|----------|
| `family_name` | Family Name | `$.family_name` | Yes |
| `given_name` | Given Name | `$.given_name` | Yes |
| `birth_date` | Date of Birth | `$.birth_date` | Yes |
| `portrait` | Portrait | `$.portrait` | No |
| `document_number` | Document Number | `$.document_number` | No |
| `issuing_authority` | Issuing Authority | `$.issuing_authority` | No |
| `issuing_country` | Issuing Country | `$.issuing_country` | No |
| `issuance_date` | Issuance Date | `$.issuance_date` | No |
| `expiry_date` | Expiry Date | `$.expiry_date` | No |

### Format: `mso_mdoc` (mDoc)

**DocType:** `org.iso.23220.photoid.1`
**Namespace:** `org.iso.23220.1`

| Attribute ID | Display Name | Element Identifier | Required |
|-------------|--------------|-------------------|----------|
| `family_name` | Family Name | `family_name` | Yes |
| `given_name` | Given Name | `given_name` | Yes |
| `birth_date` | Date of Birth | `birth_date` | Yes |
| `portrait` | Portrait | `portrait` | No |
| `document_number` | Document Number | `document_number` | No |
| `issuing_authority` | Issuing Authority | `issuing_authority` | No |
| `issuing_country` | Issuing Country | `issuing_country` | No |
| `issuance_date` | Issuance Date | `issuance_date` | No |
| `expiry_date` | Expiry Date | `expiry_date` | No |

---

## Format-Specific Considerations

### SD-JWT (`dc+sd-jwt`)

**Request Structure (DCQL):**
```json
{
  "type": "DCQL",
  "dcql": {
    "credentials": [
      {
        "id": "pid_request",
        "format": "dc+sd-jwt",
        "meta": {
          "vct_values": ["urn:eu.europa.ec.eudi:pid:1"]
        },
        "claims": [
          { "path": ["family_name"] },
          { "path": ["given_name"] },
          { "path": ["birth_date"] }
        ]
      }
    ]
  }
}
```

### mDoc (`mso_mdoc`)

**Request Structure (DIF Presentation Exchange):**
```json
{
  "type": "DIF.PresentationExchange",
  "presentationDefinition": {
    "id": "mdl_request",
    "input_descriptors": [
      {
        "id": "mdl",
        "format": {
          "mso_mdoc": {
            "alg": ["ES256", "ES384", "ES512"]
          }
        },
        "constraints": {
          "limit_disclosure": "required",
          "fields": [
            {
              "path": ["$['org.iso.18013.5.1']['family_name']"],
              "intent_to_retain": false
            },
            {
              "path": ["$['org.iso.18013.5.1']['given_name']"],
              "intent_to_retain": false
            }
          ]
        }
      }
    ]
  }
}
```

---

## TypeScript Implementation

```typescript
// src/config/credential-cases.ts

export type DocumentType = 'pid' | 'mdl' | 'photo_id';
export type CredentialFormat = 'dc+sd-jwt' | 'mso_mdoc';

export interface AttributeDefinition {
  id: string;
  displayName: string;
  // For SD-JWT: JSONPath (e.g., ['family_name'])
  // For mDoc: [namespace, element] (e.g., ['org.iso.18013.5.1', 'family_name'])
  path: string[];
  required: boolean;
}

export interface FormatDefinition {
  format: CredentialFormat;
  displayName: string;
  // For SD-JWT: vct value
  // For mDoc: docType
  credentialType: string;
  // For mDoc only
  namespace?: string;
  attributes: AttributeDefinition[];
}

export interface CredentialCaseDefinition {
  id: DocumentType;
  displayName: string;
  formats: FormatDefinition[];
}

export const CREDENTIAL_CASES: CredentialCaseDefinition[] = [
  // ... definitions as shown above
];

// Helper functions
export function getCredentialCase(id: DocumentType): CredentialCaseDefinition | undefined {
  return CREDENTIAL_CASES.find(c => c.id === id);
}

export function getFormatDefinition(
  documentType: DocumentType,
  format: CredentialFormat
): FormatDefinition | undefined {
  const credCase = getCredentialCase(documentType);
  return credCase?.formats.find(f => f.format === format);
}

export function getAvailableFormats(documentType: DocumentType): CredentialFormat[] {
  const credCase = getCredentialCase(documentType);
  return credCase?.formats.map(f => f.format) ?? [];
}
```

---

## Extending Credential Cases

To add a new credential type:

1. Add the document type to the `DocumentType` union
2. Define the formats and their attributes
3. Add the credential case definition to `CREDENTIAL_CASES` array
4. Update UI components to handle the new type

Example for adding a new credential type:

```typescript
{
  id: 'health_insurance',
  displayName: 'Health Insurance Card',
  formats: [
    {
      format: 'dc+sd-jwt',
      displayName: 'SD-JWT',
      credentialType: 'urn:example:health_insurance:1',
      attributes: [
        { id: 'policy_number', displayName: 'Policy Number', path: ['policy_number'], required: true },
        { id: 'holder_name', displayName: 'Holder Name', path: ['holder_name'], required: true },
        // ... more attributes
      ]
    }
  ]
}
```

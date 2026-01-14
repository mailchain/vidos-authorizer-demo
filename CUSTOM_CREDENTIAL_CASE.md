### Custom Credential Cases

The app supports defining custom credential cases in addition to the built-in ones (PID, MDL, Photo ID). Custom cases are stored in browser localStorage and can be used alongside built-in cases.

**Managing Custom Cases**

Click the "Manage Custom Credential Cases" button in the Create Authorization stage to:

- View all built-in and custom credential cases
- Clone a built-in" case to create a custom variant
- Add new custom cases from scratch
- Edit or delete existing custom cases

**JSON Structure**

Custom credential cases must follow the `CredentialCaseDefinition` interface. See `src/config/credential-cases.ts` for the TypeScript definitions and built-in examples.

```typescript
interface CredentialCaseDefinition {
  id: string; // Unique identifier
  displayName: string; // Human-readable name
  formats: FormatDefinition[]; // Array of supported formats
}

interface FormatDefinition {
  id: string; // Unique format identifier
  format: "dc+sd-jwt" | "mso_mdoc";
  displayName: string; // Human-readable format name
  credentialType: string; // Credential type identifier (vct for SD-JWT, doctype for mDoc)
  namespace?: string; // Required for mDoc formats
  attributes: AttributeDefinition[];
}

interface AttributeDefinition {
  id: string; // Attribute identifier
  displayName: string; // Human-readable name
  path: (string | null)[]; // Claim path (namespace first for mDoc)
  required: boolean; // Whether attribute must be in issued credential
}
```

**Example: Custom SD-JWT Credential**

```json
{
  "id": "my_custom_credential",
  "displayName": "My Custom Credential",
  "formats": [
    {
      "id": "my_custom_sdjwt",
      "format": "dc+sd-jwt",
      "displayName": "SD-JWT",
      "credentialType": "urn:custom:my_credential:1",
      "attributes": [
        {
          "id": "first_name",
          "displayName": "First Name",
          "path": ["first_name"],
          "required": true
        },
        {
          "id": "last_name",
          "displayName": "Last Name",
          "path": ["last_name"],
          "required": true
        },
        {
          "id": "email",
          "displayName": "Email Address",
          "path": ["email"],
          "required": false
        }
      ]
    }
  ]
}
```

**Example: Custom mDoc Credential**

```json
{
  "id": "my_custom_mdoc",
  "displayName": "My Custom mDoc",
  "formats": [
    {
      "id": "my_custom_mdoc_format",
      "format": "mso_mdoc",
      "displayName": "mDoc",
      "credentialType": "org.example.custom.1",
      "namespace": "org.example.custom.1",
      "attributes": [
        {
          "id": "full_name",
          "displayName": "Full Name",
          "path": ["org.example.custom.1", "full_name"],
          "required": true
        },
        {
          "id": "birth_date",
          "displayName": "Date of Birth",
          "path": ["org.example.custom.1", "birth_date"],
          "required": true
        }
      ]
    }
  ]
}
```

**Key Differences: SD-JWT vs mDoc**

- **SD-JWT**: Attributes use simple claim paths (e.g., `["email"]`, `["address", "country"]`)
- **mDoc**: Attributes must include the namespace as the first path element (e.g., `["org.example.custom.1", "email"]`)
- **Format value**: `"dc+sd-jwt"` for SD-JWT, `"mso_mdoc"` for mDoc
- **Credential type**:
  - SD-JWT uses `vct` (Verifiable Credential Type), typically URN format (e.g., `"urn:eudi:pid:1"`)
  - mDoc uses `doctype`, typically reverse domain format (e.g., `"eu.europa.ec.eudi.pid.1"`)

**References**

- TypeScript interfaces: `src/config/credential-cases.ts`
- Built-in examples: PID, MDL, and Photo ID definitions in `credential-cases.ts`
- EUDI PID Rulebook: https://eudi.dev/2.4.0/annexes/annex-3/annex-3.01-pid-rulebook/

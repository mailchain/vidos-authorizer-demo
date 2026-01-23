# Improve descriptions in policyDefinitions.ts

**Session ID:** ses_41477591bffeUEfoxc7Dn72LPK
**Created:** 1/23/2026, 4:46:00 PM
**Updated:** 1/23/2026, 5:06:40 PM

---

## User

@src/config/policyDefinitions.ts improve the description of the @src/config/policyDefinitions.ts by exploring the linked documentation links

---

## Assistant (Build · grok-code-fast-1 · 6.7s)

```
Tool: webfetch

**Input:**
```json
{
  "format": "markdown",
  "url": "https://vidos.id/docs/reference/services/validator/policies/credential-query/"
}
```
**Output:**
```
Credential Query Validation Policy Reference | Vidos      [Skip to content](#_top)

 [![Vidos Logo](/docs/_astro/vidos-logo-long.CCvhBbmO.svg) Vidos](/docs/)

-   [Explanations](/docs/explanations/services/)
-   [References](/docs/reference/services/authorizer/)
-   [Tutorials](/docs/tutorials/services/verifier/)
-   [Guides](/docs/guides/management/instances/create/)

Search CtrlK

Cancel

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   [Trust Triangle](/docs/explanations/triangle-of-trust/)
-   Management
    
    -   [Overview](/docs/explanations/management/)
    -   [Configurations](/docs/explanations/management/configurations/)
    -   [Instances](/docs/explanations/management/instances/)
    -   [Regions](/docs/explanations/management/regions/)
    -   IAM
        
        -   [Overview](/docs/explanations/management/iam/)
        -   [API Keys](/docs/explanations/management/iam/api-keys/)
        -   [Policy Documents](/docs/explanations/management/iam/policy-documents/)
        -   [Scopes](/docs/explanations/management/iam/scopes/)
        -   [Service Instances](/docs/explanations/management/iam/service-instances/)
        -   [Service Roles](/docs/explanations/management/iam/service-roles/)
        
    
-   Services
    
    -   [Overview](/docs/explanations/services/)
    -   [Authorizer](/docs/explanations/services/authorizer/)
    -   [Gateway](/docs/explanations/services/gateway/)
    -   [Validator](/docs/explanations/services/validator/)
    -   [Verifier](/docs/explanations/services/verifier/)
    -   Resolver
        
        -   [Overview](/docs/explanations/services/resolver/)
        -   [DID Method Routing](/docs/explanations/services/resolver/did-method-routing/)
        
    
-   Standards
    
    -   DIF
        
        -   Presentation Exchange
            
            -   [Presentation Exchange](/docs/explanations/standards/dif/presentation-exchange/)
            -   [Input Descriptors](/docs/explanations/standards/dif/presentation-exchange/input-descriptors/)
            -   [Presentation Definition](/docs/explanations/standards/dif/presentation-exchange/presentation-definition/)
            -   [Presentation Submission](/docs/explanations/standards/dif/presentation-exchange/presentation-submission/)
            -   [Submission Requirements](/docs/explanations/standards/dif/presentation-exchange/submission-requirements/)
            
        
    -   OIDF
        
        -   DCQL
            
            -   [Digital Credential Query Language](/docs/explanations/standards/oidf/dcql/)
            -   [Claim Queries](/docs/explanations/standards/oidf/dcql/claim-queries/)
            -   [Credential Queries](/docs/explanations/standards/oidf/dcql/credential-queries/)
            -   [Credential Sets](/docs/explanations/standards/oidf/dcql/credential-sets/)
            -   [Trusted Authorities](/docs/explanations/standards/oidf/dcql/trusted-authorities/)
            
        -   OpenID4VP
            
            -   [OpenID4VP](/docs/explanations/standards/oidf/openid4vp/)
            -   [Authorization requests](/docs/explanations/standards/oidf/openid4vp/authorization-requests/)
            -   [Digital Credentials API](/docs/explanations/standards/oidf/openid4vp/digital-credentials-api/)
            -   [Flows and UX](/docs/explanations/standards/oidf/openid4vp/flows-and-ux/)
            -   [Metadata and trust](/docs/explanations/standards/oidf/openid4vp/metadata-and-trust/)
            -   [Responses](/docs/explanations/standards/oidf/openid4vp/responses/)
            -   [Security and validation](/docs/explanations/standards/oidf/openid4vp/security-and-validation/)
            
        
    -   W3C
        
        -   Decentralized Identifiers
            
            -   [Decentralized Identifiers (DIDs)](/docs/explanations/standards/w3c/decentralized-identifiers/)
            -   [Controller Documents](/docs/explanations/standards/w3c/decentralized-identifiers/controller-document/)
            -   [DID Documents](/docs/explanations/standards/w3c/decentralized-identifiers/documents/)
            -   [DID Methods](/docs/explanations/standards/w3c/decentralized-identifiers/methods/)
            -   [DID Resolution](/docs/explanations/standards/w3c/decentralized-identifiers/resolution/)
            -   [DID URL Dereferencing](/docs/explanations/standards/w3c/decentralized-identifiers/url-dereferencing/)
            -   [DID Use Cases](/docs/explanations/standards/w3c/decentralized-identifiers/use-cases/)
            -   [Verification Methods](/docs/explanations/standards/w3c/decentralized-identifiers/verification-methods/)
            
        -   Digital Credentials API
            
            -   [Digital Credentials API](/docs/explanations/standards/w3c/digital-credentials/)
            -   [Methods](/docs/explanations/standards/w3c/digital-credentials/api-methods/)
            -   [Permissions Policy](/docs/explanations/standards/w3c/digital-credentials/permissions-policy/)
            -   [Privacy and security](/docs/explanations/standards/w3c/digital-credentials/privacy-and-security/)
            -   [Protocol registry](/docs/explanations/standards/w3c/digital-credentials/protocol-registry/)
            
        -   Verifiable Credentials
            
            -   [Verifiable Credentials](/docs/explanations/standards/w3c/verifiable-credentials/)
            -   [Credential Schemas](/docs/explanations/standards/w3c/verifiable-credentials/credential-schema/)
            -   [Credential Status](/docs/explanations/standards/w3c/verifiable-credentials/credential-status/)
            -   [Issuers](/docs/explanations/standards/w3c/verifiable-credentials/issuer/)
            -   [Securing Mechanisms](/docs/explanations/standards/w3c/verifiable-credentials/securing-mechanisms/)
            -   [Credential Subjects](/docs/explanations/standards/w3c/verifiable-credentials/subject/)
            -   [Validity Period](/docs/explanations/standards/w3c/verifiable-credentials/validity-period/)
            -   [Verifiable Presentations](/docs/explanations/standards/w3c/verifiable-credentials/verifiable-presentations/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto   

-   Management
    
    -   IAM
        
        -   [Create Account](/docs/guides/management/iam/create-account/)
        -   [Create API Key](/docs/guides/management/iam/create-api-key/)
        -   [Setup MFA](/docs/guides/management/iam/setup-mfa/)
        
    -   Instances
        
        -   [Configure](/docs/guides/management/instances/configure/)
        -   [Create](/docs/guides/management/instances/create/)
        -   [Instance Logs](/docs/guides/management/instances/logs/)
        -   [Stop / Start](/docs/guides/management/instances/state/)
        
    
-   Services
    
    -   Resolver
        
        -   [Pick DID Method](/docs/guides/services/resolver/pick-w3c-did-method/)
        -   [Test](/docs/guides/services/resolver/test/)
        -   Configure
            
            -   [DID methods](/docs/guides/services/resolver/configure/did-method-support/)
            -   [Response type](/docs/guides/services/resolver/configure/response-type/)
            
        
    -   Verifier
        
        -   Configure
            
            -   [Expired Credentials](/docs/guides/services/verifier/configure/allow-expired-credentials/)
            
        -   Verify
            
            -   [SD-JWT VC](/docs/guides/services/verifier/verify/ietf-oauth-sd-jwt-vc/)
            -   [Setup](/docs/guides/services/verifier/verify/setup/)
            -   [W3C Verifiable Credential v1.1](/docs/guides/services/verifier/verify/w3c-vc-11/)
            -   [W3C Verifiable Presentation v1.1](/docs/guides/services/verifier/verify/w3c-vc-11-vp/)
            -   [W3C Verifiable Credential v2.0](/docs/guides/services/verifier/verify/w3c-vc-20/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Configuration
    
    -   [CORS](/docs/reference/configuration/cors/)
    -   [Service Instances](/docs/reference/configuration/service-instances/)
    -   [Service Roles](/docs/reference/configuration/service-roles/)
    
-   Errors
    
    -   [credential-query-evaluation](/docs/reference/errors/credential-query-evaluation/)
    -   [credential-query-format](/docs/reference/errors/credential-query-format/)
    -   [credential-query-unsupported](/docs/reference/errors/credential-query-unsupported/)
    -   [invalid-format](/docs/reference/errors/invalid-format/)
    -   [not-allowed-by-configuration](/docs/reference/errors/not-allowed-by-configuration/)
    -   [proof-cryptographic-error](/docs/reference/errors/proof-cryptographic-error/)
    -   [proof-resolve-issuer](/docs/reference/errors/proof-resolve-issuer/)
    -   [proof-unsupported-feature](/docs/reference/errors/proof-unsupported-feature/)
    -   [proof-verification-failed](/docs/reference/errors/proof-verification-failed/)
    -   [trusted-issuer-configuration-invalid](/docs/reference/errors/trusted-issuer-configuration-invalid/)
    -   [trusted-issuer-unsupported](/docs/reference/errors/trusted-issuer-unsupported/)
    -   [trusted-issuer-untrusted](/docs/reference/errors/trusted-issuer-untrusted/)
    -   [trusted-issuer-validation-error](/docs/reference/errors/trusted-issuer-validation-error/)
    -   [unexpected-error](/docs/reference/errors/unexpected-error/)
    -   [unsupported-format](/docs/reference/errors/unsupported-format/)
    
-   IAM
    
    -   [Policy Documents](/docs/reference/iam/policy-documents/)
    -   [Scopes](/docs/reference/iam/scopes/)
    
-   Services
    
    -   Authorizer
        
        -   [Overview](/docs/reference/services/authorizer/)
        -   [API](/docs/reference/services/authorizer/api/)
        -   [Configuration](/docs/reference/services/authorizer/configuration/)
        -   Policies
            
            -   [Policies](/docs/reference/services/authorizer/policies/)
            -   [Format](/docs/reference/services/authorizer/policies/format/)
            -   [Validate](/docs/reference/services/authorizer/policies/validate/)
            -   [Verify](/docs/reference/services/authorizer/policies/verify/)
            
        
    -   Gateway
        
        -   [Overview](/docs/reference/services/gateway/)
        -   [Configuration](/docs/reference/services/gateway/configuration/)
        
    -   Resolver
        
        -   [Overview](/docs/reference/services/resolver/)
        -   [Configuration](/docs/reference/services/resolver/configuration/)
        -   [Supported DID Methods](/docs/reference/services/resolver/supported-did-methods/)
        
    -   Validator
        
        -   [Overview](/docs/reference/services/validator/)
        -   [API](/docs/reference/services/validator/api/)
        -   [Configuration](/docs/reference/services/validator/configuration/)
        -   [Errors](/docs/reference/services/validator/errors/)
        -   [Standards](/docs/reference/services/validator/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/validator/policies/)
            -   [Credential Query](/docs/reference/services/validator/policies/credential-query/)
            -   [Credential Format](/docs/reference/services/validator/policies/format/)
            -   [Trusted Issuer](/docs/reference/services/validator/policies/trusted-issuer/)
            
        
    -   Verifier
        
        -   [Overview](/docs/reference/services/verifier/)
        -   [API](/docs/reference/services/verifier/api/)
        -   [Configuration](/docs/reference/services/verifier/configuration/)
        -   [Errors](/docs/reference/services/verifier/errors/)
        -   [Standards](/docs/reference/services/verifier/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/verifier/policies/)
            -   [Format](/docs/reference/services/verifier/policies/format/)
            -   [Not After](/docs/reference/services/verifier/policies/not-after/)
            -   [Not Before](/docs/reference/services/verifier/policies/not-before/)
            -   [Proof](/docs/reference/services/verifier/policies/proof/)
            -   [Schema](/docs/reference/services/verifier/policies/schema/)
            -   [Status](/docs/reference/services/verifier/policies/status/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Services
    
    -   Resolver
        
        -   [Create and Resolve](/docs/tutorials/services/resolver/create-and-resolve/)
        -   [DID URL Dereferencing](/docs/tutorials/services/resolver/did-url-dereferencing/)
        -   [Create and Resolve DIDs with Onyx](/docs/tutorials/services/resolver/onyx-create-did/)
        -   [Resolve with API Key](/docs/tutorials/services/resolver/resolve-via-api/)
        
    -   Verifier
        
        -   [Verify a Credential](/docs/tutorials/services/verifier/)
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [Supported Query Types](#supported-query-types)
-   [Credential Query Validation Process](#credential-query-validation-process)
-   [DIF Presentation Exchange Validation](#dif-presentation-exchange-validation)
-   [DCQL Validation](#dcql-validation)
-   [ISO 18013-5 Device Request Validation](#iso-18013-5-device-request-validation)
-   [Error Handling](#error-handling)
-   [Configuration](#configuration)
-   [Query Type Support Matrix](#query-type-support-matrix)
-   [Best Practices](#best-practices)

Ask ChatGPT View Markdown

## On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [Supported Query Types](#supported-query-types)
-   [Credential Query Validation Process](#credential-query-validation-process)
-   [DIF Presentation Exchange Validation](#dif-presentation-exchange-validation)
-   [DCQL Validation](#dcql-validation)
-   [ISO 18013-5 Device Request Validation](#iso-18013-5-device-request-validation)
-   [Error Handling](#error-handling)
-   [Configuration](#configuration)
-   [Query Type Support Matrix](#query-type-support-matrix)
-   [Best Practices](#best-practices)

# Credential Query Validation Policy Reference

This reference documents the credential query validation policy for the validator service. The credential query policy validates that presentation submissions satisfy their corresponding credential queries, ensuring that credentials can fulfill the requested data requirements.

## Policy Overview

[Section titled “Policy Overview”](#policy-overview)

The credential query validation policy ensures that submitted verifiable presentations contain the credentials and data elements required by credential queries. It validates the compatibility between what is requested in a credential query and what is provided in the presentation submission, supporting multiple credential query standards and formats.

## Supported Standards

[Section titled “Supported Standards”](#supported-standards)

The credential query validation policy supports query validation across multiple credential query standards:

Standard

Organization

Specification

Query Format

Validation Aspect

DIF Presentation Exchange

DIF

[Presentation Exchange](https://identity.foundation/presentation-exchange/)

JSON

Validates presentations against presentation definitions

DCQL

DIF

[Decentralized Credential Query Language](https://identity.foundation/dcql/)

DCQL Query Language

Validates credential presentations against DCQL queries

ISO 18013-5 Device Request

ISO

[ISO 18013-5](https://www.iso.org/standard/69084.html)

CBOR Device Request

Validates mDL presentations against device request data requirements

## Supported Query Types

[Section titled “Supported Query Types”](#supported-query-types)

The validator supports the following credential query types and their validation mechanisms:

Query Type

Description

Supported Formats

Primary Use Case

DIF.PresentationExchange

DIF Presentation Exchange standard

W3C VC, JWT VC, SD-JWT VC

General purpose credential presentation requests

DCQL

Decentralized Credential Query Language

W3C VC, SD-JWT VC, mDL (mso\_mdoc)

Flexible credential data queries with selective disclosure

ISO18013-5.DeviceRequest

ISO 18013-5 mobile driving license requests

mDL (mso\_mdoc)

Mobile driving license data verification

## Credential Query Validation Process

[Section titled “Credential Query Validation Process”](#credential-query-validation-process)

flowchart TD
    subgraph "Credential Query Validation"
        Input\[Presentation Submission\] --> DetectType\[Detect Query Type\]
        DetectType --> DIF{DIF PE?}
        DetectType --> DCQL{DCQL?}
        DetectType --> MDL{ISO18013-5?}

        DIF -->|Yes| ValidatePD\[Validate Presentation Definition\]
        ValidatePD --> ValidatePS\[Validate Presentation Submission\]
        ValidatePS --> EvaluatePresentation\[Evaluate Presentation\]
        EvaluatePresentation --> DifResult\[DIF Result\]

        DCQL -->|Yes| ParseDCQL\[Parse DCQL Query\]
        ParseDCQL --> CreateDCQLPresentation\[Create DCQL Presentation\]
        CreateDCQLPresentation --> EvaluateDCQL\[Evaluate DCQL Query\]
        EvaluateDCQL --> DcqlResult\[DCQL Result\]

        MDL -->|Yes| DecodeDeviceRequest\[Decode Device Request\]
        DecodeDeviceRequest --> ValidateVersion\[Validate mDL Version\]
        ValidateVersion --> ValidateDataElements\[Validate Data Elements\]
        ValidateDataElements --> MdlResult\[mDL Result\]

        DIF -->|No| Next1\[Next Middleware\]
        DCQL -->|No| Next2\[Next Middleware\]
        MDL -->|No| UnsupportedError\[Unsupported Query Type\]

        Next1 --> Next2
        Next2 --> UnsupportedError

        DifResult --> Decision{Valid?}
        DcqlResult --> Decision
        MdlResult --> Decision
        UnsupportedError --> Decision

        Decision -->|Yes| Valid\[Valid Query\]
        Decision -->|No| Invalid\[Invalid Query\]
    end

    style Input fill:#f9f9f9,stroke:#333,stroke-width:1px
    style DetectType fill:#e1f5fe,stroke:#333,stroke-width:1px
    style DIF fill:#e1f5fe,stroke:#333,stroke-width:1px
    style DCQL fill:#e1f5fe,stroke:#333,stroke-width:1px
    style MDL fill:#e1f5fe,stroke:#333,stroke-width:1px
    style ValidatePD fill:#e8f5e8,stroke:#333,stroke-width:1px
    style ValidatePS fill:#e8f5e8,stroke:#333,stroke-width:1px
    style EvaluatePresentation fill:#e8f5e8,stroke:#333,stroke-width:1px
    style ParseDCQL fill:#fff3e0,stroke:#333,stroke-width:1px
    style CreateDCQLPresentation fill:#fff3e0,stroke:#333,stroke-width:1px
    style EvaluateDCQL fill:#fff3e0,stroke:#333,stroke-width:1px
    style DecodeDeviceRequest fill:#f3e5f5,stroke:#333,stroke-width:1px
    style ValidateVersion fill:#f3e5f5,stroke:#333,stroke-width:1px
    style ValidateDataElements fill:#f3e5f5,stroke:#333,stroke-width:1px
    style Valid fill:#dcedc8,stroke:#333,stroke-width:1px
    style Invalid fill:#ffcdd2,stroke:#333,stroke-width:1px

When validating credential queries, the policy follows these steps:

1.  **Query type detection** - Identifies the type of credential query being validated
2.  **Format-specific validation** - Applies validation logic specific to the detected query type
3.  **Presentation evaluation** - Evaluates whether the presentation satisfies the query requirements
4.  **Result determination** - Returns validation results with detailed error information if validation fails

## DIF Presentation Exchange Validation

[Section titled “DIF Presentation Exchange Validation”](#dif-presentation-exchange-validation)

For DIF Presentation Exchange queries, the policy:

1.  **Validates presentation definition** - Ensures the presentation definition is well-formed
2.  **Validates presentation submission** - Checks the presentation submission structure
3.  **Evaluates presentation** - Uses the PEX library to evaluate whether the presentation satisfies the definition
4.  **Handles warnings** - Processes evaluation warnings based on configuration

## DCQL Validation

[Section titled “DCQL Validation”](#dcql-validation)

For DCQL queries, the policy:

1.  **Parses DCQL query** - Validates and parses the DCQL query syntax
2.  **Creates credential presentation** - Transforms submitted credentials into DCQL presentation format
3.  **Evaluates query** - Determines if the presentation can satisfy the DCQL query requirements
4.  **Supports multiple formats** - Handles W3C VC, SD-JWT VC, and mDL credentials

## ISO 18013-5 Device Request Validation

[Section titled “ISO 18013-5 Device Request Validation”](#iso-18013-5-device-request-validation)

For mDL device requests, the policy:

1.  **Decodes device request** - Parses the CBOR-encoded device request
2.  **Validates version compatibility** - Ensures mDL version matches device request version
3.  **Validates data elements** - Checks that all requested data elements are present in the mDL
4.  **Handles multiple documents** - Validates against multiple document types if required

## Error Handling

[Section titled “Error Handling”](#error-handling)

The credential query policy returns specific errors for various validation scenarios:

Error Type

Description

Typical Cause

Credential Query Format Error

Query format is invalid or malformed

Invalid DIF PE definition, malformed DCQL query

Presentation Submission Format Error

Presentation submission structure is invalid

Missing required fields, invalid submission format

Presentation Submission Evaluation Error

Presentation cannot satisfy query requirements

Missing credentials, insufficient data elements

Unsupported Query Type Error

Query type is not supported

Unknown or unsupported credential query format

## Configuration

[Section titled “Configuration”](#configuration)

The credential query validation policy can be configured through the validator configuration:

-   **Skip presentation submission policies** - Allows bypassing credential query validation entirely
-   **Presentation evaluation warning handling** - Configures how to handle evaluation warnings (valid/warning/error)

For detailed configuration options, parameters, and default values, see the [Validator Configuration Reference](/docs/reference/services/validator/configuration/#presentationsubmission).

## Query Type Support Matrix

[Section titled “Query Type Support Matrix”](#query-type-support-matrix)

Credential Format

DIF PE

DCQL

ISO18013-5

Notes

W3C VC (JSON-LD)

✅

✅

❌

Full support for W3C credentials

JWT VC

✅

✅

❌

JWT-format verifiable credentials

SD-JWT VC

✅

✅

❌

Selective disclosure JWT credentials

mDL (mso\_mdoc)

✅

✅

✅

Mobile driving license format

IETF Digital Cred

✅

✅

❌

IETF digital credentials

## Best Practices

[Section titled “Best Practices”](#best-practices)

When using credential query validation:

1.  **Use appropriate query types** - Choose the query type that best fits your use case and credential formats
2.  **Handle warnings appropriately** - Configure warning handling based on your security requirements
3.  **Validate query structure** - Ensure queries are well-formed before submission
4.  **Consider selective disclosure** - Use DCQL for scenarios requiring selective attribute disclosure
5.  **Test with multiple formats** - Validate your queries work with all supported credential formats

[Previous  
Policies](/docs/reference/services/validator/policies/) [Next  
Credential Format](/docs/reference/services/validator/policies/format/)
```
```

```
Tool: webfetch

**Input:**
```json
{
  "format": "markdown",
  "url": "https://vidos.id/docs/reference/services/validator/policies/trusted-issuer/"
}
```
**Output:**
```
Trusted Issuer Validation Policy Reference | Vidos      [Skip to content](#_top)

 [![Vidos Logo](/docs/_astro/vidos-logo-long.CCvhBbmO.svg) Vidos](/docs/)

-   [Explanations](/docs/explanations/services/)
-   [References](/docs/reference/services/authorizer/)
-   [Tutorials](/docs/tutorials/services/verifier/)
-   [Guides](/docs/guides/management/instances/create/)

Search CtrlK

Cancel

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   [Trust Triangle](/docs/explanations/triangle-of-trust/)
-   Management
    
    -   [Overview](/docs/explanations/management/)
    -   [Configurations](/docs/explanations/management/configurations/)
    -   [Instances](/docs/explanations/management/instances/)
    -   [Regions](/docs/explanations/management/regions/)
    -   IAM
        
        -   [Overview](/docs/explanations/management/iam/)
        -   [API Keys](/docs/explanations/management/iam/api-keys/)
        -   [Policy Documents](/docs/explanations/management/iam/policy-documents/)
        -   [Scopes](/docs/explanations/management/iam/scopes/)
        -   [Service Instances](/docs/explanations/management/iam/service-instances/)
        -   [Service Roles](/docs/explanations/management/iam/service-roles/)
        
    
-   Services
    
    -   [Overview](/docs/explanations/services/)
    -   [Authorizer](/docs/explanations/services/authorizer/)
    -   [Gateway](/docs/explanations/services/gateway/)
    -   [Validator](/docs/explanations/services/validator/)
    -   [Verifier](/docs/explanations/services/verifier/)
    -   Resolver
        
        -   [Overview](/docs/explanations/services/resolver/)
        -   [DID Method Routing](/docs/explanations/services/resolver/did-method-routing/)
        
    
-   Standards
    
    -   DIF
        
        -   Presentation Exchange
            
            -   [Presentation Exchange](/docs/explanations/standards/dif/presentation-exchange/)
            -   [Input Descriptors](/docs/explanations/standards/dif/presentation-exchange/input-descriptors/)
            -   [Presentation Definition](/docs/explanations/standards/dif/presentation-exchange/presentation-definition/)
            -   [Presentation Submission](/docs/explanations/standards/dif/presentation-exchange/presentation-submission/)
            -   [Submission Requirements](/docs/explanations/standards/dif/presentation-exchange/submission-requirements/)
            
        
    -   OIDF
        
        -   DCQL
            
            -   [Digital Credential Query Language](/docs/explanations/standards/oidf/dcql/)
            -   [Claim Queries](/docs/explanations/standards/oidf/dcql/claim-queries/)
            -   [Credential Queries](/docs/explanations/standards/oidf/dcql/credential-queries/)
            -   [Credential Sets](/docs/explanations/standards/oidf/dcql/credential-sets/)
            -   [Trusted Authorities](/docs/explanations/standards/oidf/dcql/trusted-authorities/)
            
        -   OpenID4VP
            
            -   [OpenID4VP](/docs/explanations/standards/oidf/openid4vp/)
            -   [Authorization requests](/docs/explanations/standards/oidf/openid4vp/authorization-requests/)
            -   [Digital Credentials API](/docs/explanations/standards/oidf/openid4vp/digital-credentials-api/)
            -   [Flows and UX](/docs/explanations/standards/oidf/openid4vp/flows-and-ux/)
            -   [Metadata and trust](/docs/explanations/standards/oidf/openid4vp/metadata-and-trust/)
            -   [Responses](/docs/explanations/standards/oidf/openid4vp/responses/)
            -   [Security and validation](/docs/explanations/standards/oidf/openid4vp/security-and-validation/)
            
        
    -   W3C
        
        -   Decentralized Identifiers
            
            -   [Decentralized Identifiers (DIDs)](/docs/explanations/standards/w3c/decentralized-identifiers/)
            -   [Controller Documents](/docs/explanations/standards/w3c/decentralized-identifiers/controller-document/)
            -   [DID Documents](/docs/explanations/standards/w3c/decentralized-identifiers/documents/)
            -   [DID Methods](/docs/explanations/standards/w3c/decentralized-identifiers/methods/)
            -   [DID Resolution](/docs/explanations/standards/w3c/decentralized-identifiers/resolution/)
            -   [DID URL Dereferencing](/docs/explanations/standards/w3c/decentralized-identifiers/url-dereferencing/)
            -   [DID Use Cases](/docs/explanations/standards/w3c/decentralized-identifiers/use-cases/)
            -   [Verification Methods](/docs/explanations/standards/w3c/decentralized-identifiers/verification-methods/)
            
        -   Digital Credentials API
            
            -   [Digital Credentials API](/docs/explanations/standards/w3c/digital-credentials/)
            -   [Methods](/docs/explanations/standards/w3c/digital-credentials/api-methods/)
            -   [Permissions Policy](/docs/explanations/standards/w3c/digital-credentials/permissions-policy/)
            -   [Privacy and security](/docs/explanations/standards/w3c/digital-credentials/privacy-and-security/)
            -   [Protocol registry](/docs/explanations/standards/w3c/digital-credentials/protocol-registry/)
            
        -   Verifiable Credentials
            
            -   [Verifiable Credentials](/docs/explanations/standards/w3c/verifiable-credentials/)
            -   [Credential Schemas](/docs/explanations/standards/w3c/verifiable-credentials/credential-schema/)
            -   [Credential Status](/docs/explanations/standards/w3c/verifiable-credentials/credential-status/)
            -   [Issuers](/docs/explanations/standards/w3c/verifiable-credentials/issuer/)
            -   [Securing Mechanisms](/docs/explanations/standards/w3c/verifiable-credentials/securing-mechanisms/)
            -   [Credential Subjects](/docs/explanations/standards/w3c/verifiable-credentials/subject/)
            -   [Validity Period](/docs/explanations/standards/w3c/verifiable-credentials/validity-period/)
            -   [Verifiable Presentations](/docs/explanations/standards/w3c/verifiable-credentials/verifiable-presentations/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto   

-   Management
    
    -   IAM
        
        -   [Create Account](/docs/guides/management/iam/create-account/)
        -   [Create API Key](/docs/guides/management/iam/create-api-key/)
        -   [Setup MFA](/docs/guides/management/iam/setup-mfa/)
        
    -   Instances
        
        -   [Configure](/docs/guides/management/instances/configure/)
        -   [Create](/docs/guides/management/instances/create/)
        -   [Instance Logs](/docs/guides/management/instances/logs/)
        -   [Stop / Start](/docs/guides/management/instances/state/)
        
    
-   Services
    
    -   Resolver
        
        -   [Pick DID Method](/docs/guides/services/resolver/pick-w3c-did-method/)
        -   [Test](/docs/guides/services/resolver/test/)
        -   Configure
            
            -   [DID methods](/docs/guides/services/resolver/configure/did-method-support/)
            -   [Response type](/docs/guides/services/resolver/configure/response-type/)
            
        
    -   Verifier
        
        -   Configure
            
            -   [Expired Credentials](/docs/guides/services/verifier/configure/allow-expired-credentials/)
            
        -   Verify
            
            -   [SD-JWT VC](/docs/guides/services/verifier/verify/ietf-oauth-sd-jwt-vc/)
            -   [Setup](/docs/guides/services/verifier/verify/setup/)
            -   [W3C Verifiable Credential v1.1](/docs/guides/services/verifier/verify/w3c-vc-11/)
            -   [W3C Verifiable Presentation v1.1](/docs/guides/services/verifier/verify/w3c-vc-11-vp/)
            -   [W3C Verifiable Credential v2.0](/docs/guides/services/verifier/verify/w3c-vc-20/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Configuration
    
    -   [CORS](/docs/reference/configuration/cors/)
    -   [Service Instances](/docs/reference/configuration/service-instances/)
    -   [Service Roles](/docs/reference/configuration/service-roles/)
    
-   Errors
    
    -   [credential-query-evaluation](/docs/reference/errors/credential-query-evaluation/)
    -   [credential-query-format](/docs/reference/errors/credential-query-format/)
    -   [credential-query-unsupported](/docs/reference/errors/credential-query-unsupported/)
    -   [invalid-format](/docs/reference/errors/invalid-format/)
    -   [not-allowed-by-configuration](/docs/reference/errors/not-allowed-by-configuration/)
    -   [proof-cryptographic-error](/docs/reference/errors/proof-cryptographic-error/)
    -   [proof-resolve-issuer](/docs/reference/errors/proof-resolve-issuer/)
    -   [proof-unsupported-feature](/docs/reference/errors/proof-unsupported-feature/)
    -   [proof-verification-failed](/docs/reference/errors/proof-verification-failed/)
    -   [trusted-issuer-configuration-invalid](/docs/reference/errors/trusted-issuer-configuration-invalid/)
    -   [trusted-issuer-unsupported](/docs/reference/errors/trusted-issuer-unsupported/)
    -   [trusted-issuer-untrusted](/docs/reference/errors/trusted-issuer-untrusted/)
    -   [trusted-issuer-validation-error](/docs/reference/errors/trusted-issuer-validation-error/)
    -   [unexpected-error](/docs/reference/errors/unexpected-error/)
    -   [unsupported-format](/docs/reference/errors/unsupported-format/)
    
-   IAM
    
    -   [Policy Documents](/docs/reference/iam/policy-documents/)
    -   [Scopes](/docs/reference/iam/scopes/)
    
-   Services
    
    -   Authorizer
        
        -   [Overview](/docs/reference/services/authorizer/)
        -   [API](/docs/reference/services/authorizer/api/)
        -   [Configuration](/docs/reference/services/authorizer/configuration/)
        -   Policies
            
            -   [Policies](/docs/reference/services/authorizer/policies/)
            -   [Format](/docs/reference/services/authorizer/policies/format/)
            -   [Validate](/docs/reference/services/authorizer/policies/validate/)
            -   [Verify](/docs/reference/services/authorizer/policies/verify/)
            
        
    -   Gateway
        
        -   [Overview](/docs/reference/services/gateway/)
        -   [Configuration](/docs/reference/services/gateway/configuration/)
        
    -   Resolver
        
        -   [Overview](/docs/reference/services/resolver/)
        -   [Configuration](/docs/reference/services/resolver/configuration/)
        -   [Supported DID Methods](/docs/reference/services/resolver/supported-did-methods/)
        
    -   Validator
        
        -   [Overview](/docs/reference/services/validator/)
        -   [API](/docs/reference/services/validator/api/)
        -   [Configuration](/docs/reference/services/validator/configuration/)
        -   [Errors](/docs/reference/services/validator/errors/)
        -   [Standards](/docs/reference/services/validator/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/validator/policies/)
            -   [Credential Query](/docs/reference/services/validator/policies/credential-query/)
            -   [Credential Format](/docs/reference/services/validator/policies/format/)
            -   [Trusted Issuer](/docs/reference/services/validator/policies/trusted-issuer/)
            
        
    -   Verifier
        
        -   [Overview](/docs/reference/services/verifier/)
        -   [API](/docs/reference/services/verifier/api/)
        -   [Configuration](/docs/reference/services/verifier/configuration/)
        -   [Errors](/docs/reference/services/verifier/errors/)
        -   [Standards](/docs/reference/services/verifier/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/verifier/policies/)
            -   [Format](/docs/reference/services/verifier/policies/format/)
            -   [Not After](/docs/reference/services/verifier/policies/not-after/)
            -   [Not Before](/docs/reference/services/verifier/policies/not-before/)
            -   [Proof](/docs/reference/services/verifier/policies/proof/)
            -   [Schema](/docs/reference/services/verifier/policies/schema/)
            -   [Status](/docs/reference/services/verifier/policies/status/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Services
    
    -   Resolver
        
        -   [Create and Resolve](/docs/tutorials/services/resolver/create-and-resolve/)
        -   [DID URL Dereferencing](/docs/tutorials/services/resolver/did-url-dereferencing/)
        -   [Create and Resolve DIDs with Onyx](/docs/tutorials/services/resolver/onyx-create-did/)
        -   [Resolve with API Key](/docs/tutorials/services/resolver/resolve-via-api/)
        
    -   Verifier
        
        -   [Verify a Credential](/docs/tutorials/services/verifier/)
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [Supported Credential Types](#supported-credential-types)
-   [Certificate Source Configuration](#certificate-source-configuration)
    -   [PEM Certificate](#pem-certificate)
    -   [VICAL (Verifiable Issuer CA List)](#vical-verifiable-issuer-ca-list)
    -   [VICAL URL](#vical-url)
    -   [Predefined Tags](#predefined-tags)
-   [Trusted Issuer Validation Process](#trusted-issuer-validation-process)
-   [mDL Trusted Issuer Validation](#mdl-trusted-issuer-validation)
    -   [mDL Validation Process](#mdl-validation-process)
-   [IETF Digital Credential Validation](#ietf-digital-credential-validation)
    -   [IETF DC Validation Process](#ietf-dc-validation-process)
-   [VICAL Integration](#vical-integration)
    -   [VICAL Features](#vical-features)
    -   [VICAL URL Caching](#vical-url-caching)
-   [Error Handling](#error-handling)
-   [Configuration](#configuration)
    -   [Basic Configuration](#basic-configuration)
    -   [Advanced Configuration](#advanced-configuration)
-   [Credential Type Support Matrix](#credential-type-support-matrix)
-   [Troubleshooting](#troubleshooting)
    -   [Common Issues](#common-issues)

Ask ChatGPT View Markdown

## On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [Supported Credential Types](#supported-credential-types)
-   [Certificate Source Configuration](#certificate-source-configuration)
    -   [PEM Certificate](#pem-certificate)
    -   [VICAL (Verifiable Issuer CA List)](#vical-verifiable-issuer-ca-list)
    -   [VICAL URL](#vical-url)
    -   [Predefined Tags](#predefined-tags)
-   [Trusted Issuer Validation Process](#trusted-issuer-validation-process)
-   [mDL Trusted Issuer Validation](#mdl-trusted-issuer-validation)
    -   [mDL Validation Process](#mdl-validation-process)
-   [IETF Digital Credential Validation](#ietf-digital-credential-validation)
    -   [IETF DC Validation Process](#ietf-dc-validation-process)
-   [VICAL Integration](#vical-integration)
    -   [VICAL Features](#vical-features)
    -   [VICAL URL Caching](#vical-url-caching)
-   [Error Handling](#error-handling)
-   [Configuration](#configuration)
    -   [Basic Configuration](#basic-configuration)
    -   [Advanced Configuration](#advanced-configuration)
-   [Credential Type Support Matrix](#credential-type-support-matrix)
-   [Troubleshooting](#troubleshooting)
    -   [Common Issues](#common-issues)

# Trusted Issuer Validation Policy Reference

This reference documents the trusted issuer validation policy for the validator service. The trusted issuer policy validates that credentials are issued by trusted entities through certificate chain validation against configured root certificates.

## Policy Overview

[Section titled “Policy Overview”](#policy-overview)

The trusted issuer validation policy ensures that the issuers of verifiable credentials are trusted by verifying their certificate chains against a set of configured root certificates. This validation is crucial for establishing trust in the credential issuance process and preventing acceptance of credentials from untrusted sources.

## Supported Standards

[Section titled “Supported Standards”](#supported-standards)

The trusted issuer validation policy supports issuer validation across multiple credential standards:

Standard

Organization

Specification

Certificate Source

Validation Method

mDL (mso\_mdoc)

ISO

[ISO 18013-5](https://www.iso.org/standard/69084.html)

mDL Document

Certificate chain validation using Auth0 mDL verifier

IETF Digital Credentials

IETF

[SD-JWT Draft](https://www.ietf.org/archive/id/draft-ietf-oauth-sd-jwt-vc-13.html)

JWT x5c Header

X.509 certificate chain validation using Node Forge

VICAL (Verifiable Issuer CA List)

AAMVA

[VICAL Specification](https://www.aamva.org/getmedia/7a5b5bce-fa42-4b1e-b1ff-3c5e1ae51e2e/VICAL-Specification.pdf)

COSE-signed Certificate List

COSE signature verification and certificate extraction

## Supported Credential Types

[Section titled “Supported Credential Types”](#supported-credential-types)

The trusted issuer policy validates the following credential types:

Credential Type

Description

Certificate Location

Validation Library

mDL (mso\_mdoc)

Mobile driving license credentials

Embedded in mDL document

Auth0 mDL verifier

IETF Digital Credential

IETF SD-JWT-based digital credentials

JWT header x5c parameter

Node Forge X.509 library

## Certificate Source Configuration

[Section titled “Certificate Source Configuration”](#certificate-source-configuration)

The policy supports multiple methods for configuring trusted root certificates:

### PEM Certificate

[Section titled “PEM Certificate”](#pem-certificate)

Direct PEM-encoded certificate specification:

```
{    "type": "pem",    "pem": "-----BEGIN CERTIFICATE-----\nMIIBijCCAS+gAwIBAgIUQ..."}
```

### VICAL (Verifiable Issuer CA List)

[Section titled “VICAL (Verifiable Issuer CA List)”](#vical-verifiable-issuer-ca-list)

CBOR-encoded VICAL with trusted certificates for validation:

```
{    "type": "vical",    "cbor": "base64-encoded-vical-data",    "vicalTrustedCertificates": ["-----BEGIN CERTIFICATE-----\n..."]}
```

### VICAL URL

[Section titled “VICAL URL”](#vical-url)

URL-based VICAL resolution with caching:

```
{    "type": "vical-url",    "url": "https://example.com/vical",    "vicalTrustedCertificates": ["-----BEGIN CERTIFICATE-----\n..."]}
```

### Predefined Tags

[Section titled “Predefined Tags”](#predefined-tags)

Predefined certificate sets for common trust anchors:

```
{    "type": "predefined",    "tag": "vidos"}
```

**Available predefined tags:**

-   `vidos` - Vidos platform root certificates
-   `aamva` - AAMVA (American Association of Motor Vehicle Administrators) root certificates

## Trusted Issuer Validation Process

[Section titled “Trusted Issuer Validation Process”](#trusted-issuer-validation-process)

flowchart TD
    subgraph "Trusted Issuer Validation"
        Input\[Credential\] --> DetectType\[Detect Credential Type\]
        DetectType --> ResolveCerts\[Resolve Root Certificates\]
        ResolveCerts --> mDL{mDL?}
        ResolveCerts --> IETF{IETF DC?}

        mDL -->|Yes| mDLVerifier\[Auth0 mDL Verifier\]
        mDLVerifier --> mDLChainValidation\[Certificate Chain Validation\]
        mDLChainValidation --> mDLResult\[mDL Result\]

        IETF -->|Yes| ExtractX5C\[Extract x5c from JWT Header\]
        ExtractX5C --> CreateCAStore\[Create CA Store\]
        CreateCAStore --> ValidateChain\[Validate Certificate Chain\]
        ValidateChain --> IETFResult\[IETF DC Result\]

        mDL -->|No| NextMiddleware\[Next Middleware\]
        IETF -->|No| NextMiddleware
        NextMiddleware --> UnsupportedType\[Unsupported Type Error\]

        mDLResult --> Decision{Valid?}
        IETFResult --> Decision
        UnsupportedType --> Decision

        Decision -->|Yes| TrustedIssuer\[Trusted Issuer\]
        Decision -->|No| UntrustedIssuer\[Untrusted Issuer\]
    end

    subgraph "Certificate Resolution"
        PEM\[PEM Certificate\]
        VICAL\[VICAL CBOR\]
        VICALUrl\[VICAL URL\]
        Predefined\[Predefined Tags\]

        PEM --> ResolveCerts
        VICAL --> ResolveCerts
        VICALUrl --> ResolveCerts
        Predefined --> ResolveCerts
    end

    style Input fill:#f9f9f9,stroke:#333,stroke-width:1px
    style DetectType fill:#e1f5fe,stroke:#333,stroke-width:1px
    style ResolveCerts fill:#e1f5fe,stroke:#333,stroke-width:1px
    style mDL fill:#e1f5fe,stroke:#333,stroke-width:1px
    style IETF fill:#e1f5fe,stroke:#333,stroke-width:1px
    style mDLVerifier fill:#e8f5e8,stroke:#333,stroke-width:1px
    style mDLChainValidation fill:#e8f5e8,stroke:#333,stroke-width:1px
    style ExtractX5C fill:#fff3e0,stroke:#333,stroke-width:1px
    style CreateCAStore fill:#fff3e0,stroke:#333,stroke-width:1px
    style ValidateChain fill:#fff3e0,stroke:#333,stroke-width:1px
    style TrustedIssuer fill:#dcedc8,stroke:#333,stroke-width:1px
    style UntrustedIssuer fill:#ffcdd2,stroke:#333,stroke-width:1px
    style PEM fill:#f3e5f5,stroke:#333,stroke-width:1px
    style VICAL fill:#f3e5f5,stroke:#333,stroke-width:1px
    style VICALUrl fill:#f3e5f5,stroke:#333,stroke-width:1px
    style Predefined fill:#f3e5f5,stroke:#333,stroke-width:1px

When validating trusted issuers, the policy follows these steps:

1.  **Certificate resolution** - Resolves trusted root certificates from configured sources
2.  **Credential type detection** - Identifies the credential type for appropriate validation
3.  **Certificate extraction** - Extracts issuer certificates from the credential
4.  **Chain validation** - Validates the certificate chain against trusted roots
5.  **Result determination** - Returns validation results with detailed error information

## mDL Trusted Issuer Validation

[Section titled “mDL Trusted Issuer Validation”](#mdl-trusted-issuer-validation)

For mDL credentials, the policy:

1.  **Uses Auth0 mDL verifier** - Leverages the Auth0 mDL verification library
2.  **Validates certificate chain** - Checks the issuer authentication certificate chain
3.  **Focuses on issuer validation** - Specifically validates `ISSUER_AUTH.IssuerCertificateValidity`
4.  **Handles verification errors** - Converts verification failures to appropriate error types

### mDL Validation Process

[Section titled “mDL Validation Process”](#mdl-validation-process)

The mDL validation process checks:

-   Certificate chain integrity
-   Root certificate trust
-   Certificate validity periods
-   Issuer certificate compliance

## IETF Digital Credential Validation

[Section titled “IETF Digital Credential Validation”](#ietf-digital-credential-validation)

For IETF Digital Credentials, the policy:

1.  **Extracts x5c header** - Retrieves the certificate chain from the JWT header
2.  **Creates CA store** - Builds a certificate authority store from trusted roots
3.  **Validates leaf certificate** - Verifies the leaf certificate against trusted roots
4.  **Optimizes performance** - Pre-computes CA store and validates only necessary certificates

### IETF DC Validation Process

[Section titled “IETF DC Validation Process”](#ietf-dc-validation-process)

The IETF DC validation process:

-   Extracts certificates from the JWT `x5c` header parameter
-   Converts certificates to Node Forge format
-   Validates the certificate chain using Node Forge’s verification
-   Ensures the leaf certificate is trusted by the root certificates

## VICAL Integration

[Section titled “VICAL Integration”](#vical-integration)

VICAL (Verifiable Issuer CA List) support includes:

### VICAL Features

[Section titled “VICAL Features”](#vical-features)

-   **COSE signature verification** - Validates VICAL integrity using COSE signatures
-   **Certificate extraction** - Extracts certificates from VICAL payload
-   **Trusted certificate validation** - Validates VICAL against configured trusted certificates
-   **Caching support** - Caches VICAL data for performance optimization

### VICAL URL Caching

[Section titled “VICAL URL Caching”](#vical-url-caching)

-   **Automatic caching** - Caches VICAL data based on `nextUpdate` field
-   **Expiration handling** - Removes expired cache entries automatically
-   **Fallback caching** - Uses 24-hour default cache if `nextUpdate` is not provided
-   **Performance optimization** - Reduces network requests for frequently accessed VICALs

## Error Handling

[Section titled “Error Handling”](#error-handling)

The trusted issuer policy returns specific errors for various validation failures:

Error Type

Description

Typical Cause

Invalid Credential Issuer Certificate Chain Error

Certificate chain validation failed

Malformed certificates, broken chain, invalid signatures

Untrusted Credential Issuer Certificate Error

Certificate not trusted by root certificates

Certificate not issued by trusted CA, expired root certificate

Trusted Issuer Type Unsupported Error

Credential type not supported for trusted issuer validation

Unsupported credential format, missing certificate information

## Configuration

[Section titled “Configuration”](#configuration)

The trusted issuer validation policy offers comprehensive configuration options:

### Basic Configuration

[Section titled “Basic Configuration”](#basic-configuration)

```
{    "skip": false,    "trustedIssuerRootCertificates": [        {            "type": "predefined",            "tag": "vidos"        }    ]}
```

### Advanced Configuration

[Section titled “Advanced Configuration”](#advanced-configuration)

```
{    "skip": false,    "trustedIssuerRootCertificates": [        {            "type": "pem",            "pem": "-----BEGIN CERTIFICATE-----\n..."        },        {            "type": "vical-url",            "url": "https://example.com/vical",            "vicalTrustedCertificates": ["-----BEGIN CERTIFICATE-----\n..."]        },        {            "type": "predefined",            "tag": "aamva"        }    ]}
```

For detailed configuration options, parameters, and default values, see the [Validator Configuration Reference](/docs/reference/services/validator/configuration/#trustedissuer).

## Credential Type Support Matrix

[Section titled “Credential Type Support Matrix”](#credential-type-support-matrix)

Credential Format

Supported

Certificate Source

Validation Method

Notes

mDL (mso\_mdoc)

✅

mDL Document

Auth0 mDL Verifier

Full certificate chain validation

IETF SD-JWT DC

✅

JWT x5c Header

Node Forge

X.509 certificate chain validation

W3C VC (JSON-LD)

❌

N/A

N/A

Certificate-based validation not supported

JWT VC

❌

N/A

N/A

Certificate-based validation not supported

Tip

The trusted issuer policy is essential for establishing trust in credential issuance. Use it in combination with other validation policies to ensure comprehensive credential verification, especially in high-security environments where issuer trust is critical.

## Troubleshooting

[Section titled “Troubleshooting”](#troubleshooting)

### Common Issues

[Section titled “Common Issues”](#common-issues)

1.  **Certificate chain validation failures**
    
    -   Check certificate validity periods
    -   Verify certificate chain completeness
    -   Ensure trusted root certificates are current
2.  **VICAL resolution errors**
    
    -   Verify VICAL URL accessibility
    -   Check VICAL trusted certificate configuration
    -   Validate VICAL signature integrity
3.  **Unsupported credential types**
    
    -   Ensure credential format is supported
    -   Check certificate information availability
    -   Verify credential parsing success

[Previous  
Credential Format](/docs/reference/services/validator/policies/format/) [Next  
Overview](/docs/reference/services/verifier/)
```
```

```
Tool: webfetch

**Input:**
```json
{
  "format": "markdown",
  "url": "https://vidos.id/docs/reference/services/authorizer/policies/validate/"
}
```
**Output:**
```
Validate Policy Reference | Vidos      [Skip to content](#_top)

 [![Vidos Logo](/docs/_astro/vidos-logo-long.CCvhBbmO.svg) Vidos](/docs/)

-   [Explanations](/docs/explanations/services/)
-   [References](/docs/reference/services/authorizer/)
-   [Tutorials](/docs/tutorials/services/verifier/)
-   [Guides](/docs/guides/management/instances/create/)

Search CtrlK

Cancel

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   [Trust Triangle](/docs/explanations/triangle-of-trust/)
-   Management
    
    -   [Overview](/docs/explanations/management/)
    -   [Configurations](/docs/explanations/management/configurations/)
    -   [Instances](/docs/explanations/management/instances/)
    -   [Regions](/docs/explanations/management/regions/)
    -   IAM
        
        -   [Overview](/docs/explanations/management/iam/)
        -   [API Keys](/docs/explanations/management/iam/api-keys/)
        -   [Policy Documents](/docs/explanations/management/iam/policy-documents/)
        -   [Scopes](/docs/explanations/management/iam/scopes/)
        -   [Service Instances](/docs/explanations/management/iam/service-instances/)
        -   [Service Roles](/docs/explanations/management/iam/service-roles/)
        
    
-   Services
    
    -   [Overview](/docs/explanations/services/)
    -   [Authorizer](/docs/explanations/services/authorizer/)
    -   [Gateway](/docs/explanations/services/gateway/)
    -   [Validator](/docs/explanations/services/validator/)
    -   [Verifier](/docs/explanations/services/verifier/)
    -   Resolver
        
        -   [Overview](/docs/explanations/services/resolver/)
        -   [DID Method Routing](/docs/explanations/services/resolver/did-method-routing/)
        
    
-   Standards
    
    -   DIF
        
        -   Presentation Exchange
            
            -   [Presentation Exchange](/docs/explanations/standards/dif/presentation-exchange/)
            -   [Input Descriptors](/docs/explanations/standards/dif/presentation-exchange/input-descriptors/)
            -   [Presentation Definition](/docs/explanations/standards/dif/presentation-exchange/presentation-definition/)
            -   [Presentation Submission](/docs/explanations/standards/dif/presentation-exchange/presentation-submission/)
            -   [Submission Requirements](/docs/explanations/standards/dif/presentation-exchange/submission-requirements/)
            
        
    -   OIDF
        
        -   DCQL
            
            -   [Digital Credential Query Language](/docs/explanations/standards/oidf/dcql/)
            -   [Claim Queries](/docs/explanations/standards/oidf/dcql/claim-queries/)
            -   [Credential Queries](/docs/explanations/standards/oidf/dcql/credential-queries/)
            -   [Credential Sets](/docs/explanations/standards/oidf/dcql/credential-sets/)
            -   [Trusted Authorities](/docs/explanations/standards/oidf/dcql/trusted-authorities/)
            
        -   OpenID4VP
            
            -   [OpenID4VP](/docs/explanations/standards/oidf/openid4vp/)
            -   [Authorization requests](/docs/explanations/standards/oidf/openid4vp/authorization-requests/)
            -   [Digital Credentials API](/docs/explanations/standards/oidf/openid4vp/digital-credentials-api/)
            -   [Flows and UX](/docs/explanations/standards/oidf/openid4vp/flows-and-ux/)
            -   [Metadata and trust](/docs/explanations/standards/oidf/openid4vp/metadata-and-trust/)
            -   [Responses](/docs/explanations/standards/oidf/openid4vp/responses/)
            -   [Security and validation](/docs/explanations/standards/oidf/openid4vp/security-and-validation/)
            
        
    -   W3C
        
        -   Decentralized Identifiers
            
            -   [Decentralized Identifiers (DIDs)](/docs/explanations/standards/w3c/decentralized-identifiers/)
            -   [Controller Documents](/docs/explanations/standards/w3c/decentralized-identifiers/controller-document/)
            -   [DID Documents](/docs/explanations/standards/w3c/decentralized-identifiers/documents/)
            -   [DID Methods](/docs/explanations/standards/w3c/decentralized-identifiers/methods/)
            -   [DID Resolution](/docs/explanations/standards/w3c/decentralized-identifiers/resolution/)
            -   [DID URL Dereferencing](/docs/explanations/standards/w3c/decentralized-identifiers/url-dereferencing/)
            -   [DID Use Cases](/docs/explanations/standards/w3c/decentralized-identifiers/use-cases/)
            -   [Verification Methods](/docs/explanations/standards/w3c/decentralized-identifiers/verification-methods/)
            
        -   Digital Credentials API
            
            -   [Digital Credentials API](/docs/explanations/standards/w3c/digital-credentials/)
            -   [Methods](/docs/explanations/standards/w3c/digital-credentials/api-methods/)
            -   [Permissions Policy](/docs/explanations/standards/w3c/digital-credentials/permissions-policy/)
            -   [Privacy and security](/docs/explanations/standards/w3c/digital-credentials/privacy-and-security/)
            -   [Protocol registry](/docs/explanations/standards/w3c/digital-credentials/protocol-registry/)
            
        -   Verifiable Credentials
            
            -   [Verifiable Credentials](/docs/explanations/standards/w3c/verifiable-credentials/)
            -   [Credential Schemas](/docs/explanations/standards/w3c/verifiable-credentials/credential-schema/)
            -   [Credential Status](/docs/explanations/standards/w3c/verifiable-credentials/credential-status/)
            -   [Issuers](/docs/explanations/standards/w3c/verifiable-credentials/issuer/)
            -   [Securing Mechanisms](/docs/explanations/standards/w3c/verifiable-credentials/securing-mechanisms/)
            -   [Credential Subjects](/docs/explanations/standards/w3c/verifiable-credentials/subject/)
            -   [Validity Period](/docs/explanations/standards/w3c/verifiable-credentials/validity-period/)
            -   [Verifiable Presentations](/docs/explanations/standards/w3c/verifiable-credentials/verifiable-presentations/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto   

-   Management
    
    -   IAM
        
        -   [Create Account](/docs/guides/management/iam/create-account/)
        -   [Create API Key](/docs/guides/management/iam/create-api-key/)
        -   [Setup MFA](/docs/guides/management/iam/setup-mfa/)
        
    -   Instances
        
        -   [Configure](/docs/guides/management/instances/configure/)
        -   [Create](/docs/guides/management/instances/create/)
        -   [Instance Logs](/docs/guides/management/instances/logs/)
        -   [Stop / Start](/docs/guides/management/instances/state/)
        
    
-   Services
    
    -   Resolver
        
        -   [Pick DID Method](/docs/guides/services/resolver/pick-w3c-did-method/)
        -   [Test](/docs/guides/services/resolver/test/)
        -   Configure
            
            -   [DID methods](/docs/guides/services/resolver/configure/did-method-support/)
            -   [Response type](/docs/guides/services/resolver/configure/response-type/)
            
        
    -   Verifier
        
        -   Configure
            
            -   [Expired Credentials](/docs/guides/services/verifier/configure/allow-expired-credentials/)
            
        -   Verify
            
            -   [SD-JWT VC](/docs/guides/services/verifier/verify/ietf-oauth-sd-jwt-vc/)
            -   [Setup](/docs/guides/services/verifier/verify/setup/)
            -   [W3C Verifiable Credential v1.1](/docs/guides/services/verifier/verify/w3c-vc-11/)
            -   [W3C Verifiable Presentation v1.1](/docs/guides/services/verifier/verify/w3c-vc-11-vp/)
            -   [W3C Verifiable Credential v2.0](/docs/guides/services/verifier/verify/w3c-vc-20/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Configuration
    
    -   [CORS](/docs/reference/configuration/cors/)
    -   [Service Instances](/docs/reference/configuration/service-instances/)
    -   [Service Roles](/docs/reference/configuration/service-roles/)
    
-   Errors
    
    -   [credential-query-evaluation](/docs/reference/errors/credential-query-evaluation/)
    -   [credential-query-format](/docs/reference/errors/credential-query-format/)
    -   [credential-query-unsupported](/docs/reference/errors/credential-query-unsupported/)
    -   [invalid-format](/docs/reference/errors/invalid-format/)
    -   [not-allowed-by-configuration](/docs/reference/errors/not-allowed-by-configuration/)
    -   [proof-cryptographic-error](/docs/reference/errors/proof-cryptographic-error/)
    -   [proof-resolve-issuer](/docs/reference/errors/proof-resolve-issuer/)
    -   [proof-unsupported-feature](/docs/reference/errors/proof-unsupported-feature/)
    -   [proof-verification-failed](/docs/reference/errors/proof-verification-failed/)
    -   [trusted-issuer-configuration-invalid](/docs/reference/errors/trusted-issuer-configuration-invalid/)
    -   [trusted-issuer-unsupported](/docs/reference/errors/trusted-issuer-unsupported/)
    -   [trusted-issuer-untrusted](/docs/reference/errors/trusted-issuer-untrusted/)
    -   [trusted-issuer-validation-error](/docs/reference/errors/trusted-issuer-validation-error/)
    -   [unexpected-error](/docs/reference/errors/unexpected-error/)
    -   [unsupported-format](/docs/reference/errors/unsupported-format/)
    
-   IAM
    
    -   [Policy Documents](/docs/reference/iam/policy-documents/)
    -   [Scopes](/docs/reference/iam/scopes/)
    
-   Services
    
    -   Authorizer
        
        -   [Overview](/docs/reference/services/authorizer/)
        -   [API](/docs/reference/services/authorizer/api/)
        -   [Configuration](/docs/reference/services/authorizer/configuration/)
        -   Policies
            
            -   [Policies](/docs/reference/services/authorizer/policies/)
            -   [Format](/docs/reference/services/authorizer/policies/format/)
            -   [Validate](/docs/reference/services/authorizer/policies/validate/)
            -   [Verify](/docs/reference/services/authorizer/policies/verify/)
            
        
    -   Gateway
        
        -   [Overview](/docs/reference/services/gateway/)
        -   [Configuration](/docs/reference/services/gateway/configuration/)
        
    -   Resolver
        
        -   [Overview](/docs/reference/services/resolver/)
        -   [Configuration](/docs/reference/services/resolver/configuration/)
        -   [Supported DID Methods](/docs/reference/services/resolver/supported-did-methods/)
        
    -   Validator
        
        -   [Overview](/docs/reference/services/validator/)
        -   [API](/docs/reference/services/validator/api/)
        -   [Configuration](/docs/reference/services/validator/configuration/)
        -   [Errors](/docs/reference/services/validator/errors/)
        -   [Standards](/docs/reference/services/validator/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/validator/policies/)
            -   [Credential Query](/docs/reference/services/validator/policies/credential-query/)
            -   [Credential Format](/docs/reference/services/validator/policies/format/)
            -   [Trusted Issuer](/docs/reference/services/validator/policies/trusted-issuer/)
            
        
    -   Verifier
        
        -   [Overview](/docs/reference/services/verifier/)
        -   [API](/docs/reference/services/verifier/api/)
        -   [Configuration](/docs/reference/services/verifier/configuration/)
        -   [Errors](/docs/reference/services/verifier/errors/)
        -   [Standards](/docs/reference/services/verifier/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/verifier/policies/)
            -   [Format](/docs/reference/services/verifier/policies/format/)
            -   [Not After](/docs/reference/services/verifier/policies/not-after/)
            -   [Not Before](/docs/reference/services/verifier/policies/not-before/)
            -   [Proof](/docs/reference/services/verifier/policies/proof/)
            -   [Schema](/docs/reference/services/verifier/policies/schema/)
            -   [Status](/docs/reference/services/verifier/policies/status/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Services
    
    -   Resolver
        
        -   [Create and Resolve](/docs/tutorials/services/resolver/create-and-resolve/)
        -   [DID URL Dereferencing](/docs/tutorials/services/resolver/did-url-dereferencing/)
        -   [Create and Resolve DIDs with Onyx](/docs/tutorials/services/resolver/onyx-create-did/)
        -   [Resolve with API Key](/docs/tutorials/services/resolver/resolve-via-api/)
        
    -   Verifier
        
        -   [Verify a Credential](/docs/tutorials/services/verifier/)
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Validation Types](#supported-validation-types)
-   [Validation Process](#validation-process)
-   [Presentation Validation Request](#presentation-validation-request)
    -   [Request Structure](#request-structure)
    -   [Request Components](#request-components)
    -   [Data Processing](#data-processing)
-   [Response Handling](#response-handling)
    -   [Successful Validation (200)](#successful-validation-200)
    -   [Validation Errors (422)](#validation-errors-422)
    -   [Unexpected Errors (Other Status Codes)](#unexpected-errors-other-status-codes)
-   [Configuration](#configuration)
-   [Additional Resources](#additional-resources)

Ask ChatGPT View Markdown

## On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Validation Types](#supported-validation-types)
-   [Validation Process](#validation-process)
-   [Presentation Validation Request](#presentation-validation-request)
    -   [Request Structure](#request-structure)
    -   [Request Components](#request-components)
    -   [Data Processing](#data-processing)
-   [Response Handling](#response-handling)
    -   [Successful Validation (200)](#successful-validation-200)
    -   [Validation Errors (422)](#validation-errors-422)
    -   [Unexpected Errors (Other Status Codes)](#unexpected-errors-other-status-codes)
-   [Configuration](#configuration)
-   [Additional Resources](#additional-resources)

# Validate Policy Reference

This reference documents the validate policy for the authorizer service. The validate policy delegates credential and presentation validation to the configured validator service, handling the coordination and result processing within the authorization workflow.

## Policy Overview

[Section titled “Policy Overview”](#policy-overview)

The validate policy is a critical component of the authorization workflow that delegates structural and content validation to the configured validator service. Rather than performing validation directly, the authorizer acts as a coordinator, sending presentation data to the validator service and processing the results within the authorization context.

The policy’s primary responsibilities include:

-   **Service delegation**: Routing validation requests to the configured validator service instance
-   **Presentation processing**: Formatting and sending presentation data through the validator’s API
-   **Result integration**: Converting validator service responses into authorizer policy results
-   **Error translation**: Mapping validator service errors to authorizer-specific error types

For details on the actual validation processes and policies, see the [Validator Service Documentation](/docs/reference/services/validator/).

## Supported Validation Types

[Section titled “Supported Validation Types”](#supported-validation-types)

The validate policy delegates validation of presentations using the DIF Presentation Exchange standard:

Validation Type

Description

Validator Endpoint

Authorizer Handling

**DIF Presentation Exchange**

Validates VP tokens against presentation definitions

`/validate`

Formats request and processes validator results

The authorizer specifically uses the `DIF.PresentationExchange` validation type, which includes:

-   **VP Token validation**: Structural validation of the verifiable presentation
-   **Presentation Definition matching**: Ensures the VP satisfies the presentation definition requirements
-   **Presentation Submission verification**: Validates the presentation submission structure and mapping

For details on how the validator service performs these validation processes, see the [Validator Service Policies](/docs/reference/services/validator/policies/).

## Validation Process

[Section titled “Validation Process”](#validation-process)

flowchart TD
    subgraph "Validate Policy Processing"
        Input\[Authorization Request\] --> CheckSkip{Skip Validate?}
        CheckSkip -->|Yes| Skip\[Skip Validation\]
        CheckSkip -->|No| CreateClient\[Create Validator Client\]

        CreateClient --> FormatRequest\[Format Validation Request\]
        FormatRequest --> SendRequest\[Send to Validator Service\]

        SendRequest --> CheckResponse{Response Status?}

        CheckResponse -->|200| Success\[Validation Success\]
        CheckResponse -->|422| ValidationError\[Validation Error\]
        CheckResponse -->|Other| UnexpectedError\[Unexpected Error\]

        Success --> ProcessResults\[Process Validator Results\]
        ValidationError --> ProcessValidationError\[Process Validation Error\]
        UnexpectedError --> ProcessUnexpectedError\[Process Unexpected Error\]

        ProcessResults --> AddAuthorizerResult\[Add Authorizer Result\]
        ProcessValidationError --> AddAuthorizerError\[Add Authorizer Error\]
        ProcessUnexpectedError --> AddAuthorizerError

        AddAuthorizerResult --> CombineResults\[Combine Results\]
        AddAuthorizerError --> CombineResults
        Skip --> CombineResults

        CombineResults --> PolicyResult\[Policy Result\]
    end

    subgraph "Validator Service Integration"
        ValidatorClient\[Validator Service Client\] -.-> |"/validate"| SendRequest
    end

    style Input fill:#f9f9f9,stroke:#333,stroke-width:1px
    style CheckSkip fill:#e1f5fe,stroke:#333,stroke-width:1px
    style FormatRequest fill:#e8f5e8,stroke:#333,stroke-width:1px
    style SendRequest fill:#e8f5e8,stroke:#333,stroke-width:1px
    style Success fill:#dcedc8,stroke:#333,stroke-width:1px
    style ValidationError fill:#ffcdd2,stroke:#333,stroke-width:1px
    style UnexpectedError fill:#ffcdd2,stroke:#333,stroke-width:1px
    style Skip fill:#f3e5f5,stroke:#333,stroke-width:1px
    style ValidatorClient fill:#fff9c4,stroke:#333,stroke-width:1px

When processing validation requests, the policy follows these steps:

1.  **Configuration check** - Determines if validation should be skipped based on policy configuration
2.  **Service client creation** - Creates a validator service client using configured service instance reference
3.  **Request formatting** - Formats the presentation data for the validator service API
4.  **Service delegation** - Sends the validation request to the configured validator service
5.  **Response processing** - Handles different response types from the validator service
6.  **Result aggregation** - Combines validator results with authorizer-specific results
7.  **Error handling** - Converts validator service errors to appropriate authorizer policy errors

## Presentation Validation Request

[Section titled “Presentation Validation Request”](#presentation-validation-request)

The validate policy formats presentation data for the validator service’s `/validate` endpoint:

### Request Structure

[Section titled “Request Structure”](#request-structure)

The authorizer sends a structured validation request containing:

```
{    "type": "DIF.PresentationExchange",    "vp_token": "original_vp_token_string",    "presentation_definition": {        /* presentation definition object */    },    "presentation_submission": {        /* parsed presentation submission */    }}
```

### Request Components

[Section titled “Request Components”](#request-components)

Component

Description

Source

Purpose

**type**

Validation type identifier

Fixed value: `"DIF.PresentationExchange"`

Specifies the validation standard to use

**vp\_token**

Original VP token string

Authorization request

The presentation to be validated

**presentation\_definition**

Presentation definition object

Authorization request

Defines the requirements for the presentation

**presentation\_submission**

Parsed presentation submission

Authorization request (parsed)

Maps presentation contents to definition

### Data Processing

[Section titled “Data Processing”](#data-processing)

1.  **VP Token extraction** - Uses the original VP token string from the parsed authorization details
2.  **Presentation Definition forwarding** - Passes through the presentation definition as received
3.  **Presentation Submission parsing** - Uses the pre-parsed presentation submission object
4.  **Type specification** - Always specifies `DIF.PresentationExchange` as the validation type

## Response Handling

[Section titled “Response Handling”](#response-handling)

The validate policy handles different validator service response scenarios:

### Successful Validation (200)

[Section titled “Successful Validation (200)”](#successful-validation-200)

Aspect

Handling

Result

**Validator Results**

Returns all validator service results directly

Pass-through detailed validation results

**Authorizer Result**

Adds successful authorizer policy result with presentation submission data

Includes parsed presentation submission

**Data Preservation**

Preserves presentation submission for downstream processing

Enables further authorization processing

### Validation Errors (422)

[Section titled “Validation Errors (422)”](#validation-errors-422)

Aspect

Handling

Result

**Validator Results**

Returns all validator service error results

Detailed validation failure information

**Authorizer Error**

Adds `validate-failed` error from authorizer

Clear indication of validation failure

**Error Aggregation**

Combines validator and authorizer error information

Comprehensive error reporting

### Unexpected Errors (Other Status Codes)

[Section titled “Unexpected Errors (Other Status Codes)”](#unexpected-errors-other-status-codes)

Aspect

Handling

Result

**Error Creation**

Creates `unexpected-validate-error`

Generic error for unexpected scenarios

**Error Logging**

Logs unexpected errors for system monitoring

System administrator visibility

**Graceful Degradation**

Provides meaningful error response

Prevents system failures

## Configuration

[Section titled “Configuration”](#configuration)

The validate policy is configured through the authorizer service configuration. For complete configuration options, parameters, and examples, see the [Authorizer Configuration Reference](/docs/reference/services/authorizer/configuration#validate).

Key configuration aspects:

-   **skip**: Controls whether validation is performed
-   **validator**: Specifies which validator service instance to use

For details on how the validator service performs structural and content validation, see the [Validator Service Documentation](/docs/reference/services/validator/) and [Validator Configuration Reference](/docs/reference/services/validator/configuration/).

## Additional Resources

[Section titled “Additional Resources”](#additional-resources)

-   [Authorizer Configuration Reference](/docs/reference/services/authorizer/configuration/)
-   [Validator Service Documentation](/docs/reference/services/validator/) - For details on validation processes and logic
-   [Validator Configuration Reference](/docs/reference/services/validator/configuration/) - For validator service configuration options
-   [Validator Service Policies](/docs/reference/services/validator/policies/) - For detailed validation policy documentation
-   [DIF Presentation Exchange](https://identity.foundation/presentation-exchange/) - Core validation standard
-   [W3C Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/)

[Previous  
Format](/docs/reference/services/authorizer/policies/format/) [Next  
Verify](/docs/reference/services/authorizer/policies/verify/)
```
```

```
Tool: webfetch

**Input:**
```json
{
  "format": "markdown",
  "url": "https://vidos.id/docs/reference/services/authorizer/policies/verify/"
}
```
**Output:**
```
Verify Policy Reference | Vidos      [Skip to content](#_top)

 [![Vidos Logo](/docs/_astro/vidos-logo-long.CCvhBbmO.svg) Vidos](/docs/)

-   [Explanations](/docs/explanations/services/)
-   [References](/docs/reference/services/authorizer/)
-   [Tutorials](/docs/tutorials/services/verifier/)
-   [Guides](/docs/guides/management/instances/create/)

Search CtrlK

Cancel

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   [Trust Triangle](/docs/explanations/triangle-of-trust/)
-   Management
    
    -   [Overview](/docs/explanations/management/)
    -   [Configurations](/docs/explanations/management/configurations/)
    -   [Instances](/docs/explanations/management/instances/)
    -   [Regions](/docs/explanations/management/regions/)
    -   IAM
        
        -   [Overview](/docs/explanations/management/iam/)
        -   [API Keys](/docs/explanations/management/iam/api-keys/)
        -   [Policy Documents](/docs/explanations/management/iam/policy-documents/)
        -   [Scopes](/docs/explanations/management/iam/scopes/)
        -   [Service Instances](/docs/explanations/management/iam/service-instances/)
        -   [Service Roles](/docs/explanations/management/iam/service-roles/)
        
    
-   Services
    
    -   [Overview](/docs/explanations/services/)
    -   [Authorizer](/docs/explanations/services/authorizer/)
    -   [Gateway](/docs/explanations/services/gateway/)
    -   [Validator](/docs/explanations/services/validator/)
    -   [Verifier](/docs/explanations/services/verifier/)
    -   Resolver
        
        -   [Overview](/docs/explanations/services/resolver/)
        -   [DID Method Routing](/docs/explanations/services/resolver/did-method-routing/)
        
    
-   Standards
    
    -   DIF
        
        -   Presentation Exchange
            
            -   [Presentation Exchange](/docs/explanations/standards/dif/presentation-exchange/)
            -   [Input Descriptors](/docs/explanations/standards/dif/presentation-exchange/input-descriptors/)
            -   [Presentation Definition](/docs/explanations/standards/dif/presentation-exchange/presentation-definition/)
            -   [Presentation Submission](/docs/explanations/standards/dif/presentation-exchange/presentation-submission/)
            -   [Submission Requirements](/docs/explanations/standards/dif/presentation-exchange/submission-requirements/)
            
        
    -   OIDF
        
        -   DCQL
            
            -   [Digital Credential Query Language](/docs/explanations/standards/oidf/dcql/)
            -   [Claim Queries](/docs/explanations/standards/oidf/dcql/claim-queries/)
            -   [Credential Queries](/docs/explanations/standards/oidf/dcql/credential-queries/)
            -   [Credential Sets](/docs/explanations/standards/oidf/dcql/credential-sets/)
            -   [Trusted Authorities](/docs/explanations/standards/oidf/dcql/trusted-authorities/)
            
        -   OpenID4VP
            
            -   [OpenID4VP](/docs/explanations/standards/oidf/openid4vp/)
            -   [Authorization requests](/docs/explanations/standards/oidf/openid4vp/authorization-requests/)
            -   [Digital Credentials API](/docs/explanations/standards/oidf/openid4vp/digital-credentials-api/)
            -   [Flows and UX](/docs/explanations/standards/oidf/openid4vp/flows-and-ux/)
            -   [Metadata and trust](/docs/explanations/standards/oidf/openid4vp/metadata-and-trust/)
            -   [Responses](/docs/explanations/standards/oidf/openid4vp/responses/)
            -   [Security and validation](/docs/explanations/standards/oidf/openid4vp/security-and-validation/)
            
        
    -   W3C
        
        -   Decentralized Identifiers
            
            -   [Decentralized Identifiers (DIDs)](/docs/explanations/standards/w3c/decentralized-identifiers/)
            -   [Controller Documents](/docs/explanations/standards/w3c/decentralized-identifiers/controller-document/)
            -   [DID Documents](/docs/explanations/standards/w3c/decentralized-identifiers/documents/)
            -   [DID Methods](/docs/explanations/standards/w3c/decentralized-identifiers/methods/)
            -   [DID Resolution](/docs/explanations/standards/w3c/decentralized-identifiers/resolution/)
            -   [DID URL Dereferencing](/docs/explanations/standards/w3c/decentralized-identifiers/url-dereferencing/)
            -   [DID Use Cases](/docs/explanations/standards/w3c/decentralized-identifiers/use-cases/)
            -   [Verification Methods](/docs/explanations/standards/w3c/decentralized-identifiers/verification-methods/)
            
        -   Digital Credentials API
            
            -   [Digital Credentials API](/docs/explanations/standards/w3c/digital-credentials/)
            -   [Methods](/docs/explanations/standards/w3c/digital-credentials/api-methods/)
            -   [Permissions Policy](/docs/explanations/standards/w3c/digital-credentials/permissions-policy/)
            -   [Privacy and security](/docs/explanations/standards/w3c/digital-credentials/privacy-and-security/)
            -   [Protocol registry](/docs/explanations/standards/w3c/digital-credentials/protocol-registry/)
            
        -   Verifiable Credentials
            
            -   [Verifiable Credentials](/docs/explanations/standards/w3c/verifiable-credentials/)
            -   [Credential Schemas](/docs/explanations/standards/w3c/verifiable-credentials/credential-schema/)
            -   [Credential Status](/docs/explanations/standards/w3c/verifiable-credentials/credential-status/)
            -   [Issuers](/docs/explanations/standards/w3c/verifiable-credentials/issuer/)
            -   [Securing Mechanisms](/docs/explanations/standards/w3c/verifiable-credentials/securing-mechanisms/)
            -   [Credential Subjects](/docs/explanations/standards/w3c/verifiable-credentials/subject/)
            -   [Validity Period](/docs/explanations/standards/w3c/verifiable-credentials/validity-period/)
            -   [Verifiable Presentations](/docs/explanations/standards/w3c/verifiable-credentials/verifiable-presentations/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto   

-   Management
    
    -   IAM
        
        -   [Create Account](/docs/guides/management/iam/create-account/)
        -   [Create API Key](/docs/guides/management/iam/create-api-key/)
        -   [Setup MFA](/docs/guides/management/iam/setup-mfa/)
        
    -   Instances
        
        -   [Configure](/docs/guides/management/instances/configure/)
        -   [Create](/docs/guides/management/instances/create/)
        -   [Instance Logs](/docs/guides/management/instances/logs/)
        -   [Stop / Start](/docs/guides/management/instances/state/)
        
    
-   Services
    
    -   Resolver
        
        -   [Pick DID Method](/docs/guides/services/resolver/pick-w3c-did-method/)
        -   [Test](/docs/guides/services/resolver/test/)
        -   Configure
            
            -   [DID methods](/docs/guides/services/resolver/configure/did-method-support/)
            -   [Response type](/docs/guides/services/resolver/configure/response-type/)
            
        
    -   Verifier
        
        -   Configure
            
            -   [Expired Credentials](/docs/guides/services/verifier/configure/allow-expired-credentials/)
            
        -   Verify
            
            -   [SD-JWT VC](/docs/guides/services/verifier/verify/ietf-oauth-sd-jwt-vc/)
            -   [Setup](/docs/guides/services/verifier/verify/setup/)
            -   [W3C Verifiable Credential v1.1](/docs/guides/services/verifier/verify/w3c-vc-11/)
            -   [W3C Verifiable Presentation v1.1](/docs/guides/services/verifier/verify/w3c-vc-11-vp/)
            -   [W3C Verifiable Credential v2.0](/docs/guides/services/verifier/verify/w3c-vc-20/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Configuration
    
    -   [CORS](/docs/reference/configuration/cors/)
    -   [Service Instances](/docs/reference/configuration/service-instances/)
    -   [Service Roles](/docs/reference/configuration/service-roles/)
    
-   Errors
    
    -   [credential-query-evaluation](/docs/reference/errors/credential-query-evaluation/)
    -   [credential-query-format](/docs/reference/errors/credential-query-format/)
    -   [credential-query-unsupported](/docs/reference/errors/credential-query-unsupported/)
    -   [invalid-format](/docs/reference/errors/invalid-format/)
    -   [not-allowed-by-configuration](/docs/reference/errors/not-allowed-by-configuration/)
    -   [proof-cryptographic-error](/docs/reference/errors/proof-cryptographic-error/)
    -   [proof-resolve-issuer](/docs/reference/errors/proof-resolve-issuer/)
    -   [proof-unsupported-feature](/docs/reference/errors/proof-unsupported-feature/)
    -   [proof-verification-failed](/docs/reference/errors/proof-verification-failed/)
    -   [trusted-issuer-configuration-invalid](/docs/reference/errors/trusted-issuer-configuration-invalid/)
    -   [trusted-issuer-unsupported](/docs/reference/errors/trusted-issuer-unsupported/)
    -   [trusted-issuer-untrusted](/docs/reference/errors/trusted-issuer-untrusted/)
    -   [trusted-issuer-validation-error](/docs/reference/errors/trusted-issuer-validation-error/)
    -   [unexpected-error](/docs/reference/errors/unexpected-error/)
    -   [unsupported-format](/docs/reference/errors/unsupported-format/)
    
-   IAM
    
    -   [Policy Documents](/docs/reference/iam/policy-documents/)
    -   [Scopes](/docs/reference/iam/scopes/)
    
-   Services
    
    -   Authorizer
        
        -   [Overview](/docs/reference/services/authorizer/)
        -   [API](/docs/reference/services/authorizer/api/)
        -   [Configuration](/docs/reference/services/authorizer/configuration/)
        -   Policies
            
            -   [Policies](/docs/reference/services/authorizer/policies/)
            -   [Format](/docs/reference/services/authorizer/policies/format/)
            -   [Validate](/docs/reference/services/authorizer/policies/validate/)
            -   [Verify](/docs/reference/services/authorizer/policies/verify/)
            
        
    -   Gateway
        
        -   [Overview](/docs/reference/services/gateway/)
        -   [Configuration](/docs/reference/services/gateway/configuration/)
        
    -   Resolver
        
        -   [Overview](/docs/reference/services/resolver/)
        -   [Configuration](/docs/reference/services/resolver/configuration/)
        -   [Supported DID Methods](/docs/reference/services/resolver/supported-did-methods/)
        
    -   Validator
        
        -   [Overview](/docs/reference/services/validator/)
        -   [API](/docs/reference/services/validator/api/)
        -   [Configuration](/docs/reference/services/validator/configuration/)
        -   [Errors](/docs/reference/services/validator/errors/)
        -   [Standards](/docs/reference/services/validator/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/validator/policies/)
            -   [Credential Query](/docs/reference/services/validator/policies/credential-query/)
            -   [Credential Format](/docs/reference/services/validator/policies/format/)
            -   [Trusted Issuer](/docs/reference/services/validator/policies/trusted-issuer/)
            
        
    -   Verifier
        
        -   [Overview](/docs/reference/services/verifier/)
        -   [API](/docs/reference/services/verifier/api/)
        -   [Configuration](/docs/reference/services/verifier/configuration/)
        -   [Errors](/docs/reference/services/verifier/errors/)
        -   [Standards](/docs/reference/services/verifier/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/verifier/policies/)
            -   [Format](/docs/reference/services/verifier/policies/format/)
            -   [Not After](/docs/reference/services/verifier/policies/not-after/)
            -   [Not Before](/docs/reference/services/verifier/policies/not-before/)
            -   [Proof](/docs/reference/services/verifier/policies/proof/)
            -   [Schema](/docs/reference/services/verifier/policies/schema/)
            -   [Status](/docs/reference/services/verifier/policies/status/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Services
    
    -   Resolver
        
        -   [Create and Resolve](/docs/tutorials/services/resolver/create-and-resolve/)
        -   [DID URL Dereferencing](/docs/tutorials/services/resolver/did-url-dereferencing/)
        -   [Create and Resolve DIDs with Onyx](/docs/tutorials/services/resolver/onyx-create-did/)
        -   [Resolve with API Key](/docs/tutorials/services/resolver/resolve-via-api/)
        
    -   Verifier
        
        -   [Verify a Credential](/docs/tutorials/services/verifier/)
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Verification Process](#verification-process)
-   [VP Token Verification](#vp-token-verification)
    -   [Verification Process](#verification-process-1)
    -   [Supported VP Token Formats](#supported-vp-token-formats)
    -   [VP Token Response Handling](#vp-token-response-handling)
-   [ID Token Verification](#id-token-verification)
    -   [ID Token Process](#id-token-process)
    -   [ID Token Error Handling](#id-token-error-handling)
-   [Configuration](#configuration)
-   [Additional Resources](#additional-resources)

Ask ChatGPT View Markdown

## On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Verification Process](#verification-process)
-   [VP Token Verification](#vp-token-verification)
    -   [Verification Process](#verification-process-1)
    -   [Supported VP Token Formats](#supported-vp-token-formats)
    -   [VP Token Response Handling](#vp-token-response-handling)
-   [ID Token Verification](#id-token-verification)
    -   [ID Token Process](#id-token-process)
    -   [ID Token Error Handling](#id-token-error-handling)
-   [Configuration](#configuration)
-   [Additional Resources](#additional-resources)

# Verify Policy Reference

This reference documents the verify policy for the authorizer service. The verify policy delegates cryptographic verification of verifiable presentations and ID tokens to the configured verifier service, handling the coordination and result processing within the authorization workflow.

## Policy Overview

[Section titled “Policy Overview”](#policy-overview)

The verify policy is a critical component of the authorization workflow that delegates cryptographic verification to the configured verifier service. Rather than performing verification directly, the authorizer acts as a coordinator, sending credentials and tokens to the verifier service and processing the results within the authorization context.

The policy’s primary responsibilities include:

-   **Service delegation**: Routing verification requests to the configured verifier service instance
-   **Token handling**: Processing both VP tokens and ID tokens through appropriate verifier endpoints
-   **Result integration**: Converting verifier service responses into authorizer policy results
-   **Error translation**: Mapping verifier service errors to authorizer-specific error types

For details on the actual cryptographic verification processes, see the [Verifier Service Documentation](/docs/reference/services/verifier/).

## Verification Process

[Section titled “Verification Process”](#verification-process)

flowchart TD
    subgraph "Verify Policy Processing"
        Input\[Authorization Request\] --> CheckSkip{Skip Verify?}
        CheckSkip -->|Yes| Skip\[Skip Verification\]
        CheckSkip -->|No| CreateClient\[Create Verifier Client\]

        CreateClient --> ProcessVP\[Process VP Token\]
        CreateClient --> ProcessID\[Process ID Token\]

        ProcessVP --> VerifyVP\[Verify VP Token\]
        ProcessID --> VerifyID\[Verify ID Token\]

        VerifyVP --> CheckVPResult{VP Valid?}
        VerifyID --> CheckIDResult{ID Valid?}

        CheckVPResult -->|Yes| VPSuccess\[VP Verification Success\]
        CheckVPResult -->|No| VPError\[VP Verification Error\]

        CheckIDResult -->|Yes| IDSuccess\[ID Token Success\]
        CheckIDResult -->|No| IDError\[ID Token Error\]

        VPSuccess --> CombineResults\[Combine Results\]
        VPError --> CombineResults
        IDSuccess --> CombineResults
        IDError --> CombineResults
        Skip --> CombineResults

        CombineResults --> PolicyResult\[Policy Result\]
    end

    subgraph "Verifier Service Integration"
        VerifierClient\[Verifier Service Client\] -.-> |"/verify"| VerifyVP
        VerifierClient -.-> |"/verify-jwt"| VerifyID
    end

    style Input fill:#f9f9f9,stroke:#333,stroke-width:1px
    style CheckSkip fill:#e1f5fe,stroke:#333,stroke-width:1px
    style ProcessVP fill:#e8f5e8,stroke:#333,stroke-width:1px
    style ProcessID fill:#fff3e0,stroke:#333,stroke-width:1px
    style VPSuccess fill:#dcedc8,stroke:#333,stroke-width:1px
    style IDSuccess fill:#dcedc8,stroke:#333,stroke-width:1px
    style VPError fill:#ffcdd2,stroke:#333,stroke-width:1px
    style IDError fill:#ffcdd2,stroke:#333,stroke-width:1px
    style Skip fill:#f3e5f5,stroke:#333,stroke-width:1px
    style VerifierClient fill:#fff9c4,stroke:#333,stroke-width:1px

When processing verification requests, the policy follows these steps:

1.  **Configuration check** - Determines if verification should be skipped based on policy configuration
2.  **Service client creation** - Creates a verifier service client using configured service instance reference
3.  **VP token verification** - Sends VP token to verifier service for cryptographic verification
4.  **ID token verification** - If present, verifies ID token signatures and audience claims
5.  **Result aggregation** - Combines verification results from all processed tokens
6.  **Error handling** - Converts verifier service errors to appropriate authorizer policy errors

## VP Token Verification

[Section titled “VP Token Verification”](#vp-token-verification)

The verify policy handles VP token verification through the verifier service’s `/verify` endpoint:

### Verification Process

[Section titled “Verification Process”](#verification-process-1)

1.  **Token extraction** - Extracts the original VP token from the parsed authorization details
2.  **Service delegation** - Sends the token to the configured verifier service instance
3.  **Result processing** - Handles different response types from the verifier service
4.  **Error translation** - Converts verifier errors to authorizer-specific error types

### Supported VP Token Formats

[Section titled “Supported VP Token Formats”](#supported-vp-token-formats)

Format

Description

Verification Approach

Special Handling

**JWT VP**

JWT-encoded verifiable presentations

Standard JWT signature verification

Audience validation support

**mDoc**

ISO 18013-5 mobile documents

mDoc-specific cryptographic verification

Device authentication handling

**Data Integrity**

W3C Data Integrity presentations

Multi-cryptosuite verification

Selective disclosure support

### VP Token Response Handling

[Section titled “VP Token Response Handling”](#vp-token-response-handling)

The policy handles different verifier service response scenarios:

Status Code

Description

Policy Action

Result

**200**

Successful verification

Returns verifier results directly

Pass-through successful verification

**422**

Validation errors

Adds authorizer verification error + verifier results

Combined error information

**≥500**

Internal server errors

Creates authorizer verification error

Internal error reporting

**Other**

Unexpected responses

Creates generic verification error

Fallback error handling

## ID Token Verification

[Section titled “ID Token Verification”](#id-token-verification)

For OpenID Connect ID tokens, the verify policy performs additional verification through the verifier service’s `/verify-jwt` endpoint:

### ID Token Process

[Section titled “ID Token Process”](#id-token-process)

1.  **Token presence check** - Only processes ID tokens when present in authorization request
2.  **Audience extraction** - Derives audience from VP token when VP is JWT format
3.  **JWT verification** - Validates ID token signature and claims
4.  **Audience validation** - Ensures ID token audience matches expected values

### ID Token Error Handling

[Section titled “ID Token Error Handling”](#id-token-error-handling)

Scenario

Error Type

Description

Action

**Signature verification**

`IdTokenProofError`

Invalid cryptographic signature

Reject authorization request

**Audience mismatch**

`IdTokenProofError`

ID token audience claim invalid

Reject authorization request

**Service errors (≥500)**

`VerifyInternalError`

Verifier service internal error

Log error, reject request

**Invalid response**

`IdTokenProofError`

Unexpected response format

Reject authorization request

## Configuration

[Section titled “Configuration”](#configuration)

The verify policy is configured through the authorizer service configuration. For complete configuration options, parameters, and examples, see the [Authorizer Configuration Reference](/docs/reference/services/authorizer/configuration#verify).

Key configuration aspects:

-   **skip**: Controls whether verification is performed
-   **verifier**: Specifies which verifier service instance to use

For details on how the verifier service performs cryptographic verification, see the [Verifier Service Documentation](/docs/reference/services/verifier/) and [Verifier Configuration Reference](/docs/reference/services/verifier/configuration/).

## Additional Resources

[Section titled “Additional Resources”](#additional-resources)

-   [Authorizer Configuration Reference](/docs/reference/services/authorizer/configuration/)
-   [Verifier Service Documentation](/docs/reference/services/verifier/) - For details on cryptographic verification processes
-   [Verifier Configuration Reference](/docs/reference/services/verifier/configuration/) - For verifier service configuration options
-   [Verifier Service Policies](/docs/reference/services/verifier/policies/) - For detailed verification policy documentation
-   [OpenID for Verifiable Presentations](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)
-   [W3C Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/)
-   [ISO 18013-5:2021 Mobile Driving License](https://www.iso.org/standard/69084.html)

[Previous  
Validate](/docs/reference/services/authorizer/policies/validate/) [Next  
Overview](/docs/reference/services/gateway/)
```
```

```
Tool: webfetch

**Input:**
```json
{
  "format": "markdown",
  "url": "https://vidos.id/docs/reference/services/verifier/policies/not-after/"
}
```
**Output:**
```
Not After Verification Policy Reference | Vidos      [Skip to content](#_top)

 [![Vidos Logo](/docs/_astro/vidos-logo-long.CCvhBbmO.svg) Vidos](/docs/)

-   [Explanations](/docs/explanations/services/)
-   [References](/docs/reference/services/authorizer/)
-   [Tutorials](/docs/tutorials/services/verifier/)
-   [Guides](/docs/guides/management/instances/create/)

Search CtrlK

Cancel

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   [Trust Triangle](/docs/explanations/triangle-of-trust/)
-   Management
    
    -   [Overview](/docs/explanations/management/)
    -   [Configurations](/docs/explanations/management/configurations/)
    -   [Instances](/docs/explanations/management/instances/)
    -   [Regions](/docs/explanations/management/regions/)
    -   IAM
        
        -   [Overview](/docs/explanations/management/iam/)
        -   [API Keys](/docs/explanations/management/iam/api-keys/)
        -   [Policy Documents](/docs/explanations/management/iam/policy-documents/)
        -   [Scopes](/docs/explanations/management/iam/scopes/)
        -   [Service Instances](/docs/explanations/management/iam/service-instances/)
        -   [Service Roles](/docs/explanations/management/iam/service-roles/)
        
    
-   Services
    
    -   [Overview](/docs/explanations/services/)
    -   [Authorizer](/docs/explanations/services/authorizer/)
    -   [Gateway](/docs/explanations/services/gateway/)
    -   [Validator](/docs/explanations/services/validator/)
    -   [Verifier](/docs/explanations/services/verifier/)
    -   Resolver
        
        -   [Overview](/docs/explanations/services/resolver/)
        -   [DID Method Routing](/docs/explanations/services/resolver/did-method-routing/)
        
    
-   Standards
    
    -   DIF
        
        -   Presentation Exchange
            
            -   [Presentation Exchange](/docs/explanations/standards/dif/presentation-exchange/)
            -   [Input Descriptors](/docs/explanations/standards/dif/presentation-exchange/input-descriptors/)
            -   [Presentation Definition](/docs/explanations/standards/dif/presentation-exchange/presentation-definition/)
            -   [Presentation Submission](/docs/explanations/standards/dif/presentation-exchange/presentation-submission/)
            -   [Submission Requirements](/docs/explanations/standards/dif/presentation-exchange/submission-requirements/)
            
        
    -   OIDF
        
        -   DCQL
            
            -   [Digital Credential Query Language](/docs/explanations/standards/oidf/dcql/)
            -   [Claim Queries](/docs/explanations/standards/oidf/dcql/claim-queries/)
            -   [Credential Queries](/docs/explanations/standards/oidf/dcql/credential-queries/)
            -   [Credential Sets](/docs/explanations/standards/oidf/dcql/credential-sets/)
            -   [Trusted Authorities](/docs/explanations/standards/oidf/dcql/trusted-authorities/)
            
        -   OpenID4VP
            
            -   [OpenID4VP](/docs/explanations/standards/oidf/openid4vp/)
            -   [Authorization requests](/docs/explanations/standards/oidf/openid4vp/authorization-requests/)
            -   [Digital Credentials API](/docs/explanations/standards/oidf/openid4vp/digital-credentials-api/)
            -   [Flows and UX](/docs/explanations/standards/oidf/openid4vp/flows-and-ux/)
            -   [Metadata and trust](/docs/explanations/standards/oidf/openid4vp/metadata-and-trust/)
            -   [Responses](/docs/explanations/standards/oidf/openid4vp/responses/)
            -   [Security and validation](/docs/explanations/standards/oidf/openid4vp/security-and-validation/)
            
        
    -   W3C
        
        -   Decentralized Identifiers
            
            -   [Decentralized Identifiers (DIDs)](/docs/explanations/standards/w3c/decentralized-identifiers/)
            -   [Controller Documents](/docs/explanations/standards/w3c/decentralized-identifiers/controller-document/)
            -   [DID Documents](/docs/explanations/standards/w3c/decentralized-identifiers/documents/)
            -   [DID Methods](/docs/explanations/standards/w3c/decentralized-identifiers/methods/)
            -   [DID Resolution](/docs/explanations/standards/w3c/decentralized-identifiers/resolution/)
            -   [DID URL Dereferencing](/docs/explanations/standards/w3c/decentralized-identifiers/url-dereferencing/)
            -   [DID Use Cases](/docs/explanations/standards/w3c/decentralized-identifiers/use-cases/)
            -   [Verification Methods](/docs/explanations/standards/w3c/decentralized-identifiers/verification-methods/)
            
        -   Digital Credentials API
            
            -   [Digital Credentials API](/docs/explanations/standards/w3c/digital-credentials/)
            -   [Methods](/docs/explanations/standards/w3c/digital-credentials/api-methods/)
            -   [Permissions Policy](/docs/explanations/standards/w3c/digital-credentials/permissions-policy/)
            -   [Privacy and security](/docs/explanations/standards/w3c/digital-credentials/privacy-and-security/)
            -   [Protocol registry](/docs/explanations/standards/w3c/digital-credentials/protocol-registry/)
            
        -   Verifiable Credentials
            
            -   [Verifiable Credentials](/docs/explanations/standards/w3c/verifiable-credentials/)
            -   [Credential Schemas](/docs/explanations/standards/w3c/verifiable-credentials/credential-schema/)
            -   [Credential Status](/docs/explanations/standards/w3c/verifiable-credentials/credential-status/)
            -   [Issuers](/docs/explanations/standards/w3c/verifiable-credentials/issuer/)
            -   [Securing Mechanisms](/docs/explanations/standards/w3c/verifiable-credentials/securing-mechanisms/)
            -   [Credential Subjects](/docs/explanations/standards/w3c/verifiable-credentials/subject/)
            -   [Validity Period](/docs/explanations/standards/w3c/verifiable-credentials/validity-period/)
            -   [Verifiable Presentations](/docs/explanations/standards/w3c/verifiable-credentials/verifiable-presentations/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto   

-   Management
    
    -   IAM
        
        -   [Create Account](/docs/guides/management/iam/create-account/)
        -   [Create API Key](/docs/guides/management/iam/create-api-key/)
        -   [Setup MFA](/docs/guides/management/iam/setup-mfa/)
        
    -   Instances
        
        -   [Configure](/docs/guides/management/instances/configure/)
        -   [Create](/docs/guides/management/instances/create/)
        -   [Instance Logs](/docs/guides/management/instances/logs/)
        -   [Stop / Start](/docs/guides/management/instances/state/)
        
    
-   Services
    
    -   Resolver
        
        -   [Pick DID Method](/docs/guides/services/resolver/pick-w3c-did-method/)
        -   [Test](/docs/guides/services/resolver/test/)
        -   Configure
            
            -   [DID methods](/docs/guides/services/resolver/configure/did-method-support/)
            -   [Response type](/docs/guides/services/resolver/configure/response-type/)
            
        
    -   Verifier
        
        -   Configure
            
            -   [Expired Credentials](/docs/guides/services/verifier/configure/allow-expired-credentials/)
            
        -   Verify
            
            -   [SD-JWT VC](/docs/guides/services/verifier/verify/ietf-oauth-sd-jwt-vc/)
            -   [Setup](/docs/guides/services/verifier/verify/setup/)
            -   [W3C Verifiable Credential v1.1](/docs/guides/services/verifier/verify/w3c-vc-11/)
            -   [W3C Verifiable Presentation v1.1](/docs/guides/services/verifier/verify/w3c-vc-11-vp/)
            -   [W3C Verifiable Credential v2.0](/docs/guides/services/verifier/verify/w3c-vc-20/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Configuration
    
    -   [CORS](/docs/reference/configuration/cors/)
    -   [Service Instances](/docs/reference/configuration/service-instances/)
    -   [Service Roles](/docs/reference/configuration/service-roles/)
    
-   Errors
    
    -   [credential-query-evaluation](/docs/reference/errors/credential-query-evaluation/)
    -   [credential-query-format](/docs/reference/errors/credential-query-format/)
    -   [credential-query-unsupported](/docs/reference/errors/credential-query-unsupported/)
    -   [invalid-format](/docs/reference/errors/invalid-format/)
    -   [not-allowed-by-configuration](/docs/reference/errors/not-allowed-by-configuration/)
    -   [proof-cryptographic-error](/docs/reference/errors/proof-cryptographic-error/)
    -   [proof-resolve-issuer](/docs/reference/errors/proof-resolve-issuer/)
    -   [proof-unsupported-feature](/docs/reference/errors/proof-unsupported-feature/)
    -   [proof-verification-failed](/docs/reference/errors/proof-verification-failed/)
    -   [trusted-issuer-configuration-invalid](/docs/reference/errors/trusted-issuer-configuration-invalid/)
    -   [trusted-issuer-unsupported](/docs/reference/errors/trusted-issuer-unsupported/)
    -   [trusted-issuer-untrusted](/docs/reference/errors/trusted-issuer-untrusted/)
    -   [trusted-issuer-validation-error](/docs/reference/errors/trusted-issuer-validation-error/)
    -   [unexpected-error](/docs/reference/errors/unexpected-error/)
    -   [unsupported-format](/docs/reference/errors/unsupported-format/)
    
-   IAM
    
    -   [Policy Documents](/docs/reference/iam/policy-documents/)
    -   [Scopes](/docs/reference/iam/scopes/)
    
-   Services
    
    -   Authorizer
        
        -   [Overview](/docs/reference/services/authorizer/)
        -   [API](/docs/reference/services/authorizer/api/)
        -   [Configuration](/docs/reference/services/authorizer/configuration/)
        -   Policies
            
            -   [Policies](/docs/reference/services/authorizer/policies/)
            -   [Format](/docs/reference/services/authorizer/policies/format/)
            -   [Validate](/docs/reference/services/authorizer/policies/validate/)
            -   [Verify](/docs/reference/services/authorizer/policies/verify/)
            
        
    -   Gateway
        
        -   [Overview](/docs/reference/services/gateway/)
        -   [Configuration](/docs/reference/services/gateway/configuration/)
        
    -   Resolver
        
        -   [Overview](/docs/reference/services/resolver/)
        -   [Configuration](/docs/reference/services/resolver/configuration/)
        -   [Supported DID Methods](/docs/reference/services/resolver/supported-did-methods/)
        
    -   Validator
        
        -   [Overview](/docs/reference/services/validator/)
        -   [API](/docs/reference/services/validator/api/)
        -   [Configuration](/docs/reference/services/validator/configuration/)
        -   [Errors](/docs/reference/services/validator/errors/)
        -   [Standards](/docs/reference/services/validator/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/validator/policies/)
            -   [Credential Query](/docs/reference/services/validator/policies/credential-query/)
            -   [Credential Format](/docs/reference/services/validator/policies/format/)
            -   [Trusted Issuer](/docs/reference/services/validator/policies/trusted-issuer/)
            
        
    -   Verifier
        
        -   [Overview](/docs/reference/services/verifier/)
        -   [API](/docs/reference/services/verifier/api/)
        -   [Configuration](/docs/reference/services/verifier/configuration/)
        -   [Errors](/docs/reference/services/verifier/errors/)
        -   [Standards](/docs/reference/services/verifier/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/verifier/policies/)
            -   [Format](/docs/reference/services/verifier/policies/format/)
            -   [Not After](/docs/reference/services/verifier/policies/not-after/)
            -   [Not Before](/docs/reference/services/verifier/policies/not-before/)
            -   [Proof](/docs/reference/services/verifier/policies/proof/)
            -   [Schema](/docs/reference/services/verifier/policies/schema/)
            -   [Status](/docs/reference/services/verifier/policies/status/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Services
    
    -   Resolver
        
        -   [Create and Resolve](/docs/tutorials/services/resolver/create-and-resolve/)
        -   [DID URL Dereferencing](/docs/tutorials/services/resolver/did-url-dereferencing/)
        -   [Create and Resolve DIDs with Onyx](/docs/tutorials/services/resolver/onyx-create-did/)
        -   [Resolve with API Key](/docs/tutorials/services/resolver/resolve-via-api/)
        
    -   Verifier
        
        -   [Verify a Credential](/docs/tutorials/services/verifier/)
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [How It Works](#how-it-works)
-   [Temporal Properties](#temporal-properties)
-   [Time Tolerance](#time-tolerance)
-   [Configuration](#configuration)

Ask ChatGPT View Markdown

## On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [How It Works](#how-it-works)
-   [Temporal Properties](#temporal-properties)
-   [Time Tolerance](#time-tolerance)
-   [Configuration](#configuration)

# Not After Verification Policy Reference

This reference documents the `notAfter` verification policy for the verifier service. The `notAfter` policy checks if a credential has expired based on its expiration date.

## Policy Overview

[Section titled “Policy Overview”](#policy-overview)

The `notAfter` verification policy validates the temporal validity of credentials and presentations by ensuring they have not been used after their expiration date. This temporal check helps enforce time-bound credentials that should only be valid until a specific point in time.

## Supported Standards

[Section titled “Supported Standards”](#supported-standards)

The `notAfter` verification policy supports expiration validation across multiple standards:

Standard

Organization

Specification

Expiration Property

Validation Aspect

JSON Web Token (JWT)

IETF

[RFC 7519 §4.1.4](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.4)

`exp` (expiration time)

Checks current time against the JWT expiration time claim

ISO 18013-5 mDL

ISO

[ISO 18013-5:2021 §8.2.2.2](https://www.iso.org/standard/69084.html)

`expiry_date`

Verifies mobile driving license has not been used after its expiration date

Verifiable Credentials Data Model v1.1

W3C

[VC Data Model §4.8](https://www.w3.org/TR/vc-data-model/#expiration)

`expirationDate`

Validates credential has not been used after its expiration date

Verifiable Credentials Data Model v2.0

W3C

[VC Data Model §4.9](https://www.w3.org/TR/vc-data-model-2.0/#validity-period)

`validUntil`

Ensures current time is not after the specified `validUntil` date

## How It Works

[Section titled “How It Works”](#how-it-works)

The `notAfter` policy validates one or more date fields in the credential to ensure that the current time is not after the expiration date:

flowchart LR
    subgraph "notAfter Verification"
        Input\[Credential\] --> Extract\[Extract Date Values\]
        Extract --> Compare\[Compare with Current Time\]
        Compare --> Decision{Is Current Time <= Expiration Date?}
        Decision -->|Yes| Valid\[Valid\]
        Decision -->|No| Invalid\[Invalid: Expired\]
    end

    style Input fill:#f9f9f9,stroke:#333,stroke-width:1px
    style Extract fill:#e1f5fe,stroke:#333,stroke-width:1px
    style Compare fill:#e1f5fe,stroke:#333,stroke-width:1px
    style Decision fill:#e1f5fe,stroke:#333,stroke-width:1px
    style Valid fill:#dcedc8,stroke:#333,stroke-width:1px
    style Invalid fill:#ffcdd2,stroke:#333,stroke-width:1px

## Temporal Properties

[Section titled “Temporal Properties”](#temporal-properties)

The `notAfter` policy can verify different temporal properties depending on the credential format:

Credential Type

Temporal Property

Description

Specification Reference

W3C Verifiable Credential (v1.1)

`expirationDate`

The date when the credential expires

[W3C VC Data Model §4.8](https://www.w3.org/TR/vc-data-model/#expiration)

W3C Verifiable Credential (v2.0)

`validUntil`

Explicit date until which the credential is valid

[W3C VC Data Model §4.9](https://www.w3.org/TR/vc-data-model-2.0/#validity-period)

JWT Credential

`exp` (expiration time)

Date after which the JWT is not valid

[IETF RFC 7519 §4.1.4](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.4)

ISO 18013-5 mDL

`expiry_date`

Date after which the mobile driving license is not valid

[ISO 18013-5:2021 §8.2.2.2](https://www.iso.org/standard/69084.html)

## Time Tolerance

[Section titled “Time Tolerance”](#time-tolerance)

The `notAfter` policy supports a configurable time tolerance to account for:

-   Clock skew between issuer, holder, and verifier systems
-   Network delays in credential transmission and verification
-   Time zone discrepancies

The tolerance is specified in milliseconds and creates a buffer period after the expiration date where the credential is still considered valid.

## Configuration

[Section titled “Configuration”](#configuration)

The `notAfter` verification policy offers various configuration options that control its behavior, including:

-   Enabling or disabling temporal validation
-   Setting time tolerance values
-   Configuring behavior for missing date fields
-   Setting different validation rules for credentials and presentations

For detailed configuration options, parameters, and default values, see the [Verifier Configuration Reference](/docs/reference/services/verifier/configuration/#notafternotbefore).

[Previous  
Format](/docs/reference/services/verifier/policies/format/) [Next  
Not Before](/docs/reference/services/verifier/policies/not-before/)
```
```

```
Tool: webfetch

**Input:**
```json
{
  "format": "markdown",
  "url": "https://vidos.id/docs/reference/services/verifier/policies/not-before/"
}
```
**Output:**
```
Not Before Verification Policy Reference | Vidos      [Skip to content](#_top)

 [![Vidos Logo](/docs/_astro/vidos-logo-long.CCvhBbmO.svg) Vidos](/docs/)

-   [Explanations](/docs/explanations/services/)
-   [References](/docs/reference/services/authorizer/)
-   [Tutorials](/docs/tutorials/services/verifier/)
-   [Guides](/docs/guides/management/instances/create/)

Search CtrlK

Cancel

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   [Trust Triangle](/docs/explanations/triangle-of-trust/)
-   Management
    
    -   [Overview](/docs/explanations/management/)
    -   [Configurations](/docs/explanations/management/configurations/)
    -   [Instances](/docs/explanations/management/instances/)
    -   [Regions](/docs/explanations/management/regions/)
    -   IAM
        
        -   [Overview](/docs/explanations/management/iam/)
        -   [API Keys](/docs/explanations/management/iam/api-keys/)
        -   [Policy Documents](/docs/explanations/management/iam/policy-documents/)
        -   [Scopes](/docs/explanations/management/iam/scopes/)
        -   [Service Instances](/docs/explanations/management/iam/service-instances/)
        -   [Service Roles](/docs/explanations/management/iam/service-roles/)
        
    
-   Services
    
    -   [Overview](/docs/explanations/services/)
    -   [Authorizer](/docs/explanations/services/authorizer/)
    -   [Gateway](/docs/explanations/services/gateway/)
    -   [Validator](/docs/explanations/services/validator/)
    -   [Verifier](/docs/explanations/services/verifier/)
    -   Resolver
        
        -   [Overview](/docs/explanations/services/resolver/)
        -   [DID Method Routing](/docs/explanations/services/resolver/did-method-routing/)
        
    
-   Standards
    
    -   DIF
        
        -   Presentation Exchange
            
            -   [Presentation Exchange](/docs/explanations/standards/dif/presentation-exchange/)
            -   [Input Descriptors](/docs/explanations/standards/dif/presentation-exchange/input-descriptors/)
            -   [Presentation Definition](/docs/explanations/standards/dif/presentation-exchange/presentation-definition/)
            -   [Presentation Submission](/docs/explanations/standards/dif/presentation-exchange/presentation-submission/)
            -   [Submission Requirements](/docs/explanations/standards/dif/presentation-exchange/submission-requirements/)
            
        
    -   OIDF
        
        -   DCQL
            
            -   [Digital Credential Query Language](/docs/explanations/standards/oidf/dcql/)
            -   [Claim Queries](/docs/explanations/standards/oidf/dcql/claim-queries/)
            -   [Credential Queries](/docs/explanations/standards/oidf/dcql/credential-queries/)
            -   [Credential Sets](/docs/explanations/standards/oidf/dcql/credential-sets/)
            -   [Trusted Authorities](/docs/explanations/standards/oidf/dcql/trusted-authorities/)
            
        -   OpenID4VP
            
            -   [OpenID4VP](/docs/explanations/standards/oidf/openid4vp/)
            -   [Authorization requests](/docs/explanations/standards/oidf/openid4vp/authorization-requests/)
            -   [Digital Credentials API](/docs/explanations/standards/oidf/openid4vp/digital-credentials-api/)
            -   [Flows and UX](/docs/explanations/standards/oidf/openid4vp/flows-and-ux/)
            -   [Metadata and trust](/docs/explanations/standards/oidf/openid4vp/metadata-and-trust/)
            -   [Responses](/docs/explanations/standards/oidf/openid4vp/responses/)
            -   [Security and validation](/docs/explanations/standards/oidf/openid4vp/security-and-validation/)
            
        
    -   W3C
        
        -   Decentralized Identifiers
            
            -   [Decentralized Identifiers (DIDs)](/docs/explanations/standards/w3c/decentralized-identifiers/)
            -   [Controller Documents](/docs/explanations/standards/w3c/decentralized-identifiers/controller-document/)
            -   [DID Documents](/docs/explanations/standards/w3c/decentralized-identifiers/documents/)
            -   [DID Methods](/docs/explanations/standards/w3c/decentralized-identifiers/methods/)
            -   [DID Resolution](/docs/explanations/standards/w3c/decentralized-identifiers/resolution/)
            -   [DID URL Dereferencing](/docs/explanations/standards/w3c/decentralized-identifiers/url-dereferencing/)
            -   [DID Use Cases](/docs/explanations/standards/w3c/decentralized-identifiers/use-cases/)
            -   [Verification Methods](/docs/explanations/standards/w3c/decentralized-identifiers/verification-methods/)
            
        -   Digital Credentials API
            
            -   [Digital Credentials API](/docs/explanations/standards/w3c/digital-credentials/)
            -   [Methods](/docs/explanations/standards/w3c/digital-credentials/api-methods/)
            -   [Permissions Policy](/docs/explanations/standards/w3c/digital-credentials/permissions-policy/)
            -   [Privacy and security](/docs/explanations/standards/w3c/digital-credentials/privacy-and-security/)
            -   [Protocol registry](/docs/explanations/standards/w3c/digital-credentials/protocol-registry/)
            
        -   Verifiable Credentials
            
            -   [Verifiable Credentials](/docs/explanations/standards/w3c/verifiable-credentials/)
            -   [Credential Schemas](/docs/explanations/standards/w3c/verifiable-credentials/credential-schema/)
            -   [Credential Status](/docs/explanations/standards/w3c/verifiable-credentials/credential-status/)
            -   [Issuers](/docs/explanations/standards/w3c/verifiable-credentials/issuer/)
            -   [Securing Mechanisms](/docs/explanations/standards/w3c/verifiable-credentials/securing-mechanisms/)
            -   [Credential Subjects](/docs/explanations/standards/w3c/verifiable-credentials/subject/)
            -   [Validity Period](/docs/explanations/standards/w3c/verifiable-credentials/validity-period/)
            -   [Verifiable Presentations](/docs/explanations/standards/w3c/verifiable-credentials/verifiable-presentations/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto   

-   Management
    
    -   IAM
        
        -   [Create Account](/docs/guides/management/iam/create-account/)
        -   [Create API Key](/docs/guides/management/iam/create-api-key/)
        -   [Setup MFA](/docs/guides/management/iam/setup-mfa/)
        
    -   Instances
        
        -   [Configure](/docs/guides/management/instances/configure/)
        -   [Create](/docs/guides/management/instances/create/)
        -   [Instance Logs](/docs/guides/management/instances/logs/)
        -   [Stop / Start](/docs/guides/management/instances/state/)
        
    
-   Services
    
    -   Resolver
        
        -   [Pick DID Method](/docs/guides/services/resolver/pick-w3c-did-method/)
        -   [Test](/docs/guides/services/resolver/test/)
        -   Configure
            
            -   [DID methods](/docs/guides/services/resolver/configure/did-method-support/)
            -   [Response type](/docs/guides/services/resolver/configure/response-type/)
            
        
    -   Verifier
        
        -   Configure
            
            -   [Expired Credentials](/docs/guides/services/verifier/configure/allow-expired-credentials/)
            
        -   Verify
            
            -   [SD-JWT VC](/docs/guides/services/verifier/verify/ietf-oauth-sd-jwt-vc/)
            -   [Setup](/docs/guides/services/verifier/verify/setup/)
            -   [W3C Verifiable Credential v1.1](/docs/guides/services/verifier/verify/w3c-vc-11/)
            -   [W3C Verifiable Presentation v1.1](/docs/guides/services/verifier/verify/w3c-vc-11-vp/)
            -   [W3C Verifiable Credential v2.0](/docs/guides/services/verifier/verify/w3c-vc-20/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Configuration
    
    -   [CORS](/docs/reference/configuration/cors/)
    -   [Service Instances](/docs/reference/configuration/service-instances/)
    -   [Service Roles](/docs/reference/configuration/service-roles/)
    
-   Errors
    
    -   [credential-query-evaluation](/docs/reference/errors/credential-query-evaluation/)
    -   [credential-query-format](/docs/reference/errors/credential-query-format/)
    -   [credential-query-unsupported](/docs/reference/errors/credential-query-unsupported/)
    -   [invalid-format](/docs/reference/errors/invalid-format/)
    -   [not-allowed-by-configuration](/docs/reference/errors/not-allowed-by-configuration/)
    -   [proof-cryptographic-error](/docs/reference/errors/proof-cryptographic-error/)
    -   [proof-resolve-issuer](/docs/reference/errors/proof-resolve-issuer/)
    -   [proof-unsupported-feature](/docs/reference/errors/proof-unsupported-feature/)
    -   [proof-verification-failed](/docs/reference/errors/proof-verification-failed/)
    -   [trusted-issuer-configuration-invalid](/docs/reference/errors/trusted-issuer-configuration-invalid/)
    -   [trusted-issuer-unsupported](/docs/reference/errors/trusted-issuer-unsupported/)
    -   [trusted-issuer-untrusted](/docs/reference/errors/trusted-issuer-untrusted/)
    -   [trusted-issuer-validation-error](/docs/reference/errors/trusted-issuer-validation-error/)
    -   [unexpected-error](/docs/reference/errors/unexpected-error/)
    -   [unsupported-format](/docs/reference/errors/unsupported-format/)
    
-   IAM
    
    -   [Policy Documents](/docs/reference/iam/policy-documents/)
    -   [Scopes](/docs/reference/iam/scopes/)
    
-   Services
    
    -   Authorizer
        
        -   [Overview](/docs/reference/services/authorizer/)
        -   [API](/docs/reference/services/authorizer/api/)
        -   [Configuration](/docs/reference/services/authorizer/configuration/)
        -   Policies
            
            -   [Policies](/docs/reference/services/authorizer/policies/)
            -   [Format](/docs/reference/services/authorizer/policies/format/)
            -   [Validate](/docs/reference/services/authorizer/policies/validate/)
            -   [Verify](/docs/reference/services/authorizer/policies/verify/)
            
        
    -   Gateway
        
        -   [Overview](/docs/reference/services/gateway/)
        -   [Configuration](/docs/reference/services/gateway/configuration/)
        
    -   Resolver
        
        -   [Overview](/docs/reference/services/resolver/)
        -   [Configuration](/docs/reference/services/resolver/configuration/)
        -   [Supported DID Methods](/docs/reference/services/resolver/supported-did-methods/)
        
    -   Validator
        
        -   [Overview](/docs/reference/services/validator/)
        -   [API](/docs/reference/services/validator/api/)
        -   [Configuration](/docs/reference/services/validator/configuration/)
        -   [Errors](/docs/reference/services/validator/errors/)
        -   [Standards](/docs/reference/services/validator/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/validator/policies/)
            -   [Credential Query](/docs/reference/services/validator/policies/credential-query/)
            -   [Credential Format](/docs/reference/services/validator/policies/format/)
            -   [Trusted Issuer](/docs/reference/services/validator/policies/trusted-issuer/)
            
        
    -   Verifier
        
        -   [Overview](/docs/reference/services/verifier/)
        -   [API](/docs/reference/services/verifier/api/)
        -   [Configuration](/docs/reference/services/verifier/configuration/)
        -   [Errors](/docs/reference/services/verifier/errors/)
        -   [Standards](/docs/reference/services/verifier/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/verifier/policies/)
            -   [Format](/docs/reference/services/verifier/policies/format/)
            -   [Not After](/docs/reference/services/verifier/policies/not-after/)
            -   [Not Before](/docs/reference/services/verifier/policies/not-before/)
            -   [Proof](/docs/reference/services/verifier/policies/proof/)
            -   [Schema](/docs/reference/services/verifier/policies/schema/)
            -   [Status](/docs/reference/services/verifier/policies/status/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Services
    
    -   Resolver
        
        -   [Create and Resolve](/docs/tutorials/services/resolver/create-and-resolve/)
        -   [DID URL Dereferencing](/docs/tutorials/services/resolver/did-url-dereferencing/)
        -   [Create and Resolve DIDs with Onyx](/docs/tutorials/services/resolver/onyx-create-did/)
        -   [Resolve with API Key](/docs/tutorials/services/resolver/resolve-via-api/)
        
    -   Verifier
        
        -   [Verify a Credential](/docs/tutorials/services/verifier/)
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [How It Works](#how-it-works)
-   [Temporal Properties](#temporal-properties)
-   [Time Tolerance](#time-tolerance)
-   [Configuration](#configuration)

Ask ChatGPT View Markdown

## On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [How It Works](#how-it-works)
-   [Temporal Properties](#temporal-properties)
-   [Time Tolerance](#time-tolerance)
-   [Configuration](#configuration)

# Not Before Verification Policy Reference

This reference documents the `notBefore` verification policy for the verifier service. The `notBefore` policy checks if a credential is being used before its effective date.

## Policy Overview

[Section titled “Policy Overview”](#policy-overview)

The `notBefore` verification policy validates the temporal validity of credentials and presentations by ensuring they are not used before their effective date. This temporal check helps enforce time-bound credentials that should only be valid from a specific point in time.

## Supported Standards

[Section titled “Supported Standards”](#supported-standards)

The `notBefore` verification policy supports effective date validation across multiple standards:

Standard

Organization

Specification

Effective Date Property

Validation Aspect

JSON Web Token (JWT)

IETF

[RFC 7519 §4.1.5](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.5)

`nbf` (not before)

Checks current time against the JWT not before time claim

ISO 18013-5 mDL

ISO

[ISO 18013-5:2021 §8.2.2.2](https://www.iso.org/standard/69084.html)

`issue_date`

Verifies mobile driving license is not used before its issue date

Verifiable Credentials Data Model v1.1

W3C

[VC Data Model §4.6](https://www.w3.org/TR/vc-data-model/#issuance-date)

`issuanceDate`

Validates credential is not used before its issuance date

Verifiable Credentials Data Model v2.0

W3C

[VC Data Model §4.9](https://www.w3.org/TR/vc-data-model-2.0/#validity-period)

`validFrom`

Ensures current time is not before the specified `validFrom` date

## How It Works

[Section titled “How It Works”](#how-it-works)

The `notBefore` policy validates one or more date fields in the credential to ensure that the current time is not before the effective date:

flowchart LR
    subgraph "notBefore Verification"
        Input\[Credential\] --> Extract\[Extract Date Values\]
        Extract --> Compare\[Compare with Current Time\]
        Compare --> Decision{Is Current Time >= Effective Date?}
        Decision -->|Yes| Valid\[Valid\]
        Decision -->|No| Invalid\[Invalid: Not Yet Valid\]
    end

    style Input fill:#f9f9f9,stroke:#333,stroke-width:1px
    style Extract fill:#e1f5fe,stroke:#333,stroke-width:1px
    style Compare fill:#e1f5fe,stroke:#333,stroke-width:1px
    style Decision fill:#e1f5fe,stroke:#333,stroke-width:1px
    style Valid fill:#dcedc8,stroke:#333,stroke-width:1px
    style Invalid fill:#ffcdd2,stroke:#333,stroke-width:1px

## Temporal Properties

[Section titled “Temporal Properties”](#temporal-properties)

The `notBefore` policy can verify different temporal properties depending on the credential format:

Credential Type

Temporal Property

Description

Specification Reference

W3C Verifiable Credential (v1.1)

`issuanceDate`

The date when the credential was issued

[W3C VC Data Model §4.6](https://www.w3.org/TR/vc-data-model/#issuance-date)

W3C Verifiable Credential (v2.0)

`validFrom`

Explicit date from which the credential is valid

[W3C VC Data Model §4.9](https://www.w3.org/TR/vc-data-model-2.0/#validity-period)

JWT Credential

`nbf` (not before)

Date before which the JWT is not valid

[IETF RFC 7519 §4.1.5](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.5)

ISO 18013-5 mDL

`issue_date`

Date from which the mobile driving license is valid

[ISO 18013-5:2021 §8.2.2.2](https://www.iso.org/standard/69084.html)

## Time Tolerance

[Section titled “Time Tolerance”](#time-tolerance)

The `notBefore` policy supports a configurable time tolerance to account for:

-   Clock skew between issuer, holder, and verifier systems
-   Network delays in credential transmission and verification
-   Time zone discrepancies

The tolerance is specified in milliseconds and creates a buffer period before the effective date where the credential is still considered valid.

## Configuration

[Section titled “Configuration”](#configuration)

The `notBefore` verification policy offers various configuration options that control its behavior, including:

-   Enabling or disabling temporal validation
-   Setting time tolerance values
-   Configuring behavior for missing date fields
-   Setting different validation rules for credentials and presentations

For detailed configuration options, parameters, and default values, see the [Verifier Configuration Reference](/docs/reference/services/verifier/configuration/#notafternotbefore).

[Previous  
Not After](/docs/reference/services/verifier/policies/not-after/) [Next  
Proof](/docs/reference/services/verifier/policies/proof/)
```
```

```
Tool: webfetch

**Input:**
```json
{
  "format": "markdown",
  "url": "https://vidos.id/docs/reference/services/verifier/policies/proof/"
}
```
**Output:**
```
Proof Verification Policy Reference | Vidos      [Skip to content](#_top)

 [![Vidos Logo](/docs/_astro/vidos-logo-long.CCvhBbmO.svg) Vidos](/docs/)

-   [Explanations](/docs/explanations/services/)
-   [References](/docs/reference/services/authorizer/)
-   [Tutorials](/docs/tutorials/services/verifier/)
-   [Guides](/docs/guides/management/instances/create/)

Search CtrlK

Cancel

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   [Trust Triangle](/docs/explanations/triangle-of-trust/)
-   Management
    
    -   [Overview](/docs/explanations/management/)
    -   [Configurations](/docs/explanations/management/configurations/)
    -   [Instances](/docs/explanations/management/instances/)
    -   [Regions](/docs/explanations/management/regions/)
    -   IAM
        
        -   [Overview](/docs/explanations/management/iam/)
        -   [API Keys](/docs/explanations/management/iam/api-keys/)
        -   [Policy Documents](/docs/explanations/management/iam/policy-documents/)
        -   [Scopes](/docs/explanations/management/iam/scopes/)
        -   [Service Instances](/docs/explanations/management/iam/service-instances/)
        -   [Service Roles](/docs/explanations/management/iam/service-roles/)
        
    
-   Services
    
    -   [Overview](/docs/explanations/services/)
    -   [Authorizer](/docs/explanations/services/authorizer/)
    -   [Gateway](/docs/explanations/services/gateway/)
    -   [Validator](/docs/explanations/services/validator/)
    -   [Verifier](/docs/explanations/services/verifier/)
    -   Resolver
        
        -   [Overview](/docs/explanations/services/resolver/)
        -   [DID Method Routing](/docs/explanations/services/resolver/did-method-routing/)
        
    
-   Standards
    
    -   DIF
        
        -   Presentation Exchange
            
            -   [Presentation Exchange](/docs/explanations/standards/dif/presentation-exchange/)
            -   [Input Descriptors](/docs/explanations/standards/dif/presentation-exchange/input-descriptors/)
            -   [Presentation Definition](/docs/explanations/standards/dif/presentation-exchange/presentation-definition/)
            -   [Presentation Submission](/docs/explanations/standards/dif/presentation-exchange/presentation-submission/)
            -   [Submission Requirements](/docs/explanations/standards/dif/presentation-exchange/submission-requirements/)
            
        
    -   OIDF
        
        -   DCQL
            
            -   [Digital Credential Query Language](/docs/explanations/standards/oidf/dcql/)
            -   [Claim Queries](/docs/explanations/standards/oidf/dcql/claim-queries/)
            -   [Credential Queries](/docs/explanations/standards/oidf/dcql/credential-queries/)
            -   [Credential Sets](/docs/explanations/standards/oidf/dcql/credential-sets/)
            -   [Trusted Authorities](/docs/explanations/standards/oidf/dcql/trusted-authorities/)
            
        -   OpenID4VP
            
            -   [OpenID4VP](/docs/explanations/standards/oidf/openid4vp/)
            -   [Authorization requests](/docs/explanations/standards/oidf/openid4vp/authorization-requests/)
            -   [Digital Credentials API](/docs/explanations/standards/oidf/openid4vp/digital-credentials-api/)
            -   [Flows and UX](/docs/explanations/standards/oidf/openid4vp/flows-and-ux/)
            -   [Metadata and trust](/docs/explanations/standards/oidf/openid4vp/metadata-and-trust/)
            -   [Responses](/docs/explanations/standards/oidf/openid4vp/responses/)
            -   [Security and validation](/docs/explanations/standards/oidf/openid4vp/security-and-validation/)
            
        
    -   W3C
        
        -   Decentralized Identifiers
            
            -   [Decentralized Identifiers (DIDs)](/docs/explanations/standards/w3c/decentralized-identifiers/)
            -   [Controller Documents](/docs/explanations/standards/w3c/decentralized-identifiers/controller-document/)
            -   [DID Documents](/docs/explanations/standards/w3c/decentralized-identifiers/documents/)
            -   [DID Methods](/docs/explanations/standards/w3c/decentralized-identifiers/methods/)
            -   [DID Resolution](/docs/explanations/standards/w3c/decentralized-identifiers/resolution/)
            -   [DID URL Dereferencing](/docs/explanations/standards/w3c/decentralized-identifiers/url-dereferencing/)
            -   [DID Use Cases](/docs/explanations/standards/w3c/decentralized-identifiers/use-cases/)
            -   [Verification Methods](/docs/explanations/standards/w3c/decentralized-identifiers/verification-methods/)
            
        -   Digital Credentials API
            
            -   [Digital Credentials API](/docs/explanations/standards/w3c/digital-credentials/)
            -   [Methods](/docs/explanations/standards/w3c/digital-credentials/api-methods/)
            -   [Permissions Policy](/docs/explanations/standards/w3c/digital-credentials/permissions-policy/)
            -   [Privacy and security](/docs/explanations/standards/w3c/digital-credentials/privacy-and-security/)
            -   [Protocol registry](/docs/explanations/standards/w3c/digital-credentials/protocol-registry/)
            
        -   Verifiable Credentials
            
            -   [Verifiable Credentials](/docs/explanations/standards/w3c/verifiable-credentials/)
            -   [Credential Schemas](/docs/explanations/standards/w3c/verifiable-credentials/credential-schema/)
            -   [Credential Status](/docs/explanations/standards/w3c/verifiable-credentials/credential-status/)
            -   [Issuers](/docs/explanations/standards/w3c/verifiable-credentials/issuer/)
            -   [Securing Mechanisms](/docs/explanations/standards/w3c/verifiable-credentials/securing-mechanisms/)
            -   [Credential Subjects](/docs/explanations/standards/w3c/verifiable-credentials/subject/)
            -   [Validity Period](/docs/explanations/standards/w3c/verifiable-credentials/validity-period/)
            -   [Verifiable Presentations](/docs/explanations/standards/w3c/verifiable-credentials/verifiable-presentations/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto   

-   Management
    
    -   IAM
        
        -   [Create Account](/docs/guides/management/iam/create-account/)
        -   [Create API Key](/docs/guides/management/iam/create-api-key/)
        -   [Setup MFA](/docs/guides/management/iam/setup-mfa/)
        
    -   Instances
        
        -   [Configure](/docs/guides/management/instances/configure/)
        -   [Create](/docs/guides/management/instances/create/)
        -   [Instance Logs](/docs/guides/management/instances/logs/)
        -   [Stop / Start](/docs/guides/management/instances/state/)
        
    
-   Services
    
    -   Resolver
        
        -   [Pick DID Method](/docs/guides/services/resolver/pick-w3c-did-method/)
        -   [Test](/docs/guides/services/resolver/test/)
        -   Configure
            
            -   [DID methods](/docs/guides/services/resolver/configure/did-method-support/)
            -   [Response type](/docs/guides/services/resolver/configure/response-type/)
            
        
    -   Verifier
        
        -   Configure
            
            -   [Expired Credentials](/docs/guides/services/verifier/configure/allow-expired-credentials/)
            
        -   Verify
            
            -   [SD-JWT VC](/docs/guides/services/verifier/verify/ietf-oauth-sd-jwt-vc/)
            -   [Setup](/docs/guides/services/verifier/verify/setup/)
            -   [W3C Verifiable Credential v1.1](/docs/guides/services/verifier/verify/w3c-vc-11/)
            -   [W3C Verifiable Presentation v1.1](/docs/guides/services/verifier/verify/w3c-vc-11-vp/)
            -   [W3C Verifiable Credential v2.0](/docs/guides/services/verifier/verify/w3c-vc-20/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Configuration
    
    -   [CORS](/docs/reference/configuration/cors/)
    -   [Service Instances](/docs/reference/configuration/service-instances/)
    -   [Service Roles](/docs/reference/configuration/service-roles/)
    
-   Errors
    
    -   [credential-query-evaluation](/docs/reference/errors/credential-query-evaluation/)
    -   [credential-query-format](/docs/reference/errors/credential-query-format/)
    -   [credential-query-unsupported](/docs/reference/errors/credential-query-unsupported/)
    -   [invalid-format](/docs/reference/errors/invalid-format/)
    -   [not-allowed-by-configuration](/docs/reference/errors/not-allowed-by-configuration/)
    -   [proof-cryptographic-error](/docs/reference/errors/proof-cryptographic-error/)
    -   [proof-resolve-issuer](/docs/reference/errors/proof-resolve-issuer/)
    -   [proof-unsupported-feature](/docs/reference/errors/proof-unsupported-feature/)
    -   [proof-verification-failed](/docs/reference/errors/proof-verification-failed/)
    -   [trusted-issuer-configuration-invalid](/docs/reference/errors/trusted-issuer-configuration-invalid/)
    -   [trusted-issuer-unsupported](/docs/reference/errors/trusted-issuer-unsupported/)
    -   [trusted-issuer-untrusted](/docs/reference/errors/trusted-issuer-untrusted/)
    -   [trusted-issuer-validation-error](/docs/reference/errors/trusted-issuer-validation-error/)
    -   [unexpected-error](/docs/reference/errors/unexpected-error/)
    -   [unsupported-format](/docs/reference/errors/unsupported-format/)
    
-   IAM
    
    -   [Policy Documents](/docs/reference/iam/policy-documents/)
    -   [Scopes](/docs/reference/iam/scopes/)
    
-   Services
    
    -   Authorizer
        
        -   [Overview](/docs/reference/services/authorizer/)
        -   [API](/docs/reference/services/authorizer/api/)
        -   [Configuration](/docs/reference/services/authorizer/configuration/)
        -   Policies
            
            -   [Policies](/docs/reference/services/authorizer/policies/)
            -   [Format](/docs/reference/services/authorizer/policies/format/)
            -   [Validate](/docs/reference/services/authorizer/policies/validate/)
            -   [Verify](/docs/reference/services/authorizer/policies/verify/)
            
        
    -   Gateway
        
        -   [Overview](/docs/reference/services/gateway/)
        -   [Configuration](/docs/reference/services/gateway/configuration/)
        
    -   Resolver
        
        -   [Overview](/docs/reference/services/resolver/)
        -   [Configuration](/docs/reference/services/resolver/configuration/)
        -   [Supported DID Methods](/docs/reference/services/resolver/supported-did-methods/)
        
    -   Validator
        
        -   [Overview](/docs/reference/services/validator/)
        -   [API](/docs/reference/services/validator/api/)
        -   [Configuration](/docs/reference/services/validator/configuration/)
        -   [Errors](/docs/reference/services/validator/errors/)
        -   [Standards](/docs/reference/services/validator/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/validator/policies/)
            -   [Credential Query](/docs/reference/services/validator/policies/credential-query/)
            -   [Credential Format](/docs/reference/services/validator/policies/format/)
            -   [Trusted Issuer](/docs/reference/services/validator/policies/trusted-issuer/)
            
        
    -   Verifier
        
        -   [Overview](/docs/reference/services/verifier/)
        -   [API](/docs/reference/services/verifier/api/)
        -   [Configuration](/docs/reference/services/verifier/configuration/)
        -   [Errors](/docs/reference/services/verifier/errors/)
        -   [Standards](/docs/reference/services/verifier/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/verifier/policies/)
            -   [Format](/docs/reference/services/verifier/policies/format/)
            -   [Not After](/docs/reference/services/verifier/policies/not-after/)
            -   [Not Before](/docs/reference/services/verifier/policies/not-before/)
            -   [Proof](/docs/reference/services/verifier/policies/proof/)
            -   [Schema](/docs/reference/services/verifier/policies/schema/)
            -   [Status](/docs/reference/services/verifier/policies/status/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Services
    
    -   Resolver
        
        -   [Create and Resolve](/docs/tutorials/services/resolver/create-and-resolve/)
        -   [DID URL Dereferencing](/docs/tutorials/services/resolver/did-url-dereferencing/)
        -   [Create and Resolve DIDs with Onyx](/docs/tutorials/services/resolver/onyx-create-did/)
        -   [Resolve with API Key](/docs/tutorials/services/resolver/resolve-via-api/)
        
    -   Verifier
        
        -   [Verify a Credential](/docs/tutorials/services/verifier/)
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [Proof Verification Process](#proof-verification-process)
-   [Data Integrity Proofs](#data-integrity-proofs)
-   [Integration with Resolver](#integration-with-resolver)
-   [Configuration](#configuration)

Ask ChatGPT View Markdown

## On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [Proof Verification Process](#proof-verification-process)
-   [Data Integrity Proofs](#data-integrity-proofs)
-   [Integration with Resolver](#integration-with-resolver)
-   [Configuration](#configuration)

# Proof Verification Policy Reference

This reference documents the proof verification policy for the verifier service. The proof policy validates the cryptographic signatures and proofs associated with credentials and presentations to ensure their authenticity and integrity.

## Policy Overview

[Section titled “Policy Overview”](#policy-overview)

The proof verification policy is essential for establishing trust in digital credentials by cryptographically verifying that the credential was signed by the claimed issuer and has not been tampered with since issuance. This verification is a core component of the trust model for verifiable credentials.

## Supported Standards

[Section titled “Supported Standards”](#supported-standards)

The proof verification policy supports cryptographic validation across multiple standards:

Standard

Organization

Specification

Proof Type

Validation Aspect

Data Integrity BBS Cryptosuites

W3C

[VC DI BBS](https://www.w3.org/TR/vc-di-bbs/)

`bbs-2023`

Validates zero-knowledge proofs with selective disclosure

Data Integrity ECDSA Cryptosuites

W3C

[VC DI ECDSA](https://www.w3.org/TR/vc-di-ecdsa/)

`ecdsa-jcs-2019`, `ecdsa-rdfc-2019`

Confirms ECDSA signatures with P-256/secp256k1

Data Integrity EdDSA Cryptosuites

W3C

[VC DI EdDSA](https://www.w3.org/TR/vc-di-eddsa/)

`eddsa-2022`

Verifies Ed25519 signatures with high performance

ISO Mobile Driving License

ISO

[ISO 18013-5:2021](https://www.iso.org/standard/69084.html)

mDL signatures

Verifies mobile credential signatures per ISO standard

JOSE-COSE

W3C

[JOSE-COSE](https://www.w3.org/TR/vc-jose-cose/)

JOSE/COSE signatures

Validates JSON/CBOR object signatures and encryption

JSON Web Token (JWT)

IETF

[RFC 7519](https://datatracker.ietf.org/doc/rfc7519/)

JWT signatures

Verifies JWT signatures using JOSE algorithms

SD-JWT Verifiable Credential

IETF

[SD-JWT Draft](https://www.ietf.org/archive/id/draft-ietf-oauth-sd-jwt-vc-13.html)

SD-JWT signatures

Validates signatures with selective disclosure support

Verifiable Credential Data Integrity 1.0

W3C

[VC Data Integrity](https://www.w3.org/TR/vc-data-integrity/)

Data Integrity proofs

Validates signatures using multiple cryptosuites

## Proof Verification Process

[Section titled “Proof Verification Process”](#proof-verification-process)

flowchart TD
    subgraph "Proof Verification"
        Input\[Credential/Presentation\] --> DetectProof\[Detect Proof Type\]
        DetectProof --> ResolveIssuer\[Resolve Issuer\]
        ResolveIssuer --> FetchKeys\[Fetch Verification Methods\]
        FetchKeys --> ValidateProof\[Validate Proof\]
        ValidateProof --> Decision{Valid Proof?}
        Decision -->|Yes| Valid\[Valid\]
        Decision -->|No| Invalid\[Invalid Proof\]
    end

    Resolver\[Resolver\] -.-> |"DID Resolution"| ResolveIssuer

    style Input fill:#f9f9f9,stroke:#333,stroke-width:1px
    style DetectProof fill:#e1f5fe,stroke:#333,stroke-width:1px
    style ResolveIssuer fill:#e1f5fe,stroke:#333,stroke-width:1px
    style FetchKeys fill:#e1f5fe,stroke:#333,stroke-width:1px
    style ValidateProof fill:#e1f5fe,stroke:#333,stroke-width:1px
    style Decision fill:#e1f5fe,stroke:#333,stroke-width:1px
    style Valid fill:#dcedc8,stroke:#333,stroke-width:1px
    style Invalid fill:#ffcdd2,stroke:#333,stroke-width:1px
    style Resolver fill:#fff9c4,stroke:#333,stroke-width:1px

When verifying cryptographic proofs, the policy follows these steps:

1.  **Proof detection** - Identifies the type of proof used in the credential
2.  **Issuer resolution** - Resolves the issuer’s DID to retrieve verification methods
3.  **Key retrieval** - Fetches the appropriate cryptographic keys for verification
4.  **Proof validation** - Verifies the cryptographic proof against the credential
5.  **Result determination** - Returns the verification result based on cryptographic validation

## Data Integrity Proofs

[Section titled “Data Integrity Proofs”](#data-integrity-proofs)

The [W3C Data Integrity](https://www.w3.org/TR/vc-data-integrity/) specification defines a framework for creating and verifying cryptographic proofs for credentials. The verifier supports multiple cryptosuites:

Cryptosuite

Description

Key Algorithms

Best For

`eddsa-2022`

EdDSA signatures

Ed25519

High-performance verification

`ecdsa-jcs-2019`

ECDSA with JSON canonicalization

secp256k1, P-256

Cross-platform compatibility

`ecdsa-rdfc-2019`

ECDSA with RDF canonicalization

secp256k1, P-256

Semantic web applications

`bbs-2023`

BBS+ signatures

BLS12-381

Privacy-preserving credentials

`ecdsa-sd-2023`

ECDSA with selective disclosure

secp256k1, P-256

Selective disclosure presentations

## Integration with Resolver

[Section titled “Integration with Resolver”](#integration-with-resolver)

The proof verification policy depends on the resolver service to:

1.  Resolve DIDs to DID documents
2.  Retrieve verification methods (public keys)
3.  Validate proof chains for nested proofs
4.  Support multiple DID methods

## Configuration

[Section titled “Configuration”](#configuration)

The proof verification policy offers various configuration options that control its behavior, including:

-   Enabling or disabling proof verification via the `skip` property
-   Configuring supported proof formats and cryptosuites
-   Setting verification method resolution options
-   Controlling validation behavior for different credential types
-   Specifying accepted signing algorithms

For detailed configuration options, parameters, and default values, see the [Verifier Configuration Reference](/docs/reference/services/verifier/configuration#proof).

[Previous  
Not Before](/docs/reference/services/verifier/policies/not-before/) [Next  
Schema](/docs/reference/services/verifier/policies/schema/)
```
```

```
Tool: webfetch

**Input:**
```json
{
  "format": "markdown",
  "url": "https://vidos.id/docs/reference/services/verifier/policies/format/"
}
```
**Output:**
```
Format Verification Policy Reference | Vidos      [Skip to content](#_top)

 [![Vidos Logo](/docs/_astro/vidos-logo-long.CCvhBbmO.svg) Vidos](/docs/)

-   [Explanations](/docs/explanations/services/)
-   [References](/docs/reference/services/authorizer/)
-   [Tutorials](/docs/tutorials/services/verifier/)
-   [Guides](/docs/guides/management/instances/create/)

Search CtrlK

Cancel

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   [Trust Triangle](/docs/explanations/triangle-of-trust/)
-   Management
    
    -   [Overview](/docs/explanations/management/)
    -   [Configurations](/docs/explanations/management/configurations/)
    -   [Instances](/docs/explanations/management/instances/)
    -   [Regions](/docs/explanations/management/regions/)
    -   IAM
        
        -   [Overview](/docs/explanations/management/iam/)
        -   [API Keys](/docs/explanations/management/iam/api-keys/)
        -   [Policy Documents](/docs/explanations/management/iam/policy-documents/)
        -   [Scopes](/docs/explanations/management/iam/scopes/)
        -   [Service Instances](/docs/explanations/management/iam/service-instances/)
        -   [Service Roles](/docs/explanations/management/iam/service-roles/)
        
    
-   Services
    
    -   [Overview](/docs/explanations/services/)
    -   [Authorizer](/docs/explanations/services/authorizer/)
    -   [Gateway](/docs/explanations/services/gateway/)
    -   [Validator](/docs/explanations/services/validator/)
    -   [Verifier](/docs/explanations/services/verifier/)
    -   Resolver
        
        -   [Overview](/docs/explanations/services/resolver/)
        -   [DID Method Routing](/docs/explanations/services/resolver/did-method-routing/)
        
    
-   Standards
    
    -   DIF
        
        -   Presentation Exchange
            
            -   [Presentation Exchange](/docs/explanations/standards/dif/presentation-exchange/)
            -   [Input Descriptors](/docs/explanations/standards/dif/presentation-exchange/input-descriptors/)
            -   [Presentation Definition](/docs/explanations/standards/dif/presentation-exchange/presentation-definition/)
            -   [Presentation Submission](/docs/explanations/standards/dif/presentation-exchange/presentation-submission/)
            -   [Submission Requirements](/docs/explanations/standards/dif/presentation-exchange/submission-requirements/)
            
        
    -   OIDF
        
        -   DCQL
            
            -   [Digital Credential Query Language](/docs/explanations/standards/oidf/dcql/)
            -   [Claim Queries](/docs/explanations/standards/oidf/dcql/claim-queries/)
            -   [Credential Queries](/docs/explanations/standards/oidf/dcql/credential-queries/)
            -   [Credential Sets](/docs/explanations/standards/oidf/dcql/credential-sets/)
            -   [Trusted Authorities](/docs/explanations/standards/oidf/dcql/trusted-authorities/)
            
        -   OpenID4VP
            
            -   [OpenID4VP](/docs/explanations/standards/oidf/openid4vp/)
            -   [Authorization requests](/docs/explanations/standards/oidf/openid4vp/authorization-requests/)
            -   [Digital Credentials API](/docs/explanations/standards/oidf/openid4vp/digital-credentials-api/)
            -   [Flows and UX](/docs/explanations/standards/oidf/openid4vp/flows-and-ux/)
            -   [Metadata and trust](/docs/explanations/standards/oidf/openid4vp/metadata-and-trust/)
            -   [Responses](/docs/explanations/standards/oidf/openid4vp/responses/)
            -   [Security and validation](/docs/explanations/standards/oidf/openid4vp/security-and-validation/)
            
        
    -   W3C
        
        -   Decentralized Identifiers
            
            -   [Decentralized Identifiers (DIDs)](/docs/explanations/standards/w3c/decentralized-identifiers/)
            -   [Controller Documents](/docs/explanations/standards/w3c/decentralized-identifiers/controller-document/)
            -   [DID Documents](/docs/explanations/standards/w3c/decentralized-identifiers/documents/)
            -   [DID Methods](/docs/explanations/standards/w3c/decentralized-identifiers/methods/)
            -   [DID Resolution](/docs/explanations/standards/w3c/decentralized-identifiers/resolution/)
            -   [DID URL Dereferencing](/docs/explanations/standards/w3c/decentralized-identifiers/url-dereferencing/)
            -   [DID Use Cases](/docs/explanations/standards/w3c/decentralized-identifiers/use-cases/)
            -   [Verification Methods](/docs/explanations/standards/w3c/decentralized-identifiers/verification-methods/)
            
        -   Digital Credentials API
            
            -   [Digital Credentials API](/docs/explanations/standards/w3c/digital-credentials/)
            -   [Methods](/docs/explanations/standards/w3c/digital-credentials/api-methods/)
            -   [Permissions Policy](/docs/explanations/standards/w3c/digital-credentials/permissions-policy/)
            -   [Privacy and security](/docs/explanations/standards/w3c/digital-credentials/privacy-and-security/)
            -   [Protocol registry](/docs/explanations/standards/w3c/digital-credentials/protocol-registry/)
            
        -   Verifiable Credentials
            
            -   [Verifiable Credentials](/docs/explanations/standards/w3c/verifiable-credentials/)
            -   [Credential Schemas](/docs/explanations/standards/w3c/verifiable-credentials/credential-schema/)
            -   [Credential Status](/docs/explanations/standards/w3c/verifiable-credentials/credential-status/)
            -   [Issuers](/docs/explanations/standards/w3c/verifiable-credentials/issuer/)
            -   [Securing Mechanisms](/docs/explanations/standards/w3c/verifiable-credentials/securing-mechanisms/)
            -   [Credential Subjects](/docs/explanations/standards/w3c/verifiable-credentials/subject/)
            -   [Validity Period](/docs/explanations/standards/w3c/verifiable-credentials/validity-period/)
            -   [Verifiable Presentations](/docs/explanations/standards/w3c/verifiable-credentials/verifiable-presentations/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto   

-   Management
    
    -   IAM
        
        -   [Create Account](/docs/guides/management/iam/create-account/)
        -   [Create API Key](/docs/guides/management/iam/create-api-key/)
        -   [Setup MFA](/docs/guides/management/iam/setup-mfa/)
        
    -   Instances
        
        -   [Configure](/docs/guides/management/instances/configure/)
        -   [Create](/docs/guides/management/instances/create/)
        -   [Instance Logs](/docs/guides/management/instances/logs/)
        -   [Stop / Start](/docs/guides/management/instances/state/)
        
    
-   Services
    
    -   Resolver
        
        -   [Pick DID Method](/docs/guides/services/resolver/pick-w3c-did-method/)
        -   [Test](/docs/guides/services/resolver/test/)
        -   Configure
            
            -   [DID methods](/docs/guides/services/resolver/configure/did-method-support/)
            -   [Response type](/docs/guides/services/resolver/configure/response-type/)
            
        
    -   Verifier
        
        -   Configure
            
            -   [Expired Credentials](/docs/guides/services/verifier/configure/allow-expired-credentials/)
            
        -   Verify
            
            -   [SD-JWT VC](/docs/guides/services/verifier/verify/ietf-oauth-sd-jwt-vc/)
            -   [Setup](/docs/guides/services/verifier/verify/setup/)
            -   [W3C Verifiable Credential v1.1](/docs/guides/services/verifier/verify/w3c-vc-11/)
            -   [W3C Verifiable Presentation v1.1](/docs/guides/services/verifier/verify/w3c-vc-11-vp/)
            -   [W3C Verifiable Credential v2.0](/docs/guides/services/verifier/verify/w3c-vc-20/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Configuration
    
    -   [CORS](/docs/reference/configuration/cors/)
    -   [Service Instances](/docs/reference/configuration/service-instances/)
    -   [Service Roles](/docs/reference/configuration/service-roles/)
    
-   Errors
    
    -   [credential-query-evaluation](/docs/reference/errors/credential-query-evaluation/)
    -   [credential-query-format](/docs/reference/errors/credential-query-format/)
    -   [credential-query-unsupported](/docs/reference/errors/credential-query-unsupported/)
    -   [invalid-format](/docs/reference/errors/invalid-format/)
    -   [not-allowed-by-configuration](/docs/reference/errors/not-allowed-by-configuration/)
    -   [proof-cryptographic-error](/docs/reference/errors/proof-cryptographic-error/)
    -   [proof-resolve-issuer](/docs/reference/errors/proof-resolve-issuer/)
    -   [proof-unsupported-feature](/docs/reference/errors/proof-unsupported-feature/)
    -   [proof-verification-failed](/docs/reference/errors/proof-verification-failed/)
    -   [trusted-issuer-configuration-invalid](/docs/reference/errors/trusted-issuer-configuration-invalid/)
    -   [trusted-issuer-unsupported](/docs/reference/errors/trusted-issuer-unsupported/)
    -   [trusted-issuer-untrusted](/docs/reference/errors/trusted-issuer-untrusted/)
    -   [trusted-issuer-validation-error](/docs/reference/errors/trusted-issuer-validation-error/)
    -   [unexpected-error](/docs/reference/errors/unexpected-error/)
    -   [unsupported-format](/docs/reference/errors/unsupported-format/)
    
-   IAM
    
    -   [Policy Documents](/docs/reference/iam/policy-documents/)
    -   [Scopes](/docs/reference/iam/scopes/)
    
-   Services
    
    -   Authorizer
        
        -   [Overview](/docs/reference/services/authorizer/)
        -   [API](/docs/reference/services/authorizer/api/)
        -   [Configuration](/docs/reference/services/authorizer/configuration/)
        -   Policies
            
            -   [Policies](/docs/reference/services/authorizer/policies/)
            -   [Format](/docs/reference/services/authorizer/policies/format/)
            -   [Validate](/docs/reference/services/authorizer/policies/validate/)
            -   [Verify](/docs/reference/services/authorizer/policies/verify/)
            
        
    -   Gateway
        
        -   [Overview](/docs/reference/services/gateway/)
        -   [Configuration](/docs/reference/services/gateway/configuration/)
        
    -   Resolver
        
        -   [Overview](/docs/reference/services/resolver/)
        -   [Configuration](/docs/reference/services/resolver/configuration/)
        -   [Supported DID Methods](/docs/reference/services/resolver/supported-did-methods/)
        
    -   Validator
        
        -   [Overview](/docs/reference/services/validator/)
        -   [API](/docs/reference/services/validator/api/)
        -   [Configuration](/docs/reference/services/validator/configuration/)
        -   [Errors](/docs/reference/services/validator/errors/)
        -   [Standards](/docs/reference/services/validator/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/validator/policies/)
            -   [Credential Query](/docs/reference/services/validator/policies/credential-query/)
            -   [Credential Format](/docs/reference/services/validator/policies/format/)
            -   [Trusted Issuer](/docs/reference/services/validator/policies/trusted-issuer/)
            
        
    -   Verifier
        
        -   [Overview](/docs/reference/services/verifier/)
        -   [API](/docs/reference/services/verifier/api/)
        -   [Configuration](/docs/reference/services/verifier/configuration/)
        -   [Errors](/docs/reference/services/verifier/errors/)
        -   [Standards](/docs/reference/services/verifier/standards/)
        -   Policies
            
            -   [Policies](/docs/reference/services/verifier/policies/)
            -   [Format](/docs/reference/services/verifier/policies/format/)
            -   [Not After](/docs/reference/services/verifier/policies/not-after/)
            -   [Not Before](/docs/reference/services/verifier/policies/not-before/)
            -   [Proof](/docs/reference/services/verifier/policies/proof/)
            -   [Schema](/docs/reference/services/verifier/policies/schema/)
            -   [Status](/docs/reference/services/verifier/policies/status/)
            
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

-   Services
    
    -   Resolver
        
        -   [Create and Resolve](/docs/tutorials/services/resolver/create-and-resolve/)
        -   [DID URL Dereferencing](/docs/tutorials/services/resolver/did-url-dereferencing/)
        -   [Create and Resolve DIDs with Onyx](/docs/tutorials/services/resolver/onyx-create-did/)
        -   [Resolve with API Key](/docs/tutorials/services/resolver/resolve-via-api/)
        
    -   Verifier
        
        -   [Verify a Credential](/docs/tutorials/services/verifier/)
        
    

[Home](https://vidos.id/) [Support](https://support.vidos.id/) [Vidos Dashboard](https://dashboard.vidos.id/)

Select theme DarkLightAuto 

On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [Format Verification Process](#format-verification-process)
-   [Configuration](#configuration)

Ask ChatGPT View Markdown

## On this page

-   [Overview](#_top)
-   [Policy Overview](#policy-overview)
-   [Supported Standards](#supported-standards)
-   [Format Verification Process](#format-verification-process)
-   [Configuration](#configuration)

# Format Verification Policy Reference

This reference documents the format verification policy for the verifier service. The format policy validates that credentials and presentations conform to supported standards and data structures.

## Policy Overview

[Section titled “Policy Overview”](#policy-overview)

The format verification policy is the first check in the verification process and ensures that the credential or presentation is structured correctly according to supported standards. It validates the data format, required fields, and structural integrity before proceeding with more specific verification checks.

## Supported Standards

[Section titled “Supported Standards”](#supported-standards)

The format verification policy supports standards from multiple standards organizations:

Standard

Organization

Specification

Related Formats

Format Verification Aspects

JSON-LD 1.1

W3C

[JSON-LD 1.1](https://www.w3.org/TR/json-ld11/)

W3C VCs, Data Integrity

Linked data context validation, @context resolution

JSON Web Token (JWT)

IETF

[RFC 7519](https://datatracker.ietf.org/doc/rfc7519/)

JWT Credentials

JWT structure, header validation, claims format

SD-JWT VC

IETF

[SD-JWT Draft](https://www.ietf.org/archive/id/draft-ietf-oauth-sd-jwt-vc-13.html)

SD-JWT Credentials

JWT structure, disclosure format, binding validation

ISO 18013-5:2021

ISO

[ISO 18013-5](https://www.iso.org/standard/69084.html)

Mobile Driving License

Data elements, document structure, security features

Verifiable Credentials Data Model v1.1

W3C

[VC Data Model v1.1](https://www.w3.org/TR/vc-data-model/)

W3C VCs

JSON-LD context, credential types, required properties

Verifiable Credentials Data Model v2.0

W3C

[VC Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/)

W3C VCs

Updated JSON-LD context, credential structure

## Format Verification Process

[Section titled “Format Verification Process”](#format-verification-process)

flowchart TD
    subgraph "Format Verification"
        Input\[Credential/Presentation\] --> DetectFormat\[Format Detection\]
        DetectFormat --> ValidateStructure\[Structure Validation\]
        ValidateStructure --> ValidateContext\[Context Validation\]
        ValidateContext --> ValidateType\[Type Validation\]
        ValidateType --> ValidateRequired\[Required Fields Check\]
        ValidateRequired --> Decision{Valid Format?}
        Decision -->|Yes| Valid\[Valid\]
        Decision -->|No| Invalid\[Invalid Format\]
    end

    style Input fill:#f9f9f9,stroke:#333,stroke-width:1px
    style DetectFormat fill:#e1f5fe,stroke:#333,stroke-width:1px
    style ValidateStructure fill:#e1f5fe,stroke:#333,stroke-width:1px
    style ValidateContext fill:#e1f5fe,stroke:#333,stroke-width:1px
    style ValidateType fill:#e1f5fe,stroke:#333,stroke-width:1px
    style ValidateRequired fill:#e1f5fe,stroke:#333,stroke-width:1px
    style Decision fill:#e1f5fe,stroke:#333,stroke-width:1px
    style Valid fill:#dcedc8,stroke:#333,stroke-width:1px
    style Invalid fill:#ffcdd2,stroke:#333,stroke-width:1px

When validating format, the policy performs the following checks:

1.  **Format detection** - Identifies the format of the input (W3C VC, JWT, SD-JWT, etc.)
2.  **Structure validation** - Verifies the overall structure follows the expected format
3.  **Context validation** - For JSON-LD, validates the `@context` values
4.  **Type validation** - Ensures the credential has the expected `type` values
5.  **Required fields** - Checks that all required fields for the format are present
6.  **Format-specific validation** - Applies additional checks based on the detected format

## Configuration

[Section titled “Configuration”](#configuration)

The format verification policy offers various configuration options that control its behavior, including:

-   Specifying supported formats and versions

For detailed configuration options, parameters, and default values, see the [Verifier Configuration Reference](/docs/reference/services/verifier/configuration#format).

[Previous  
Policies](/docs/reference/services/verifier/policies/) [Next  
Not After](/docs/reference/services/verifier/policies/not-after/)
```
```

---

## Assistant (Build · grok-code-fast-1 · 13.8s)

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"validator.credentialQuery\": {\n\t\tdescription: \"Ensures verifiable presentations contain the credentials and data required by credential queries, validating compatibility between requests and submissions across multiple standards\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/validator/policies/credential-query/\",\n\t},",
  "oldString": "\t\"validator.credentialQuery\": {\n\t\tdescription: \"Validates the credential query request format\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/validator/policies/credential-query/\",\n\t},"
}
```
**Output:**
```
Edit applied successfully.

LSP errors detected in this file, please fix:
<diagnostics file="/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts">
ERROR [17:43] expected `:` but instead found `,`
ERROR [27:18] Const declarations must have an initialized value.
ERROR [31:64] Declarations inside of a `const` declaration may not have duplicates
ERROR [31:118] Const declarations must have an initialized value.
ERROR [33:35] Expected an identifier, an array pattern, or an object pattern but instead found '}'.
ERROR [37:11] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [39:10] Expected a statement but instead found ',

	// Verifier service policies
	"verifier.notAfter":'.
ERROR [43:16] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [45:28] Expected a statement but instead found ',
	"verifier.notBefore":'.
ERROR [48:19] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [50:20] Expected a statement but instead found ',
	"verifier.proof":'.
ERROR [53:44] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [55:65] Expected a statement but instead found ',

	// Default policies (no service specified)
	format:'.
ERROR [62:36] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [63:60] Expected a statement but instead found ',
}'.
ERROR [19:8] This property is later overwritten by an object member with the same name.
ERROR [33:64] Do not use the description variable name as a label
ERROR [40:58] Do not use the description variable name as a label
ERROR [45:57] Do not use the description variable name as a label
ERROR [50:45] Do not use the description variable name as a label
... and 1 more
</diagnostics>
```
```

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"validator.trustedIssuer\": {\n\t\tdescription: \"Validates that credential issuers are trusted by verifying their certificate chains against configured root certificates\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/validator/policies/trusted-issuer/\",\n\t},",
  "oldString": "\t\"validator.trustedIssuer\": {\n\t\tdescription: \"Verifies the credential issuer is trusted\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/validator/policies/trusted-issuer/\",\n\t},"
}
```
**Output:**
```
Edit applied successfully.

LSP errors detected in this file, please fix:
<diagnostics file="/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts">
ERROR [17:43] expected `:` but instead found `,`
ERROR [27:18] Const declarations must have an initialized value.
ERROR [31:64] Declarations inside of a `const` declaration may not have duplicates
ERROR [31:118] Const declarations must have an initialized value.
ERROR [33:35] Expected an identifier, an array pattern, or an object pattern but instead found '}'.
ERROR [37:11] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [39:10] Expected a statement but instead found ',

	// Verifier service policies
	"verifier.notAfter":'.
ERROR [43:16] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [45:28] Expected a statement but instead found ',
	"verifier.notBefore":'.
ERROR [48:19] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [50:20] Expected a statement but instead found ',
	"verifier.proof":'.
ERROR [53:44] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [55:65] Expected a statement but instead found ',

	// Default policies (no service specified)
	format:'.
ERROR [62:36] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [63:60] Expected a statement but instead found ',
}'.
ERROR [19:8] This property is later overwritten by an object member with the same name.
ERROR [33:64] Do not use the description variable name as a label
ERROR [40:58] Do not use the description variable name as a label
ERROR [45:57] Do not use the description variable name as a label
ERROR [50:45] Do not use the description variable name as a label
... and 1 more
</diagnostics>
```
```

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"authorizer.validate\": {\n\t\tdescription: \"Delegates credential and presentation validation to the validator service, coordinating the validation process within the authorization workflow\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/validate/\",\n\t},",
  "oldString": "\t\"authorizer.validate\": {\n\t\tdescription: \"Validates the authorization request\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/validate/\",\n\t},"
}
```
**Output:**
```
Edit applied successfully.

LSP errors detected in this file, please fix:
<diagnostics file="/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts">
ERROR [17:43] expected `:` but instead found `,`
ERROR [27:18] Const declarations must have an initialized value.
ERROR [31:64] Declarations inside of a `const` declaration may not have duplicates
ERROR [31:118] Const declarations must have an initialized value.
ERROR [33:35] Expected an identifier, an array pattern, or an object pattern but instead found '}'.
ERROR [72:16] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [76:20] Expected a statement but instead found ',
}'.
ERROR [19:8] This property is later overwritten by an object member with the same name.
ERROR [67:52] Do not use the description variable name as a label
</diagnostics>
```
```

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"authorizer.verify\": {\n\t\tdescription: \"Delegates cryptographic verification of presentations and ID tokens to the verifier service, coordinating verification within the authorization workflow\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/verify/\",\n\t},",
  "oldString": "\t\"authorizer.verify\": {\n\t\tdescription: \"Verifies the presentation token\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/verify/\",\n\t},"
}
```
**Output:**
```
Edit applied successfully.

LSP errors detected in this file, please fix:
<diagnostics file="/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts">
ERROR [17:43] expected `:` but instead found `,`
ERROR [27:18] Const declarations must have an initialized value.
ERROR [31:64] Declarations inside of a `const` declaration may not have duplicates
ERROR [31:118] Const declarations must have an initialized value.
ERROR [33:35] Expected an identifier, an array pattern, or an object pattern but instead found '}'.
ERROR [72:16] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [76:20] Expected a statement but instead found ',
}'.
ERROR [19:8] This property is later overwritten by an object member with the same name.
ERROR [67:52] Do not use the description variable name as a label
</diagnostics>
```
```

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"verifier.notAfter\": {\n\t\tdescription: \"Validates temporal validity by ensuring credentials and presentations have not been used after their expiration date\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/verifier/policies/not-after/\",\n\t},",
  "oldString": "\t\"verifier.notAfter\": {\n\t\tdescription: \"Checks the credential has not expired\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/verifier/policies/not-after/\",\n\t},"
}
```
**Output:**
```
Edit applied successfully.

LSP errors detected in this file, please fix:
<diagnostics file="/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts">
ERROR [17:43] expected `:` but instead found `,`
ERROR [27:18] Const declarations must have an initialized value.
ERROR [31:64] Declarations inside of a `const` declaration may not have duplicates
ERROR [31:118] Const declarations must have an initialized value.
ERROR [33:35] Expected an identifier, an array pattern, or an object pattern but instead found '}'.
ERROR [72:16] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [76:20] Expected a statement but instead found ',
}'.
ERROR [19:8] This property is later overwritten by an object member with the same name.
ERROR [67:52] Do not use the description variable name as a label
</diagnostics>
```
```

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"verifier.notBefore\": {\n\t\tdescription: \"Validates temporal validity by ensuring credentials and presentations are not used before their effective date\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/verifier/policies/not-before/\",\n\t},",
  "oldString": "\t\"verifier.notBefore\": {\n\t\tdescription: \"Checks the credential is already valid\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/verifier/policies/not-before/\",\n\t},"
}
```
**Output:**
```
Edit applied successfully.

LSP errors detected in this file, please fix:
<diagnostics file="/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts">
ERROR [17:43] expected `:` but instead found `,`
ERROR [27:18] Const declarations must have an initialized value.
ERROR [31:64] Declarations inside of a `const` declaration may not have duplicates
ERROR [31:118] Const declarations must have an initialized value.
ERROR [33:35] Expected an identifier, an array pattern, or an object pattern but instead found '}'.
ERROR [72:16] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [76:20] Expected a statement but instead found ',
}'.
ERROR [19:8] This property is later overwritten by an object member with the same name.
ERROR [67:52] Do not use the description variable name as a label
</diagnostics>
```
```

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"verifier.proof\": {\n\t\tdescription: \"Validates cryptographic signatures and proofs to ensure credential and presentation authenticity and integrity\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/verifier/policies/proof/\",\n\t},",
  "oldString": "\t\"verifier.proof\": {\n\t\tdescription: \"Verifies the cryptographic proof of the credential\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/verifier/policies/proof/\",\n\t},"
}
```
**Output:**
```
Edit applied successfully.

LSP errors detected in this file, please fix:
<diagnostics file="/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts">
ERROR [17:43] expected `:` but instead found `,`
ERROR [27:18] Const declarations must have an initialized value.
ERROR [31:64] Declarations inside of a `const` declaration may not have duplicates
ERROR [31:118] Const declarations must have an initialized value.
ERROR [33:35] Expected an identifier, an array pattern, or an object pattern but instead found '}'.
ERROR [72:16] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [76:20] Expected a statement but instead found ',
}'.
ERROR [19:8] This property is later overwritten by an object member with the same name.
ERROR [67:52] Do not use the description variable name as a label
</diagnostics>
```
```

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\tformat: {\n\t\tdescription: \"Validates that credentials and presentations conform to supported standards and data structures\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/verifier/policies/format/\",\n\t},",
  "oldString": "\tformat: {\n\t\tdescription: \"Verifies the credential format matches expected type\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/verifier/policies/format/\",\n\t},"
}
```
**Output:**
```
Edit applied successfully.

LSP errors detected in this file, please fix:
<diagnostics file="/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts">
ERROR [17:43] expected `:` but instead found `,`
ERROR [27:18] Const declarations must have an initialized value.
ERROR [31:64] Declarations inside of a `const` declaration may not have duplicates
ERROR [31:118] Const declarations must have an initialized value.
ERROR [33:35] Expected an identifier, an array pattern, or an object pattern but instead found '}'.
ERROR [72:16] Expected a semicolon or an implicit semicolon after a statement, but found none
ERROR [76:20] Expected a statement but instead found ',
}'.
ERROR [19:8] This property is later overwritten by an object member with the same name.
ERROR [67:52] Do not use the description variable name as a label
</diagnostics>
```
```

---

## Assistant (Build · grok-code-fast-1 · 2.7s)

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts"
}
```
**Output:**
```
<file>
00001| export interface PolicyDefinition {
00002| 	description: string;
00003| 	docsUrl: string;
00004| }
00005| 
00006| // Policy definitions map: "service.policy" or "policy" (default)
00007| export const policyDefinitions: Record<string, PolicyDefinition> = {
00008| 	// Validator service policies
00009| 	"validator.credentialQuery": {
00010| 		description:
00011| 			"Ensures verifiable presentations contain the credentials and data required by credential queries, validating compatibility between requests and submissions across multiple standards",
00012| 		docsUrl:
00013| 			"https://vidos.id/docs/reference/services/validator/policies/credential-query/",
00014| 	},
00015| 	"validator.trustedIssuer": {
00016| 		description:
00017| 			"Validates that credential issuers are trusted by verifying their certificate chains against configured root certificates",
00018| 		docsUrl:
00019| 			"https://vidos.id/docs/reference/services/validator/policies/trusted-issuer/",
00020| 	},
00021| 
00022| 	// Authorizer service policies
00023| 	"authorizer.validate": {
00024| 		description:
00025| 			"Delegates credential and presentation validation to the validator service, coordinating the validation process within the authorization workflow",
00026| 		docsUrl:
00027| 			"https://vidos.id/docs/reference/services/authorizer/policies/validate/",
00028| 	},
00029| 	"authorizer.verify": {
00030| 		description:
00031| 			"Delegates cryptographic verification of presentations and ID tokens to the verifier service, coordinating verification within the authorization workflow",
00032| 		docsUrl:
00033| 			"https://vidos.id/docs/reference/services/authorizer/policies/verify/",
00034| 	},
00035| 
00036| 	// Verifier service policies
00037| 	"verifier.notAfter": {
00038| 		description:
00039| 			"Validates temporal validity by ensuring credentials and presentations have not been used after their expiration date",
00040| 		docsUrl:
00041| 			"https://vidos.id/docs/reference/services/verifier/policies/not-after/",
00042| 	},
00043| 	"verifier.notBefore": {
00044| 		description:
00045| 			"Validates temporal validity by ensuring credentials and presentations are not used before their effective date",
00046| 		docsUrl:
00047| 			"https://vidos.id/docs/reference/services/verifier/policies/not-before/",
00048| 	},
00049| 	"verifier.proof": {
00050| 		description:
00051| 			"Validates cryptographic signatures and proofs to ensure credential and presentation authenticity and integrity",
00052| 		docsUrl:
00053| 			"https://vidos.id/docs/reference/services/verifier/policies/proof/",
00054| 	},
00055| 
00056| 	// Default policies (no service specified)
00057| 	format: {
00058| 		description:
00059| 			"Validates that credentials and presentations conform to supported standards and data structures",
00060| 		docsUrl:
00061| 			"https://vidos.id/docs/reference/services/verifier/policies/format/",
00062| 	},
00063| };
00064| 
00065| /**
00066|  * Get policy definition by service and policy name.
00067|  * Falls back to policy name only if service-specific definition doesn't exist.
00068|  */
00069| export function getPolicyDefinition(
00070| 	policyName: string,
00071| 	service?: string,
00072| ): PolicyDefinition | undefined {
00073| 	const keys = [...(service ? [`${service}.${policyName}`] : []), policyName];
00074| 
00075| 	for (const key of keys) {
00076| 		const definition = policyDefinitions[key];
00077| 		if (definition) {
00078| 			return definition;
00079| 		}
00080| 	}
00081| }
00082| 

(End of file - total 82 lines)
</file>
```
```

---

## Assistant (Build · grok-code-fast-1 · 6.0s)

```
Tool: bash

**Input:**
```json
{
  "command": "bun run type-check",
  "description": "Runs TypeScript type checking to ensure no errors after the policy description updates"
}
```
**Output:**
```
$ tsc --noEmit

```
```

---

## Assistant (Build · grok-code-fast-1 · 2.2s)

```
Tool: bash

**Input:**
```json
{
  "command": "bun run lint",
  "description": "Runs the linter to ensure code style and quality after the policy description updates"
}
```
**Output:**
```
$ biome lint
.agents/skills/zustand-state-management/templates/nextjs-store.ts:20:19 lint/correctness/noUnusedImports  FIXABLE  ━━━━━━━━━━

  ! Several of these imports are unused.
  
    19 │ import { create } from 'zustand'
  > 20 │ import { persist, createJSONStorage } from 'zustand/middleware'
       │                   ^^^^^^^^^^^^^^^^^
    21 │ 
    22 │ interface User {
  
  i Unused imports might be the result of an incomplete refactoring.
  
  i Unsafe fix: Remove the unused imports.
  
    20 │ import·{·persist,·createJSONStorage·}·from·'zustand/middleware'
       │                   ------------------                           

.agents/skills/zustand-state-management/templates/persist-store.ts:90:33 lint/suspicious/noExplicitAny ━━━━━━━━━━

  ! Unexpected any. Specify a different type.
  
    88 │       // Optional: version and migration for schema changes
    89 │       version: 1,
  > 90 │       migrate: (persistedState: any, version) => {
       │                                 ^^^
    91 │         if (version === 0) {
    92 │           // Migration from version 0 to 1
  
  i any disables many type checking rules. Its use should be avoided.
  

.agents/skills/zustand-state-management/templates/persist-store.ts:19:19 lint/correctness/noUnusedImports  FIXABLE  ━━━━━━━━━━

  ! Several of these imports are unused.
  
    18 │ import { create } from 'zustand'
  > 19 │ import { persist, createJSONStorage } from 'zustand/middleware'
       │                   ^^^^^^^^^^^^^^^^^
    20 │ 
    21 │ interface User {
  
  i Unused imports might be the result of an incomplete refactoring.
  
  i Unsafe fix: Remove the unused imports.
  
    19 │ import·{·persist,·createJSONStorage·}·from·'zustand/middleware'
       │                   ------------------                           

.agents/skills/zustand-state-management/templates/slices-pattern.ts:18:8 lint/style/useImportType  FIXABLE  ━━━━━━━━━━

  ! Some named imports are only used as types.
  
    16 │  */
    17 │ 
  > 18 │ import { create, StateCreator } from 'zustand'
       │        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    19 │ import { devtools } from 'zustand/middleware'
    20 │ 
  
  i This import is only used as a type.
  
    16 │  */
    17 │ 
  > 18 │ import { create, StateCreator } from 'zustand'
       │                  ^^^^^^^^^^^^
    19 │ import { devtools } from 'zustand/middleware'
    20 │ 
  
  i Importing the types with import type ensures that they are removed by the compilers and avoids loading unnecessary modules.
  
  i Safe fix: Add inline type keywords.
  
    18 │ import·{·create,·type·StateCreator·}·from·'zustand'
       │                  +++++                             

.agents/skills/zustand-state-management/templates/slices-pattern.ts:87:11 lint/correctness/noUnusedFunctionParameters  FIXABLE  ━━━━━━━━━━

  ! This parameter is unused.
  
    85 │   [],
    86 │   CartSlice
  > 87 │ > = (set, get) => ({
       │           ^^^
    88 │   items: [],
    89 │ 
  
  i Unused parameters might be the result of an incomplete refactoring.
  
  i Unsafe fix: If this is intentional, prepend get with an underscore.
  
     85  85 │     [],
     86  86 │     CartSlice
     87     │ - >·=·(set,·get)·=>·({
         87 │ + >·=·(set,·_get)·=>·({
     88  88 │     items: [],
     89  89 │   
  

src/components/ui/dropdown-menu.tsx:1:8 lint/style/useImportType  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━

  ! All these imports are only used as types.
  
  > 1 │ import * as React from "react"
      │        ^^^^^^^^^^^^^^^^^^^^^^^
    2 │ import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
    3 │ import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
  
  i Importing the types with import type ensures that they are removed by the compilers and avoids loading unnecessary modules.
  
  i Safe fix: Use import type.
  
    1 │ import·type·*·as·React·from·"react"
      │        +++++                       

src/queries/useAuthorizationStatusQuery.ts:20:38 lint/style/noNonNullAssertion ━━━━━━━━━━━━━━━━━━━━━

  ! Forbidden non-null assertion.
  
    19 │ 	return useQuery({
  > 20 │ 		queryKey: authorizationKeys.status(authorizationId!),
       │ 		                                   ^^^^^^^^^^^^^^^^
    21 │ 		queryFn: async () => {
    22 │ 			const client = createAuthorizerClient(authorizerUrl);
  

src/queries/useAuthorizationStatusQuery.ts:27:32 lint/style/noNonNullAssertion ━━━━━━━━━━━━━━━━━━━━━

  ! Forbidden non-null assertion.
  
    25 │ 				{
    26 │ 					params: {
  > 27 │ 						path: { authorizationId: authorizationId! },
       │ 						                         ^^^^^^^^^^^^^^^^
    28 │ 					},
    29 │ 				},
  

src/queries/usePolicyResponseQuery.ts:15:28 lint/style/noNonNullAssertion ━━━━━━━━━━━━━━━━━━━━━━━━━━

  ! Forbidden non-null assertion.
  
    13 │ 	const queryClient = useQueryClient();
    14 │ 	const statusData = queryClient.getQueryData<AuthorizationStatusResponse>(
  > 15 │ 		authorizationKeys.status(authorizationId!),
       │ 		                         ^^^^^^^^^^^^^^^^
    16 │ 	);
    17 │ 
  

src/queries/usePolicyResponseQuery.ts:19:38 lint/style/noNonNullAssertion ━━━━━━━━━━━━━━━━━━━━━━━━━━

  ! Forbidden non-null assertion.
  
    18 │ 	return useQuery({
  > 19 │ 		queryKey: authorizationKeys.policy(authorizationId!),
       │ 		                                   ^^^^^^^^^^^^^^^^
    20 │ 		queryFn: async () => {
    21 │ 			const client = createAuthorizerClient(authorizerUrl);
  

src/queries/usePolicyResponseQuery.ts:26:32 lint/style/noNonNullAssertion ━━━━━━━━━━━━━━━━━━━━━━━━━━

  ! Forbidden non-null assertion.
  
    24 │ 				{
    25 │ 					params: {
  > 26 │ 						path: { authorizationId: authorizationId! },
       │ 						                         ^^^^^^^^^^^^^^^^
    27 │ 					},
    28 │ 				},
  

src/types/api.ts:54:6 suppressions/unused ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ! Suppression comment has no effect. Remove the suppression or make sure you are suppressing the correct rule.
  
    52 │ 				vp_token: Record<
    53 │ 					string,
  > 54 │ 					// biome-ignore lint: API spec allows string or object
       │ 					^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    55 │ 					| ({ [key: string]: unknown } | string)[]
    56 │ 					| ({ [key: string]: unknown } | string)
  

src/vite-env.d.ts:11:9 lint/complexity/noStaticOnlyClass ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ! Avoid classes that contain only static members.
  
     9 │ // W3C Digital Credentials API
    10 │ // Spec: https://www.w3.org/TR/digital-credentials/
  > 11 │ declare class DigitalCredential {
       │         ^^^^^^^^^^^^^^^^^^^^^^^^^
  > 12 │ 	static userAgentAllowsProtocol(protocol: string): boolean;
  > 13 │ }
       │ ^
    14 │ 
  
  i Prefer using simple functions instead of classes with only static members.
  

Checked 110 files in 26ms. No fixes applied.
Found 13 warnings.

```
```

---

## Assistant (Build · grok-code-fast-1 · 3.0s)

The policy descriptions in `src/config/policyDefinitions.ts` have been successfully improved by incorporating detailed explanations from the linked documentation. Each description now provides clearer, more comprehensive information about what each policy validates or verifies, while maintaining the existing file structure and style. Type checking and linting confirm no issues with the updated code.

---

## User

Improve:
- authorizer.verify - the verifier has the purpose of verifying that the credential is valid from the credential and issuance perspective
- auhtorizer.validate - the validator has the purpose of validating that the credential is valid from the reader perspective

(dont use my exact words, i am bad ad writing)

---

## Assistant (Build · grok-code-fast-1 · 8.4s)

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"authorizer.validate\": {\n\t\tdescription: \"Validates that credentials and presentations comply with reader policies and requirements in the authorization process\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/validate/\",\n\t},",
  "oldString": "\t\"authorizer.validate\": {\n\t\tdescription:\n\t\t\t\"Delegates credential and presentation validation to the validator service, coordinating the validation process within the authorization workflow\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/validate/\",\n\t},"
}
```
**Error:**
```
Error: File /Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts has been modified since it was last read.
Last modification: 2026-01-23T15:46:48.133Z
Last read: 2026-01-23T15:46:23.011Z

Please read the file again before modifying it.
```
```

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"authorizer.verify\": {\n\t\tdescription: \"Verifies credential authenticity, issuer trustworthiness, and cryptographic validity in the authorization workflow\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/verify/\",\n\t},",
  "oldString": "\t\"authorizer.verify\": {\n\t\tdescription:\n\t\t\t\"Delegates cryptographic verification of presentations and ID tokens to the verifier service, coordinating verification within the authorization workflow\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/verify/\",\n\t},"
}
```
**Error:**
```
Error: File /Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts has been modified since it was last read.
Last modification: 2026-01-23T15:46:48.133Z
Last read: 2026-01-23T15:46:23.011Z

Please read the file again before modifying it.
```
```

---

## Assistant (Build · grok-code-fast-1 · 2.2s)

```
Tool: read

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts"
}
```
**Output:**
```
<file>
00001| export interface PolicyDefinition {
00002| 	description: string;
00003| 	docsUrl: string;
00004| }
00005| 
00006| // Policy definitions map: "service.policy" or "policy" (default)
00007| export const policyDefinitions: Record<string, PolicyDefinition> = {
00008| 	// Validator service policies
00009| 	"validator.credentialQuery": {
00010| 		description:
00011| 			"Ensures verifiable presentations contain the credentials and data required by credential queries, validating compatibility between requests and submissions across multiple standards",
00012| 		docsUrl:
00013| 			"https://vidos.id/docs/reference/services/validator/policies/credential-query/",
00014| 	},
00015| 	"validator.trustedIssuer": {
00016| 		description:
00017| 			"Validates that credential issuers are trusted by verifying their certificate chains against configured root certificates",
00018| 		docsUrl:
00019| 			"https://vidos.id/docs/reference/services/validator/policies/trusted-issuer/",
00020| 	},
00021| 
00022| 	// Authorizer service policies
00023| 	"authorizer.validate": {
00024| 		description:
00025| 			"Delegates credential and presentation validation to the validator service, coordinating the validation process within the authorization workflow",
00026| 		docsUrl:
00027| 			"https://vidos.id/docs/reference/services/authorizer/policies/validate/",
00028| 	},
00029| 	"authorizer.verify": {
00030| 		description:
00031| 			"Delegates cryptographic verification of presentations and ID tokens to the verifier service, coordinating verification within the authorization workflow",
00032| 		docsUrl:
00033| 			"https://vidos.id/docs/reference/services/authorizer/policies/verify/",
00034| 	},
00035| 
00036| 	// Verifier service policies
00037| 	"verifier.notAfter": {
00038| 		description:
00039| 			"Validates temporal validity by ensuring credentials and presentations have not been used after their expiration date",
00040| 		docsUrl:
00041| 			"https://vidos.id/docs/reference/services/verifier/policies/not-after/",
00042| 	},
00043| 	"verifier.notBefore": {
00044| 		description:
00045| 			"Validates temporal validity by ensuring credentials and presentations are not used before their effective date",
00046| 		docsUrl:
00047| 			"https://vidos.id/docs/reference/services/verifier/policies/not-before/",
00048| 	},
00049| 	"verifier.proof": {
00050| 		description:
00051| 			"Validates cryptographic signatures and proofs to ensure credential and presentation authenticity and integrity",
00052| 		docsUrl:
00053| 			"https://vidos.id/docs/reference/services/verifier/policies/proof/",
00054| 	},
00055| 
00056| 	// Default policies (no service specified)
00057| 	format: {
00058| 		description:
00059| 			"Validates that credentials and presentations conform to supported standards and data structures",
00060| 		docsUrl:
00061| 			"https://vidos.id/docs/reference/services/verifier/policies/format/",
00062| 	},
00063| };
00064| 
00065| /**
00066|  * Get policy definition by service and policy name.
00067|  * Falls back to policy name only if service-specific definition doesn't exist.
00068|  */
00069| export function getPolicyDefinition(
00070| 	policyName: string,
00071| 	service?: string,
00072| ): PolicyDefinition | undefined {
00073| 	const keys = [...(service ? [`${service}.${policyName}`] : []), policyName];
00074| 
00075| 	for (const key of keys) {
00076| 		const definition = policyDefinitions[key];
00077| 		if (definition) {
00078| 			return definition;
00079| 		}
00080| 	}
00081| }
00082| 

(End of file - total 82 lines)
</file>
```
```

---

## Assistant (Build · grok-code-fast-1 · 14.1s)

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"authorizer.validate\": {\n\t\tdescription: \"Validates that credentials and presentations comply with reader policies and requirements in the authorization process\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/validate/\",\n\t},",
  "oldString": "\t\"authorizer.validate\": {\n\t\tdescription:\n\t\t\t\"Delegates credential and presentation validation to the validator service, coordinating the validation process within the authorization workflow\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/validate/\",\n\t},"
}
```
**Output:**
```
Edit applied successfully.
```
```

```
Tool: edit

**Input:**
```json
{
  "filePath": "/Users/antonio/dev/vidos-authorizer-demo/src/config/policyDefinitions.ts",
  "newString": "\t\"authorizer.verify\": {\n\t\tdescription: \"Verifies credential authenticity, issuer trustworthiness, and cryptographic validity in the authorization workflow\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/verify/\",\n\t},",
  "oldString": "\t\"authorizer.verify\": {\n\t\tdescription:\n\t\t\t\"Delegates cryptographic verification of presentations and ID tokens to the verifier service, coordinating verification within the authorization workflow\",\n\t\tdocsUrl:\n\t\t\t\"https://vidos.id/docs/reference/services/authorizer/policies/verify/\",\n\t},"
}
```
**Output:**
```
Edit applied successfully.
```
```

---

## Assistant (Build · grok-code-fast-1 · 3.3s)

```
Tool: bash

**Input:**
```json
{
  "command": "bun run type-check",
  "description": "Runs TypeScript type checking to ensure no errors after the description updates"
}
```
**Output:**
```
$ tsc --noEmit

```
```

---

## Assistant (Build · grok-code-fast-1 · 7.1s)

```
Tool: bash

**Input:**
```json
{
  "command": "bun run lint",
  "description": "Runs the linter to ensure code style and quality after the description updates"
}
```
**Output:**
```
$ biome lint
.agents/skills/zustand-state-management/templates/nextjs-store.ts:20:19 lint/correctness/noUnusedImports  FIXABLE  ━━━━━━━━━━

  ! Several of these imports are unused.
  
    19 │ import { create } from 'zustand'
  > 20 │ import { persist, createJSONStorage } from 'zustand/middleware'
       │                   ^^^^^^^^^^^^^^^^^
    21 │ 
    22 │ interface User {
  
  i Unused imports might be the result of an incomplete refactoring.
  
  i Unsafe fix: Remove the unused imports.
  
    20 │ import·{·persist,·createJSONStorage·}·from·'zustand/middleware'
       │                   ------------------                           

.agents/skills/zustand-state-management/templates/persist-store.ts:90:33 lint/suspicious/noExplicitAny ━━━━━━━━━━

  ! Unexpected any. Specify a different type.
  
    88 │       // Optional: version and migration for schema changes
    89 │       version: 1,
  > 90 │       migrate: (persistedState: any, version) => {
       │                                 ^^^
    91 │         if (version === 0) {
    92 │           // Migration from version 0 to 1
  
  i any disables many type checking rules. Its use should be avoided.
  

.agents/skills/zustand-state-management/templates/persist-store.ts:19:19 lint/correctness/noUnusedImports  FIXABLE  ━━━━━━━━━━

  ! Several of these imports are unused.
  
    18 │ import { create } from 'zustand'
  > 19 │ import { persist, createJSONStorage } from 'zustand/middleware'
       │                   ^^^^^^^^^^^^^^^^^
    20 │ 
    21 │ interface User {
  
  i Unused imports might be the result of an incomplete refactoring.
  
  i Unsafe fix: Remove the unused imports.
  
    19 │ import·{·persist,·createJSONStorage·}·from·'zustand/middleware'
       │                   ------------------                           

.agents/skills/zustand-state-management/templates/slices-pattern.ts:18:8 lint/style/useImportType  FIXABLE  ━━━━━━━━━━

  ! Some named imports are only used as types.
  
    16 │  */
    17 │ 
  > 18 │ import { create, StateCreator } from 'zustand'
       │        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    19 │ import { devtools } from 'zustand/middleware'
    20 │ 
  
  i This import is only used as a type.
  
    16 │  */
    17 │ 
  > 18 │ import { create, StateCreator } from 'zustand'
       │                  ^^^^^^^^^^^^
    19 │ import { devtools } from 'zustand/middleware'
    20 │ 
  
  i Importing the types with import type ensures that they are removed by the compilers and avoids loading unnecessary modules.
  
  i Safe fix: Add inline type keywords.
  
    18 │ import·{·create,·type·StateCreator·}·from·'zustand'
       │                  +++++                             

.agents/skills/zustand-state-management/templates/slices-pattern.ts:87:11 lint/correctness/noUnusedFunctionParameters  FIXABLE  ━━━━━━━━━━

  ! This parameter is unused.
  
    85 │   [],
    86 │   CartSlice
  > 87 │ > = (set, get) => ({
       │           ^^^
    88 │   items: [],
    89 │ 
  
  i Unused parameters might be the result of an incomplete refactoring.
  
  i Unsafe fix: If this is intentional, prepend get with an underscore.
  
     85  85 │     [],
     86  86 │     CartSlice
     87     │ - >·=·(set,·get)·=>·({
         87 │ + >·=·(set,·_get)·=>·({
     88  88 │     items: [],
     89  89 │   
  

Checked 110 files in 23ms. No fixes applied.
Found 5 warnings.

```
```

---

## Assistant (Build · grok-code-fast-1 · 2.3s)

Updated the descriptions for `authorizer.validate` and `authorizer.verify` to better distinguish their purposes:

- `authorizer.validate`: Now emphasizes validation from the reader's perspective (policies and requirements compliance)
- `authorizer.verify`: Now emphasizes verification from the issuer's perspective (authenticity and trustworthiness)

Type checking and linting confirm no issues with the updated descriptions.

---


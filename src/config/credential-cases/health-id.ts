// HealthId attributes

import type { AttributeDefinition, CredentialCaseDefinition } from "./types";

// All attributes must be disclosed together; no individual selection is possible
const HEALTH_ID_SD_JWT_ATTRIBUTES: AttributeDefinition[] = [
	{
		id: "health_insurance_id",
		displayName: "Health Insurance ID",
		path: ["health_insurance_id"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "patient_id",
		displayName: "Patient ID",
		path: ["patient_id"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "tax_number",
		displayName: "Tax Number",
		path: ["tax_number"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "one_time_token",
		displayName: "One Time Token",
		path: ["one_time_token"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "wallet_e_prescription_code",
		displayName: "Wallet E-Prescription Code",
		path: ["wallet_e_prescription_code"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "affiliation_country",
		displayName: "Affiliation Country",
		path: ["affiliation_country"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "issue_date",
		displayName: "Issue Date",
		path: ["issue_date"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "expiry_date",
		displayName: "Expiry Date",
		path: ["expiry_date"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "issuing_authority",
		displayName: "Issuing Authority",
		path: ["issuing_authority"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "document_number",
		displayName: "Document Number",
		path: ["document_number"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "administrative_number",
		displayName: "Administrative Number",
		path: ["administrative_number"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "issuing_country",
		displayName: "Issuing Country",
		path: ["issuing_country"],
		nonSelectivelyDisclosable: true,
	},
	{
		id: "issuing_jurisdiction",
		displayName: "Issuing Jurisdiction",
		path: ["issuing_jurisdiction"],
		nonSelectivelyDisclosable: true,
	},
];

export const HEALTH_ID_CREDENTIAL_CASE_DEFINITION: CredentialCaseDefinition = {
	id: "health_id",
	displayName: "EUDI Health ID ",
	formats: [
		{
			id: "health_id_sd_jwt",
			format: "dc+sd-jwt",
			displayName: "Health ID",
			credentialType: "urn:eu.europa.ec.eudi:hiid:1",
			attributes: HEALTH_ID_SD_JWT_ATTRIBUTES,
		},
	],
};

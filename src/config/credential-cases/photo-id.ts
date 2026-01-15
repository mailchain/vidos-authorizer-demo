import type { AttributeDefinition, CredentialCaseDefinition } from "./types";

// Photo ID attributes
const PHOTO_ID_SD_JWT_ATTRIBUTES: AttributeDefinition[] = [
	{
		id: "family_name",
		displayName: "Family Name",
		path: ["family_name"],
		requiredForIssuance: true,
	},
	{
		id: "given_name",
		displayName: "Given Name",
		path: ["given_name"],
		requiredForIssuance: true,
	},
	{
		id: "birth_date",
		displayName: "Date of Birth",
		path: ["birth_date"],
		requiredForIssuance: true,
	},
	{
		id: "portrait",
		displayName: "Portrait",
		path: ["portrait"],
	},
	{
		id: "document_number",
		displayName: "Document Number",
		path: ["document_number"],
	},
	{
		id: "issuing_authority",
		displayName: "Issuing Authority",
		path: ["issuing_authority"],
	},
	{
		id: "issuing_country",
		displayName: "Issuing Country",
		path: ["issuing_country"],
	},
	{
		id: "issuance_date",
		displayName: "Issuance Date",
		path: ["issuance_date"],
	},
	{
		id: "expiry_date",
		displayName: "Expiry Date",
		path: ["expiry_date"],
	},
];

const PHOTO_ID_MDOC_NAMESPACE = "org.iso.23220.1";
const PHOTO_ID_MDOC_ATTRIBUTES: AttributeDefinition[] =
	PHOTO_ID_SD_JWT_ATTRIBUTES.map((attr) => ({
		...attr,
		path: [PHOTO_ID_MDOC_NAMESPACE, attr.path[0]],
	}));

export const PHOTO_ID_CREDENTIAL_CASE_DEFINITION: CredentialCaseDefinition = {
	id: "photo_id",
	displayName: "Photo ID",
	formats: [
		{
			id: "photo_id_sd_jwt",
			format: "dc+sd-jwt",
			displayName: "SD-JWT",
			credentialType: "urn:eu.europa.ec.eudi:photo_id:1",
			attributes: PHOTO_ID_SD_JWT_ATTRIBUTES,
		},
		{
			id: "photo_id_mdoc",
			format: "mso_mdoc",
			displayName: "mDoc",
			credentialType: "org.iso.23220.photoid.1",
			namespace: PHOTO_ID_MDOC_NAMESPACE,
			attributes: PHOTO_ID_MDOC_ATTRIBUTES,
		},
	],
};

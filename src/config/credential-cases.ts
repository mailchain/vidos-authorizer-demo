import type { CredentialFormat } from "@/types/app";

export interface AttributeDefinition {
	id: string;
	displayName: string;
	path: (string | null)[];
	// Note: 'required' indicates if the attribute MUST be present in an issued credential (issuer requirement),
	// NOT whether it must be disclosed during verification. All attributes are optional for selective disclosure.
	required: boolean;
}

export interface FormatDefinition {
	id: string;
	format: CredentialFormat;
	displayName: string;
	credentialType: string;
	namespace?: string;
	attributes: AttributeDefinition[];
}

export interface CredentialCaseDefinition {
	id: string;
	displayName: string;
	formats: FormatDefinition[];
}

// PID attribute definitions based on EUDI PID Rulebook
// https://eudi.dev/2.4.0/annexes/annex-3/annex-3.01-pid-rulebook/

interface PIDAttributeMapping {
	id: string;
	displayName: string;
	required: boolean;
	mdocPath: (string | null)[];
	sdJwtPath: (string | null)[];
}

const PID_MDOC_NAMESPACE = "eu.europa.ec.eudi.pid.1";

const PID_ATTRIBUTE_MAPPINGS: PIDAttributeMapping[] = [
	// Mandatory attributes
	{
		id: "family_name",
		displayName: "Family Name",
		required: true,
		mdocPath: ["family_name"],
		sdJwtPath: ["family_name"],
	},
	{
		id: "given_name",
		displayName: "Given Name",
		required: true,
		mdocPath: ["given_name"],
		sdJwtPath: ["given_name"],
	},
	{
		id: "birth_date",
		displayName: "Date of Birth",
		required: true,
		mdocPath: ["birth_date"],
		sdJwtPath: ["birthdate"],
	},
	{
		id: "age_over_18",
		displayName: "Age Over 18",
		required: false,
		mdocPath: ["age_over_18"],
		sdJwtPath: ["age_equal_or_over", "18"],
	},
	{
		id: "age_in_years",
		displayName: "Age in Years",
		required: false,
		mdocPath: ["age_in_years"],
		sdJwtPath: ["age_in_years"],
	},
	{
		id: "age_birth_year",
		displayName: "Birth Year",
		required: false,
		mdocPath: ["age_birth_year"],
		sdJwtPath: ["age_birth_year"],
	},
	{
		id: "family_name_birth",
		displayName: "Family Name at Birth",
		required: false,
		mdocPath: ["family_name_birth"],
		sdJwtPath: ["birth_family_name"],
	},
	{
		id: "given_name_birth",
		displayName: "Given Name at Birth",
		required: false,
		mdocPath: ["given_name_birth"],
		sdJwtPath: ["birth_given_name"],
	},
	{
		id: "birth_place",
		displayName: "Place of Birth",
		required: false,
		mdocPath: ["place_of_birth"],
		sdJwtPath: ["place_of_birth"],
	},
	{
		id: "resident_address",
		displayName: "Resident Address",
		required: false,
		mdocPath: ["resident_address"],
		sdJwtPath: ["address", "formatted"],
	},
	{
		id: "resident_country",
		displayName: "Resident Country",
		required: false,
		mdocPath: ["resident_country"],
		sdJwtPath: ["address", "country"],
	},
	{
		id: "resident_state",
		displayName: "Resident State",
		required: false,
		mdocPath: ["resident_state"],
		sdJwtPath: ["address", "region"],
	},
	{
		id: "resident_city",
		displayName: "Resident City",
		required: false,
		mdocPath: ["resident_city"],
		sdJwtPath: ["address", "locality"],
	},
	{
		id: "resident_postal_code",
		displayName: "Resident Postal Code",
		required: false,
		mdocPath: ["resident_postal_code"],
		sdJwtPath: ["address", "postal_code"],
	},
	{
		id: "resident_street",
		displayName: "Resident Street",
		required: false,
		mdocPath: ["resident_street"],
		sdJwtPath: ["address", "street_address"],
	},
	{
		id: "resident_house_number",
		displayName: "Resident House Number",
		required: false,
		mdocPath: ["resident_house_number"],
		sdJwtPath: ["address", "house_number"],
	},
	{
		id: "sex",
		displayName: "Sex",
		required: false,
		mdocPath: ["sex"],
		sdJwtPath: ["sex"],
	},
	// TODO: re-add when fixed: https://github.com/mailchain/verified-os/pull/2966
	// {
	// 	id: "nationality",
	// 	displayName: "Nationality",
	// 	required: false,
	// 	mdocPath: ["nationality"],
	// 	sdJwtPath: ["nationalities", null],
	// },
	{
		id: "issuance_date",
		displayName: "Issuance Date",
		required: false,
		mdocPath: ["issuance_date"],
		sdJwtPath: ["date_of_issuance"],
	},
	{
		id: "expiry_date",
		displayName: "Expiry Date",
		required: false,
		mdocPath: ["expiry_date"],
		sdJwtPath: ["date_of_expiry"],
	},
	{
		id: "issuing_authority",
		displayName: "Issuing Authority",
		required: false,
		mdocPath: ["issuing_authority"],
		sdJwtPath: ["issuing_authority"],
	},
	{
		id: "document_number",
		displayName: "Document Number",
		required: false,
		mdocPath: ["document_number"],
		sdJwtPath: ["document_number"],
	},
	{
		id: "personal_administrative_number",
		displayName: "Personal Administrative Number",
		required: false,
		mdocPath: ["personal_administrative_number"],
		sdJwtPath: ["personal_administrative_number"],
	},
	{
		id: "issuing_jurisdiction",
		displayName: "Issuing Jurisdiction",
		required: false,
		mdocPath: ["issuing_jurisdiction"],
		sdJwtPath: ["issuing_jurisdiction"],
	},
	{
		id: "issuing_country",
		displayName: "Issuing Country",
		required: false,
		mdocPath: ["issuing_country"],
		sdJwtPath: ["issuing_country"],
	},
	{
		id: "portrait",
		displayName: "Portrait",
		required: false,
		mdocPath: ["portrait"],
		sdJwtPath: ["picture"],
	},
	{
		id: "email_address",
		displayName: "Email Address",
		required: false,
		mdocPath: ["email_address"],
		sdJwtPath: ["email"],
	},
	{
		id: "mobile_phone_number",
		displayName: "Mobile Phone Number",
		required: false,
		mdocPath: ["mobile_phone_number"],
		sdJwtPath: ["phone_number"],
	},
	// {
	// 	id: "trust_anchor",
	// 	displayName: "Trust Anchor",
	// 	required: false,
	// 	mdocPath: ["trust_anchor"],
	// 	sdJwtPath: ["trust_anchor"],
	// },
];

// Build mDoc attributes with namespace
const PID_MDOC_ATTRIBUTES: AttributeDefinition[] = PID_ATTRIBUTE_MAPPINGS.map(
	(attr) => ({
		id: attr.id,
		displayName: attr.displayName,
		required: attr.required,
		path: [PID_MDOC_NAMESPACE, ...attr.mdocPath],
	}),
);

// Build SD-JWT attributes
const PID_SD_JWT_ATTRIBUTES: AttributeDefinition[] = PID_ATTRIBUTE_MAPPINGS.map(
	(attr) => ({
		id: attr.id,
		displayName: attr.displayName,
		required: attr.required,
		path: attr.sdJwtPath,
	}),
);

// MDL attributes (ISO/IEC 18013-5:2021)
const MDL_NAMESPACE = "org.iso.18013.5.1";
const MDL_ATTRIBUTES: AttributeDefinition[] = [
	{
		id: "family_name",
		displayName: "Family Name",
		path: [MDL_NAMESPACE, "family_name"],
		required: true,
	},
	{
		id: "given_name",
		displayName: "Given Name",
		path: [MDL_NAMESPACE, "given_name"],
		required: true,
	},
	{
		id: "birth_date",
		displayName: "Date of Birth",
		path: [MDL_NAMESPACE, "birth_date"],
		required: true,
	},
	{
		id: "issue_date",
		displayName: "Issue Date",
		path: [MDL_NAMESPACE, "issue_date"],
		required: false,
	},
	{
		id: "expiry_date",
		displayName: "Expiry Date",
		path: [MDL_NAMESPACE, "expiry_date"],
		required: false,
	},
	{
		id: "issuing_country",
		displayName: "Issuing Country",
		path: [MDL_NAMESPACE, "issuing_country"],
		required: false,
	},
	{
		id: "issuing_authority",
		displayName: "Issuing Authority",
		path: [MDL_NAMESPACE, "issuing_authority"],
		required: false,
	},
	{
		id: "document_number",
		displayName: "Document Number",
		path: [MDL_NAMESPACE, "document_number"],
		required: false,
	},
	{
		id: "portrait",
		displayName: "Portrait",
		path: [MDL_NAMESPACE, "portrait"],
		required: false,
	},
	{
		id: "driving_privileges",
		displayName: "Driving Privileges",
		path: [MDL_NAMESPACE, "driving_privileges"],
		required: false,
	},
	{
		id: "un_distinguishing_sign",
		displayName: "UN Distinguishing Sign",
		path: [MDL_NAMESPACE, "un_distinguishing_sign"],
		required: false,
	},
	{
		id: "administrative_number",
		displayName: "Administrative Number",
		path: [MDL_NAMESPACE, "administrative_number"],
		required: false,
	},
	{
		id: "sex",
		displayName: "Sex",
		path: [MDL_NAMESPACE, "sex"],
		required: false,
	},
	{
		id: "height",
		displayName: "Height",
		path: [MDL_NAMESPACE, "height"],
		required: false,
	},
	{
		id: "weight",
		displayName: "Weight",
		path: [MDL_NAMESPACE, "weight"],
		required: false,
	},
	{
		id: "eye_colour",
		displayName: "Eye Colour",
		path: [MDL_NAMESPACE, "eye_colour"],
		required: false,
	},
	{
		id: "hair_colour",
		displayName: "Hair Colour",
		path: [MDL_NAMESPACE, "hair_colour"],
		required: false,
	},
	{
		id: "birth_place",
		displayName: "Place of Birth",
		path: [MDL_NAMESPACE, "birth_place"],
		required: false,
	},
	{
		id: "resident_address",
		displayName: "Resident Address",
		path: [MDL_NAMESPACE, "resident_address"],
		required: false,
	},
	{
		id: "resident_city",
		displayName: "Resident City",
		path: [MDL_NAMESPACE, "resident_city"],
		required: false,
	},
	{
		id: "resident_state",
		displayName: "Resident State",
		path: [MDL_NAMESPACE, "resident_state"],
		required: false,
	},
	{
		id: "resident_postal_code",
		displayName: "Resident Postal Code",
		path: [MDL_NAMESPACE, "resident_postal_code"],
		required: false,
	},
	{
		id: "resident_country",
		displayName: "Resident Country",
		path: [MDL_NAMESPACE, "resident_country"],
		required: false,
	},
	{
		id: "age_in_years",
		displayName: "Age in Years",
		path: [MDL_NAMESPACE, "age_in_years"],
		required: false,
	},
	{
		id: "age_birth_year",
		displayName: "Birth Year",
		path: [MDL_NAMESPACE, "age_birth_year"],
		required: false,
	},
	{
		id: "age_over_18",
		displayName: "Age Over 18",
		path: [MDL_NAMESPACE, "age_over_18"],
		required: false,
	},
	{
		id: "age_over_21",
		displayName: "Age Over 21",
		path: [MDL_NAMESPACE, "age_over_21"],
		required: false,
	},
	{
		id: "issuing_jurisdiction",
		displayName: "Issuing Jurisdiction",
		path: [MDL_NAMESPACE, "issuing_jurisdiction"],
		required: false,
	},
	{
		id: "nationality",
		displayName: "Nationality",
		path: [MDL_NAMESPACE, "nationality"],
		required: false,
	},
	{
		id: "family_name_national_character",
		displayName: "Family Name (National)",
		path: [MDL_NAMESPACE, "family_name_national_character"],
		required: false,
	},
	{
		id: "given_name_national_character",
		displayName: "Given Name (National)",
		path: [MDL_NAMESPACE, "given_name_national_character"],
		required: false,
	},
	{
		id: "signature_usual_mark",
		displayName: "Signature / Usual Mark",
		path: [MDL_NAMESPACE, "signature_usual_mark"],
		required: false,
	},
];

// Photo ID attributes
const PHOTO_ID_SD_JWT_ATTRIBUTES: AttributeDefinition[] = [
	{
		id: "family_name",
		displayName: "Family Name",
		path: ["family_name"],
		required: true,
	},
	{
		id: "given_name",
		displayName: "Given Name",
		path: ["given_name"],
		required: true,
	},
	{
		id: "birth_date",
		displayName: "Date of Birth",
		path: ["birth_date"],
		required: true,
	},
	{
		id: "portrait",
		displayName: "Portrait",
		path: ["portrait"],
		required: false,
	},
	{
		id: "document_number",
		displayName: "Document Number",
		path: ["document_number"],
		required: false,
	},
	{
		id: "issuing_authority",
		displayName: "Issuing Authority",
		path: ["issuing_authority"],
		required: false,
	},
	{
		id: "issuing_country",
		displayName: "Issuing Country",
		path: ["issuing_country"],
		required: false,
	},
	{
		id: "issuance_date",
		displayName: "Issuance Date",
		path: ["issuance_date"],
		required: false,
	},
	{
		id: "expiry_date",
		displayName: "Expiry Date",
		path: ["expiry_date"],
		required: false,
	},
];

const PHOTO_ID_MDOC_NAMESPACE = "org.iso.23220.1";
const PHOTO_ID_MDOC_ATTRIBUTES: AttributeDefinition[] =
	PHOTO_ID_SD_JWT_ATTRIBUTES.map((attr) => ({
		...attr,
		path: [PHOTO_ID_MDOC_NAMESPACE, attr.path[0]],
	}));

export const CREDENTIAL_CASES: CredentialCaseDefinition[] = [
	{
		id: "pid",
		displayName: "Person Identification Data (PID)",
		formats: [
			{
				id: "pid_sd_jwt",
				format: "dc+sd-jwt",
				displayName: "SD-JWT VC",
				credentialType: "urn:eudi:pid:1",
				attributes: PID_SD_JWT_ATTRIBUTES,
			},
			{
				id: "pid_mdoc",
				format: "mso_mdoc",
				displayName: "mDoc",
				credentialType: "eu.europa.ec.eudi.pid.1",
				namespace: PID_MDOC_NAMESPACE,
				attributes: PID_MDOC_ATTRIBUTES,
			},
		],
	},
	{
		id: "mdl",
		displayName: "Mobile Driving Licence (MDL)",
		formats: [
			{
				id: "mdl_mdoc",
				format: "mso_mdoc",
				displayName: "mDoc",
				credentialType: "org.iso.18013.5.1.mDL",
				namespace: MDL_NAMESPACE,
				attributes: MDL_ATTRIBUTES,
			},
		],
	},
	{
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
	},
];

export function getCredentialCase(
	documentType: string,
): CredentialCaseDefinition | undefined {
	return CREDENTIAL_CASES.find((c) => c.id === documentType);
}

export function getFormatDefinition(
	documentType: string,
	format: CredentialFormat,
): FormatDefinition | undefined {
	const credCase = getCredentialCase(documentType);
	return credCase?.formats.find((f) => f.format === format);
}

export function getFormatDefinitionById(
	formatId: string,
): FormatDefinition | undefined {
	for (const credCase of CREDENTIAL_CASES) {
		const format = credCase.formats.find((f) => f.id === formatId);
		if (format) return format;
	}
	return undefined;
}

export function getAvailableFormats(documentType: string): FormatDefinition[] {
	const credCase = getCredentialCase(documentType);
	return credCase?.formats ?? [];
}

/**
 * Get all credential cases including both app-defined and custom cases
 * @param customCases Optional array of custom credential cases (from store)
 * @returns Array of all credential cases
 */
export function getAllCredentialCases(
	customCases: CredentialCaseDefinition[] = [],
): CredentialCaseDefinition[] {
	return [...CREDENTIAL_CASES, ...customCases];
}

/**
 * Check if a credential case is a custom (user-defined) case
 * @param id The credential case ID
 * @returns True if the case is custom, false if it's app-defined
 */
export function isCustomCase(id: string): boolean {
	return !CREDENTIAL_CASES.some((c) => c.id === id);
}

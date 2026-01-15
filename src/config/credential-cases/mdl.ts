import type { AttributeDefinition, CredentialCaseDefinition } from "./types";

// MDL attributes (ISO/IEC 18013-5:2021)
const MDL_NAMESPACE = "org.iso.18013.5.1";
const MDL_ATTRIBUTES: AttributeDefinition[] = [
	{
		id: "family_name",
		displayName: "Family Name",
		path: [MDL_NAMESPACE, "family_name"],
		requiredForIssuance: true,
	},
	{
		id: "given_name",
		displayName: "Given Name",
		path: [MDL_NAMESPACE, "given_name"],
		requiredForIssuance: true,
	},
	{
		id: "birth_date",
		displayName: "Date of Birth",
		path: [MDL_NAMESPACE, "birth_date"],
		requiredForIssuance: true,
	},
	{
		id: "issue_date",
		displayName: "Issue Date",
		path: [MDL_NAMESPACE, "issue_date"],
	},
	{
		id: "expiry_date",
		displayName: "Expiry Date",
		path: [MDL_NAMESPACE, "expiry_date"],
	},
	{
		id: "issuing_country",
		displayName: "Issuing Country",
		path: [MDL_NAMESPACE, "issuing_country"],
	},
	{
		id: "issuing_authority",
		displayName: "Issuing Authority",
		path: [MDL_NAMESPACE, "issuing_authority"],
	},
	{
		id: "document_number",
		displayName: "Document Number",
		path: [MDL_NAMESPACE, "document_number"],
	},
	{
		id: "portrait",
		displayName: "Portrait",
		path: [MDL_NAMESPACE, "portrait"],
	},
	{
		id: "driving_privileges",
		displayName: "Driving Privileges",
		path: [MDL_NAMESPACE, "driving_privileges"],
	},
	{
		id: "un_distinguishing_sign",
		displayName: "UN Distinguishing Sign",
		path: [MDL_NAMESPACE, "un_distinguishing_sign"],
	},
	{
		id: "administrative_number",
		displayName: "Administrative Number",
		path: [MDL_NAMESPACE, "administrative_number"],
	},
	{
		id: "sex",
		displayName: "Sex",
		path: [MDL_NAMESPACE, "sex"],
	},
	{
		id: "height",
		displayName: "Height",
		path: [MDL_NAMESPACE, "height"],
	},
	{
		id: "weight",
		displayName: "Weight",
		path: [MDL_NAMESPACE, "weight"],
	},
	{
		id: "eye_colour",
		displayName: "Eye Colour",
		path: [MDL_NAMESPACE, "eye_colour"],
	},
	{
		id: "hair_colour",
		displayName: "Hair Colour",
		path: [MDL_NAMESPACE, "hair_colour"],
	},
	{
		id: "birth_place",
		displayName: "Place of Birth",
		path: [MDL_NAMESPACE, "birth_place"],
	},
	{
		id: "resident_address",
		displayName: "Resident Address",
		path: [MDL_NAMESPACE, "resident_address"],
	},
	{
		id: "resident_city",
		displayName: "Resident City",
		path: [MDL_NAMESPACE, "resident_city"],
	},
	{
		id: "resident_state",
		displayName: "Resident State",
		path: [MDL_NAMESPACE, "resident_state"],
	},
	{
		id: "resident_postal_code",
		displayName: "Resident Postal Code",
		path: [MDL_NAMESPACE, "resident_postal_code"],
	},
	{
		id: "resident_country",
		displayName: "Resident Country",
		path: [MDL_NAMESPACE, "resident_country"],
	},
	{
		id: "age_in_years",
		displayName: "Age in Years",
		path: [MDL_NAMESPACE, "age_in_years"],
	},
	{
		id: "age_birth_year",
		displayName: "Birth Year",
		path: [MDL_NAMESPACE, "age_birth_year"],
	},
	{
		id: "age_over_18",
		displayName: "Age Over 18",
		path: [MDL_NAMESPACE, "age_over_18"],
	},
	{
		id: "age_over_21",
		displayName: "Age Over 21",
		path: [MDL_NAMESPACE, "age_over_21"],
	},
	{
		id: "issuing_jurisdiction",
		displayName: "Issuing Jurisdiction",
		path: [MDL_NAMESPACE, "issuing_jurisdiction"],
	},
	{
		id: "nationality",
		displayName: "Nationality",
		path: [MDL_NAMESPACE, "nationality"],
	},
	{
		id: "family_name_national_character",
		displayName: "Family Name (National)",
		path: [MDL_NAMESPACE, "family_name_national_character"],
	},
	{
		id: "given_name_national_character",
		displayName: "Given Name (National)",
		path: [MDL_NAMESPACE, "given_name_national_character"],
	},
	{
		id: "signature_usual_mark",
		displayName: "Signature / Usual Mark",
		path: [MDL_NAMESPACE, "signature_usual_mark"],
	},
];

export const MDL_CREDENTIAL_CASE_DEFINITION: CredentialCaseDefinition = {
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
};

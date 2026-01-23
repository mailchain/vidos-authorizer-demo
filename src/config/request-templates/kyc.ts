import { generateReactKey } from "@/utils/id";
import type { RequestTemplate } from "./types";

export const KYC_TEMPLATES: RequestTemplate[] = [
	{
		id: "kyc-basic-pid",
		name: "KYC Basic via PID",
		description: "Basic Know Your Customer verification with PID",
		category: "kyc",
		credentialRequests: [
			{
				id: "kyc-basic-pid-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: ["family_name", "given_name", "birth_date", "nationality"],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
	{
		id: "kyc-standard-pid",
		name: "KYC Standard via PID",
		description:
			"Standard KYC verification including address and document number",
		category: "kyc",
		credentialRequests: [
			{
				id: "kyc-standard-pid-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: [
					"family_name",
					"given_name",
					"birth_date",
					"nationality",
					"resident_country",
					"resident_city",
					"resident_street",
					"resident_postal_code",
					"document_number",
				],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
	{
		id: "kyc-enhanced-pid",
		name: "KYC Enhanced via PID",
		description:
			"Enhanced KYC with full identity, address, and issuing authority",
		category: "kyc",
		credentialRequests: [
			{
				id: "kyc-enhanced-pid-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: [
					"family_name",
					"given_name",
					"birth_date",
					"nationality",
					"document_number",
					"resident_country",
					"resident_city",
					"resident_street",
					"resident_postal_code",
					"issuing_authority",
					"issuing_country",
				],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
];

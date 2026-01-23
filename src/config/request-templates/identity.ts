import { generateReactKey } from "@/utils/id";
import type { RequestTemplate } from "./types";

export const IDENTITY_TEMPLATES: RequestTemplate[] = [
	{
		id: "name-dob-pid",
		name: "Name and Date of Birth via PID",
		description: "Request basic identity information from PID",
		category: "identity",
		credentialRequests: [
			{
				id: "name-dob-pid-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: ["family_name", "given_name", "birth_date"],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
	{
		id: "name-dob-photo-pid",
		name: "Name, DOB and Photo via PID",
		description: "Request identity with portrait from PID",
		category: "identity",
		credentialRequests: [
			{
				id: "name-dob-photo-pid-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: ["family_name", "given_name", "birth_date", "portrait"],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
	{
		id: "full-identity-pid",
		name: "Full Identity via PID",
		description: "Request comprehensive identity information from PID",
		category: "identity",
		credentialRequests: [
			{
				id: "full-identity-pid-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: [
					"family_name",
					"given_name",
					"birth_date",
					"nationality",
					"document_number",
				],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
];

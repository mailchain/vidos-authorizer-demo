import { generateReactKey } from "@/utils/id";
import type { RequestTemplate } from "./types";

export const ADDRESS_TEMPLATES: RequestTemplate[] = [
	{
		id: "address-pid",
		name: "Address via PID",
		description: "Request residential address from PID",
		category: "address",
		credentialRequests: [
			{
				id: "address-pid-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: [
					"resident_country",
					"resident_city",
					"resident_street",
					"resident_postal_code",
				],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
	{
		id: "identity-address-pid",
		name: "Identity and Address via PID",
		description: "Request identity and full address from PID",
		category: "address",
		credentialRequests: [
			{
				id: "identity-address-pid-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: [
					"family_name",
					"given_name",
					"birth_date",
					"resident_country",
					"resident_city",
					"resident_street",
					"resident_postal_code",
				],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
];

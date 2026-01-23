import { generateReactKey } from "@/utils/id";
import type { RequestTemplate } from "./types";

export const DRIVING_TEMPLATES: RequestTemplate[] = [
	{
		id: "driving-privileges-mdl",
		name: "Driving Privileges via mDL",
		description: "Request driving privileges and expiry from mDL",
		category: "driving",
		credentialRequests: [
			{
				id: "driving-privileges-mdl-cred",
				documentType: "mdl",
				formatId: "mdl_mdoc",
				format: "mso_mdoc",
				attributes: ["driving_privileges", "expiry_date"],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
	{
		id: "driver-identity-mdl",
		name: "Driver Identity via mDL",
		description: "Request driver identity with photo and driving privileges",
		category: "driving",
		credentialRequests: [
			{
				id: "driver-identity-mdl-cred",
				documentType: "mdl",
				formatId: "mdl_mdoc",
				format: "mso_mdoc",
				attributes: [
					"family_name",
					"given_name",
					"birth_date",
					"portrait",
					"driving_privileges",
				],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
	{
		id: "car-rental-age-license",
		name: "Car Rental (Age + License)",
		description: "Verify age over 18 via PID and driving privileges via mDL",
		category: "driving",
		credentialRequests: [
			{
				id: "car-rental-pid-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: ["age_over_18"],
				reactKey: generateReactKey(),
			},
			{
				id: "car-rental-mdl-cred",
				documentType: "mdl",
				formatId: "mdl_mdoc",
				format: "mso_mdoc",
				attributes: ["driving_privileges"],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
];

import { generateReactKey } from "@/utils/id";
import type { RequestTemplate } from "./types";

export const AGE_VERIFICATION_TEMPLATES: RequestTemplate[] = [
	{
		id: "age-18-pid",
		name: "Age 18+ via PID",
		description: "Verify age over 18 using Person Identification Data",
		category: "age-verification",
		credentialRequests: [
			{
				id: "age-18-pid-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: ["age_over_18"],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
	{
		id: "age-18-pid-or-mdl",
		name: "Age 18+ via PID or mDL",
		description:
			"Verify age over 18 using PID (SD-JWT or mDoc) or mDL as alternatives",
		category: "age-verification",
		credentialRequests: [
			{
				id: "age-18-pid-sdjwt-cred",
				documentType: "pid",
				formatId: "pid_sd_jwt",
				format: "dc+sd-jwt",
				attributes: ["age_over_18"],
				reactKey: generateReactKey(),
			},
			{
				id: "age-18-pid-mdoc-cred",
				documentType: "pid",
				formatId: "pid_mdoc",
				format: "mso_mdoc",
				attributes: ["age_over_18"],
				reactKey: generateReactKey(),
			},
			{
				id: "age-18-mdl-cred",
				documentType: "mdl",
				formatId: "mdl_mdoc",
				format: "mso_mdoc",
				attributes: ["age_over_18"],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [
			{
				id: "age-18-set",
				options: [
					["age-18-pid-sdjwt-cred"],
					["age-18-pid-mdoc-cred"],
					["age-18-mdl-cred"],
				],
				required: true,
				reactKey: generateReactKey(),
			},
		],
		isBuiltIn: true,
	},
	{
		id: "age-21-mdl",
		name: "Age 21+ via mDL",
		description: "Verify age over 21 using Mobile Driving Licence",
		category: "age-verification",
		credentialRequests: [
			{
				id: "age-21-mdl-cred",
				documentType: "mdl",
				formatId: "mdl_mdoc",
				format: "mso_mdoc",
				attributes: ["age_over_21"],
				reactKey: generateReactKey(),
			},
		],
		credentialSets: [],
		isBuiltIn: true,
	},
];

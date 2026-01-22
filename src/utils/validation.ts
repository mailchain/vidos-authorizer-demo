import { z } from "zod";
import type { CredentialRequestWithId, ResponseModeConfig } from "@/types/app";

export interface ValidationResult {
	valid: boolean;
	errors: string[];
}

// Zod schema for credential request validation
const credentialRequestSchema = z.object({
	id: z.string(),
	documentType: z.string().min(1, "Document type is required"),
	formatId: z.string().min(1, "Format is required"),
	attributes: z.array(z.string()),
});

// Zod schema for DC API response mode config
const dcApiResponseModeSchema = z.union([
	z.literal("dc_api"),
	z.literal("dc_api.jwt"),
]);

export function validateAuthorizationRequest(
	authorizerUrl: string,
	credentialRequests: CredentialRequestWithId[],
	responseModeConfig: ResponseModeConfig,
): ValidationResult {
	const errors: string[] = [];

	// Validate authorizer URL
	const validUrl = z.url().safeParse(authorizerUrl);
	if (!validUrl.success) {
		errors.push(`Authorizer URL is required to be valid URL. ${validUrl.error.message}`);
	}

	// Validate at least one credential request
	if (credentialRequests.length === 0) {
		errors.push("At least one credential request is required");
	}

	// Validate each credential request with Zod
	for (const [index, request] of credentialRequests.entries()) {
		const result = credentialRequestSchema.safeParse(request);
		if (!result.success) {
			for (const issue of result.error.issues) {
				errors.push(`Credential ${index + 1}: ${issue.message}`);
			}
		}
	}

	// Validate DC API configuration
	const isDCAPIMode = dcApiResponseModeSchema.safeParse(
		responseModeConfig.mode,
	);
	if (isDCAPIMode.success && !responseModeConfig.dcApiProtocol) {
		errors.push("DC API protocol must be selected");
	}

	// Validate HAIP profile constraints
	if (responseModeConfig.profile === "haip") {
		const haipAllowedModes: string[] = ["direct_post.jwt", "dc_api.jwt"];
		if (!haipAllowedModes.includes(responseModeConfig.mode)) {
			errors.push(
				"HAIP profile requires signed response mode (direct_post.jwt or dc_api.jwt)",
			);
		}
	}

	return {
		valid: errors.length === 0,
		errors,
	};
}

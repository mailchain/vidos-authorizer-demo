import type { CredentialRequestWithId, ResponseModeConfig } from "@/types/app";

export interface ValidationResult {
	valid: boolean;
	errors: string[];
}

export function validateAuthorizationRequest(
	authorizerUrl: string,
	credentialRequests: CredentialRequestWithId[],
	responseModeConfig: ResponseModeConfig,
): ValidationResult {
	const errors: string[] = [];

	// Validate authorizer URL
	try {
		new URL(authorizerUrl);
	} catch {
		errors.push("Invalid authorizer URL");
	}

	// Validate at least one credential request
	if (credentialRequests.length === 0) {
		errors.push("At least one credential request is required");
	}

	// Validate each credential request
	for (const [index, request] of credentialRequests.entries()) {
		if (!request.documentType || !request.formatId) {
			errors.push(
				`Credential ${index + 1}: Document type and format are required`,
			);
		}

		if (request.attributes.length === 0) {
			errors.push(
				`Credential ${index + 1}: At least one attribute must be selected`,
			);
		}
	}

	// Validate DC API configuration
	if (
		responseModeConfig.mode === "dc_api" ||
		responseModeConfig.mode === "dc_api.jwt"
	) {
		if (!responseModeConfig.dcApiProtocol) {
			errors.push("DC API protocol must be selected");
		}
	}

	return {
		valid: errors.length === 0,
		errors,
	};
}

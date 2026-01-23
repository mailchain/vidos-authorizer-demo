import type { CredentialCaseDefinition } from "@/config/credential-cases/types";
import type { RequestTemplate } from "@/types/app";

export interface ValidationResult {
	valid: boolean;
	errors: string[];
}

/**
 * Validates a request template against available credential cases.
 * Checks that each credential request references a valid formatId.
 */
export function validateTemplate(
	template: RequestTemplate,
	allCredentialCases: CredentialCaseDefinition[],
): ValidationResult {
	const errors: string[] = [];

	// Build a set of all available formatIds for efficient lookup
	const availableFormatIds = new Set<string>();
	for (const credCase of allCredentialCases) {
		for (const format of credCase.formats) {
			availableFormatIds.add(format.id);
		}
	}

	// Check each credential request
	for (const request of template.credentialRequests) {
		if (!availableFormatIds.has(request.formatId)) {
			errors.push(
				`Credential request "${request.id}" references unknown format "${request.formatId}"`,
			);
		}
	}

	return {
		valid: errors.length === 0,
		errors,
	};
}

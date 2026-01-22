export interface PolicyDefinition {
	description: string;
	docsUrl: string;
}

// Policy definitions map: "service.policy" or "policy" (default)
export const policyDefinitions: Record<string, PolicyDefinition> = {
	// Validator service policies
	"validator.credentialQuery": {
		description: "Validates the credential query request format",
		docsUrl: "https://docs.vidos.id/policies/validator/credential-query",
	},
	"validator.trustedIssuer": {
		description: "Verifies the credential issuer is trusted",
		docsUrl: "https://docs.vidos.id/policies/validator/trusted-issuer",
	},

	// Authorizer service policies
	"authorizer.validate": {
		description: "Validates the authorization request",
		docsUrl: "https://docs.vidos.id/policies/authorizer/validate",
	},
	"authorizer.verify": {
		description: "Verifies the presentation token",
		docsUrl: "https://docs.vidos.id/policies/authorizer/verify",
	},

	// Verifier service policies
	"verifier.notAfter": {
		description: "Checks the credential has not expired",
		docsUrl: "https://docs.vidos.id/policies/verifier/not-after",
	},
	"verifier.notBefore": {
		description: "Checks the credential is already valid",
		docsUrl: "https://docs.vidos.id/policies/verifier/not-before",
	},
	"verifier.proof": {
		description: "Verifies the cryptographic proof of the credential",
		docsUrl: "https://docs.vidos.id/policies/verifier/proof",
	},

	// Default policies (no service specified)
	"format": {
		description: "Verifies the credential format matches expected type",
		docsUrl: "https://docs.vidos.id/policies/verifier/format",
	},
};

/**
 * Get policy definition by service and policy name.
 * Falls back to policy name only if service-specific definition doesn't exist.
 */
export function getPolicyDefinition(
	policyName: string,
	service?: string,
): PolicyDefinition | undefined {
	const keys = [...(service ? [`${service}.${policyName}`] : []), policyName];

	for (const key of keys) {
		const definition = policyDefinitions[key];
		if (definition) {
			return definition;
		}
	}
}

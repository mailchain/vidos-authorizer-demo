import { z } from "zod";
import { CREDENTIAL_CASES } from "@/config/credential-cases/credential-cases";
import type { CredentialCaseDefinition } from "@/config/credential-cases/types";

export interface ValidationResult {
	valid: boolean;
	errors: string[];
}

const VALID_FORMATS = ["dc+sd-jwt", "mso_mdoc"] as const;

// Zod schemas for credential case validation
const attributeSchema = z.object({
	id: z.string().min(1, "Attribute ID cannot be empty"),
	displayName: z.string().min(1, "Attribute displayName cannot be empty"),
	path: z
		.array(z.union([z.string(), z.null()]))
		.min(1, "Attribute path must be a non-empty array"),
	required: z.boolean().optional(),
});

const formatSchema = z.object({
	id: z.string().min(1, "Format ID cannot be empty"),
	format: z.enum(VALID_FORMATS, {
		message: `Format must be one of: ${VALID_FORMATS.join(", ")}`,
	}),
	displayName: z.string().min(1, "Format displayName cannot be empty"),
	credentialType: z.string().min(1, "Format credentialType cannot be empty"),
	namespace: z.string().optional(),
	attributes: z
		.array(attributeSchema)
		.min(1, "Format must have at least one attribute"),
});

const credentialCaseSchema = z.object({
	id: z.string().min(1, "Credential case ID cannot be empty"),
	displayName: z.string().min(1, "Credential case displayName cannot be empty"),
	formats: z
		.array(formatSchema)
		.min(1, "Credential case must have at least one format"),
});

/**
 * Validate a credential case definition
 * @param json The JSON string to parse and validate
 * @param existingCustomCases Existing custom cases to check for ID conflicts
 * @param excludeId Optional ID to exclude from duplicate checks (for edit mode)
 * @returns ValidationResult with errors if any
 */
export function validateCredentialCase(
	json: string,
	existingCustomCases: CredentialCaseDefinition[] = [],
	excludeId?: string,
): ValidationResult {
	const errors: string[] = [];

	// 1. Parse JSON
	let parsed: unknown;
	try {
		parsed = JSON.parse(json);
	} catch (e) {
		return {
			valid: false,
			errors: [
				`Invalid JSON syntax: ${e instanceof Error ? e.message : "Unknown error"}`,
			],
		};
	}

	// 2. Validate with Zod schema
	const result = credentialCaseSchema.safeParse(parsed);

	if (!result.success) {
		// Convert Zod errors to flat error messages
		for (const issue of result.error.issues) {
			const path = issue.path.join(".");
			const location = path ? ` at '${path}'` : "";
			errors.push(`${issue.message}${location}`);
		}
	}

	// If basic schema validation failed, return early
	if (!result.success) {
		return { valid: false, errors };
	}

	const credCase = result.data;

	// 3. Check for ID conflicts (case-insensitive)
	if (credCase.id !== excludeId) {
		const appCaseConflict = CREDENTIAL_CASES.find(
			(c) => c.id.toLowerCase() === credCase.id.toLowerCase(),
		);
		if (appCaseConflict) {
			errors.push(
				`Case ID '${credCase.id}' conflicts with built-in case '${appCaseConflict.id}'`,
			);
		}

		const customCaseConflict = existingCustomCases.find(
			(c) =>
				c.id !== excludeId && c.id.toLowerCase() === credCase.id.toLowerCase(),
		);
		if (customCaseConflict) {
			errors.push(
				`Case ID '${credCase.id}' conflicts with existing custom case '${customCaseConflict.id}'`,
			);
		}
	}

	// 4. Validate format-specific rules
	const formatIdsInThisCase = new Set<string>();

	for (let i = 0; i < credCase.formats.length; i++) {
		const fmt = credCase.formats[i];

		// Check for duplicate format IDs within this case
		const formatId = fmt.id.toLowerCase();
		if (formatIdsInThisCase.has(formatId)) {
			errors.push(
				`Format at index ${i}: Duplicate format ID '${fmt.id}' within this credential case`,
			);
		} else {
			formatIdsInThisCase.add(formatId);
		}

		// Validate namespace for mDoc formats
		if (fmt.format === "mso_mdoc" && !fmt.namespace) {
			errors.push(
				`Format at index ${i}: mDoc format requires 'namespace' field (must be a non-empty string)`,
			);
		}

		// Validate attribute-specific rules
		const attributeIds = new Set<string>();

		for (let j = 0; j < fmt.attributes.length; j++) {
			const attr = fmt.attributes[j];

			// Check for duplicate attribute IDs within this format
			if (attributeIds.has(attr.id)) {
				errors.push(
					`Format at index ${i}: Duplicate attribute ID '${attr.id}'`,
				);
			} else {
				attributeIds.add(attr.id);
			}

			// Validate path elements are strings or null
			for (let k = 0; k < attr.path.length; k++) {
				const pathElement = attr.path[k];
				if (pathElement !== null && typeof pathElement !== "string") {
					errors.push(
						`Format at index ${i}, attribute at index ${j}: Path element at index ${k} must be a string or null`,
					);
				}
			}

			// Validate mDoc path starts with namespace
			if (fmt.format === "mso_mdoc" && fmt.namespace && attr.path.length > 0) {
				if (attr.path[0] !== fmt.namespace) {
					errors.push(
						`Format at index ${i}, attribute at index ${j}: mDoc attribute path must start with namespace '${fmt.namespace}', got '${attr.path[0]}'`,
					);
				}
			}
		}
	}

	return {
		valid: errors.length === 0,
		errors,
	};
}

/**
 * Quick validation check to filter out invalid cases on store load
 * Returns true if case is valid enough to be loaded
 */
export function isValidCredentialCase(
	credCase: unknown,
): credCase is CredentialCaseDefinition {
	const result = credentialCaseSchema.safeParse(credCase);
	if (!result.success) {
		return false;
	}

	const validated = result.data;

	// Additional check: ensure all formats have valid structure
	return validated.formats.every((f) => {
		// Ensure mDoc formats have namespace
		if (f.format === "mso_mdoc" && !f.namespace) {
			return false;
		}
		return true;
	});
}

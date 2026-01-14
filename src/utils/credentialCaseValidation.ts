import {
	CREDENTIAL_CASES,
	type CredentialCaseDefinition,
} from "@/config/credential-cases";
import type { CredentialFormat } from "@/types/app";

export interface ValidationResult {
	valid: boolean;
	errors: string[];
}

const VALID_FORMATS: CredentialFormat[] = ["dc+sd-jwt", "mso_mdoc"];

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

	// 2. Check if it's an object
	if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
		errors.push("Credential case must be an object");
		return { valid: false, errors };
	}

	const credCase = parsed as Record<string, unknown>;

	// 3. Validate required fields
	if (!credCase.id || typeof credCase.id !== "string") {
		errors.push("Missing or invalid 'id' field (must be a non-empty string)");
	}

	if (!credCase.displayName || typeof credCase.displayName !== "string") {
		errors.push(
			"Missing or invalid 'displayName' field (must be a non-empty string)",
		);
	}

	if (!Array.isArray(credCase.formats) || credCase.formats.length === 0) {
		errors.push("Missing or invalid 'formats' field (must be a non-empty array)");
		return { valid: false, errors };
	}

	// 4. Check for ID conflicts (case-insensitive)
	const caseId = credCase.id as string;
	if (caseId && caseId !== excludeId) {
		const appCaseConflict = CREDENTIAL_CASES.find(
			(c) => c.id.toLowerCase() === caseId.toLowerCase(),
		);
		if (appCaseConflict) {
			errors.push(
				`Case ID '${caseId}' conflicts with built-in case '${appCaseConflict.id}'`,
			);
		}

		const customCaseConflict = existingCustomCases.find(
			(c) =>
				c.id !== excludeId && c.id.toLowerCase() === caseId.toLowerCase(),
		);
		if (customCaseConflict) {
			errors.push(
				`Case ID '${caseId}' conflicts with existing custom case '${customCaseConflict.id}'`,
			);
		}
	}

	// 5. Validate formats array
	const formats = credCase.formats as unknown[];
	const formatIdsInThisCase = new Set<string>();

	for (let i = 0; i < formats.length; i++) {
		const format = formats[i];

		if (typeof format !== "object" || format === null || Array.isArray(format)) {
			errors.push(`Format at index ${i} must be an object`);
			continue;
		}

		const fmt = format as Record<string, unknown>;

		// Validate format fields
		if (!fmt.id || typeof fmt.id !== "string") {
			errors.push(
				`Format at index ${i}: Missing or invalid 'id' field (must be a non-empty string)`,
			);
		}

		if (!fmt.format || typeof fmt.format !== "string") {
			errors.push(
				`Format at index ${i}: Missing or invalid 'format' field (must be a non-empty string)`,
			);
		} else if (
			!VALID_FORMATS.includes(fmt.format as CredentialFormat)
		) {
			errors.push(
				`Format at index ${i}: Invalid format '${fmt.format}'. Must be one of: ${VALID_FORMATS.join(", ")}`,
			);
		}

		if (!fmt.displayName || typeof fmt.displayName !== "string") {
			errors.push(
				`Format at index ${i}: Missing or invalid 'displayName' field (must be a non-empty string)`,
			);
		}

		if (!fmt.credentialType || typeof fmt.credentialType !== "string") {
			errors.push(
				`Format at index ${i}: Missing or invalid 'credentialType' field (must be a non-empty string)`,
			);
		}

		// Check format ID conflicts within this case only
		if (fmt.id && typeof fmt.id === "string") {
			const formatId = (fmt.id as string).toLowerCase();
			if (formatIdsInThisCase.has(formatId)) {
				errors.push(
					`Format at index ${i}: Duplicate format ID '${fmt.id}' within this credential case`,
				);
			} else {
				formatIdsInThisCase.add(formatId);
			}
		}

		// Validate namespace for mDoc formats
		if (fmt.format === "mso_mdoc") {
			if (!fmt.namespace || typeof fmt.namespace !== "string") {
				errors.push(
					`Format at index ${i}: mDoc format requires 'namespace' field (must be a non-empty string)`,
				);
			}
		}

		// Validate attributes array
		if (!Array.isArray(fmt.attributes) || fmt.attributes.length === 0) {
			errors.push(
				`Format at index ${i}: Missing or invalid 'attributes' field (must be a non-empty array)`,
			);
			continue;
		}

		const attributes = fmt.attributes as unknown[];
		const attributeIds = new Set<string>();

		for (let j = 0; j < attributes.length; j++) {
			const attr = attributes[j];

			if (
				typeof attr !== "object" ||
				attr === null ||
				Array.isArray(attr)
			) {
				errors.push(
					`Format at index ${i}, attribute at index ${j}: Must be an object`,
				);
				continue;
			}

			const attribute = attr as Record<string, unknown>;

			// Validate attribute fields
			if (!attribute.id || typeof attribute.id !== "string") {
				errors.push(
					`Format at index ${i}, attribute at index ${j}: Missing or invalid 'id' field`,
				);
			} else {
				// Check for duplicate attribute IDs within this format
				const attrId = attribute.id as string;
				if (attributeIds.has(attrId)) {
					errors.push(
						`Format at index ${i}: Duplicate attribute ID '${attrId}'`,
					);
				} else {
					attributeIds.add(attrId);
				}
			}

			if (!attribute.displayName || typeof attribute.displayName !== "string") {
				errors.push(
					`Format at index ${i}, attribute at index ${j}: Missing or invalid 'displayName' field`,
				);
			}

			if (!Array.isArray(attribute.path) || attribute.path.length === 0) {
				errors.push(
					`Format at index ${i}, attribute at index ${j}: 'path' must be a non-empty array`,
				);
			} else {
				// Validate path elements are strings or null
				const path = attribute.path as unknown[];
				for (let k = 0; k < path.length; k++) {
					const pathElement = path[k];
					if (pathElement !== null && typeof pathElement !== "string") {
						errors.push(
							`Format at index ${i}, attribute at index ${j}: Path element at index ${k} must be a string or null`,
						);
					}
				}

				// Validate mDoc path starts with namespace
				if (
					fmt.format === "mso_mdoc" &&
					fmt.namespace &&
					path.length > 0
				) {
					if (path[0] !== fmt.namespace) {
						errors.push(
							`Format at index ${i}, attribute at index ${j}: mDoc attribute path must start with namespace '${fmt.namespace}', got '${path[0]}'`,
						);
					}
				}
			}

			if (
				typeof attribute.required !== "boolean" &&
				attribute.required !== undefined
			) {
				errors.push(
					`Format at index ${i}, attribute at index ${j}: 'required' field must be a boolean`,
				);
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
	if (typeof credCase !== "object" || credCase === null) {
		return false;
	}

	const c = credCase as Record<string, unknown>;

	return (
		typeof c.id === "string" &&
		c.id.length > 0 &&
		typeof c.displayName === "string" &&
		c.displayName.length > 0 &&
		Array.isArray(c.formats) &&
		c.formats.length > 0 &&
		c.formats.every((f: unknown) => {
			if (typeof f !== "object" || f === null) {
				return false;
			}
			const fmt = f as Record<string, unknown>;
			return (
				typeof fmt.id === "string" &&
				typeof fmt.format === "string" &&
				VALID_FORMATS.includes(fmt.format as CredentialFormat) &&
				typeof fmt.displayName === "string" &&
				typeof fmt.credentialType === "string" &&
				Array.isArray(fmt.attributes) &&
				fmt.attributes.length > 0
			);
		})
	);
}

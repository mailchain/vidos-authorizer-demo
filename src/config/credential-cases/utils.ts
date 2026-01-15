import type { CredentialFormat } from "@/types/app";
import { CREDENTIAL_CASES } from "./credential-cases";
import type { CredentialCaseDefinition, FormatDefinition } from "./types";

export function getCredentialCase(
	documentType: string,
): CredentialCaseDefinition | undefined {
	return CREDENTIAL_CASES.find((c) => c.id === documentType);
}

export function getFormatDefinition(
	documentType: string,
	format: CredentialFormat,
): FormatDefinition | undefined {
	const credCase = getCredentialCase(documentType);
	return credCase?.formats.find((f) => f.format === format);
}

export function getFormatDefinitionById(
	formatId: string,
): FormatDefinition | undefined {
	for (const credCase of CREDENTIAL_CASES) {
		const format = credCase.formats.find((f) => f.id === formatId);
		if (format) return format;
	}
	return undefined;
}

export function getAvailableFormats(documentType: string): FormatDefinition[] {
	const credCase = getCredentialCase(documentType);
	return credCase?.formats ?? [];
}

/**
 * Get all credential cases including both app-defined and custom cases
 * @param customCases Optional array of custom credential cases (from store)
 * @returns Array of all credential cases
 */
export function getAllCredentialCases(
	customCases: CredentialCaseDefinition[] = [],
): CredentialCaseDefinition[] {
	return [...CREDENTIAL_CASES, ...customCases];
}

/**
 * Check if a credential case is a custom (user-defined) case
 * @param id The credential case ID
 * @returns True if the case is custom, false if it's app-defined
 */
export function isCustomCase(id: string): boolean {
	return !CREDENTIAL_CASES.some((c) => c.id === id);
}

/**
 * Check if a format has any selectively disclosable attributes
 * @param formatDef The format definition
 * @returns True if at least one attribute is selectively disclosable
 */
export function hasSelectivelyDisclosableAttributes(
	formatDef: FormatDefinition,
): boolean {
	return formatDef.attributes.some((attr) => !attr.nonSelectivelyDisclosable);
}

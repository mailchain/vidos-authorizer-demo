import type { CredentialFormat } from "@/types/app";

export interface AttributeDefinition {
	id: string;
	displayName: string;
	path: (string | null)[];
	/**
	 * Indicates if the attribute MUST be present in an issued credential (issuer requirement).
	 * @default false
	 */
	requiredForIssuance?: boolean;
	/**
	 * Indicates if the attribute can be selectively disclosed during verification. If false, the attribute is always disclosed and cannot be individually requested.
	 * @default false
	 */
	nonSelectivelyDisclosable?: boolean;
}

export interface FormatDefinition {
	id: string;
	format: CredentialFormat;
	displayName: string;
	credentialType: string;
	namespace?: string;
	attributes: AttributeDefinition[];
}

export interface CredentialCaseDefinition {
	id: string;
	displayName: string;
	formats: FormatDefinition[];
}

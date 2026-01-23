import { createNameId, createNounId } from "mnemonic-id";

/**
 * Generate a mnemonic ID for credential requests.
 * Uses mnemonic-id for human-readable IDs that are easier to identify and remember.
 *
 * @returns A mnemonic ID string (e.g., "red-blue-tree")
 */
export function generateCredentialId(): string {
	return `${createNameId()}-cred`;
}

export function generateCredentialSetId(): string {
	return `${createNounId()}-set`;
}

/**
 * Generate a UUID for React keys.
 * Uses native crypto.randomUUID() for unique React keys.
 *
 * @returns A UUID v4 string
 */
export function generateReactKey(): string {
	return crypto.randomUUID();
}

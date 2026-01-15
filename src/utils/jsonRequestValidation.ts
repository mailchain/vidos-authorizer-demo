import { z } from "zod";
import type { SavedJsonRequest } from "@/types/app";

// Minimal validation schema - only check critical fields
const jsonRequestSchema = z.object({
	responseMode: z.enum([
		"direct_post",
		"direct_post.jwt",
		"dc_api",
		"dc_api.jwt",
	]),
	responseType: z.literal("vp_token"),
	query: z.object({}).passthrough(), // Just check object exists
	protocol: z.string().optional(),
	expectedOrigins: z.array(z.string()).optional(),
});

export interface JsonValidationResult {
	valid: boolean;
	errors: string[];
	parsed?: unknown;
}

/**
 * Validates a JSON request string with minimal validation
 * Checks: responseMode, responseType, query presence, and DC API specific fields
 */
export function validateJsonRequest(json: string): JsonValidationResult {
	const errors: string[] = [];

	// 1. Parse JSON
	let parsed: unknown;
	try {
		parsed = JSON.parse(json);
	} catch (e) {
		return {
			valid: false,
			errors: [
				`Invalid JSON syntax: ${e instanceof Error ? e.message : String(e)}`,
			],
		};
	}

	// 2. Validate with Zod
	const result = jsonRequestSchema.safeParse(parsed);
	if (!result.success) {
		for (const issue of result.error.issues) {
			const path = issue.path.join(".");
			errors.push(`${path ? `${path}: ` : ""}${issue.message}`);
		}
	}

	// 3. DC API specific validation
	if (result.success) {
		const data = result.data;
		if (data.responseMode === "dc_api" || data.responseMode === "dc_api.jwt") {
			if (!data.protocol) {
				errors.push("DC API modes require 'protocol' field");
			}
			if (
				data.protocol === "openid4vp-v1-signed" &&
				(!data.expectedOrigins || data.expectedOrigins.length === 0)
			) {
				errors.push("Signed DC API protocol requires 'expectedOrigins' array");
			}
		}
	}

	return {
		valid: errors.length === 0,
		errors,
		parsed: result.success ? result.data : undefined,
	};
}

/**
 * Validates a saved JSON request for saving
 * Checks: name uniqueness and content validity
 */
export function validateSavedJsonRequest(
	name: string,
	content: string,
	existingRequests: SavedJsonRequest[],
	excludeId?: string,
): JsonValidationResult {
	const errors: string[] = [];

	// Validate name
	if (!name.trim()) {
		errors.push("Name is required");
	}

	// Validate name uniqueness
	const duplicate = existingRequests.find(
		(r) =>
			r.id !== excludeId && r.name.toLowerCase() === name.trim().toLowerCase(),
	);
	if (duplicate) {
		errors.push(`A request named "${name.trim()}" already exists`);
	}

	// Validate content
	if (!content.trim()) {
		errors.push("Content is required");
	} else {
		const contentValidation = validateJsonRequest(content);
		if (!contentValidation.valid) {
			errors.push(...contentValidation.errors);
		}
	}

	return {
		valid: errors.length === 0,
		errors,
		parsed: undefined,
	};
}

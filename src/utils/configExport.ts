import type { CredentialCaseDefinition } from "@/config/credential-cases/types";
import type { InstanceType } from "@/types/app";

export interface ConfigExport {
	schemaVersion: string; // e.g., "1.0"
	instanceType: InstanceType; // "managed" | "own"
	ownAuthorizerUrl?: string; // Only present if instanceType is "own"
	customCredentialCases: CredentialCaseDefinition[];
}

interface ExportConfigParams {
	instanceType: InstanceType;
	ownAuthorizerUrl: string;
	customCredentialCases: CredentialCaseDefinition[];
}

export function exportConfig({
	instanceType,
	ownAuthorizerUrl,
	customCredentialCases,
}: ExportConfigParams): ConfigExport {
	const config: ConfigExport = {
		schemaVersion: "1.0",
		instanceType,
		customCredentialCases,
	};

	if (instanceType === "own") {
		config.ownAuthorizerUrl = ownAuthorizerUrl;
	}

	return config;
}

export function downloadConfigAsJson(config: ConfigExport): void {
	const json = JSON.stringify(config, null, 2);
	const blob = new Blob([json], { type: "application/json" });
	const url = URL.createObjectURL(blob);

	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	const filename = `vidos-config-${year}-${month}-${day}.json`;

	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}

interface ValidationSuccess {
	success: true;
	config: ConfigExport;
}

interface ValidationFailure {
	success: false;
	error: string;
}

type ValidationResult = ValidationSuccess | ValidationFailure;

export function validateImportedConfig(data: unknown): ValidationResult {
	// Check if data is an object
	if (typeof data !== "object" || data === null) {
		return { success: false, error: "Invalid config: not an object" };
	}

	const obj = data as Record<string, unknown>;

	// Check required fields
	if (typeof obj.schemaVersion !== "string") {
		return { success: false, error: "Missing or invalid schemaVersion" };
	}

	// Check version compatibility
	if (obj.schemaVersion !== "1.0") {
		return {
			success: false,
			error: `Unsupported schema version: ${obj.schemaVersion}`,
		};
	}

	if (obj.instanceType !== "managed" && obj.instanceType !== "own") {
		return { success: false, error: "Invalid instanceType" };
	}

	if (!Array.isArray(obj.customCredentialCases)) {
		return {
			success: false,
			error: "Missing or invalid customCredentialCases",
		};
	}

	// Validate ownAuthorizerUrl if instanceType is "own"
	if (obj.instanceType === "own") {
		if (
			typeof obj.ownAuthorizerUrl !== "string" &&
			obj.ownAuthorizerUrl !== undefined
		) {
			return { success: false, error: "Invalid ownAuthorizerUrl" };
		}
	}

	return {
		success: true,
		config: obj as unknown as ConfigExport,
	};
}

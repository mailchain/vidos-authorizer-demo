import { getFormatDefinitionById } from "@/config/credential-cases";
import type { CredentialRequest } from "@/types/app";

interface DCQLClaim {
	path: (string | null)[];
}

interface DCQLCredential {
	id: string;
	format: string;
	meta?: Record<string, unknown>;
	claims: DCQLClaim[];
}

interface DCQLQuery {
	type: "DCQL";
	dcql: {
		credentials: DCQLCredential[];
	};
}

export function buildDCQLQuery(request: CredentialRequest): DCQLQuery {
	const formatDef = getFormatDefinitionById(request.formatId);

	if (!formatDef) {
		throw new Error(`Unknown format with id ${request.formatId}`);
	}

	const meta: Record<string, unknown> =
		request.format === "dc+sd-jwt"
			? { vct_values: [formatDef.credentialType] }
			: { doctype_value: formatDef.credentialType };

	const claims: DCQLClaim[] = formatDef.attributes
		.filter((attr) => request.attributes.includes(attr.id))
		.map((attr) => ({
			path: attr.path,
		}));

	return {
		type: "DCQL",
		dcql: {
			credentials: [
				{
					id: crypto.randomUUID(),
					format: request.format,
					meta,
					claims,
				},
			],
		},
	};
}

export function buildDCQLQueryMultiple(
	requests: CredentialRequest[],
): DCQLQuery {
	if (requests.length === 0) {
		throw new Error("At least one credential request is required");
	}

	const credentials: DCQLCredential[] = requests.map((request) => {
		const formatDef = getFormatDefinitionById(request.formatId);
		if (!formatDef) {
			throw new Error(`Unknown format with id ${request.formatId}`);
		}

		if (request.attributes.length === 0) {
			throw new Error("At least one attribute must be selected");
		}

		const meta: Record<string, unknown> =
			request.format === "dc+sd-jwt"
				? { vct_values: [formatDef.credentialType] }
				: { doctype_value: formatDef.credentialType };

		const claims: DCQLClaim[] = formatDef.attributes
			.filter((attr) => request.attributes.includes(attr.id))
			.map((attr) => ({
				path: attr.path,
			}));

		return {
			id: crypto.randomUUID(),
			format: request.format,
			meta,
			claims,
		};
	});

	return {
		type: "DCQL",
		dcql: {
			credentials,
		},
	};
}

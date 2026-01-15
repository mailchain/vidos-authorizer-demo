import {
	getFormatDefinitionById,
	hasSelectivelyDisclosableAttributes,
} from "@/config/credential-cases/utils";
import type { CredentialRequestWithId } from "@/types/app";

interface DCQLClaim {
	path: (string | null)[];
}

interface DCQLCredential {
	id: string;
	format: string;
	meta?: Record<string, unknown>;
	claims?: DCQLClaim[]; // Optional: undefined when no selectively disclosable attributes
}

interface DCQLQuery {
	type: "DCQL";
	dcql: {
		credentials: DCQLCredential[];
	};
}

export function buildDCQLQueryMultiple(
	requests: CredentialRequestWithId[],
): DCQLQuery {
	if (requests.length === 0) {
		throw new Error("At least one credential request is required");
	}

	const credentials: DCQLCredential[] = requests.map((request) => {
		const formatDef = getFormatDefinitionById(request.formatId);
		if (!formatDef) {
			throw new Error(`Unknown format with id ${request.formatId}`);
		}

		const hasSelectiveDisclosure =
			hasSelectivelyDisclosableAttributes(formatDef);

		// Only validate attribute selection for credentials with selectively disclosable attributes
		if (hasSelectiveDisclosure && request.attributes.length === 0) {
			throw new Error(
				"At least one selectively disclosable attribute must be selected",
			);
		}

		const meta: Record<string, unknown> =
			request.format === "dc+sd-jwt"
				? { vct_values: [formatDef.credentialType] }
				: { doctype_value: formatDef.credentialType };

		// Only build claims array for selectively disclosable attributes
		const selectivelyDisclosableAttrs = formatDef.attributes.filter(
			(attr) => !attr.nonSelectivelyDisclosable,
		);
		const claims: DCQLClaim[] = selectivelyDisclosableAttrs
			.filter((attr) => request.attributes.includes(attr.id))
			.map((attr) => ({ path: attr.path }));

		const credential: DCQLCredential = {
			id: crypto.randomUUID(),
			format: request.format,
			meta,
			claims: claims.length > 0 ? claims : undefined,
		};

		return credential;
	});

	return { type: "DCQL", dcql: { credentials } };
}

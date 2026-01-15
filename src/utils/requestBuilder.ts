import type { CredentialRequestWithId, ResponseModeConfig } from "@/types/app";
import { buildDCQLQueryMultiple } from "@/utils/queryBuilder";

export function buildAuthorizationRequestBody(
	credentialRequests: CredentialRequestWithId[],
	responseModeConfig: ResponseModeConfig,
) {
	const query = buildDCQLQueryMultiple(credentialRequests);

	const isDCAPI =
		responseModeConfig.mode === "dc_api" ||
		responseModeConfig.mode === "dc_api.jwt";

	return {
		responseMode: responseModeConfig.mode,
		responseType: "vp_token",
		query,
		...(isDCAPI && {
			protocol: responseModeConfig.dcApiProtocol,
			...(responseModeConfig.dcApiProtocol === "openid4vp-v1-signed" && {
				expectedOrigins: [window.location.origin],
			}),
		}),
	};
}

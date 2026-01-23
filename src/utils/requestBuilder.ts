import type {
	CredentialRequestWithId,
	CredentialSet,
	ResponseModeConfig,
} from "@/types/app";
import { buildDCQLQueryMultiple } from "@/utils/queryBuilder";

export function buildAuthorizationRequestBody(
	credentialRequests: CredentialRequestWithId[],
	responseModeConfig: ResponseModeConfig,
	credentialSets?: CredentialSet[],
) {
	const query = buildDCQLQueryMultiple(credentialRequests, credentialSets);

	const isDCAPI =
		responseModeConfig.mode === "dc_api" ||
		responseModeConfig.mode === "dc_api.jwt";

	return {
		responseMode: responseModeConfig.mode,
		responseType: "vp_token",
		query,
		...(responseModeConfig.profile && {
			profile: responseModeConfig.profile,
		}),
		...(isDCAPI && {
			protocol: responseModeConfig.dcApiProtocol,
			...(responseModeConfig.dcApiProtocol === "openid4vp-v1-signed" && {
				expectedOrigins: [window.location.origin],
			}),
		}),
	};
}

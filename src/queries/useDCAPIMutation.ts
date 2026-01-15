import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuthorizerClient } from "@/api/client";
import { authorizationKeys } from "@/queries/keys";
import { useFlowStore } from "@/stores/useFlowStore";
import type { DcApiResponse, DigitalCredentialGetRequest } from "@/types/api";
import {
	checkDCAPISupport,
	invokeDCAPI,
	isDigitalCredentialError,
} from "@/utils/dcapi";

export function useDCAPIMutation() {
	const authorizerUrl = useFlowStore((state) => state.authorizerUrl);
	const authorizationId = useFlowStore((state) => state.authorizationId);
	const responseModeConfig = useFlowStore((state) => state.responseModeConfig);
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (
			digitalCredentialGetRequest: DigitalCredentialGetRequest,
		) => {
			if (!authorizationId) {
				throw new Error("Missing authorization ID");
			}

			// Check browser support
			const support = checkDCAPISupport();
			if (!support.available) {
				throw new Error(support.reason || "DC API not supported");
			}

			// Invoke DC API
			const credential = await invokeDCAPI(digitalCredentialGetRequest);

			// Check for errors in the response
			if (isDigitalCredentialError(credential)) {
				throw new Error(`Digital credential error: ${credential.data.error}`);
			}

			// Submit response to appropriate endpoint
			const client = createAuthorizerClient(authorizerUrl);
			const endpoint = (
				responseModeConfig.mode === "dc_api"
					? `/openid4/vp/v1_0/${authorizationId}/dc_api`
					: `/openid4/vp/v1_0/${authorizationId}/dc_api.jwt`
			) as
				| "/openid4/vp/v1_0/{authorizationId}/dc_api"
				| "/openid4/vp/v1_0/{authorizationId}/dc_api.jwt";

			const { data, error: submitError } = await client.POST(endpoint, {
				params: { path: { authorizationId } },
				body: {
					origin: window.location.origin,
					digitalCredentialGetResponse: credential.data,
				},
			});

			if (submitError) {
				throw new Error(
					submitError.message || "Failed to submit DC API response",
				);
			}

			return data as DcApiResponse;
		},
		onSuccess: (data) => {
			if (!authorizationId) return;

			// Update status in React Query cache
			if (data && "status" in data) {
				queryClient.setQueryData(authorizationKeys.status(authorizationId), {
					status: data.status,
				});
			}
		},
	});
}

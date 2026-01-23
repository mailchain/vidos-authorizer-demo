import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuthorizerClient } from "@/api/client";
import { authorizationKeys } from "@/queries/keys";
import {
	selectAuthorizerUrl,
	useAuthorizationStore,
} from "@/stores/authorizationStore";
import type { DcApiResponse, DigitalCredentialGetRequest } from "@/types/api";
import {
	checkDCAPISupport,
	invokeDCAPI,
	isDigitalCredentialError,
} from "@/utils/dcapi";

export function useDCAPIMutation() {
	const authorizerUrl = useAuthorizationStore(selectAuthorizerUrl);
	const authorizationId = useAuthorizationStore(
		(state) => state.authorizationId,
	);
	const responseModeConfig = useAuthorizationStore(
		(state) => state.responseModeConfig,
	);
	const queryClient = useQueryClient();

	return useMutation({
		retry: false,
		mutationFn: async (
			digitalCredentialGetRequest: DigitalCredentialGetRequest,
		) => {
			if (!authorizationId) {
				throw new Error("Configuration error: Missing authorization ID");
			}

			// Check browser support
			const support = checkDCAPISupport(digitalCredentialGetRequest.protocol);
			if (!support.available) {
				throw new Error(
					`Browser compatibility: ${support.reason || "DC API not supported"}`,
				);
			}

			// Invoke DC API
			let credential: Awaited<ReturnType<typeof invokeDCAPI>>;
			try {
				credential = await invokeDCAPI(digitalCredentialGetRequest);
			} catch (error) {
				throw new Error(
					`DC API: ${error instanceof Error ? error.message : "Unknown error"}`,
					{ cause: error },
				);
			}

			// Check for errors in the response
			if (isDigitalCredentialError(credential)) {
				throw new Error(`DC API: Credential error - ${credential.data.error}`);
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
				// Handle Authorizer API errors
				const errorMessage = submitError.message || "Unknown error occurred";
				throw new Error(`Authorizer API: ${errorMessage}`);
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

import { useCallback } from "react";
import { createAuthorizerClient } from "@/api/client";
import { useAuthorization } from "@/context/AuthorizationContext";
import { buildAuthorizationRequestBody } from "@/utils/requestBuilder";

export function useCreateAuthorization() {
	const { state, dispatch } = useAuthorization();

	const createAuthorization = useCallback(async () => {
		// Validate credential requests exist
		if (state.credentialRequests.length === 0) {
			dispatch({
				type: "CREATE_AUTHORIZATION_ERROR",
				payload: { message: "No credential requests configured" },
			});
			return;
		}

		if (!state.authorizerUrl) {
			dispatch({
				type: "CREATE_AUTHORIZATION_ERROR",
				payload: { message: "Authorizer URL is required" },
			});
			return;
		}

		dispatch({ type: "CREATE_AUTHORIZATION_START" });

		try {
			const client = createAuthorizerClient(state.authorizerUrl);

			// Build authorization request body with multiple requests and response mode config
			const requestBody = buildAuthorizationRequestBody(
				state.credentialRequests,
				state.responseModeConfig,
			);

			dispatch({ type: "SET_LAST_REQUEST", payload: requestBody });

			const { data, error } = await client.POST(
				"/openid4/vp/v1_0/authorizations",
				{
					body: requestBody as any,
				},
			);

			if (data) {
				dispatch({ type: "SET_LAST_RESPONSE", payload: data });
			}

			if (error) {
				dispatch({
					type: "CREATE_AUTHORIZATION_ERROR",
					payload: {
						message: error.message || "Failed to create authorization",
						details: JSON.stringify(error),
					},
				});
				return;
			}

			// Handle different response structures based on mode
			if (!data) {
				dispatch({
					type: "CREATE_AUTHORIZATION_ERROR",
					payload: { message: "Invalid response from authorizer" },
				});
				return;
			}

			// DC API modes return digitalCredentialGetRequest
			const isDCAPI =
				state.responseModeConfig.mode === "dc_api" ||
				state.responseModeConfig.mode === "dc_api.jwt";

			if (isDCAPI && !("digitalCredentialGetRequest" in data)) {
				dispatch({
					type: "CREATE_AUTHORIZATION_ERROR",
					payload: {
						message: "Expected digitalCredentialGetRequest in response",
					},
				});
				return;
			}

			// Direct post modes return authorizeUrl
			if (!isDCAPI && !("authorizeUrl" in data)) {
				dispatch({
					type: "CREATE_AUTHORIZATION_ERROR",
					payload: { message: "Expected authorizeUrl in response" },
				});
				return;
			}

			dispatch({
				type: "CREATE_AUTHORIZATION_SUCCESS",
				payload: {
					authorizationId: data.authorizationId,
					authorizeUrl: "authorizeUrl" in data ? data.authorizeUrl : undefined,
					digitalCredentialGetRequest:
						"digitalCredentialGetRequest" in data
							? data.digitalCredentialGetRequest
							: undefined,
					expiresAt: data.expiresAt,
				},
			});
		} catch (err) {
			dispatch({
				type: "CREATE_AUTHORIZATION_ERROR",
				payload: {
					message:
						err instanceof Error ? err.message : "Unknown error occurred",
				},
			});
		}
	}, [
		state.authorizerUrl,
		state.credentialRequests,
		state.responseModeConfig,
		dispatch,
	]);

	return { createAuthorization, isLoading: state.isLoading };
}

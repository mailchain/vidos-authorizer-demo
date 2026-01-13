import { useCallback } from "react";
import { createAuthorizerClient } from "@/api/client";
import { useAuthorization } from "@/context/AuthorizationContext";
import { buildDCQLQuery } from "@/utils/queryBuilder";

export function useCreateAuthorization() {
	const { state, dispatch } = useAuthorization();

	const createAuthorization = useCallback(async () => {
		if (!state.credentialRequest) {
			dispatch({
				type: "CREATE_AUTHORIZATION_ERROR",
				payload: { message: "No credential request configured" },
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
			const query = buildDCQLQuery(state.credentialRequest);

			const requestBody = {
				responseMode: "direct_post.jwt" as const,
				query,
			};

			dispatch({ type: "SET_LAST_REQUEST", payload: requestBody });

			const { data, error } = await client.POST(
				"/openid4/vp/v1_0/authorizations",
				{
					body: requestBody,
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

			if (!data || !("authorizeUrl" in data)) {
				dispatch({
					type: "CREATE_AUTHORIZATION_ERROR",
					payload: { message: "Invalid response from authorizer" },
				});
				return;
			}

			dispatch({
				type: "CREATE_AUTHORIZATION_SUCCESS",
				payload: {
					authorizationId: data.authorizationId,
					authorizeUrl: data.authorizeUrl,
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
	}, [state.authorizerUrl, state.credentialRequest, dispatch]);

	return { createAuthorization, isLoading: state.isLoading };
}

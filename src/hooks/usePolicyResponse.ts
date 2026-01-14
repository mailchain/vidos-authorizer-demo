import { useEffect } from "react";
import { createAuthorizerClient } from "@/api/client";
import { useAuthorization } from "@/context/AuthorizationContext";
import type { PolicyResult } from "@/types/app";

export function usePolicyResponse() {
	const { state, dispatch } = useAuthorization();

	useEffect(() => {
		// Only fetch when authorized and we don't have policy data yet
		if (
			state.authorizationStatus === "authorized" &&
			state.authorizationId &&
			!state.policyResponse
		) {
			const fetchPolicyResponse = async () => {
				if (!state.authorizationId || !state.authorizerUrl) return;

				try {
					const client = createAuthorizerClient(state.authorizerUrl);
					const { data, error } = await client.GET(
						"/openid4/vp/v1_0/authorizations/{authorizationId}/policy-response",
						{
							params: {
								path: { authorizationId: state.authorizationId },
							},
						},
					);

					if (error) {
						console.error("Failed to fetch policy response:", error);
						return;
					}

					if (data) {
						dispatch({
							type: "SET_POLICY_RESPONSE",
							payload: {
								data: (data.data as PolicyResult[]) || [],
								authorizationId: state.authorizationId,
							},
						});
					}
				} catch (err) {
					console.error("Error fetching policy response:", err);
				}
			};

			fetchPolicyResponse();
		}
	}, [
		state.authorizationStatus,
		state.authorizationId,
		state.policyResponse,
		state.authorizerUrl,
		dispatch,
	]);
}

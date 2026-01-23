import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createAuthorizerClient } from "@/api/client";
import {
	selectAuthorizerUrl,
	useAuthorizationStore,
} from "@/stores/authorizationStore";
import type { AuthorizationStatusResponse } from "@/types/api";
import { authorizationKeys } from "./keys";

export function usePolicyResponseQuery() {
	const authorizationId = useAuthorizationStore(
		(state) => state.authorizationId,
	);
	const authorizerUrl = useAuthorizationStore(selectAuthorizerUrl);
	const stage = useAuthorizationStore((state) => state.stage);

	// Get current status from React Query cache
	const queryClient = useQueryClient();
	const statusData = queryClient.getQueryData<AuthorizationStatusResponse>(
		authorizationKeys.status(authorizationId!),
	);

	return useQuery({
		queryKey: authorizationKeys.policy(authorizationId!),
		queryFn: async () => {
			const client = createAuthorizerClient(authorizerUrl);
			const { data, error } = await client.GET(
				"/openid4/vp/v1_0/authorizations/{authorizationId}/policy-response",
				{
					params: {
						path: { authorizationId: authorizationId! },
					},
				},
			);

			if (error) {
				throw new Error(error.message || "Failed to fetch policy response");
			}

			return data;
		},
		enabled:
			stage === "result" &&
			(statusData?.status === "authorized" ||
				statusData?.status === "rejected" ||
				statusData?.status === "error") &&
			!!authorizationId,
		staleTime: Number.POSITIVE_INFINITY, // Never refetch, it's final
	});
}

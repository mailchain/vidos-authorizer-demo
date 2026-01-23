import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createAuthorizerClient } from "@/api/client";
import { selectAuthorizerUrl, useAppStore } from "@/stores/appStore";
import type { AuthorizationStatusResponse } from "@/types/api";
import { authorizationKeys } from "./keys";

export function usePolicyResponseQuery() {
	const authorizationId = useAppStore((state) => state.authorizationId);
	const authorizerUrl = useAppStore(selectAuthorizerUrl);
	const stage = useAppStore((state) => state.stage);

	// Get current status from React Query cache
	const queryClient = useQueryClient();
	const statusData = queryClient.getQueryData<AuthorizationStatusResponse>(
		authorizationKeys.status(authorizationId ?? undefined),
	);

	return useQuery({
		queryKey: authorizationId ? authorizationKeys.policy(authorizationId) : [],
		queryFn: async () => {
			if (!authorizationId) throw new Error("No authorization ID provided");
			const client = createAuthorizerClient(authorizerUrl);
			const { data, error } = await client.GET(
				"/openid4/vp/v1_0/authorizations/{authorizationId}/policy-response",
				{ params: { path: { authorizationId } } },
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

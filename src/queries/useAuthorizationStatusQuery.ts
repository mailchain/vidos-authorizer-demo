import { useQuery } from "@tanstack/react-query";
import { createAuthorizerClient } from "@/api/client";
import { selectAuthorizerUrl, useFlowStore } from "@/stores/useFlowStore";
import type { AuthorizationStatus } from "@/types/app";
import { authorizationKeys } from "./keys";

const TERMINAL_STATES: AuthorizationStatus[] = [
	"authorized",
	"rejected",
	"error",
	"expired",
];

export function useAuthorizationStatusQuery() {
	const authorizationId = useFlowStore((state) => state.authorizationId);
	const authorizerUrl = useFlowStore(selectAuthorizerUrl);
	const stage = useFlowStore((state) => state.stage);

	return useQuery({
		queryKey: authorizationKeys.status(authorizationId!),
		queryFn: async () => {
			const client = createAuthorizerClient(authorizerUrl);
			const { data, error } = await client.GET(
				"/openid4/vp/v1_0/authorizations/{authorizationId}/status",
				{
					params: {
						path: { authorizationId: authorizationId! },
					},
				},
			);

			if (error) {
				throw new Error(error.message || "Failed to fetch status");
			}

			return data;
		},
		enabled: stage === "authorization" && !!authorizationId,
		refetchInterval: (query) => {
			const status = query.state.data?.status;
			if (!status) return 2500;

			const isTerminal = TERMINAL_STATES.includes(status);
			return isTerminal ? false : 2500; // Stop polling on terminal
		},
		refetchIntervalInBackground: false,
	});
}

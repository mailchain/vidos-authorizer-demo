import { useCallback, useEffect, useRef } from "react";
import { createAuthorizerClient } from "@/api/client";
import { useAuthorization } from "@/context/AuthorizationContext";
import type { AuthorizationStatus } from "@/types/app";

const POLL_INTERVAL = 2500;
const TERMINAL_STATES: AuthorizationStatus[] = [
	"authorized",
	"rejected",
	"error",
	"expired",
];

export function useAuthorizationStatus() {
	const { state, dispatch } = useAuthorization();
	const intervalRef = useRef<number | null>(null);

	const checkStatus = useCallback(async () => {
		if (!state.authorizationId || !state.authorizerUrl) {
			return;
		}

		try {
			const client = createAuthorizerClient(state.authorizerUrl);

			const { data, error } = await client.GET(
				"/openid4/vp/v1_0/authorizations/{authorizationId}/status",
				{
					params: {
						path: { authorizationId: state.authorizationId },
					},
				},
			);

			if (error) {
				dispatch({
					type: "SET_ERROR",
					payload: {
						message: error.message || "Failed to check authorization status",
					},
				});
				return;
			}

			if (data?.status) {
				dispatch({ type: "UPDATE_STATUS", payload: data.status });

				if (TERMINAL_STATES.includes(data.status) && intervalRef.current) {
					clearInterval(intervalRef.current);
					intervalRef.current = null;
				}
			}
		} catch (err) {
			dispatch({
				type: "SET_ERROR",
				payload: {
					message:
						err instanceof Error ? err.message : "Failed to check status",
				},
			});
		}
	}, [state.authorizationId, state.authorizerUrl, dispatch]);

	useEffect(() => {
		if (
			state.stage === "authorization" &&
			state.authorizationId &&
			!TERMINAL_STATES.includes(
				state.authorizationStatus as AuthorizationStatus,
			)
		) {
			checkStatus();

			intervalRef.current = window.setInterval(checkStatus, POLL_INTERVAL);

			return () => {
				if (intervalRef.current) {
					clearInterval(intervalRef.current);
					intervalRef.current = null;
				}
			};
		}
	}, [
		state.stage,
		state.authorizationId,
		state.authorizationStatus,
		checkStatus,
	]);

	return { status: state.authorizationStatus };
}

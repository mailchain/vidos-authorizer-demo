import { useEffect } from "react";
import { useAuthorizationStatusQuery } from "@/queries/useAuthorizationStatusQuery";
import { useAppStore } from "@/stores/appStore";
import type { AuthorizationStatus } from "@/types/app";

const TERMINAL_STATES: AuthorizationStatus[] = [
	"authorized",
	"rejected",
	"error",
	"expired",
];

export function useFlowTransitions() {
	const stage = useAppStore((state) => state.stage);
	const setStage = useAppStore((state) => state.setStage);

	// Get status from React Query
	const { data: statusData } = useAuthorizationStatusQuery();

	// Auto-transition: authorization → result on terminal status
	useEffect(() => {
		if (stage === "authorization" && statusData?.status) {
			const isTerminal = TERMINAL_STATES.includes(statusData.status);
			if (isTerminal) {
				setStage("result");
			}
		}
	}, [stage, statusData?.status, setStage]);
}

import { ProgressIndicator } from "@/components/ProgressIndicator";
import { AuthorizationStage } from "@/components/stages/AuthorizationStage";
import { CreateStage } from "@/components/stages/CreateStage";
import { ResultStage } from "@/components/stages/ResultStage";
import { useFlowTransitions } from "@/hooks/useFlowTransitions";
import { useFlowStore } from "@/stores/useFlowStore";

export function AuthorizationFlow() {
	const stage = useFlowStore((state) => state.stage);
	useFlowTransitions(); // Enable automatic stage transitions

	return (
		<div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
			<ProgressIndicator currentStage={stage} />

			{stage === "create" && <CreateStage />}
			{stage === "authorization" && <AuthorizationStage />}
			{stage === "result" && <ResultStage />}
		</div>
	);
}

import { DevTools } from "@/components/DevTools";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { AuthorizationStage } from "@/components/stages/AuthorizationStage";
import { CreateStage } from "@/components/stages/CreateStage";
import { ResultStage } from "@/components/stages/ResultStage";
import { useAuthorization } from "@/context/AuthorizationContext";

export function AuthorizationFlow() {
	const { state } = useAuthorization();

	return (
		<div className="w-full max-w-lg mx-auto">
			<ProgressIndicator currentStage={state.stage} />

			{state.stage === "create" && <CreateStage />}
			{state.stage === "authorization" && <AuthorizationStage />}
			{state.stage === "result" && <ResultStage />}

			<DevTools />
		</div>
	);
}

import { lazy, Suspense } from "react";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { useFlowTransitions } from "@/hooks/useFlowTransitions";
import { useAppStore } from "@/stores/appStore";

// Lazy load stage components for code splitting
const CreateStage = lazy(() =>
	import("@/components/stages/CreateStage").then((m) => ({
		default: m.CreateStage,
	})),
);
const AuthorizationStage = lazy(() =>
	import("@/components/stages/AuthorizationStage").then((m) => ({
		default: m.AuthorizationStage,
	})),
);
const ResultStage = lazy(() =>
	import("@/components/stages/ResultStage").then((m) => ({
		default: m.ResultStage,
	})),
);

// Loading fallback component
function StageLoader() {
	return (
		<div className="flex items-center justify-center py-12">
			<div className="flex flex-col items-center gap-3">
				<div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
				<p className="text-sm text-muted-foreground">Loading...</p>
			</div>
		</div>
	);
}

export function AuthorizationFlow() {
	const stage = useAppStore((state) => state.stage);
	useFlowTransitions(); // Enable automatic stage transitions

	return (
		<div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
			<ProgressIndicator currentStage={stage} />

			<Suspense fallback={<StageLoader />}>
				{stage === "create" && <CreateStage />}
				{stage === "authorization" && <AuthorizationStage />}
				{stage === "result" && <ResultStage />}
			</Suspense>
		</div>
	);
}

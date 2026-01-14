import { useQueryClient } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useAuthorizationStatusQuery } from "@/queries/useAuthorizationStatusQuery";
import { usePolicyResponseQuery } from "@/queries/usePolicyResponseQuery";
import { useFlowStore } from "@/stores/useFlowStore";
import type { AuthorizationStatus, PolicyResult } from "@/types/app";
import { PolicyResults } from "./PolicyResults";

const statusConfig: Record<
	AuthorizationStatus,
	{ title: string; description: string; variant: "default" | "destructive" }
> = {
	created: {
		title: "Created",
		description: "Authorization request was created",
		variant: "default",
	},
	pending: {
		title: "Pending",
		description: "Authorization is being processed",
		variant: "default",
	},
	authorized: {
		title: "Authorized",
		description: "The credential request was successfully authorized",
		variant: "default",
	},
	rejected: {
		title: "Rejected",
		description: "The wallet rejected the authorization request",
		variant: "destructive",
	},
	error: {
		title: "Error",
		description: "An error occurred during authorization",
		variant: "destructive",
	},
	expired: {
		title: "Expired",
		description: "The authorization request has expired",
		variant: "destructive",
	},
};

export function ResultStage() {
	const startOver = useFlowStore((state) => state.startOver);
	const error = useFlowStore((state) => state.error);
	const queryClient = useQueryClient();

	// Get status and policy from React Query
	const { data: statusData } = useAuthorizationStatusQuery();
	const { data: policyResponse, error: policyError } = usePolicyResponseQuery();

	const handleStartOver = () => {
		startOver();
		queryClient.clear(); // Clear all React Query cache
	};

	const status = statusData?.status;
	const config = status ? statusConfig[status] : null;
	const hasPolicyResults = policyResponse && policyResponse.data.length > 0;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Authorization Result</CardTitle>
				<CardDescription>
					Review the result of your authorization request
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6 md:space-y-8">
				{config && (
					<Alert variant={config.variant}>
						<div className="flex items-start gap-3">
							<div
								className={cn(
									"w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0",
									status === "authorized" && "bg-green-100 text-green-600",
									status === "rejected" && "bg-red-100 text-red-600",
									status === "error" && "bg-red-100 text-red-600",
									status === "expired" && "bg-yellow-100 text-yellow-600",
								)}
							>
								{status === "authorized" && "✓"}
								{status === "rejected" && "✗"}
								{status === "error" && "!"}
								{status === "expired" && "⏱"}
							</div>
							<div className="flex-1">
								<AlertTitle className="mb-1">{config.title}</AlertTitle>
								<AlertDescription>{config.description}</AlertDescription>
							</div>
						</div>
					</Alert>
				)}

				{(error || policyError) && (
					<Alert variant="destructive">
						<AlertDescription>
							{error?.message || policyError?.message}
							{error?.details && (
								<span className="block mt-1 text-xs opacity-70">
									{error.details}
								</span>
							)}
						</AlertDescription>
					</Alert>
				)}

				{hasPolicyResults && policyResponse && (
					<>
						<PolicyResults results={policyResponse.data as PolicyResult[]} />

						<Collapsible>
							<CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full">
								<ChevronDown className="h-4 w-4" />
								Raw Policy Response Data
							</CollapsibleTrigger>
							<CollapsibleContent className="mt-2">
								<pre className="p-4 bg-muted rounded-md text-xs md:text-sm overflow-auto max-h-96 md:max-h-[32rem] lg:max-h-[48rem]">
									{JSON.stringify(policyResponse, null, 2)}
								</pre>
							</CollapsibleContent>
						</Collapsible>
					</>
				)}

				<Button onClick={handleStartOver} className="w-full sm:w-auto sm:min-w-48 sm:mx-auto sm:block">
					Start New Authorization
				</Button>
			</CardContent>
		</Card>
	);
}

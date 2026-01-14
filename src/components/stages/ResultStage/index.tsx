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
import { useAuthorization } from "@/context/AuthorizationContext";
import { usePolicyResponse } from "@/hooks/usePolicyResponse";
import { cn } from "@/lib/utils";
import type { AuthorizationStatus } from "@/types/app";
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
	const { state, dispatch } = useAuthorization();

	// Fetch policy response if authorized
	usePolicyResponse();

	const handleStartOver = () => {
		dispatch({ type: "START_OVER" });
	};

	const status = state.authorizationStatus;
	const config = status ? statusConfig[status] : null;
	const hasPolicyResults =
		state.policyResponse && state.policyResponse.data.length > 0;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Authorization Result</CardTitle>
				<CardDescription>
					Review the result of your authorization request
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
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
							<div>
								<AlertTitle className="mb-1">{config.title}</AlertTitle>
								<AlertDescription>{config.description}</AlertDescription>
							</div>
						</div>
					</Alert>
				)}

				{state.error && (
					<Alert variant="destructive">
						<AlertDescription>
							{state.error.message}
							{state.error.details && (
								<span className="block mt-1 text-xs opacity-70">
									{state.error.details}
								</span>
							)}
						</AlertDescription>
					</Alert>
				)}

				{hasPolicyResults && state.policyResponse && (
					<>
						<PolicyResults results={state.policyResponse.data} />

						<Collapsible>
							<CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full">
								<ChevronDown className="h-4 w-4" />
								Raw Policy Response Data
							</CollapsibleTrigger>
							<CollapsibleContent className="mt-2">
								<pre className="p-4 bg-muted rounded-md text-xs overflow-auto max-h-96">
									{JSON.stringify(state.policyResponse, null, 2)}
								</pre>
							</CollapsibleContent>
						</Collapsible>
					</>
				)}

				<Button onClick={handleStartOver} className="w-full">
					Start New Authorization
				</Button>
			</CardContent>
		</Card>
	);
}

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthorization } from "@/context/AuthorizationContext";
import { useAuthorizationStatus } from "@/hooks/useAuthorizationStatus";
import { AuthorizeLink } from "./AuthorizeLink";
import { QRCodeDisplay } from "./QRCodeDisplay";

export function AuthorizationStage() {
	const { state, dispatch } = useAuthorization();
	const { status } = useAuthorizationStatus();

	const statusLabels: Record<string, string> = {
		created: "Waiting for wallet...",
		pending: "Processing...",
		authorized: "Authorized!",
		rejected: "Rejected",
		error: "Error occurred",
		expired: "Request expired",
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Authorize Request</CardTitle>
				<CardDescription>
					Scan the QR code with your wallet to authorize the credential request
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				{state.authorizeUrl ? (
					<>
						<QRCodeDisplay url={state.authorizeUrl} />
						<AuthorizeLink url={state.authorizeUrl} />
					</>
				) : (
					<div className="flex justify-center">
						<Skeleton className="w-64 h-64" />
					</div>
				)}

				<div className="flex items-center justify-center gap-2">
					<div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
					<span className="text-sm text-muted-foreground">
						{status ? statusLabels[status] || status : "Checking status..."}
					</span>
				</div>

				{state.error && (
					<Alert variant="destructive">
						<AlertDescription>{state.error.message}</AlertDescription>
					</Alert>
				)}

				{state.expiresAt && (
					<p className="text-xs text-center text-muted-foreground">
						Request expires at {new Date(state.expiresAt).toLocaleTimeString()}
					</p>
				)}

				<Button
					variant="outline"
					onClick={() => dispatch({ type: "GO_BACK" })}
					className="w-full"
				>
					Go Back
				</Button>
			</CardContent>
		</Card>
	);
}

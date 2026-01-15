import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useDCAPIMutation } from "@/queries/useDCAPIMutation";
import { useFlowStore } from "@/stores/useFlowStore";

export function DCAPIButton() {
	const digitalCredentialGetRequest = useFlowStore(
		(state) => state.digitalCredentialGetRequest,
	);

	const { mutate, isPending, error, reset } = useDCAPIMutation();

	const handleInvoke = () => {
		if (!digitalCredentialGetRequest) return;
		reset(); // Clear previous error
		mutate(digitalCredentialGetRequest);
	};

	return (
		<div className="space-y-4">
			<div className="p-4 bg-muted rounded-md">
				<p className="text-sm text-muted-foreground mb-4">
					Click the button below to request credentials using your browser's
					Digital Credentials API. Your wallet application will be invoked to
					fulfill the request.
				</p>
				<Button
					onClick={handleInvoke}
					disabled={isPending || !digitalCredentialGetRequest}
					className="w-full sm:w-auto sm:min-w-48 sm:mx-auto sm:block"
				>
					{isPending ? (
						<span className="flex items-center">
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Waiting for wallet...
						</span>
					) : error ? (
						"Retry"
					) : (
						"Request Credentials"
					)}
				</Button>
			</div>

			{error && (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertDescription>{error.message}</AlertDescription>
				</Alert>
			)}
		</div>
	);
}

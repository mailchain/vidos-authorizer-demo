import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useDCAPIMutation } from "@/queries/useDCAPIMutation";
import { useAppStore } from "@/stores/appStore";

export function DCAPIButton() {
	const digitalCredentialGetRequest = useAppStore(
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
			<div className="p-4 bg-muted rounded-md space-y-4">
				<div className="text-sm text-muted-foreground space-y-2">
					<p>
						Click the button below to request credentials using your browser's
						Digital Credentials API. This will make the browser prompt the
						wallet to share the requested credentials.
					</p>
					<p>
						After clicking, your browser will display a native confirmation
						dialog. This dialog is provided by your browser, not by this
						application, as an added security measure.
					</p>
					<p>
						To proceed, click <strong>"Continue"</strong> in the browser dialog.
					</p>
				</div>
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
						"Retry via DC API"
					) : (
						"Request Credentials via DC API"
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

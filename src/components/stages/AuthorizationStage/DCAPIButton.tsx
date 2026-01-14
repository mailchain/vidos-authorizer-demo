import { Loader2 } from "lucide-react";
import { useState } from "react";
import { createAuthorizerClient } from "@/api/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useAuthorization } from "@/context/AuthorizationContext";
import type { AuthorizationStatus } from "@/types/app";
import { checkDCAPISupport, invokeDCAPI } from "@/utils/dcapi";

export function DCAPIButton() {
	const { state, dispatch } = useAuthorization();
	const [isInvoking, setIsInvoking] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleInvoke = async () => {
		if (!state.digitalCredentialGetRequest || !state.authorizationId) {
			setError("Missing DC API request data");
			return;
		}

		// Check browser support
		const support = checkDCAPISupport();
		if (!support.available) {
			setError(support.reason || "DC API not supported");
			return;
		}

		setIsInvoking(true);
		setError(null);

		try {
			// Invoke DC API
			const credential = await invokeDCAPI(state.digitalCredentialGetRequest);

			// Submit response to appropriate endpoint
			const client = createAuthorizerClient(state.authorizerUrl);
			const endpoint =
				state.responseModeConfig.mode === "dc_api"
					? `/openid4/vp/v1_0/authorizations/${state.authorizationId}/dc_api`
					: `/openid4/vp/v1_0/authorizations/${state.authorizationId}/dc_api.jwt`;

			const { data, error: submitError } = await client.POST(endpoint as any, {
				body: {
					origin: window.location.origin,
					digitalCredentialGetResponse: credential,
				},
			});

			if (submitError) {
				setError(submitError.message || "Failed to submit DC API response");
				return;
			}

			// DC API endpoints return status directly
			if (data && typeof data === "object" && "status" in data) {
				dispatch({
					type: "UPDATE_STATUS",
					payload: (data as { status: AuthorizationStatus }).status,
				});
			}
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to invoke DC API");
		} finally {
			setIsInvoking(false);
		}
	};

	return (
		<div className="space-y-4">
			<div className="p-4 bg-muted rounded-md">
				<p className="text-sm text-muted-foreground mb-4">
					Click the button below to request credentials using your browser's
					Digital Credentials API. Your wallet application will be invoked to
					fulfill the request.
				</p>
				<Button onClick={handleInvoke} disabled={isInvoking} className="w-full">
					{isInvoking ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Waiting for wallet...
						</>
					) : (
						"Request Credentials"
					)}
				</Button>
			</div>

			{error && (
				<Alert variant="destructive">
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
		</div>
	);
}

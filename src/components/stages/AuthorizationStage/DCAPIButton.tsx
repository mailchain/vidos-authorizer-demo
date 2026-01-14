import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { createAuthorizerClient } from "@/api/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { authorizationKeys } from "@/queries/keys";
import { useFlowStore } from "@/stores/useFlowStore";
import type { AuthorizationStatus } from "@/types/app";
import { checkDCAPISupport, invokeDCAPI } from "@/utils/dcapi";

export function DCAPIButton() {
	const digitalCredentialGetRequest = useFlowStore(
		(state) => state.digitalCredentialGetRequest,
	);
	const authorizationId = useFlowStore((state) => state.authorizationId);
	const authorizerUrl = useFlowStore((state) => state.authorizerUrl);
	const responseModeConfig = useFlowStore((state) => state.responseModeConfig);
	const setError = useFlowStore((state) => state.setError);
	const error = useFlowStore((state) => state.error);

	const queryClient = useQueryClient();
	const [isInvoking, setIsInvoking] = useState(false);
	const [localError, setLocalError] = useState<string | null>(null);

	const handleInvoke = async () => {
		if (!digitalCredentialGetRequest || !authorizationId) {
			setLocalError("Missing DC API request data");
			return;
		}

		// Check browser support
		const support = checkDCAPISupport();
		if (!support.available) {
			setLocalError(support.reason || "DC API not supported");
			return;
		}

		setIsInvoking(true);
		setLocalError(null);
		setError(null);

		try {
			// Invoke DC API
			const credential = await invokeDCAPI(digitalCredentialGetRequest);

			// Submit response to appropriate endpoint
			const client = createAuthorizerClient(authorizerUrl);
			const endpoint =
				responseModeConfig.mode === "dc_api"
					? `/openid4/vp/v1_0/authorizations/${authorizationId}/dc_api`
					: `/openid4/vp/v1_0/authorizations/${authorizationId}/dc_api.jwt`;

			const { data, error: submitError } = await client.POST(endpoint as any, {
				body: {
					origin: window.location.origin,
					digitalCredentialGetResponse: credential,
				},
			});

			if (submitError) {
				setLocalError(
					submitError.message || "Failed to submit DC API response",
				);
				return;
			}

			// DC API endpoints return status directly
			if (data && typeof data === "object" && "status" in data) {
				// Update status in React Query cache
				queryClient.setQueryData(authorizationKeys.status(authorizationId), {
					status: (data as { status: AuthorizationStatus }).status,
				});
			}
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Failed to invoke DC API";
			setLocalError(errorMessage);
			setError({ message: errorMessage });
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

			{(localError || error) && (
				<Alert variant="destructive">
					<AlertDescription>{localError || error?.message}</AlertDescription>
				</Alert>
			)}
		</div>
	);
}

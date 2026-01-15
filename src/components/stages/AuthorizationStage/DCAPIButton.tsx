import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { createAuthorizerClient } from "@/api/client";
import { Button } from "@/components/ui/button";
import { authorizationKeys } from "@/queries/keys";
import { useFlowStore } from "@/stores/useFlowStore";
import type { DcApiRequest, DcApiResponse } from "@/types/api";
import { checkDCAPISupport, invokeDCAPI } from "@/utils/dcapi";

export function DCAPIButton() {
	const digitalCredentialGetRequest = useFlowStore(
		(state) => state.digitalCredentialGetRequest,
	);
	const authorizationId = useFlowStore((state) => state.authorizationId);
	const authorizerUrl = useFlowStore((state) => state.authorizerUrl);
	const responseModeConfig = useFlowStore((state) => state.responseModeConfig);
	const setError = useFlowStore((state) => state.setError);

	const queryClient = useQueryClient();
	const [isInvoking, setIsInvoking] = useState(false);

	const handleInvoke = async () => {
		if (!digitalCredentialGetRequest || !authorizationId) {
			setError({ message: "Missing DC API request data" });
			return;
		}

		// Check browser support
		const support = checkDCAPISupport();
		if (!support.available) {
			setError({ message: support.reason || "DC API not supported" });
			return;
		}

		setIsInvoking(true);
		setError(null);

		try {
			// Invoke DC API
			const credential = await invokeDCAPI(digitalCredentialGetRequest);

			// Submit response to appropriate endpoint
			const client = createAuthorizerClient(authorizerUrl);
			const endpoint = (
				responseModeConfig.mode === "dc_api"
					? `/openid4/vp/v1_0/${authorizationId}/dc_api`
					: `/openid4/vp/v1_0/${authorizationId}/dc_api.jwt`
			) as
				| "/openid4/vp/v1_0/{authorizationId}/dc_api"
				| "/openid4/vp/v1_0/{authorizationId}/dc_api.jwt";

			const { data, error: submitError } = await client.POST(endpoint, {
				params: { path: { authorizationId } },
				body: {
					origin: window.location.origin,
					digitalCredentialGetResponse: credential,
				} as DcApiRequest,
			});

			if (submitError) {
				setError({
					message: submitError.message || "Failed to submit DC API response",
				});
				return;
			}

			// DC API endpoints return status directly
			if (data && typeof data === "object" && "status" in data) {
				// Update status in React Query cache
				queryClient.setQueryData(authorizationKeys.status(authorizationId), {
					status: (data as DcApiResponse).status,
				});
			}
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Failed to invoke DC API";
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
				<Button
					onClick={handleInvoke}
					disabled={isInvoking}
					className="w-full sm:w-auto sm:min-w-48 sm:mx-auto sm:block"
				>
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
		</div>
	);
}

import { JsonCollapsible } from "@/components/JsonCollapsible";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCreateAuthorizationMutation } from "@/queries/useCreateAuthorizationMutation";
import { useFlowStore } from "@/stores/useFlowStore";
import { buildAuthorizationRequestBody } from "@/utils/requestBuilder";
import { validateAuthorizationRequest } from "@/utils/validation";
import { AuthorizerConfig } from "./AuthorizerConfig";
import { CredentialRequestList } from "./CredentialRequestList";
import { ResponseModeSelector } from "./ResponseModeSelector";

export function CreateStage() {
	const authorizerUrl = useFlowStore((state) => state.authorizerUrl);
	const credentialRequests = useFlowStore((state) => state.credentialRequests);
	const responseModeConfig = useFlowStore((state) => state.responseModeConfig);
	const showPreview = useFlowStore((state) => state.showPreview);
	const lastRequest = useFlowStore((state) => state.lastRequest);
	const error = useFlowStore((state) => state.error);
	const setShowPreview = useFlowStore((state) => state.setShowPreview);
	const setLastRequest = useFlowStore((state) => state.setLastRequest);

	const mutation = useCreateAuthorizationMutation();

	const validation = validateAuthorizationRequest(
		authorizerUrl,
		credentialRequests,
		responseModeConfig,
	);

	const handleShowPreview = () => {
		if (credentialRequests.length === 0) return;
		const requestBody = buildAuthorizationRequestBody(
			credentialRequests,
			responseModeConfig,
		);
		setLastRequest(requestBody);
		setShowPreview(true);
	};

	const handleConfirmAndSend = () => {
		mutation.mutate({ authorizerUrl, credentialRequests, responseModeConfig });
		setShowPreview(false);
	};

	const handleCreateDirect = () => {
		mutation.mutate({ authorizerUrl, credentialRequests, responseModeConfig });
	};

	if (showPreview) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Request Preview</CardTitle>
					<CardDescription>
						Review the request before sending it to the Vidos Authorizer
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6 md:space-y-8">
					<JsonCollapsible
						title="Authorization Request"
						data={lastRequest}
						defaultOpen={true}
					/>

					{(error || mutation.error) && (
						<Alert variant="destructive">
							<AlertDescription>
								{error?.message || mutation.error?.message}
								{error?.details && (
									<span className="block mt-1 text-xs opacity-70">
										{error.details}
									</span>
								)}
							</AlertDescription>
						</Alert>
					)}

					<div className="flex flex-col sm:flex-row gap-3">
						<Button
							variant="outline"
							onClick={() => setShowPreview(false)}
							disabled={mutation.isPending}
							className="flex-1"
						>
							Go Back
						</Button>
						<Button
							onClick={handleConfirmAndSend}
							disabled={mutation.isPending}
							className="flex-1"
						>
							{mutation.isPending ? "Sending..." : "Confirm & Send"}
						</Button>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Create Authorization</CardTitle>
				<CardDescription>
					Configure your credential authorization request
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6 md:space-y-8">
				<AuthorizerConfig />

				<Separator />

				<ResponseModeSelector />

				<Separator />

				<CredentialRequestList />

				{!validation.valid && (
					<Alert variant="destructive">
						<AlertDescription>
							<p className="font-medium mb-2">
								Please fix the following errors:
							</p>
							<ul className="list-disc list-inside space-y-1">
								{validation.errors.map((error) => (
									<li key={error} className="text-sm">
										{error}
									</li>
								))}
							</ul>
						</AlertDescription>
					</Alert>
				)}

				{(error || mutation.error) && (
					<Alert variant="destructive">
						<AlertDescription>
							{error?.message || mutation.error?.message}
							{error?.details && (
								<span className="block mt-1 text-xs opacity-70">
									{error.details}
								</span>
							)}
						</AlertDescription>
					</Alert>
				)}

				<div className="flex flex-col sm:flex-row gap-3">
					<Button
						onClick={handleCreateDirect}
						disabled={!validation.valid || mutation.isPending}
						className="flex-1"
					>
						{mutation.isPending ? "Creating..." : "Create Authorization"}
					</Button>
					<Button
						variant="outline"
						onClick={handleShowPreview}
						disabled={!validation.valid || mutation.isPending}
						className="flex-1"
					>
						Preview Request
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

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
import { useAuthorization } from "@/context/AuthorizationContext";
import { useCreateAuthorization } from "@/hooks/useCreateAuthorization";
import { buildAuthorizationRequestBody } from "@/utils/requestBuilder";
import { validateAuthorizationRequest } from "@/utils/validation";
import { AuthorizerConfig } from "./AuthorizerConfig";
import { CredentialRequestList } from "./CredentialRequestList";
import { ResponseModeSelector } from "./ResponseModeSelector";

export function CreateStage() {
	const { state, dispatch } = useAuthorization();
	const { createAuthorization, isLoading } = useCreateAuthorization();

	const validation = validateAuthorizationRequest(
		state.authorizerUrl,
		state.credentialRequests,
		state.responseModeConfig,
	);

	const handleShowPreview = () => {
		if (state.credentialRequests.length === 0) return;
		const requestBody = buildAuthorizationRequestBody(
			state.credentialRequests,
			state.responseModeConfig,
		);
		dispatch({ type: "SET_LAST_REQUEST", payload: requestBody });
		dispatch({ type: "SHOW_PREVIEW" });
	};

	const handleConfirmAndSend = async () => {
		await createAuthorization();
		dispatch({ type: "HIDE_PREVIEW" });
	};

	const handleCreateDirect = async () => {
		await createAuthorization();
	};

	if (state.showPreview) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Request Preview</CardTitle>
					<CardDescription>
						Review the request before sending it to the Vidos Authorizer
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<JsonCollapsible
						title="Authorization Request"
						data={state.lastRequest}
						defaultOpen={true}
					/>

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

					<div className="flex gap-3">
						<Button
							variant="outline"
							onClick={() => dispatch({ type: "HIDE_PREVIEW" })}
							disabled={isLoading}
							className="flex-1"
						>
							Go Back
						</Button>
						<Button
							onClick={handleConfirmAndSend}
							disabled={isLoading}
							className="flex-1"
						>
							{isLoading ? "Sending..." : "Confirm & Send"}
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
			<CardContent className="space-y-6">
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

				<div className="flex gap-3">
					<Button
						onClick={handleCreateDirect}
						disabled={!validation.valid || isLoading}
						className="flex-1"
					>
						{isLoading ? "Creating..." : "Create Authorization"}
					</Button>
					<Button
						variant="outline"
						onClick={handleShowPreview}
						disabled={!validation.valid || isLoading}
						className="flex-1"
					>
						Preview Request
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

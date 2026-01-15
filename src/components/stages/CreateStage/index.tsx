import { useEffect, useState } from "react";
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
import {
	type JsonValidationResult,
	validateJsonRequest,
} from "@/utils/jsonRequestValidation";
import { buildAuthorizationRequestBody } from "@/utils/requestBuilder";
import { validateAuthorizationRequest } from "@/utils/validation";
import { AuthorizerConfig } from "./AuthorizerConfig";
import { CredentialRequestList } from "./CredentialRequestList";
import { JsonEditor } from "./JsonEditor";
import { JsonModeToggle } from "./JsonModeToggle";
import { ProfileSelector } from "./ProfileSelector";
import { ResponseModeSelector } from "./ResponseModeSelector";
import { SavedJsonRequestsManager } from "./SavedJsonRequestsManager";
import { TransferToJsonButton } from "./TransferToJsonButton";

export function CreateStage() {
	const authorizerUrl = useFlowStore((state) => state.authorizerUrl);
	const credentialRequests = useFlowStore((state) => state.credentialRequests);
	const responseModeConfig = useFlowStore((state) => state.responseModeConfig);
	const showPreview = useFlowStore((state) => state.showPreview);
	const lastRequest = useFlowStore((state) => state.lastRequest);
	const error = useFlowStore((state) => state.error);
	const setShowPreview = useFlowStore((state) => state.setShowPreview);
	const setLastRequest = useFlowStore((state) => state.setLastRequest);

	// JSON mode state
	const useRawJsonMode = useFlowStore((state) => state.useRawJsonMode);
	const setUseRawJsonMode = useFlowStore((state) => state.setUseRawJsonMode);
	const rawJsonContent = useFlowStore((state) => state.rawJsonContent);

	const [jsonValidation, setJsonValidation] = useState<JsonValidationResult>({
		valid: false,
		errors: [],
	});

	const mutation = useCreateAuthorizationMutation();

	// Builder mode validation
	const builderValidation = validateAuthorizationRequest(
		authorizerUrl,
		credentialRequests,
		responseModeConfig,
	);

	// JSON mode validation (debounced)
	useEffect(() => {
		if (!useRawJsonMode) return;

		const timer = setTimeout(() => {
			const result = validateJsonRequest(rawJsonContent);
			setJsonValidation(result);
		}, 500);

		return () => clearTimeout(timer);
	}, [rawJsonContent, useRawJsonMode]);

	// Determine which validation to use
	const isValid = useRawJsonMode
		? jsonValidation.valid
		: builderValidation.valid;

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
		if (useRawJsonMode) {
			// Raw JSON mode - send parsed JSON directly
			const parsed = JSON.parse(rawJsonContent);
			mutation.mutate({ authorizerUrl, rawRequestBody: parsed });
		} else {
			// Builder mode
			mutation.mutate({
				authorizerUrl,
				credentialRequests,
				responseModeConfig,
			});
		}
		setShowPreview(false);
	};

	const handleCreateDirect = () => {
		if (useRawJsonMode) {
			// Raw JSON mode - send parsed JSON directly
			const parsed = JSON.parse(rawJsonContent);
			mutation.mutate({ authorizerUrl, rawRequestBody: parsed });
		} else {
			// Builder mode
			mutation.mutate({
				authorizerUrl,
				credentialRequests,
				responseModeConfig,
			});
		}
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

				{/* Mode Toggle */}
				<JsonModeToggle
					value={useRawJsonMode}
					onChange={setUseRawJsonMode}
					hasUnsavedChanges={rawJsonContent !== "" && useRawJsonMode}
				/>

				<Separator />

				{useRawJsonMode ? (
					<>
						{/* Raw JSON Mode */}
						<JsonEditor
							value={rawJsonContent}
							onChange={useFlowStore.getState().setRawJsonContent}
							validation={jsonValidation}
						/>

						<SavedJsonRequestsManager />
					</>
				) : (
					<>
						{/* Builder Mode */}
						<ProfileSelector />

						<Separator />

						<ResponseModeSelector />

						<Separator />

						<CredentialRequestList />

						{/* Transfer Button */}
						<TransferToJsonButton disabled={!builderValidation.valid} />
					</>
				)}

				{!isValid && (
					<Alert variant="destructive">
						<AlertDescription>
							<p className="font-medium mb-2">
								Please fix the following errors:
							</p>
							<ul className="list-disc list-inside space-y-1">
								{useRawJsonMode
									? jsonValidation.errors.map((error) => (
											<li key={error} className="text-sm">
												{error}
											</li>
										))
									: builderValidation.errors.map((error) => (
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
						disabled={!isValid || mutation.isPending}
						className="flex-1"
					>
						{mutation.isPending ? "Creating..." : "Create Authorization"}
					</Button>
					{!useRawJsonMode && (
						<Button
							variant="outline"
							onClick={handleShowPreview}
							disabled={!isValid || mutation.isPending}
							className="flex-1"
						>
							Preview Request
						</Button>
					)}
				</div>
			</CardContent>
		</Card>
	);
}

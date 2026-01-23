import { ChevronRight } from "lucide-react";
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
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { useCreateAuthorizationMutation } from "@/queries/useCreateAuthorizationMutation";
import {
	selectAuthorizerUrl,
	useAuthorizationStore,
} from "@/stores/authorizationStore";
import {
	type JsonValidationResult,
	validateJsonRequest,
} from "@/utils/jsonRequestValidation";
import { buildAuthorizationRequestBody } from "@/utils/requestBuilder";
import { validateAuthorizationRequest } from "@/utils/validation";
import { AdvancedOptions } from "./AdvancedOptions";
import { AuthorizerConfig } from "./AuthorizerConfig";
import { CredentialRequestList } from "./CredentialRequestList";
import { CredentialSetList } from "./CredentialSetList";
import { JsonEditor } from "./JsonEditor";
import { JsonModeToggle } from "./JsonModeToggle";
import { ProfileSelector } from "./ProfileSelector";
import { ResponseModeSelector } from "./ResponseModeSelector";
import { SavedJsonRequestsManager } from "./SavedJsonRequestsManager";
import { TransferToJsonButton } from "./TransferToJsonButton";

export function CreateStage() {
	const authorizerUrl = useAuthorizationStore(selectAuthorizerUrl);
	const credentialRequests = useAuthorizationStore(
		(state) => state.credentialRequests,
	);
	const credentialSets = useAuthorizationStore((state) => state.credentialSets);
	const responseModeConfig = useAuthorizationStore(
		(state) => state.responseModeConfig,
	);
	const showPreview = useAuthorizationStore((state) => state.showPreview);
	const lastRequest = useAuthorizationStore((state) => state.lastRequest);
	const error = useAuthorizationStore((state) => state.error);
	const setShowPreview = useAuthorizationStore((state) => state.setShowPreview);
	const setLastRequest = useAuthorizationStore((state) => state.setLastRequest);

	// JSON mode state
	const useRawJsonMode = useAuthorizationStore((state) => state.useRawJsonMode);
	const setUseRawJsonMode = useAuthorizationStore(
		(state) => state.setUseRawJsonMode,
	);
	const rawJsonContent = useAuthorizationStore((state) => state.rawJsonContent);

	// Credential sets section collapsed state
	const [credentialSetsExpanded, setCredentialSetsExpanded] = useState(false);

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
		credentialSets, // Task 5: Include credential sets in validation
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
			credentialSets,
		);
		setLastRequest(requestBody);
		setShowPreview(true);
	};

	const handleConfirmAndSend = () => {
		if (useRawJsonMode) {
			// Raw JSON mode - send parsed JSON directly
			const parsed = JSON.parse(rawJsonContent);
			mutation.mutate({ rawRequestBody: parsed });
		} else {
			// Builder mode
			mutation.mutate({
				credentialRequests,
				responseModeConfig,
				credentialSets,
			});
		}
		setShowPreview(false);
	};

	const handleCreateDirect = () => {
		if (useRawJsonMode) {
			// Raw JSON mode - send parsed JSON directly
			const parsed = JSON.parse(rawJsonContent);
			mutation.mutate({ rawRequestBody: parsed });
		} else {
			// Builder mode
			mutation.mutate({
				credentialRequests,
				responseModeConfig,
				credentialSets,
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
							onChange={useAuthorizationStore.getState().setRawJsonContent}
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

						<Separator />

						{/* Credential Sets Section - Collapsible */}
						<Collapsible
							open={credentialSetsExpanded}
							onOpenChange={setCredentialSetsExpanded}
						>
							<div className="space-y-4">
								<CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
									<ChevronRight className="h-4 w-4 transition-transform [[data-state=open]>&]:rotate-90" />
									<div className="flex flex-col items-start gap-0.5">
										<span className="font-medium">Credential Sets (DCQL)</span>
										<span className="text-xs">
											Options within a set are alternatives (OR). Multiple
											credentials in one option are combined (AND).
										</span>
									</div>
								</CollapsibleTrigger>

								<CollapsibleContent className="pt-4">
									<CredentialSetList />
								</CollapsibleContent>
							</div>
						</Collapsible>

						<Separator />

						<AdvancedOptions />

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

				{/* Task 5.6: Display warnings (e.g., duplicate credential IDs) */}
				{!useRawJsonMode &&
					builderValidation.warnings &&
					builderValidation.warnings.length > 0 && (
						<Alert variant="default" className="border-yellow-500 bg-yellow-50">
							<AlertDescription>
								<p className="font-medium mb-2 text-yellow-800">Warnings:</p>
								<ul className="list-disc list-inside space-y-1">
									{builderValidation.warnings.map((warning) => (
										<li key={warning} className="text-sm text-yellow-700">
											{warning}
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

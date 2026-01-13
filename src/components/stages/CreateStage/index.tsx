import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAuthorization } from "@/context/AuthorizationContext";
import { useCreateAuthorization } from "@/hooks/useCreateAuthorization";
import { AuthorizerConfig } from "./AuthorizerConfig";
import { CredentialRequestBuilder } from "./CredentialRequestBuilder";

export function CreateStage() {
	const { state } = useAuthorization();
	const { createAuthorization, isLoading } = useCreateAuthorization();

	const isValidUrl = (url: string) => {
		try {
			new URL(url);
			return true;
		} catch {
			return false;
		}
	};

	const canSubmit =
		state.authorizerUrl &&
		isValidUrl(state.authorizerUrl) &&
		state.credentialRequest !== null;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Create Authorization Request</CardTitle>
				<CardDescription>
					Configure your authorizer and select the credentials to request
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<AuthorizerConfig />
				<CredentialRequestBuilder />

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

				<Button
					onClick={createAuthorization}
					disabled={!canSubmit || isLoading}
					className="w-full"
				>
					{isLoading ? "Creating..." : "Create Authorization"}
				</Button>
			</CardContent>
		</Card>
	);
}

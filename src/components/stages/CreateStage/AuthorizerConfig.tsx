import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthorization } from "@/context/AuthorizationContext";

export function AuthorizerConfig() {
	const { state, dispatch } = useAuthorization();

	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: "SET_AUTHORIZER_URL", payload: e.target.value });
	};

	const isValidUrl = (url: string) => {
		if (!url) return true;
		try {
			new URL(url);
			return true;
		} catch {
			return false;
		}
	};

	const showError = state.authorizerUrl && !isValidUrl(state.authorizerUrl);

	return (
		<div className="space-y-2">
			<Label htmlFor="authorizer-url">Authorizer URL</Label>
			<Input
				id="authorizer-url"
				type="url"
				placeholder="https://<my-gateway>.gateway.service.eu.vidos.dev/<my-authorizer>"
				value={state.authorizerUrl}
				onChange={handleUrlChange}
				className={showError ? "border-destructive" : ""}
			/>
			{showError && (
				<p className="text-sm text-destructive">Please enter a valid URL</p>
			)}
			<p className="text-sm text-muted-foreground">
				Enter your Vidos Gateway authorizer URL
			</p>
		</div>
	);
}

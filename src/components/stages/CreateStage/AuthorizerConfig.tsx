import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFlowStore } from "@/stores/useFlowStore";

export function AuthorizerConfig() {
	const authorizerUrl = useFlowStore((state) => state.authorizerUrl);
	const setAuthorizerUrl = useFlowStore((state) => state.setAuthorizerUrl);

	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAuthorizerUrl(e.target.value);
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

	const showError = authorizerUrl && !isValidUrl(authorizerUrl);

	return (
		<div className="space-y-2">
			<Label htmlFor="authorizer-url">Authorizer URL</Label>
			<Input
				id="authorizer-url"
				type="url"
				placeholder="https://<my-gateway>.gateway.service.eu.vidos.dev/<my-authorizer>"
				value={authorizerUrl}
				onChange={handleUrlChange}
				className={showError ? "border-destructive" : ""}
			/>
			{showError && (
				<p className="text-sm text-destructive">Please enter a valid URL</p>
			)}
			<p className="text-sm text-muted-foreground">
				Enter your Vidos Gateway authorizer URL.{" "}
				<a
					href="https://github.com/mailchain/vidos-authorizer-demo/blob/main/GATEWAY_SETUP.md"
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary underline hover:no-underline"
				>
					Setup guide
				</a>
			</p>
		</div>
	);
}

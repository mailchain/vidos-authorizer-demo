import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFlowStore } from "@/stores/useFlowStore";
import type { DCAPIProtocol, ResponseMode } from "@/types/app";
import { checkDCAPISupport } from "@/utils/dcapi";

export function ResponseModeSelector() {
	const config = useFlowStore((state) => state.responseModeConfig);
	const setResponseModeConfig = useFlowStore(
		(state) => state.setResponseModeConfig,
	);
	const dcApiSupported = checkDCAPISupport().available;

	const handleModeChange = (mode: ResponseMode) => {
		setResponseModeConfig({
			mode,
			// Reset DC API specific fields if switching away
			...(mode.startsWith("dc_api")
				? {
						dcApiProtocol: "openid4vp-v1-unsigned" as DCAPIProtocol,
					}
				: {}),
		});
	};

	const handleProtocolChange = (protocol: DCAPIProtocol) => {
		setResponseModeConfig({
			...config,
			dcApiProtocol: protocol,
		});
	};

	const isDCAPIMode = config.mode === "dc_api" || config.mode === "dc_api.jwt";
	const isSigned = config.dcApiProtocol === "openid4vp-v1-signed";

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<Label>Response Mode</Label>
				<RadioGroup value={config.mode} onValueChange={handleModeChange}>
					<div className="space-y-1">
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="direct_post" id="mode-direct-post" />
							<Label
								htmlFor="mode-direct-post"
								className="font-normal cursor-pointer"
							>
								direct_post
							</Label>
						</div>
						<p className="text-xs text-muted-foreground ml-6">
							QR code with plain response
						</p>
					</div>
					<div className="space-y-1">
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="direct_post.jwt"
								id="mode-direct-post-jwt"
							/>
							<Label
								htmlFor="mode-direct-post-jwt"
								className="font-normal cursor-pointer"
							>
								direct_post.jwt
							</Label>
						</div>
						<p className="text-xs text-muted-foreground ml-6">
							QR code with signed & encrypted response (most secure)
						</p>
					</div>
					<div className="space-y-1">
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="dc_api"
								id="mode-dc-api"
								disabled={!dcApiSupported}
							/>
							<Label
								htmlFor="mode-dc-api"
								className="font-normal cursor-pointer"
							>
								dc_api{" "}
								{!dcApiSupported && (
									<span className="text-xs text-muted-foreground ml-2">
										(Browser not supported)
									</span>
								)}
							</Label>
						</div>
						<p className="text-xs text-muted-foreground ml-6">
							Browser API with plain response
						</p>
					</div>
					<div className="space-y-1">
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="dc_api.jwt"
								id="mode-dc-api-jwt"
								disabled={!dcApiSupported}
							/>
							<Label
								htmlFor="mode-dc-api-jwt"
								className="font-normal cursor-pointer"
							>
								dc_api.jwt{" "}
								{!dcApiSupported && (
									<span className="text-xs text-muted-foreground ml-2">
										(Browser not supported)
									</span>
								)}
							</Label>
						</div>
						<p className="text-xs text-muted-foreground ml-6">
							Browser API with signed & encrypted response
						</p>
					</div>
				</RadioGroup>
			</div>

			{isDCAPIMode && (
				<div className="space-y-4 p-4 md:p-6 border rounded-md bg-muted/50">
					<div className="space-y-2">
						<Label>DC API Protocol</Label>
						<RadioGroup
							value={config.dcApiProtocol || "openid4vp-v1-unsigned"}
							onValueChange={handleProtocolChange}
						>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="openid4vp-v1-unsigned"
									id="protocol-unsigned"
								/>
								<Label
									htmlFor="protocol-unsigned"
									className="font-normal cursor-pointer"
								>
									Unsigned (Simpler)
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="openid4vp-v1-signed"
									id="protocol-signed"
								/>
								<Label
									htmlFor="protocol-signed"
									className="font-normal cursor-pointer"
								>
									Signed (More Secure)
								</Label>
							</div>
						</RadioGroup>
					</div>

					{isSigned && (
						<div className="space-y-2">
							<p className="text-xs text-muted-foreground">
								The signed protocol will use the current application origin (
								{typeof window !== "undefined" ? window.location.origin : "..."}
								) to validate the response.
							</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

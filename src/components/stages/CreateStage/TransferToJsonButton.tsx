import { FileJson } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/stores/appStore";
import { buildAuthorizationRequestBody } from "@/utils/requestBuilder";

interface TransferToJsonButtonProps {
	disabled: boolean;
}

export function TransferToJsonButton({ disabled }: TransferToJsonButtonProps) {
	const credentialRequests = useAppStore((state) => state.credentialRequests);
	const credentialSets = useAppStore((state) => state.credentialSets);
	const responseModeConfig = useAppStore((state) => state.responseModeConfig);
	const setRawJsonContent = useAppStore((state) => state.setRawJsonContent);
	const setUseRawJsonMode = useAppStore((state) => state.setUseRawJsonMode);

	const handleTransfer = () => {
		try {
			const requestBody = buildAuthorizationRequestBody(
				credentialRequests,
				responseModeConfig,
				credentialSets,
			);

			const prettyJson = JSON.stringify(requestBody, null, 2);

			setRawJsonContent(prettyJson);
			setUseRawJsonMode(true);
		} catch (error) {
			// Silently fail - validation errors will be caught by builder validation
			console.error("Failed to transfer to JSON:", error);
		}
	};

	return (
		<div className="flex justify-end">
			<Button
				type="button"
				variant="outline"
				onClick={handleTransfer}
				disabled={disabled}
			>
				<FileJson className="h-4 w-4 mr-2" />
				Transfer to JSON Editor
			</Button>
		</div>
	);
}

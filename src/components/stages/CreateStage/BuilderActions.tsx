import { Bookmark, FileJson } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/stores/appStore";
import { buildAuthorizationRequestBody } from "@/utils/requestBuilder";
import { SaveTemplateDialog } from "./SaveTemplateDialog";

interface BuilderActionsProps {
	disabled: boolean;
}

export function BuilderActions({ disabled }: BuilderActionsProps) {
	const [showSaveDialog, setShowSaveDialog] = useState(false);

	const credentialRequests = useAppStore((state) => state.credentialRequests);
	const credentialSets = useAppStore((state) => state.credentialSets);
	const responseModeConfig = useAppStore((state) => state.responseModeConfig);
	const setRawJsonContent = useAppStore((state) => state.setRawJsonContent);
	const setUseRawJsonMode = useAppStore((state) => state.setUseRawJsonMode);

	const handleTransferToJson = () => {
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
			console.error("Failed to transfer to JSON:", error);
		}
	};

	const hasCredentialRequests = credentialRequests.length > 0;

	return (
		<>
			<div className="relative">
				{/* Decorative background gradient */}
				<div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-muted/30 rounded-xl -z-10" />

				{/* Action buttons container */}
				<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
					{/* Save as Template */}
					<Button
						type="button"
						variant="outline"
						onClick={() => setShowSaveDialog(true)}
						disabled={!hasCredentialRequests}
						className="group relative overflow-hidden border-dashed hover:border-solid hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
					>
						<span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						<Bookmark className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
						<span className="relative">Save as Template</span>
					</Button>

					{/* Transfer to JSON Editor */}
					<Button
						type="button"
						variant="outline"
						onClick={handleTransferToJson}
						disabled={disabled}
						className="group relative overflow-hidden hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
					>
						<span className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						<FileJson className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
						<span className="relative">Transfer to JSON</span>
					</Button>
				</div>
			</div>

			{/* Save Template Dialog */}
			{showSaveDialog && (
				<SaveTemplateDialog onClose={() => setShowSaveDialog(false)} />
			)}
		</>
	);
}

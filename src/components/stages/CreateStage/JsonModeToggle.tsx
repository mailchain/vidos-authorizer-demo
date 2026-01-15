import { useState } from "react";
import { SavedJsonRequestDialog } from "@/components/SavedJsonRequestDialog";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFlowStore } from "@/stores/useFlowStore";

interface JsonModeToggleProps {
	value: boolean; // useRawJsonMode
	onChange: (useRaw: boolean) => void;
	hasUnsavedChanges: boolean;
}

export function JsonModeToggle({
	value,
	onChange,
	hasUnsavedChanges,
}: JsonModeToggleProps) {
	const [showWarning, setShowWarning] = useState(false);
	const [showSaveDialog, setShowSaveDialog] = useState(false);
	const rawJsonContent = useFlowStore((state) => state.rawJsonContent);
	const setRawJsonContent = useFlowStore((state) => state.setRawJsonContent);

	const handleTabChange = (newValue: string) => {
		const useRaw = newValue === "json";

		// If switching from JSON to Builder with unsaved changes, show warning
		if (!useRaw && value && hasUnsavedChanges) {
			setShowWarning(true);
		} else {
			onChange(useRaw);
		}
	};

	const handleDiscard = () => {
		setRawJsonContent("");
		onChange(false);
		setShowWarning(false);
	};

	const handleSaveFirst = () => {
		setShowWarning(false);
		setShowSaveDialog(true);
	};

	const handleSaveDialogClose = (saved: boolean) => {
		setShowSaveDialog(false);
		// Only switch to builder if save was successful
		if (saved) {
			setRawJsonContent("");
			onChange(false);
		}
	};

	return (
		<>
			<div className="flex justify-center">
				<Tabs
					value={value ? "json" : "builder"}
					onValueChange={handleTabChange}
					className="w-full max-w-md"
				>
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="builder">Builder</TabsTrigger>
						<TabsTrigger value="json">Raw JSON</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			<AlertDialog open={showWarning} onOpenChange={setShowWarning}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Discard JSON Changes?</AlertDialogTitle>
						<AlertDialogDescription>
							<p>
								You have unsaved changes in the JSON editor. Switching back to
								Builder mode will discard these changes.
							</p>
							<p className="mt-2">Would you like to save your request first?</p>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel onClick={() => setShowWarning(false)}>
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction onClick={handleSaveFirst}>
							Save First
						</AlertDialogAction>
						<AlertDialogAction
							onClick={handleDiscard}
							className="bg-destructive text-white hover:bg-destructive/90"
						>
							Discard & Switch
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			{showSaveDialog && (
				<SavedJsonRequestDialog
					mode="create"
					initialContent={rawJsonContent}
					onClose={handleSaveDialogClose}
				/>
			)}
		</>
	);
}

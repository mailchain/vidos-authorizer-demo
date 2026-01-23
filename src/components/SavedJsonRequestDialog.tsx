import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAppStore } from "@/stores/appStore";
import type { SavedJsonRequest } from "@/types/app";
import { generateReactKey } from "@/utils/id";
import { validateSavedJsonRequest } from "@/utils/jsonRequestValidation";

interface SavedJsonRequestDialogProps {
	mode: "create" | "edit";
	existingRequest?: SavedJsonRequest | null;
	initialContent?: string; // From current editor
	onClose: (saved: boolean) => void;
}

export function SavedJsonRequestDialog({
	mode,
	existingRequest,
	initialContent,
	onClose,
}: SavedJsonRequestDialogProps) {
	const [name, setName] = useState("");
	const [content, setContent] = useState("");
	const [errors, setErrors] = useState<string[]>([]);
	const [isValidating, setIsValidating] = useState(false);
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);

	const customJsonRequests = useAppStore((state) => state.customJsonRequests);
	const addCustomJsonRequest = useAppStore(
		(state) => state.addCustomJsonRequest,
	);
	const updateCustomJsonRequest = useAppStore(
		(state) => state.updateCustomJsonRequest,
	);

	// Initialize the form based on mode
	useEffect(() => {
		if (mode === "edit" && existingRequest) {
			setName(existingRequest.name);
			setContent(existingRequest.content);
		} else {
			// Create mode - use initial content from editor
			setName("");
			setContent(initialContent || "");
		}
	}, [mode, existingRequest, initialContent]);

	// Validate in real-time (with debounce)
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsValidating(true);
			try {
				const excludeId = mode === "edit" ? existingRequest?.id : undefined;
				const result = validateSavedJsonRequest(
					name,
					content,
					customJsonRequests,
					excludeId,
				);
				setErrors(result.errors);
			} catch (e) {
				setErrors([
					`Validation error: ${e instanceof Error ? e.message : "Unknown error"}`,
				]);
			} finally {
				setIsValidating(false);
			}
		}, 500); // Debounce validation

		return () => clearTimeout(timer);
	}, [name, content, customJsonRequests, mode, existingRequest]);

	const handleSubmit = () => {
		// Final validation
		const excludeId = mode === "edit" ? existingRequest?.id : undefined;
		const result = validateSavedJsonRequest(
			name,
			content,
			customJsonRequests,
			excludeId,
		);

		if (!result.valid) {
			setErrors(result.errors);
			return;
		}

		const now = new Date().toISOString();

		if (mode === "edit" && existingRequest) {
			updateCustomJsonRequest(existingRequest.id, {
				...existingRequest,
				name: name.trim(),
				content: content.trim(),
				updatedAt: now,
			});
		} else {
			// Create mode
			addCustomJsonRequest({
				id: generateReactKey(),
				name: name.trim(),
				content: content.trim(),
				createdAt: now,
				updatedAt: now,
			});
		}

		onClose(true);
	};

	const dialogTitle =
		mode === "create" ? "Save JSON Request" : "Edit Saved Request";

	const dialogDescription =
		mode === "create"
			? "Save this JSON request for future use. You can load it again later."
			: "Update the name of your saved JSON request.";

	const hasErrors = errors.length > 0;

	return (
		<Dialog open onOpenChange={() => onClose(false)}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>{dialogTitle}</DialogTitle>
					<DialogDescription>{dialogDescription}</DialogDescription>
				</DialogHeader>

				<div className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="request-name">Request Name</Label>
						<Input
							id="request-name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="e.g., Custom PID Request"
						/>
						<p className="text-sm text-muted-foreground">
							A descriptive name to identify this request later.
						</p>
					</div>

					{mode === "edit" && (
						<Collapsible open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
							<CollapsibleTrigger asChild>
								<Button variant="ghost" className="w-full justify-between">
									<span className="text-sm font-medium">
										View Request Content
									</span>
									{isPreviewOpen ? (
										<ChevronUp className="h-4 w-4" />
									) : (
										<ChevronDown className="h-4 w-4" />
									)}
								</Button>
							</CollapsibleTrigger>
							<CollapsibleContent className="space-y-2 pt-2">
								<Textarea
									value={content}
									readOnly
									className="font-mono text-sm min-h-[200px] bg-muted"
								/>
								<p className="text-sm text-muted-foreground">
									To modify the request content, edit it in the JSON editor
									before saving.
								</p>
							</CollapsibleContent>
						</Collapsible>
					)}

					{mode === "create" && (
						<div className="space-y-2">
							<Label htmlFor="request-content">Request Content</Label>
							<Textarea
								id="request-content"
								value={content}
								onChange={(e) => setContent(e.target.value)}
								className="font-mono text-sm min-h-[300px]"
								placeholder="Paste your JSON request here..."
							/>
							<p className="text-sm text-muted-foreground">
								The JSON request body that will be saved.
							</p>
						</div>
					)}

					{hasErrors && (
						<Alert variant="destructive">
							<AlertDescription>
								<div className="space-y-1">
									<p className="font-medium">Validation Errors:</p>
									<ul className="list-disc list-inside space-y-1">
										{errors.map((error) => (
											<li key={error} className="text-sm">
												{error}
											</li>
										))}
									</ul>
								</div>
							</AlertDescription>
						</Alert>
					)}

					{!hasErrors && !isValidating && name.trim().length > 0 && (
						<Alert>
							<AlertDescription className="text-sm text-green-600 dark:text-green-400">
								✓ Ready to save
							</AlertDescription>
						</Alert>
					)}
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onClose(false)}>
						Cancel
					</Button>
					<Button onClick={handleSubmit} disabled={hasErrors || isValidating}>
						{mode === "edit" ? "Update" : "Save"} Request
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

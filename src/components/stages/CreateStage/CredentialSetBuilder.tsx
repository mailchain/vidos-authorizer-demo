import { AlertCircle, Check, Copy, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useAppStore } from "@/stores/appStore";
import type { CredentialSet } from "@/types/app";
import { validateCredentialSets } from "@/utils/validation";

interface CredentialSetBuilderProps {
	set: CredentialSet;
}

export function CredentialSetBuilder({ set }: CredentialSetBuilderProps) {
	const updateCredentialSet = useAppStore((state) => state.updateCredentialSet);
	const credentialRequests = useAppStore((state) => state.credentialRequests);

	const [copiedId, setCopiedId] = useState(false);

	// Task 5.6: Validate this specific credential set
	const validation = validateCredentialSets(credentialRequests, [set]);

	const handleIdChange = (newId: string) => {
		if (newId !== set.id) {
			updateCredentialSet(set.id, { id: newId });
		}
	};

	const handleCopyId = async () => {
		try {
			await navigator.clipboard.writeText(set.id);
			setCopiedId(true);
			setTimeout(() => setCopiedId(false), 2000);
		} catch (err) {
			console.error("Failed to copy ID:", err);
		}
	};

	const handleRequiredToggle = (checked: boolean | "indeterminate") => {
		if (typeof checked === "boolean") {
			updateCredentialSet(set.id, { required: checked });
		}
	};

	const handleAddOption = () => {
		// Add empty option for now - will be populated by dropdown in task 4.9
		updateCredentialSet(set.id, {
			options: [...set.options, []],
		});
	};

	const handleRemoveOption = (optionIndex: number) => {
		const newOptions = set.options.filter((_, idx) => idx !== optionIndex);
		updateCredentialSet(set.id, { options: newOptions });
	};

	const handleAddCredentialToOption = (
		optionIndex: number,
		credentialId: string,
	) => {
		const newOptions = [...set.options];
		if (!newOptions[optionIndex].includes(credentialId)) {
			newOptions[optionIndex] = [...newOptions[optionIndex], credentialId];
			updateCredentialSet(set.id, { options: newOptions });
		}
	};

	const handleRemoveCredentialFromOption = (
		optionIndex: number,
		credentialId: string,
	) => {
		const newOptions = [...set.options];
		newOptions[optionIndex] = newOptions[optionIndex].filter(
			(id) => id !== credentialId,
		);
		updateCredentialSet(set.id, { options: newOptions });
	};

	const getAvailableCredentialsForOption = (optionIndex: number) => {
		const currentOption = set.options[optionIndex];
		return credentialRequests.filter((req) => !currentOption.includes(req.id));
	};

	return (
		<div className="space-y-4" data-credential-set-id={set.id}>
			{/* Task 5.6: Display validation errors */}
			{validation.errors.length > 0 && (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertDescription>
						<ul className="list-disc list-inside space-y-1 text-sm">
							{validation.errors.map((error) => (
								<li key={error}>{error}</li>
							))}
						</ul>
					</AlertDescription>
				</Alert>
			)}

			{/* Set ID Field - Task 4.6 */}
			<div className="space-y-2">
				<Label htmlFor={`set-id-${set.id}`} className="text-xs">
					Set ID
				</Label>
				<div className="flex gap-2">
					<Input
						id={`set-id-${set.id}`}
						value={set.id}
						onChange={(e) => handleIdChange(e.target.value)}
						className="font-mono text-sm"
						placeholder="e.g., id-set-1"
					/>
					<Button
						type="button"
						variant="outline"
						size="icon"
						onClick={handleCopyId}
						className="shrink-0"
						title="Copy set ID"
					>
						{copiedId ? (
							<Check className="h-4 w-4 text-green-600" />
						) : (
							<Copy className="h-4 w-4" />
						)}
					</Button>
				</div>
			</div>

			{/* Required Toggle */}
			<div className="flex items-center gap-3">
				<Checkbox
					id={`required-${set.id}`}
					checked={set.required}
					onCheckedChange={handleRequiredToggle}
				/>
				<div className="space-y-0.5">
					<Label htmlFor={`required-${set.id}`} className="text-sm">
						Required
					</Label>
					<p className="text-xs text-muted-foreground">
						Mark as optional (required by default per DCQL spec)
					</p>
				</div>
			</div>

			{/* Options List */}
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<Label className="text-sm">Options (OR logic)</Label>
					<Button
						type="button"
						variant="outline"
						size="sm"
						onClick={handleAddOption}
						className="h-8 text-xs"
					>
						<Plus className="h-3 w-3 mr-1" />
						Add OR Option
					</Button>
				</div>

				{set.options.length === 0 ? (
					<div className="text-sm text-muted-foreground italic p-3 border border-dashed rounded">
						No options yet. Click "Add OR Option" to create one.
					</div>
				) : (
					<div className="space-y-3">
						{set.options.map((option, optionIndex) => (
							<div key={`${set.id}-option-${optionIndex}`}>
								<div className="p-3 border rounded bg-muted/30 space-y-3">
									<div className="flex items-center gap-2">
										<Button
											type="button"
											variant="ghost"
											size="icon"
											onClick={() => handleRemoveOption(optionIndex)}
											className="h-6 w-6 shrink-0"
										>
											<Trash2 className="h-3 w-3 text-destructive" />
										</Button>
										<span className="text-xs font-medium text-muted-foreground">
											Option {optionIndex + 1} (AND logic)
										</span>
									</div>

									{/* Display credential badges with remove buttons */}
									{option.length > 0 && (
										<div className="flex flex-wrap gap-1.5">
											{option.map((credId) => {
												const credRequest = credentialRequests.find(
													(req) => req.id === credId,
												);
												return (
													<Badge
														key={credId}
														variant="secondary"
														className="text-xs font-mono flex items-center gap-1.5 pr-1"
													>
														<span>
															{credRequest?.documentType
																? `${credId} (${credRequest.documentType})`
																: credId}
														</span>
														<button
															type="button"
															onClick={() =>
																handleRemoveCredentialFromOption(
																	optionIndex,
																	credId,
																)
															}
															className="hover:bg-muted-foreground/20 rounded p-0.5 transition-colors"
															title="Remove credential"
														>
															<X className="h-3 w-3" />
														</button>
													</Badge>
												);
											})}
										</div>
									)}

									{/* Credential selector dropdown - Task 4.9 */}
									<div className="flex items-center gap-2">
										<Select
											value=""
											onValueChange={(credId) =>
												handleAddCredentialToOption(optionIndex, credId)
											}
										>
											<SelectTrigger size="sm" className="w-auto">
												<Plus className="h-3 w-3 mr-1" />
												<SelectValue placeholder="Add credential" />
											</SelectTrigger>
											<SelectContent>
												{getAvailableCredentialsForOption(optionIndex)
													.length === 0 ? (
													<div className="px-2 py-1.5 text-xs text-muted-foreground">
														No credentials available
													</div>
												) : (
													getAvailableCredentialsForOption(optionIndex).map(
														(req) => (
															<SelectItem key={req.id} value={req.id}>
																<span className="font-mono text-xs">
																	{req.id}
																</span>
																{req.documentType && (
																	<span className="text-muted-foreground text-xs">
																		{" "}
																		({req.documentType})
																	</span>
																)}
															</SelectItem>
														),
													)
												)}
											</SelectContent>
										</Select>
									</div>
								</div>

								{/* OR separator between options - Task 4.10 */}
								{optionIndex < set.options.length - 1 && (
									<div className="flex items-center gap-3 my-3">
										<div className="flex-1 border-t border-border" />
										<span className="text-xs font-medium text-muted-foreground px-2 py-1 bg-muted rounded">
											OR
										</span>
										<div className="flex-1 border-t border-border" />
									</div>
								)}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

import { Download, Edit, Save, Trash2 } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAppStore } from "@/stores/appStore";
import type { SavedJsonRequest } from "@/types/app";

export function SavedJsonRequestsManager() {
	const [dialogMode, setDialogMode] = useState<"create" | "edit" | null>(null);
	const [selectedRequest, setSelectedRequest] =
		useState<SavedJsonRequest | null>(null);
	const [requestToDelete, setRequestToDelete] = useState<string | null>(null);

	const customJsonRequests = useAppStore((state) => state.customJsonRequests);
	const deleteCustomJsonRequest = useAppStore(
		(state) => state.deleteCustomJsonRequest,
	);
	const rawJsonContent = useAppStore((state) => state.rawJsonContent);
	const setRawJsonContent = useAppStore((state) => state.setRawJsonContent);

	const handleSaveNew = () => {
		setDialogMode("create");
		setSelectedRequest(null);
	};

	const handleEdit = (request: SavedJsonRequest) => {
		setDialogMode("edit");
		setSelectedRequest(request);
	};

	const handleLoad = (request: SavedJsonRequest) => {
		setRawJsonContent(request.content);
	};

	const handleDeleteClick = (id: string) => {
		setRequestToDelete(id);
	};

	const handleDeleteConfirm = () => {
		if (requestToDelete) {
			deleteCustomJsonRequest(requestToDelete);
			setRequestToDelete(null);
		}
	};

	const handleCloseDialog = (_saved: boolean) => {
		setDialogMode(null);
		setSelectedRequest(null);
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	const requestBeingDeleted = customJsonRequests.find(
		(r) => r.id === requestToDelete,
	);

	return (
		<>
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="text-lg">Saved Requests</CardTitle>
							<CardDescription>
								Manage your saved JSON authorization requests
							</CardDescription>
						</div>
						<Button
							onClick={handleSaveNew}
							size="sm"
							disabled={!rawJsonContent}
						>
							<Save className="w-4 h-4 mr-2" />
							Save Current
						</Button>
					</div>
				</CardHeader>

				<CardContent>
					{customJsonRequests.length === 0 ? (
						<div className="text-center py-8 text-muted-foreground">
							<p>No saved requests yet.</p>
							<p className="text-sm mt-2">
								Create a JSON request in the editor above, then click "Save
								Current" to save it for later use.
							</p>
						</div>
					) : (
						<div className="space-y-3">
							{customJsonRequests.map((request) => (
								<div
									key={request.id}
									className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
								>
									<div className="flex-1 min-w-0">
										<h4 className="font-medium truncate">{request.name}</h4>
										<div className="flex flex-col gap-1 mt-1">
											<p className="text-xs text-muted-foreground">
												Created: {formatDate(request.createdAt)}
											</p>
											{request.updatedAt !== request.createdAt && (
												<p className="text-xs text-muted-foreground">
													Updated: {formatDate(request.updatedAt)}
												</p>
											)}
										</div>
									</div>
									<div className="flex gap-2 ml-4">
										<Button
											variant="ghost"
											size="sm"
											onClick={() => handleLoad(request)}
											title="Load into editor"
										>
											<Download className="w-4 h-4" />
										</Button>
										<Button
											variant="ghost"
											size="sm"
											onClick={() => handleEdit(request)}
											title="Edit name"
										>
											<Edit className="w-4 h-4" />
										</Button>
										<Button
											variant="ghost"
											size="sm"
											onClick={() => handleDeleteClick(request.id)}
											title="Delete"
										>
											<Trash2 className="w-4 h-4" />
										</Button>
									</div>
								</div>
							))}
						</div>
					)}
				</CardContent>
			</Card>

			{dialogMode && (
				<SavedJsonRequestDialog
					mode={dialogMode}
					existingRequest={selectedRequest}
					initialContent={rawJsonContent}
					onClose={handleCloseDialog}
				/>
			)}

			<AlertDialog
				open={requestToDelete !== null}
				onOpenChange={(open) => !open && setRequestToDelete(null)}
			>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Delete Saved Request?</AlertDialogTitle>
						<AlertDialogDescription>
							{requestBeingDeleted && (
								<>
									<p>
										Are you sure you want to delete "{requestBeingDeleted.name}
										"?
									</p>
									<p className="mt-2">This action cannot be undone.</p>
								</>
							)}
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction onClick={handleDeleteConfirm}>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}

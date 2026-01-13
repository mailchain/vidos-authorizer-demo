import { useCallback, useEffect } from "react";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	CREDENTIAL_CASES,
	getAvailableFormats,
	getFormatDefinitionById,
} from "@/config/credential-cases";
import { useAuthorization } from "@/context/AuthorizationContext";
import type { DocumentType } from "@/types/app";

export function CredentialRequestBuilder() {
	const { state, dispatch } = useAuthorization();

	const selectedDocType = state.credentialRequest?.documentType;
	const selectedFormatId = state.credentialRequest?.formatId;
	const availableFormats = selectedDocType
		? getAvailableFormats(selectedDocType)
		: [];

	const updateCredentialRequest = useCallback(
		(documentType: DocumentType, formatId: string) => {
			const formatDef = getFormatDefinitionById(formatId);
			if (!formatDef) return;

			dispatch({
				type: "SET_CREDENTIAL_REQUEST",
				payload: {
					documentType,
					formatId,
					format: formatDef.format,
					attributes: formatDef.attributes.map((attr) => attr.id),
				},
			});
		},
		[dispatch],
	);

	useEffect(() => {
		if (selectedDocType && selectedFormatId) {
			const isValidFormat = availableFormats.some(
				(f) => f.id === selectedFormatId,
			);
			if (!isValidFormat) {
				const newFormat = availableFormats[0];
				if (newFormat) {
					updateCredentialRequest(selectedDocType, newFormat.id);
				}
			}
		}
	}, [
		selectedDocType,
		selectedFormatId,
		availableFormats,
		updateCredentialRequest,
	]);

	const handleDocTypeChange = (value: string) => {
		const docType = value as DocumentType;
		const formats = getAvailableFormats(docType);
		const format = formats[0];
		if (format) {
			updateCredentialRequest(docType, format.id);
		}
	};

	const handleFormatChange = (value: string) => {
		if (selectedDocType) {
			updateCredentialRequest(selectedDocType, value);
		}
	};

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="document-type">Document Type</Label>
				<Select
					value={selectedDocType || ""}
					onValueChange={handleDocTypeChange}
				>
					<SelectTrigger id="document-type">
						<SelectValue placeholder="Select a document type" />
					</SelectTrigger>
					<SelectContent>
						{CREDENTIAL_CASES.map((credCase) => (
							<SelectItem key={credCase.id} value={credCase.id}>
								{credCase.displayName}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			{selectedDocType && (
				<div className="space-y-2">
					<Label htmlFor="format">Format</Label>
					<Select
						value={selectedFormatId || ""}
						onValueChange={handleFormatChange}
					>
						<SelectTrigger id="format">
							<SelectValue placeholder="Select a format" />
						</SelectTrigger>
						<SelectContent>
							{availableFormats.map((formatDef) => (
								<SelectItem key={formatDef.id} value={formatDef.id}>
									{formatDef.displayName}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			)}

			{selectedDocType && selectedFormatId && (
				<div className="p-3 bg-muted rounded-md">
					<p className="text-sm text-muted-foreground">
						All attributes will be requested (Select All)
					</p>
				</div>
			)}
		</div>
	);
}

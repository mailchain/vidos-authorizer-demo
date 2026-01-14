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
import type { CredentialRequestWithId, DocumentType } from "@/types/app";
import { AttributeSelector } from "./AttributeSelector";

interface CredentialRequestBuilderProps {
	request: CredentialRequestWithId;
	onChange: (request: CredentialRequestWithId) => void;
	onRemove: () => void;
	canRemove: boolean; // Disable remove button if it's the last one
}

export function CredentialRequestBuilder({
	request,
	onChange,
	onRemove,
	canRemove,
}: CredentialRequestBuilderProps) {
	const availableFormats = request.documentType
		? getAvailableFormats(request.documentType)
		: [];

	const handleDocTypeChange = (documentType: DocumentType) => {
		const formats = getAvailableFormats(documentType);
		const format = formats[0];

		if (format) {
			// Auto-select all attributes for new format
			onChange({
				...request,
				documentType,
				formatId: format.id,
				format: format.format,
				attributes: format.attributes.map((attr) => attr.id),
			});
		}
	};

	const handleFormatChange = (formatId: string) => {
		const formatDef = getFormatDefinitionById(formatId);
		if (!formatDef) return;

		// Auto-select all attributes for new format
		onChange({
			...request,
			formatId,
			format: formatDef.format,
			attributes: formatDef.attributes.map((attr) => attr.id),
		});
	};

	const handleAttributesChange = (attributes: string[]) => {
		onChange({
			...request,
			attributes,
		});
	};

	return (
		<div className="space-y-4 p-4 border rounded-md">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor={`document-type-${request.id}`}>Document Type</Label>
					<Select
						value={request.documentType || ""}
						onValueChange={handleDocTypeChange}
					>
						<SelectTrigger id={`document-type-${request.id}`}>
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

				{request.documentType && (
					<div className="space-y-2">
						<Label htmlFor={`format-${request.id}`}>Format</Label>
						<Select
							value={request.formatId || ""}
							onValueChange={handleFormatChange}
						>
							<SelectTrigger id={`format-${request.id}`}>
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
			</div>

			{request.formatId && (
				<AttributeSelector
					formatId={request.formatId}
					selectedAttributes={request.attributes}
					onChange={handleAttributesChange}
				/>
			)}
		</div>
	);
}

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	getAllCredentialCases,
	getAvailableFormats,
	getFormatDefinitionById,
	isCustomCase,
} from "@/config/credential-cases/utils";
import { useFlowStore } from "@/stores/useFlowStore";
import type { CredentialRequestWithId } from "@/types/app";
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
	onRemove: _onRemove,
	canRemove: _canRemove,
}: CredentialRequestBuilderProps) {
	const customCredentialCases = useFlowStore(
		(state) => state.customCredentialCases,
	);
	const allCredentialCases = getAllCredentialCases(customCredentialCases);

	const availableFormats = request.documentType
		? getAvailableFormats(request.documentType)
		: [];

	const handleDocTypeChange = (documentType: string) => {
		const formats = getAvailableFormats(documentType);
		const format = formats[0];

		if (format) {
			// Start with no attributes selected
			onChange({
				...request,
				documentType,
				formatId: format.id,
				format: format.format,
				attributes: [],
			});
		}
	};

	const handleFormatChange = (formatId: string) => {
		const formatDef = getFormatDefinitionById(formatId);
		if (!formatDef) return;

		// Start with no attributes selected
		onChange({
			...request,
			formatId,
			format: formatDef.format,
			attributes: [],
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
							{allCredentialCases.map((credCase) => (
								<SelectItem key={credCase.id} value={credCase.id}>
									<div className="flex items-center gap-2">
										<span>{credCase.displayName}</span>
										{isCustomCase(credCase.id) && (
											<Badge variant="secondary" className="text-xs">
												Custom
											</Badge>
										)}
									</div>
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

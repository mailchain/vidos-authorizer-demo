import { Plus } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	getCredentialCase,
	getFormatDefinitionById,
} from "@/config/credential-cases";
import { useAuthorization } from "@/context/AuthorizationContext";
import type { CredentialRequestWithId } from "@/types/app";
import { CredentialRequestBuilder } from "./CredentialRequestBuilder";

export function CredentialRequestList() {
	const { state, dispatch } = useAuthorization();
	const requests = state.credentialRequests;

	const handleAdd = () => {
		const newRequest: CredentialRequestWithId = {
			id: crypto.randomUUID(),
			documentType: "pid",
			formatId: "pid_sd_jwt",
			format: "dc+sd-jwt",
			attributes: [], // Will be auto-filled when format is selected
		};

		dispatch({ type: "ADD_CREDENTIAL_REQUEST", payload: newRequest });
	};

	const handleUpdate = (id: string, request: CredentialRequestWithId) => {
		dispatch({
			type: "UPDATE_CREDENTIAL_REQUEST",
			payload: { id, request },
		});
	};

	const handleRemove = (id: string) => {
		dispatch({ type: "REMOVE_CREDENTIAL_REQUEST", payload: id });
	};

	const getDocumentTypeAbbrev = (displayName: string): string => {
		const match = displayName.match(/\(([^)]+)\)$/);
		return match ? match[1] : displayName;
	};

	const getRequestLabel = (request: CredentialRequestWithId): string => {
		if (!request.documentType || !request.formatId) {
			return "New Credential Request";
		}

		const formatDef = getFormatDefinitionById(request.formatId);
		if (!formatDef) {
			return "Credential Request";
		}

		const credCase = getCredentialCase(request.documentType);
		const docTypeLabel = credCase
			? getDocumentTypeAbbrev(credCase.displayName)
			: request.documentType.toUpperCase();

		return `${docTypeLabel} - ${formatDef.displayName} (${request.attributes.length} attributes)`;
	};

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<Label>Credential Requests</Label>
				<Button type="button" variant="outline" size="sm" onClick={handleAdd}>
					<Plus className="h-4 w-4 mr-2" />
					Add Credential Request
				</Button>
			</div>

			{requests.length === 0 ? (
				<div className="p-6 border rounded-md border-dashed text-center">
					<p className="text-sm text-muted-foreground mb-4">
						No credential requests yet. Add at least one to continue.
					</p>
					<Button type="button" onClick={handleAdd}>
						<Plus className="h-4 w-4 mr-2" />
						Add First Request
					</Button>
				</div>
			) : (
				<Accordion type="single" collapsible defaultValue={requests[0]?.id}>
					{requests.map((request) => (
						<AccordionItem key={request.id} value={request.id}>
							<AccordionTrigger>{getRequestLabel(request)}</AccordionTrigger>
							<AccordionContent>
								<CredentialRequestBuilder
									request={request}
									onChange={(updated) => handleUpdate(request.id, updated)}
									onRemove={() => handleRemove(request.id)}
									canRemove={requests.length > 1}
								/>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			)}
		</div>
	);
}

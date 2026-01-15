import { ChevronRight, Plus, Trash2 } from "lucide-react";
import { CustomCredentialCaseManager } from "@/components/CustomCredentialCaseManager";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
	getCredentialCase,
	getFormatDefinitionById,
} from "@/config/credential-cases/utils";
import { useFlowStore } from "@/stores/useFlowStore";
import type { CredentialRequestWithId } from "@/types/app";
import { CredentialRequestBuilder } from "./CredentialRequestBuilder";

export function CredentialRequestList() {
	const requests = useFlowStore((state) => state.credentialRequests);
	const addCredentialRequest = useFlowStore(
		(state) => state.addCredentialRequest,
	);
	const updateCredentialRequest = useFlowStore(
		(state) => state.updateCredentialRequest,
	);
	const removeCredentialRequest = useFlowStore(
		(state) => state.removeCredentialRequest,
	);

	const handleAdd = () => {
		const newRequest: CredentialRequestWithId = {
			id: crypto.randomUUID(),
			documentType: "pid",
			formatId: "pid_sd_jwt",
			format: "dc+sd-jwt",
			attributes: [], // Will be auto-filled when format is selected
		};

		addCredentialRequest(newRequest);
	};

	const handleUpdate = (id: string, request: CredentialRequestWithId) => {
		updateCredentialRequest(id, request);
	};

	const handleRemove = (id: string) => {
		removeCredentialRequest(id);
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

		// Count both selectively disclosable (from request.attributes) and non-selectively disclosable attributes
		const nonDisclosableCount = formatDef.attributes.filter(
			(attr) => attr.nonSelectivelyDisclosable,
		).length;
		const totalCount = request.attributes.length + nonDisclosableCount;

		return `${docTypeLabel} - ${formatDef.displayName} (${totalCount} attributes)`;
	};

	return (
		<div className="space-y-4 md:space-y-6">
			<Label>Credential Requests</Label>

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
				<>
					<Accordion type="single" collapsible defaultValue={requests[0]?.id}>
						{requests.map((request) => (
							<AccordionItem key={request.id} value={request.id}>
								<div className="flex items-center gap-2">
									{requests.length > 1 && (
										<Button
											type="button"
											variant="ghost"
											size="icon"
											className="h-8 w-8 shrink-0"
											onClick={(e) => {
												e.stopPropagation();
												handleRemove(request.id);
											}}
										>
											<Trash2 className="h-4 w-4 text-destructive" />
										</Button>
									)}
									<AccordionTrigger className="flex-1">
										{getRequestLabel(request)}
									</AccordionTrigger>
								</div>
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
					<Separator className="my-4" />
					<Button type="button" variant="outline" size="sm" onClick={handleAdd}>
						<Plus className="h-4 w-4 mr-2" />
						Add Credential Request
					</Button>
				</>
			)}

			<Collapsible>
				<CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
					<ChevronRight className="h-4 w-4 transition-transform [[data-state=open]>&]:rotate-90" />
					Advanced Options
				</CollapsibleTrigger>
				<CollapsibleContent className="pt-4 space-y-3">
					<p className="text-sm text-muted-foreground">
						Define custom credential types beyond the built-in options (PID,
						MDL, Photo ID).
					</p>
					<CustomCredentialCaseManager />
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
}

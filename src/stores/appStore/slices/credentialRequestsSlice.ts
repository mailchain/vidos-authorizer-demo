import { generateCredentialSetId, generateReactKey } from "@/utils/id";
import type { CredentialRequestsSlice, SliceCreator } from "../types";

export const createCredentialRequestsSlice: SliceCreator<
	CredentialRequestsSlice
> = (set) => ({
	credentialRequests: [],
	credentialSets: [],

	setCredentialRequests: (credentialRequests) =>
		set({ credentialRequests, selectedTemplateId: null }),

	addCredentialRequest: (request) =>
		set((state) => ({
			credentialRequests: [...state.credentialRequests, request],
			selectedTemplateId: null,
			error: null,
		})),

	updateCredentialRequest: (id, request) =>
		set((state) => ({
			credentialRequests: state.credentialRequests.map((req) =>
				req.id === id ? { ...req, ...request } : req,
			),
			selectedTemplateId: null,
			error: null,
		})),

	removeCredentialRequest: (id) =>
		set((state) => {
			// Remove credential request
			const credentialRequests = state.credentialRequests.filter(
				(req) => req.id !== id,
			);

			// Remove orphan references from credential sets
			const credentialSets = state.credentialSets.map((credSet) => ({
				...credSet,
				// Remove credential ID from all options
				options: credSet.options
					.map((option) => option.filter((credId) => credId !== id))
					// Remove empty options
					.filter((option) => option.length > 0),
			}));
			// Note: Don't auto-delete empty credential sets (per spec 5.5)

			return {
				credentialRequests,
				credentialSets,
				selectedTemplateId: null,
				error: null,
			};
		}),

	addCredentialSet: () =>
		set((state) => {
			return {
				credentialSets: [
					...state.credentialSets,
					{
						id: generateCredentialSetId(),
						reactKey: generateReactKey(),
						options: [[]],
						required: true,
					},
				],
				selectedTemplateId: null,
				error: null,
			};
		}),

	updateCredentialSet: (id, updates) =>
		set((state) => ({
			credentialSets: state.credentialSets.map((credSet) =>
				credSet.id === id ? { ...credSet, ...updates } : credSet,
			),
			selectedTemplateId: null,
			error: null,
		})),

	removeCredentialSet: (id) =>
		set((state) => ({
			credentialSets: state.credentialSets.filter(
				(credSet) => credSet.id !== id,
			),
			selectedTemplateId: null,
			error: null,
		})),

	updateCredentialId: (oldId, newId) =>
		set((state) => ({
			credentialRequests: state.credentialRequests.map((req) =>
				req.id === oldId ? { ...req, id: newId } : req,
			),
			credentialSets: state.credentialSets.map((credSet) => ({
				...credSet,
				options: credSet.options.map((option) =>
					option.map((credId) => (credId === oldId ? newId : credId)),
				),
			})),
			error: null,
		})),
});

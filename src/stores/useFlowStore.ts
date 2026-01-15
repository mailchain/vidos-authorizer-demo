import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CredentialCaseDefinition } from "@/config/credential-cases/types";
import type { DigitalCredentialGetRequest } from "@/types/api";
import type {
	AppStage,
	CredentialRequestWithId,
	ResponseModeConfig,
	SavedJsonRequest,
} from "@/types/app";

interface FlowState {
	// Stage
	stage: AppStage;
	setStage: (stage: AppStage) => void;

	// Configuration
	authorizerUrl: string;
	setAuthorizerUrl: (url: string) => void;

	credentialRequests: CredentialRequestWithId[];
	setCredentialRequests: (requests: CredentialRequestWithId[]) => void;
	addCredentialRequest: (request: CredentialRequestWithId) => void;
	updateCredentialRequest: (
		id: string,
		request: Partial<CredentialRequestWithId>,
	) => void;
	removeCredentialRequest: (id: string) => void;

	responseModeConfig: ResponseModeConfig;
	setResponseModeConfig: (config: ResponseModeConfig) => void;

	// Custom credential cases
	customCredentialCases: CredentialCaseDefinition[];
	addCustomCredentialCase: (credCase: CredentialCaseDefinition) => void;
	updateCustomCredentialCase: (
		id: string,
		credCase: CredentialCaseDefinition,
	) => void;
	deleteCustomCredentialCase: (id: string) => void;

	// Raw JSON mode
	useRawJsonMode: boolean;
	setUseRawJsonMode: (use: boolean) => void;

	rawJsonContent: string;
	setRawJsonContent: (content: string) => void;

	customJsonRequests: SavedJsonRequest[];
	addCustomJsonRequest: (request: SavedJsonRequest) => void;
	updateCustomJsonRequest: (id: string, request: SavedJsonRequest) => void;
	deleteCustomJsonRequest: (id: string) => void;

	// Authorization data
	authorizationId: string | null;
	setAuthorizationId: (id: string | null) => void;

	authorizeUrl: string | null;
	setAuthorizeUrl: (url: string | null) => void;

	digitalCredentialGetRequest: DigitalCredentialGetRequest | null;
	setDigitalCredentialGetRequest: (
		request: DigitalCredentialGetRequest | null,
	) => void;

	expiresAt: string | null;
	setExpiresAt: (expiresAt: string | null) => void;

	// UI state
	showPreview: boolean;
	setShowPreview: (show: boolean) => void;

	// Debug
	lastRequest: object | null;
	setLastRequest: (request: object | null) => void;

	lastResponse: object | null;
	setLastResponse: (response: object | null) => void;

	// Error handling (for manual/UI errors, not API errors)
	error: { message: string; details?: string } | null;
	setError: (error: { message: string; details?: string } | null) => void;
	resetError: () => void;

	// Helper methods
	startFresh: () => void;
	backToCreateStage: () => void;
}

const initialState = {
	stage: "create" as AppStage,
	authorizerUrl: "",
	credentialRequests: [],
	responseModeConfig: { mode: "direct_post.jwt" } as ResponseModeConfig,
	customCredentialCases: [],
	useRawJsonMode: false,
	rawJsonContent: "",
	customJsonRequests: [],
	authorizationId: null,
	authorizeUrl: null,
	digitalCredentialGetRequest: null,
	expiresAt: null,
	showPreview: false,
	lastRequest: null,
	lastResponse: null,
	error: null,
};

export const useFlowStore = create<FlowState>()(
	persist(
		(set) => ({
			...initialState,

			// Setters
			setStage: (stage) => set({ stage }),
			setAuthorizerUrl: (authorizerUrl) => set({ authorizerUrl, error: null }),

			setCredentialRequests: (credentialRequests) =>
				set({ credentialRequests }),
			addCredentialRequest: (request) =>
				set((state) => ({
					credentialRequests: [...state.credentialRequests, request],
					error: null,
				})),
			updateCredentialRequest: (id, request) =>
				set((state) => ({
					credentialRequests: state.credentialRequests.map((req) =>
						req.id === id ? { ...req, ...request } : req,
					),
					error: null,
				})),
			removeCredentialRequest: (id) =>
				set((state) => ({
					credentialRequests: state.credentialRequests.filter(
						(req) => req.id !== id,
					),
					error: null,
				})),

			setResponseModeConfig: (responseModeConfig) =>
				set({ responseModeConfig, error: null }),

			addCustomCredentialCase: (credCase) =>
				set((state) => ({
					customCredentialCases: [...state.customCredentialCases, credCase],
					error: null,
				})),
			updateCustomCredentialCase: (id, credCase) =>
				set((state) => ({
					customCredentialCases: state.customCredentialCases.map((c) =>
						c.id === id ? credCase : c,
					),
					error: null,
				})),
			deleteCustomCredentialCase: (id) =>
				set((state) => ({
					customCredentialCases: state.customCredentialCases.filter(
						(c) => c.id !== id,
					),
					error: null,
				})),

			setUseRawJsonMode: (useRawJsonMode) => set({ useRawJsonMode }),
			setRawJsonContent: (rawJsonContent) => set({ rawJsonContent }),

			addCustomJsonRequest: (request) =>
				set((state) => ({
					customJsonRequests: [...state.customJsonRequests, request],
					error: null,
				})),
			updateCustomJsonRequest: (id, request) =>
				set((state) => ({
					customJsonRequests: state.customJsonRequests.map((req) =>
						req.id === id ? request : req,
					),
					error: null,
				})),
			deleteCustomJsonRequest: (id) =>
				set((state) => ({
					customJsonRequests: state.customJsonRequests.filter(
						(req) => req.id !== id,
					),
					error: null,
				})),

			setAuthorizationId: (authorizationId) => set({ authorizationId }),
			setAuthorizeUrl: (authorizeUrl) => set({ authorizeUrl }),
			setDigitalCredentialGetRequest: (digitalCredentialGetRequest) =>
				set({ digitalCredentialGetRequest }),
			setExpiresAt: (expiresAt) => set({ expiresAt }),

			setShowPreview: (showPreview) => set({ showPreview }),

			setLastRequest: (lastRequest) => set({ lastRequest }),
			setLastResponse: (lastResponse) => set({ lastResponse }),

			setError: (error) => set({ error }),
			resetError: () => set({ error: null }),

			// Helper methods
			startFresh: () =>
				set((state) => ({
					...initialState,
					authorizerUrl: state.authorizerUrl, // Keep URL
					customCredentialCases: state.customCredentialCases, // Keep custom cases
					customJsonRequests: state.customJsonRequests, // Keep custom JSON requests
				})),

			backToCreateStage: () =>
				set({
					stage: "create",
					authorizationId: null,
					authorizeUrl: null,
					digitalCredentialGetRequest: null,
					expiresAt: null,
					showPreview: false,
					error: null,
				}),
		}),
		{
			name: "vidos-flow-storage",
			partialize: (state) => ({
				authorizerUrl: state.authorizerUrl,
				customCredentialCases: state.customCredentialCases,
				customJsonRequests: state.customJsonRequests,
			}),
		},
	),
);

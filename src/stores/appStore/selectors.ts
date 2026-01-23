import { getManagedAuthorizerUrl } from "@/utils/env";
import type { AppState } from "./types";

// Config selectors
export const configSelectors = {
	instanceType: (state: AppState) => state.instanceType,
	ownAuthorizerUrl: (state: AppState) => state.ownAuthorizerUrl,
};

// Credential requests selectors
export const credentialRequestsSelectors = {
	credentialRequests: (state: AppState) => state.credentialRequests,
	credentialSets: (state: AppState) => state.credentialSets,
};

// Response mode selectors
export const responseModeSelectors = {
	responseModeConfig: (state: AppState) => state.responseModeConfig,
};

// Custom cases selectors
export const customCasesSelectors = {
	customCredentialCases: (state: AppState) => state.customCredentialCases,
};

// JSON mode selectors
export const jsonModeSelectors = {
	useRawJsonMode: (state: AppState) => state.useRawJsonMode,
	rawJsonContent: (state: AppState) => state.rawJsonContent,
	customJsonRequests: (state: AppState) => state.customJsonRequests,
};

// Session selectors
export const sessionSelectors = {
	stage: (state: AppState) => state.stage,
	authorizationId: (state: AppState) => state.authorizationId,
	authorizeUrl: (state: AppState) => state.authorizeUrl,
	digitalCredentialGetRequest: (state: AppState) =>
		state.digitalCredentialGetRequest,
	expiresAt: (state: AppState) => state.expiresAt,
};

// UI selectors
export const uiSelectors = {
	showPreview: (state: AppState) => state.showPreview,
	error: (state: AppState) => state.error,
};

// Debug selectors
export const debugSelectors = {
	lastRequest: (state: AppState) => state.lastRequest,
	lastResponse: (state: AppState) => state.lastResponse,
};

/**
 * Selector to get the current authorizer URL based on instance type
 * Returns empty string if managed instance is not configured or own URL is empty
 */
export const selectAuthorizerUrl = (state: AppState): string => {
	if (state.instanceType === "managed") {
		const managedAuthorizerUrl = getManagedAuthorizerUrl();
		if (managedAuthorizerUrl) return managedAuthorizerUrl;
		return "";
	}
	return state.ownAuthorizerUrl;
};

import { getManagedAuthorizerUrl } from "@/utils/env";
import type { AuthorizationState } from "./types";

// Config selectors
export const configSelectors = {
	instanceType: (state: AuthorizationState) => state.instanceType,
	ownAuthorizerUrl: (state: AuthorizationState) => state.ownAuthorizerUrl,
};

// Credential requests selectors
export const credentialRequestsSelectors = {
	credentialRequests: (state: AuthorizationState) => state.credentialRequests,
	credentialSets: (state: AuthorizationState) => state.credentialSets,
};

// Response mode selectors
export const responseModeSelectors = {
	responseModeConfig: (state: AuthorizationState) => state.responseModeConfig,
};

// Custom cases selectors
export const customCasesSelectors = {
	customCredentialCases: (state: AuthorizationState) =>
		state.customCredentialCases,
};

// JSON mode selectors
export const jsonModeSelectors = {
	useRawJsonMode: (state: AuthorizationState) => state.useRawJsonMode,
	rawJsonContent: (state: AuthorizationState) => state.rawJsonContent,
	customJsonRequests: (state: AuthorizationState) => state.customJsonRequests,
};

// Session selectors
export const sessionSelectors = {
	stage: (state: AuthorizationState) => state.stage,
	authorizationId: (state: AuthorizationState) => state.authorizationId,
	authorizeUrl: (state: AuthorizationState) => state.authorizeUrl,
	digitalCredentialGetRequest: (state: AuthorizationState) =>
		state.digitalCredentialGetRequest,
	expiresAt: (state: AuthorizationState) => state.expiresAt,
};

// UI selectors
export const uiSelectors = {
	showPreview: (state: AuthorizationState) => state.showPreview,
	error: (state: AuthorizationState) => state.error,
};

// Debug selectors
export const debugSelectors = {
	lastRequest: (state: AuthorizationState) => state.lastRequest,
	lastResponse: (state: AuthorizationState) => state.lastResponse,
};

/**
 * Selector to get the current authorizer URL based on instance type
 * Returns empty string if managed instance is not configured or own URL is empty
 */
export const selectAuthorizerUrl = (state: AuthorizationState): string => {
	if (state.instanceType === "managed") {
		const managedAuthorizerUrl = getManagedAuthorizerUrl();
		if (managedAuthorizerUrl) return managedAuthorizerUrl;
		return "";
	}
	return state.ownAuthorizerUrl;
};

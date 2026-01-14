import { createContext, type ReactNode, useContext, useReducer } from "react";
import type { AppAction, AppState } from "@/types/app";

const initialState: AppState = {
	stage: "create",
	authorizerUrl: localStorage.getItem("authorizerUrl") || "",
	credentialRequests: [],
	responseModeConfig: { mode: "direct_post.jwt" }, // default mode
	authorizationId: null,
	authorizeUrl: null,
	digitalCredentialGetRequest: null,
	authorizationStatus: null,
	expiresAt: null,
	error: null,
	isLoading: false,
	policyResponse: null,
	lastRequest: null,
	lastResponse: null,
	showPreview: false,
};

function appReducer(state: AppState, action: AppAction): AppState {
	switch (action.type) {
		case "SET_AUTHORIZER_URL":
			localStorage.setItem("authorizerUrl", action.payload);
			return { ...state, authorizerUrl: action.payload, error: null };

		case "ADD_CREDENTIAL_REQUEST":
			return {
				...state,
				credentialRequests: [...state.credentialRequests, action.payload],
				error: null,
			};

		case "UPDATE_CREDENTIAL_REQUEST": {
			const updated = state.credentialRequests.map((req) =>
				req.id === action.payload.id
					? { ...req, ...action.payload.request }
					: req,
			);
			return {
				...state,
				credentialRequests: updated,
				error: null,
			};
		}

		case "REMOVE_CREDENTIAL_REQUEST": {
			const filtered = state.credentialRequests.filter(
				(req) => req.id !== action.payload,
			);
			return {
				...state,
				credentialRequests: filtered,
				error: null,
			};
		}

		case "SET_RESPONSE_MODE_CONFIG":
			return { ...state, responseModeConfig: action.payload, error: null };

		case "CREATE_AUTHORIZATION_START":
			return { ...state, isLoading: true, error: null };

		case "CREATE_AUTHORIZATION_SUCCESS":
			return {
				...state,
				stage: "authorization",
				authorizationId: action.payload.authorizationId,
				authorizeUrl: action.payload.authorizeUrl || null, // May be undefined for DC API
				digitalCredentialGetRequest:
					action.payload.digitalCredentialGetRequest || null,
				expiresAt: action.payload.expiresAt,
				authorizationStatus: "created",
				isLoading: false,
				error: null,
			};

		case "CREATE_AUTHORIZATION_ERROR":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case "UPDATE_STATUS": {
			const isTerminal = [
				"authorized",
				"rejected",
				"error",
				"expired",
			].includes(action.payload);
			return {
				...state,
				authorizationStatus: action.payload,
				stage: isTerminal ? "result" : state.stage,
			};
		}

		case "SET_ERROR":
			return { ...state, error: action.payload };

		case "SET_POLICY_RESPONSE":
			return { ...state, policyResponse: action.payload };

		case "START_OVER":
			return {
				...initialState,
				authorizerUrl: state.authorizerUrl,
			};

		case "SET_LAST_REQUEST":
			return { ...state, lastRequest: action.payload };

		case "SET_LAST_RESPONSE":
			return { ...state, lastResponse: action.payload };

		case "SHOW_PREVIEW":
			return { ...state, showPreview: true };

		case "HIDE_PREVIEW":
			return { ...state, showPreview: false };

		case "GO_BACK":
			return {
				...state,
				stage: "create",
				authorizationId: null,
				authorizeUrl: null,
				digitalCredentialGetRequest: null,
				authorizationStatus: null,
				expiresAt: null,
				policyResponse: null,
				error: null,
				showPreview: false,
			};

		default:
			return state;
	}
}

interface AuthorizationContextValue {
	state: AppState;
	dispatch: React.Dispatch<AppAction>;
}

const AuthorizationContext = createContext<AuthorizationContextValue | null>(
	null,
);

export function AuthorizationProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<AuthorizationContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthorizationContext.Provider>
	);
}

export function useAuthorization() {
	const context = useContext(AuthorizationContext);
	if (!context) {
		throw new Error(
			"useAuthorization must be used within an AuthorizationProvider",
		);
	}
	return context;
}

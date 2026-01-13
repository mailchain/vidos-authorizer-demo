export type AppStage = "create" | "authorization" | "result";

export type AuthorizationStatus =
	| "created"
	| "pending"
	| "authorized"
	| "rejected"
	| "error"
	| "expired";

export type DocumentType = "pid" | "mdl" | "photo_id";

export type CredentialFormat = "dc+sd-jwt" | "mso_mdoc";

export interface CredentialRequest {
	documentType: DocumentType;
	formatId: string;
	format: CredentialFormat;
	attributes: string[];
}

export interface AppState {
	stage: AppStage;
	authorizerUrl: string;
	credentialRequest: CredentialRequest | null;
	authorizationId: string | null;
	authorizeUrl: string | null;
	authorizationStatus: AuthorizationStatus | null;
	expiresAt: string | null;
	error: { message: string; details?: string } | null;
	isLoading: boolean;
	lastRequest: object | null;
	lastResponse: object | null;
	showDevTools: boolean;
}

export type AppAction =
	| { type: "SET_AUTHORIZER_URL"; payload: string }
	| { type: "SET_CREDENTIAL_REQUEST"; payload: CredentialRequest }
	| { type: "CREATE_AUTHORIZATION_START" }
	| {
			type: "CREATE_AUTHORIZATION_SUCCESS";
			payload: {
				authorizationId: string;
				authorizeUrl: string;
				expiresAt: string;
			};
	  }
	| {
			type: "CREATE_AUTHORIZATION_ERROR";
			payload: { message: string; details?: string };
	  }
	| { type: "UPDATE_STATUS"; payload: AuthorizationStatus }
	| { type: "SET_ERROR"; payload: { message: string; details?: string } | null }
	| { type: "START_OVER" }
	| { type: "SET_LAST_REQUEST"; payload: object }
	| { type: "SET_LAST_RESPONSE"; payload: object }
	| { type: "TOGGLE_DEV_TOOLS" }
	| { type: "GO_BACK" };

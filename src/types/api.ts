import type { operations } from "@/api/authorizer";

// Extract request body type for creating authorization
export type CreateAuthorizationRequest = NonNullable<
	operations["createAuthorization"]["requestBody"]
>["content"]["application/json"];

// Extract response type for creating authorization
export type CreateAuthorizationResponse =
	operations["createAuthorization"]["responses"][201]["content"]["application/json"];

// Extract DC API endpoint request body types
export type DcApiRequest = NonNullable<
	operations["dcApi"]["requestBody"]
>["content"]["application/json"];

export type DcApiJwtRequest = NonNullable<
	operations["dcApiJwt"]["requestBody"]
>["content"]["application/json"];

// Extract DC API response types
export type DcApiResponse =
	operations["dcApi"]["responses"][200]["content"]["application/json"];

export type DcApiJwtResponse =
	operations["dcApiJwt"]["responses"][200]["content"]["application/json"];

// Extract authorization status response type
export type AuthorizationStatusResponse =
	operations["getAuthorizationStatus"]["responses"][200]["content"]["application/json"];

// Extract policy response type
export type PolicyResponseData =
	operations["getPolicyResponse"]["responses"][200]["content"]["application/json"];

// Type-safe endpoint paths for DC API
export type DcApiEndpoint =
	| "/openid4/vp/v1_0/{authorizationId}/dc_api"
	| "/openid4/vp/v1_0/{authorizationId}/dc_api.jwt";

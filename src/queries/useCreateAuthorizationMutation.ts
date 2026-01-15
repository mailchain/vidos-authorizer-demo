import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { createAuthorizerClient } from "@/api/client";
import { useFlowStore } from "@/stores/useFlowStore";
import type { CreateAuthorizationRequest } from "@/types/api";
import type { CredentialRequestWithId, ResponseModeConfig } from "@/types/app";
import { buildAuthorizationRequestBody } from "@/utils/requestBuilder";

interface CreateAuthorizationParams {
	authorizerUrl: string;
	credentialRequests: CredentialRequestWithId[];
	responseModeConfig: ResponseModeConfig;
}

// Zod schemas for API response validation
const baseResponseSchema = z.object({
	authorizationId: z.string(),
	expiresAt: z.string(),
});

const standardResponseSchema = baseResponseSchema.extend({
	authorizeUrl: z.string().url(),
});

const dcApiResponseSchema = baseResponseSchema.extend({
	digitalCredentialGetRequest: z.unknown(), // Complex nested structure
});

export function useCreateAuthorizationMutation() {
	return useMutation({
		mutationKey: ["authorization", "create"],
		mutationFn: async (params: CreateAuthorizationParams) => {
			// Validate inputs
			if (params.credentialRequests.length === 0) {
				throw new Error("No credential requests configured");
			}

			if (!params.authorizerUrl) {
				throw new Error("Authorizer URL is required");
			}

			const body = buildAuthorizationRequestBody(
				params.credentialRequests,
				params.responseModeConfig,
			);

			const client = createAuthorizerClient(params.authorizerUrl);
			const { data, error } = await client.POST(
				"/openid4/vp/v1_0/authorizations",
				{
					body: body as CreateAuthorizationRequest,
				},
			);

			if (error) {
				throw new Error(error.message || "Failed to create authorization");
			}

			if (!data) {
				throw new Error("No data returned");
			}

			// Validate response structure with Zod based on mode
			const isDCAPI =
				params.responseModeConfig.mode === "dc_api" ||
				params.responseModeConfig.mode === "dc_api.jwt";

			const schema = isDCAPI ? dcApiResponseSchema : standardResponseSchema;
			const result = schema.safeParse(data);

			if (!result.success) {
				const errors = result.error.issues.map((i) => i.message).join(", ");
				throw new Error(`Invalid response structure: ${errors}`);
			}

			return data;
		},
		onMutate: (variables) => {
			// Debug: save request body
			const body = buildAuthorizationRequestBody(
				variables.credentialRequests,
				variables.responseModeConfig,
			);
			useFlowStore.getState().setLastRequest(body);
		},
		onSuccess: (data) => {
			const store = useFlowStore.getState();

			// Save response data to store
			store.setAuthorizationId(data.authorizationId);
			store.setExpiresAt(data.expiresAt);
			store.setLastResponse(data);

			// Set flow-specific data
			if ("authorizeUrl" in data) {
				store.setAuthorizeUrl(data.authorizeUrl as string);
				store.setDigitalCredentialGetRequest(null);
			} else if ("digitalCredentialGetRequest" in data) {
				store.setDigitalCredentialGetRequest(data.digitalCredentialGetRequest);
				store.setAuthorizeUrl(null);
			}

			// Transition stage: create → authorization
			store.setStage("authorization");
		},
	});
}

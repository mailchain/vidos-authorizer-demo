import createClient from "openapi-fetch";
import type { paths } from "./authorizer";

export function createAuthorizerClient(baseUrl: string, apiKey: string) {
	return createClient<paths>({
		baseUrl,
		headers: {
			Authorization: `Bearer ${apiKey}`,
		},
	});
}

import createClient from "openapi-fetch";
import type { paths } from "./authorizer";

export function createAuthorizerClient(baseUrl: string) {
	return createClient<paths>({ baseUrl });
}

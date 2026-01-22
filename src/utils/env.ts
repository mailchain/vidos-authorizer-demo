import z from "zod";

const parsedEnv = z
	.object({ VITE_MANAGED_AUTHORIZER_URL: z.url() })
	.safeParse(import.meta.env);

/**
 * Gets the managed authorizer URL from environment variables
 * @returns The managed authorizer URL if configured, undefined otherwise
 */
export function getManagedAuthorizerUrl(): string {
	if (parsedEnv.success) return parsedEnv.data.VITE_MANAGED_AUTHORIZER_URL;
	throw new Error("VITE_MANAGED_AUTHORIZER_URL is not configured or invalid", {
		cause: parsedEnv.error,
	});
}

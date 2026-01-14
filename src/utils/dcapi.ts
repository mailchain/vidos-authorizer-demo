export interface DCAPISupport {
	available: boolean;
	reason?: string;
}

export function checkDCAPISupport(): DCAPISupport {
	if (typeof navigator === "undefined") {
		return { available: false, reason: "Not in browser environment" };
	}

	if (!navigator.credentials) {
		return {
			available: false,
			reason: "Credentials API not available in this browser",
		};
	}

	if (typeof navigator.credentials.get !== "function") {
		return { available: false, reason: "credentials.get() not available" };
	}

	return { available: true };
}

export async function invokeDCAPI(request: unknown): Promise<unknown> {
	const support = checkDCAPISupport();
	if (!support.available) {
		throw new Error(support.reason || "DC API not supported");
	}

	return await navigator.credentials.get({
		digital: request,
	} as CredentialRequestOptions);
}

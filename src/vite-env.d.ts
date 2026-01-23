interface ImportMetaEnv {
	VITE_MANAGED_AUTHORIZER_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// W3C Digital Credentials API
// Spec: https://www.w3.org/TR/digital-credentials/
// biome-ignore lint/complexity/noStaticOnlyClass: Okay to have static-only class for this typings
declare class DigitalCredential {
	static userAgentAllowsProtocol(protocol: string): boolean;
}

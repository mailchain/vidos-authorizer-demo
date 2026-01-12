// biome-ignore lint/suspicious/noEmptyInterface: For future env variables
interface ImportMetaEnv {}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

/**
 * Generate debug information object from app data
 */
export function generateDebugInfo(data: Record<string, unknown>) {
	return {
		timestamp: new Date().toISOString(),
		metadata: {
			appVersion: import.meta.env.VITE_APP_VERSION || "dev",
			userAgent: navigator.userAgent,
			url: window.location.href,
			exportDate: new Date().toLocaleString(),
		},
		...data,
	};
}

/**
 * Download debug information as a JSON file
 */
export function downloadDebugInfo(debugInfo: Record<string, unknown>): void {
	const jsonString = JSON.stringify(debugInfo, null, 2);
	const blob = new Blob([jsonString], { type: "application/json" });
	const url = URL.createObjectURL(blob);

	const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
	const filename = `vidos-debug-${timestamp}.json`;

	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	// Clean up the URL object
	URL.revokeObjectURL(url);
}

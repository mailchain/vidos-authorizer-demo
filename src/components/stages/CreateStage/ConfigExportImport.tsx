import { useMutation } from "@tanstack/react-query";
import { Download, Upload } from "lucide-react";
import { useRef, useState } from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/stores/appStore";
import {
	type ConfigExport,
	downloadConfigAsJson,
	exportConfig,
	validateImportedConfig,
} from "@/utils/configExport";

async function parseConfigFile(file: File): Promise<ConfigExport> {
	const text = await file.text();
	const data = JSON.parse(text);
	const result = validateImportedConfig(data);
	if (!result.success) {
		throw new Error(result.error);
	}
	return result.config;
}

export function ConfigExportImport() {
	const instanceType = useAppStore((state) => state.instanceType);
	const ownAuthorizerUrl = useAppStore((state) => state.ownAuthorizerUrl);
	const customCredentialCases = useAppStore(
		(state) => state.customCredentialCases,
	);
	const customRequestTemplates = useAppStore(
		(state) => state.customRequestTemplates,
	);
	const importConfig = useAppStore((state) => state.importConfig);

	const [showConfirmDialog, setShowConfirmDialog] = useState(false);
	const [pendingConfig, setPendingConfig] = useState<ConfigExport | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const importMutation = useMutation({
		mutationFn: parseConfigFile,
		onSuccess: (config) => {
			setPendingConfig(config);
			setShowConfirmDialog(true);
		},
	});

	const handleExport = () => {
		const config = exportConfig({
			instanceType,
			ownAuthorizerUrl,
			customCredentialCases,
			customRequestTemplates,
		});
		downloadConfigAsJson(config);
	};

	const handleImportClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;
		event.target.value = "";
		importMutation.mutate(file);
	};

	const handleConfirmImport = () => {
		if (pendingConfig) {
			importConfig(pendingConfig);
		}
		setShowConfirmDialog(false);
		setPendingConfig(null);
	};

	const handleCancelImport = () => {
		setShowConfirmDialog(false);
		setPendingConfig(null);
	};

	return (
		<div className="space-y-3">
			<div className="flex gap-2">
				<Button
					variant="outline"
					size="sm"
					onClick={handleExport}
					className="flex-1"
				>
					<Download />
					Export Config
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={handleImportClick}
					className="flex-1"
					disabled={importMutation.isPending}
				>
					<Upload />
					Import Config
				</Button>
				<input
					ref={fileInputRef}
					type="file"
					accept=".json"
					onChange={handleFileSelected}
					className="hidden"
				/>
			</div>

			{importMutation.isSuccess && !showConfirmDialog && (
				<div className="text-sm p-2 rounded bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100">
					Configuration imported successfully
				</div>
			)}

			{importMutation.isError && (
				<div className="text-sm p-2 rounded bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-100">
					{importMutation.error.message}
				</div>
			)}

			<AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Import Configuration</AlertDialogTitle>
						<AlertDialogDescription>
							This will replace your current custom configuration (authorizer
							URL, credential cases, and request templates). Continue?
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel onClick={handleCancelImport}>
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction onClick={handleConfirmImport}>
							Import
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}

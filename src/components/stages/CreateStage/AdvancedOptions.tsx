import { ChevronRight } from "lucide-react";
import { CustomCredentialCaseManager } from "@/components/CustomCredentialCaseManager";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { configSelectors, useAppStore } from "@/stores/appStore";
import { AuthorizerConfig } from "./AuthorizerConfig";
import { ConfigExportImport } from "./ConfigExportImport";

export function AdvancedOptions() {
	const instanceType = useAppStore(configSelectors.instanceType);

	return (
		<Collapsible defaultOpen={instanceType === "own"}>
			<CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
				<ChevronRight className="h-4 w-4 transition-transform [[data-state=open]>&]:rotate-90" />
				<div className="flex flex-col items-start gap-0.5">
					<span className="font-medium">Advanced Options</span>
					<span className="text-xs">
						Instance configuration, custom credentials & config backup
					</span>
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent className="pt-4">
				<div className="rounded-lg border bg-card/50 p-4 space-y-4">
					<div className="space-y-2">
						<p className="text-sm text-muted-foreground">
							Configure which Vidos Authorizer instance to use for creating
							authorization requests.
						</p>
						<AuthorizerConfig />
					</div>

					<Separator />
					<div className="space-y-2">
						<p className="text-sm text-muted-foreground">
							Define custom credential types beyond the built-in options (PID,
							MDL, Photo ID).
						</p>
						<CustomCredentialCaseManager />
					</div>

					<Separator />

					<div className="space-y-2">
						<p className="text-sm text-muted-foreground">
							Export/import configuration for easy transfer to mobile devices or
							sharing with team members.
						</p>
						<ConfigExportImport />
					</div>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}

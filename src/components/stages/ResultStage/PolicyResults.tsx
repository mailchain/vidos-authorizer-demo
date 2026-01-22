import { ChevronDown, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { getPolicyDefinition } from "@/config/policyDefinitions";
import type { PolicyResult } from "@/types/app";

interface PolicyResultsProps {
	results: PolicyResult[];
}

function camelToTitleCase(str: string): string {
	return str
		.replace(/([A-Z])/g, " $1")
		.replace(/^./, (s) => s.toUpperCase())
		.trim();
}

export function PolicyResults({ results }: PolicyResultsProps) {
	// Separate presentation-level results from credential-level results
	const presentationResults = results.filter((r) => r.path.length === 0);
	const credentialResults = results.filter((r) => r.path.length > 0);

	// Group credential results by path[0] (credential UUID)
	const groupedByCredential = credentialResults.reduce(
		(acc, result) => {
			const credId = result.path[0];
			if (credId !== undefined) {
				const key = String(credId);
				if (!acc[key]) {
					acc[key] = [];
				}
				acc[key].push(result);
			}
			return acc;
		},
		{} as Record<string, PolicyResult[]>,
	);

	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">Policy Evaluation Results</h3>

			{/* Presentation-level results */}
			{presentationResults.length > 0 && (
				<div className="border rounded-md p-4 md:p-6 space-y-3">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
						<h4 className="font-medium">Authorization Results</h4>
						<div className="flex gap-2">
							{presentationResults.filter((r) => !r.error).length > 0 && (
								<Badge variant="default">
									{presentationResults.filter((r) => !r.error).length} passed
								</Badge>
							)}
							{presentationResults.filter((r) => r.error).length > 0 && (
								<Badge variant="destructive">
									{presentationResults.filter((r) => r.error).length} failed
								</Badge>
							)}
						</div>
					</div>

					<div className="space-y-2">
						{presentationResults.map((result) => (
							<PolicyResultItem
								key={`${result.path.join("-")}-${result.policy}-${result.service}`}
								result={result}
							/>
						))}
					</div>
				</div>
			)}

			{/* Credential-level results */}
			{Object.entries(groupedByCredential).map(
				([credId, credResults], index) => {
					const passed = credResults.filter((r) => !r.error).length;
					const failed = credResults.filter((r) => r.error).length;

					return (
						<div
							key={credId}
							className="border rounded-md p-4 md:p-6 space-y-3"
						>
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
								<div>
									<h4 className="font-medium">Credential {index + 1}</h4>
									<p className="text-xs text-muted-foreground font-mono mt-1">
										{credId}
									</p>
								</div>
								<div className="flex gap-2">
									{passed > 0 && (
										<Badge variant="default">{passed} passed</Badge>
									)}
									{failed > 0 && (
										<Badge variant="destructive">{failed} failed</Badge>
									)}
								</div>
							</div>

							<div className="space-y-2">
								{credResults.map((result) => (
									<PolicyResultItem
										key={`${result.path.join("-")}-${result.policy}-${result.service}`}
										result={result}
									/>
								))}
							</div>
						</div>
					);
				},
			)}
		</div>
	);
}

function PolicyResultItem({ result }: { result: PolicyResult }) {
	const hasError = !!result.error;
	const hasData = !!result.data;
	const policyDef = getPolicyDefinition(result.policy, result.service);
	console.log(`Policy Definition for ${result.service}.${result.policy}:`, policyDef);

	return (
		<Collapsible>
			<div className="flex items-start gap-3 p-3 md:p-4 bg-muted/50 rounded-md">
				<div
					className={`w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0 ${
						hasError ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
					}`}
				>
					{hasError ? "✗" : "✓"}
				</div>

				<div className="flex-1 min-w-0">
					<div className="flex items-center justify-between gap-2">
						<div className="space-y-1 flex-1">
							<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
								{result.service.charAt(0).toUpperCase() +
									result.service.slice(1)}
							</p>
							<div className="flex items-center gap-2">
								<p className="font-medium text-sm">
									{camelToTitleCase(result.policy)}
								</p>
								{policyDef && (
									<a
										href={policyDef.docsUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-foreground transition-colors"
										aria-label="View documentation"
									>
										<ExternalLink className="h-3.5 w-3.5" />
									</a>
								)}
							</div>
							{policyDef && (
								<p className="text-xs text-muted-foreground">
									{policyDef.description}
								</p>
							)}
						</div>

						{(hasError || hasData) && (
							<CollapsibleTrigger className="p-2 hover:bg-muted rounded transition-colors shrink-0">
								<ChevronDown className="h-4 w-4 text-muted-foreground" />
							</CollapsibleTrigger>
						)}
					</div>

					<CollapsibleContent className="mt-3">
						{hasError && result.error && (
							<div className="p-3 bg-red-50 border border-red-200 rounded text-sm space-y-1">
								{result.error.title && (
									<p className="font-medium text-red-900">
										{result.error.title}
									</p>
								)}
								{result.error.detail && (
									<p className="text-red-800">{result.error.detail}</p>
								)}
								{result.error.status && (
									<p className="text-xs text-red-600">
										Status: {result.error.status}
									</p>
								)}
								{result.error.vidosType && (
									<p className="text-xs text-red-600 font-mono">
										Type: {result.error.vidosType}
									</p>
								)}
							</div>
						)}

						{hasData && (
							<div className="p-3 bg-green-50 border border-green-200 rounded text-sm">
								<p className="font-medium text-green-900 mb-2">
									{camelToTitleCase(result.policy)} Result
								</p>
								<pre className="text-xs md:text-sm text-green-800 overflow-auto max-h-48 md:max-h-64 lg:max-h-80">
									{JSON.stringify(result.data, null, 2)}
								</pre>
							</div>
						)}
					</CollapsibleContent>
				</div>
			</div>
		</Collapsible>
	);
}

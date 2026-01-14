import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { PolicyResult } from "@/types/app";

interface PolicyResultsProps {
	results: PolicyResult[];
}

export function PolicyResults({ results }: PolicyResultsProps) {
	// Group by credential (using first path element as credential index)
	const groupedByCredential = results.reduce(
		(acc, result) => {
			const credIndex = result.path[0] as number;
			if (!acc[credIndex]) acc[credIndex] = [];
			acc[credIndex].push(result);
			return acc;
		},
		{} as Record<number, PolicyResult[]>,
	);

	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">Policy Evaluation Results</h3>

			{Object.entries(groupedByCredential).map(([credIndex, credResults]) => {
				const passed = credResults.filter((r) => !r.error).length;
				const failed = credResults.filter((r) => r.error).length;

				return (
					<div key={credIndex} className="border rounded-md p-4 space-y-3">
						<div className="flex items-center justify-between">
							<h4 className="font-medium">
								Credential {Number(credIndex) + 1}
							</h4>
							<div className="flex gap-2">
								{passed > 0 && <Badge variant="default">{passed} passed</Badge>}
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
			})}
		</div>
	);
}

function PolicyResultItem({ result }: { result: PolicyResult }) {
	const hasError = !!result.error;
	const hasData = !!result.data;

	return (
		<Collapsible>
			<div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
				<div
					className={`w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0 ${
						hasError ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
					}`}
				>
					{hasError ? "✗" : "✓"}
				</div>

				<div className="flex-1 min-w-0">
					<div className="flex items-center justify-between gap-2">
						<div>
							<p className="font-medium text-sm">{result.policy}</p>
							<p className="text-xs text-muted-foreground">
								Service: {result.service}
							</p>
						</div>

						{(hasError || hasData) && (
							<CollapsibleTrigger className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
								View Details
								<ChevronDown className="h-3 w-3" />
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
									Extracted Attributes:
								</p>
								<pre className="text-xs text-green-800 overflow-auto max-h-48">
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

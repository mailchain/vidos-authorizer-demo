import { AlertCircle, CheckCircle, ExternalLink } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { JsonValidationResult } from "@/utils/jsonRequestValidation";

interface JsonEditorProps {
	value: string;
	onChange: (json: string) => void;
	validation: JsonValidationResult;
}

export function JsonEditor({ value, onChange, validation }: JsonEditorProps) {
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<Label htmlFor="json-editor" className="text-base font-semibold">
					Request JSON
				</Label>
				<a
					href="https://vidos.id/docs/reference/services/authorizer/api/#operation/createAuthorization"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
				>
					API Documentation
					<ExternalLink className="h-3 w-3" />
				</a>
			</div>

			<div className="relative">
				<Textarea
					id="json-editor"
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={JSON.stringify(
						{
							responseMode: "direct_post",
							responseType: "vp_token",
							query: {
								credentials: ["..."],
							},
						},
						null,
						2,
					)}
					className="font-mono text-sm min-h-[500px] resize-y"
					spellCheck={false}
				/>
				{value && (
					<div className="absolute top-2 right-2">
						{validation.valid ? (
							<CheckCircle className="h-5 w-5 text-green-600" />
						) : (
							<AlertCircle className="h-5 w-5 text-destructive" />
						)}
					</div>
				)}
			</div>

			{value && !validation.valid && validation.errors.length > 0 && (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Validation Errors</AlertTitle>
					<AlertDescription>
						<ul className="list-disc list-inside space-y-1 mt-2">
							{validation.errors.map((error) => (
								<li key={error} className="text-sm">
									{error}
								</li>
							))}
						</ul>
					</AlertDescription>
				</Alert>
			)}

			{value && validation.valid && (
				<Alert className="border-green-600 bg-green-50 dark:bg-green-950">
					<CheckCircle className="h-4 w-4 text-green-600" />
					<AlertTitle className="text-green-900 dark:text-green-100">
						Valid Request
					</AlertTitle>
					<AlertDescription className="text-green-800 dark:text-green-200">
						Your JSON request is valid and ready to send.
					</AlertDescription>
				</Alert>
			)}

			{!value && (
				<p className="text-sm text-muted-foreground">
					Enter a custom authorization request in JSON format, or use the
					"Transfer from Builder" button to populate this editor with the
					current builder configuration.
				</p>
			)}
		</div>
	);
}

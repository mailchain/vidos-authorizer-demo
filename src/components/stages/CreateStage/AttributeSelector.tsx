import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getFormatDefinitionById } from "@/config/credential-cases";

interface AttributeSelectorProps {
	formatId: string;
	selectedAttributes: string[];
	onChange: (attributes: string[]) => void;
}

export function AttributeSelector({
	formatId,
	selectedAttributes,
	onChange,
}: AttributeSelectorProps) {
	const formatDef = getFormatDefinitionById(formatId);

	if (!formatDef) {
		return <p className="text-sm text-muted-foreground">Unknown format</p>;
	}

	const handleToggle = (attrId: string, checked: boolean) => {
		if (checked) {
			onChange([...selectedAttributes, attrId]);
		} else {
			onChange(selectedAttributes.filter((id) => id !== attrId));
		}
	};

	const handleSelectAll = () => {
		const allIds = formatDef.attributes.map((attr) => attr.id);
		onChange(allIds);
	};

	const handleSelectNone = () => {
		onChange([]);
	};

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<div className="space-y-1">
					<Label>Attributes</Label>
					<p className="text-xs text-muted-foreground">
						Select at least one attribute to request
					</p>
				</div>
				<div className="flex gap-2">
					<Button
						type="button"
						variant="outline"
						size="sm"
						onClick={handleSelectAll}
					>
						Select All
					</Button>
					<Button
						type="button"
						variant="outline"
						size="sm"
						onClick={handleSelectNone}
					>
						Select None
					</Button>
				</div>
			</div>

			<div className="space-y-2 max-h-64 overflow-y-auto border rounded-md p-3">
				{formatDef.attributes.map((attr) => {
					const isChecked = selectedAttributes.includes(attr.id);
					return (
						<div
							key={attr.id}
							className="flex items-center justify-between space-x-2"
						>
							<div className="flex items-center space-x-2">
								<Checkbox
									id={`attr-${attr.id}`}
									checked={isChecked}
									onCheckedChange={(checked) =>
										handleToggle(attr.id, checked as boolean)
									}
								/>
								<Label
									htmlFor={`attr-${attr.id}`}
									className="font-normal cursor-pointer"
								>
									{attr.displayName}
								</Label>
							</div>
							{attr.required && (
								<Badge variant="secondary" className="text-xs shrink-0">
									Required in credential
								</Badge>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

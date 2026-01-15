import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { AttributeDefinition } from "@/config/credential-cases/types";
import {
	getFormatDefinitionById,
	hasSelectivelyDisclosableAttributes,
} from "@/config/credential-cases/utils";

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

	const hasSelectiveDisclosure = hasSelectivelyDisclosableAttributes(formatDef);

	// Split attributes into non-disclosable (always shown first) and disclosable
	const [disclosableAttrs, nonDisclosableAttrs] = formatDef.attributes.reduce(
		([accDisclosableAttrs, accNonDisclosableAttrs], attr) => {
			if (attr.nonSelectivelyDisclosable) {
				accNonDisclosableAttrs.push(attr);
			} else {
				accDisclosableAttrs.push(attr);
			}
			return [accDisclosableAttrs, accNonDisclosableAttrs];
		},
		[[], []] as [AttributeDefinition[], AttributeDefinition[]],
	);

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
		// Keep non-disclosable attributes always selected
		const nonDisclosableIds = nonDisclosableAttrs.map((attr) => attr.id);
		onChange(nonDisclosableIds);
	};

	return (
		<div className="space-y-4">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
				<div className="space-y-1">
					<Label>Attributes</Label>
					<p className="text-xs text-muted-foreground">
						{hasSelectiveDisclosure
							? "Select attributes to request"
							: "This credential has no selectively disclosable attributes"}
					</p>
				</div>
				{hasSelectiveDisclosure && (
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
							{nonDisclosableAttrs.length > 0
								? "Deselect Disclosable"
								: "Select None"}
						</Button>
					</div>
				)}
			</div>

			<div className="border rounded-md p-3 max-h-64 md:max-h-96 lg:max-h-[32rem] overflow-y-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					{/* Non-disclosable attributes first (always selected, disabled) */}
					{nonDisclosableAttrs.map((attr) => {
						return (
							<div
								key={attr.id}
								className="flex items-center justify-between space-x-2"
							>
								<div className="flex items-center space-x-2">
									<Checkbox
										id={`attr-${attr.id}`}
										checked={true}
										disabled={true}
									/>
									<Label
										htmlFor={`attr-${attr.id}`}
										className="font-normal text-muted-foreground"
									>
										{attr.displayName}
									</Label>
								</div>
								<Badge variant="outline" className="text-xs shrink-0">
									Always disclosed
								</Badge>
							</div>
						);
					})}
					{/* Selectively disclosable attributes */}
					{disclosableAttrs.map((attr) => {
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
								{attr.requiredForIssuance && (
									<Badge variant="secondary" className="text-xs shrink-0">
										Required
									</Badge>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

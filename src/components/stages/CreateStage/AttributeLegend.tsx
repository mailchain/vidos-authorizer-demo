import { Asterisk, Lock } from "lucide-react";

interface AttributeLegendProps {
	showRequired: boolean;
	showAlwaysDisclosed: boolean;
}

export function AttributeLegend({
	showRequired,
	showAlwaysDisclosed,
}: AttributeLegendProps) {
	if (!showRequired && !showAlwaysDisclosed) {
		return null;
	}

	return (
		<div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t text-xs text-muted-foreground">
			{showRequired && (
				<div className="flex items-center gap-1.5">
					<Asterisk className="size-4 text-orange-600" aria-hidden="true" />
					<span>Required for issuance</span>
				</div>
			)}
			{showAlwaysDisclosed && (
				<div className="flex items-center gap-1.5">
					<Lock className="size-4 text-muted-foreground" aria-hidden="true" />
					<span>Always disclosed</span>
				</div>
			)}
		</div>
	);
}

import { cn } from "@/lib/utils";
import type { AppStage } from "@/types/app";

interface ProgressIndicatorProps {
	currentStage: AppStage;
}

const stages: { id: AppStage; label: string }[] = [
	{ id: "create", label: "Create" },
	{ id: "authorization", label: "Authorization" },
	{ id: "result", label: "Result" },
];

export function ProgressIndicator({ currentStage }: ProgressIndicatorProps) {
	const currentIndex = stages.findIndex((s) => s.id === currentStage);

	return (
		<div className="flex items-center justify-center gap-2 mb-8">
			{stages.map((stage, index) => (
				<div key={stage.id} className="flex items-center">
					<div className="flex flex-col items-center">
						<div
							className={cn(
								"w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors",
								index < currentIndex &&
									"bg-primary text-primary-foreground border-primary",
								index === currentIndex &&
									"bg-primary text-primary-foreground border-primary ring-2 ring-primary/30",
								index > currentIndex &&
									"bg-muted text-muted-foreground border-muted-foreground/30",
							)}
						>
							{index + 1}
						</div>
						<span
							className={cn(
								"mt-1 text-xs font-medium",
								index <= currentIndex
									? "text-foreground"
									: "text-muted-foreground",
							)}
						>
							{stage.label}
						</span>
					</div>
					{index < stages.length - 1 && (
						<div
							className={cn(
								"w-12 h-0.5 mx-2 mb-5",
								index < currentIndex ? "bg-primary" : "bg-muted",
							)}
						/>
					)}
				</div>
			))}
		</div>
	);
}

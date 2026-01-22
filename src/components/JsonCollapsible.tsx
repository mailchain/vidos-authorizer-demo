import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PrettyJson } from "@/components/ui/PrettyJson";
import { cn } from "@/lib/utils";

interface JsonCollapsibleProps {
	title: string;
	data: object | null;
	defaultOpen?: boolean;
}

export function JsonCollapsible({
	title,
	data,
	defaultOpen = false,
}: JsonCollapsibleProps) {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	if (!data) {
		return null;
	}

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen}>
			<Card>
				<CardHeader className="pb-3">
					<CollapsibleTrigger className="flex items-center justify-between w-full hover:opacity-70 transition-opacity">
						<CardTitle className="text-sm font-medium">{title}</CardTitle>
						<ChevronDownIcon
							className={cn(
								"h-4 w-4 transition-transform",
								isOpen && "transform rotate-180",
							)}
						/>
					</CollapsibleTrigger>
				</CardHeader>
				<CollapsibleContent>
					<CardContent>
						<div className="bg-muted rounded-md p-3 overflow-auto max-h-80 md:max-h-96 lg:max-h-[40rem]">
							<PrettyJson data={data} />
						</div>
					</CardContent>
				</CollapsibleContent>
			</Card>
		</Collapsible>
	);
}

import { Check, ChevronRight, Clipboard, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PrettyJsonProps {
	data: unknown;
	className?: string;
	maxStringLength?: number;
}

export function PrettyJson({
	data,
	className,
	maxStringLength,
}: PrettyJsonProps) {
	const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
	const [copiedValue, setCopiedValue] = useState<string | null>(null);
	const [copiedJson, setCopiedJson] = useState(false);

	const copyToClipboard = async (text: string, key: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopiedValue(key);
			setTimeout(() => setCopiedValue(null), 2000);
		} catch (error) {
			console.error("Failed to copy:", error);
		}
	};

	const copyEntireJson = async () => {
		try {
			const jsonString = JSON.stringify(data, null, 2);
			await navigator.clipboard.writeText(jsonString);
			setCopiedJson(true);
			setTimeout(() => setCopiedJson(false), 2000);
		} catch (error) {
			console.error("Failed to copy JSON:", error);
		}
	};

	const truncateString = (str: string): { display: string; full: string } => {
		if (!maxStringLength || str.length <= maxStringLength) {
			return { display: str, full: str };
		}

		const halfLength = Math.floor((maxStringLength - 3) / 2);
		const start = str.slice(0, halfLength);
		const end = str.slice(-halfLength);
		return { display: `${start}...${end}`, full: str };
	};
	const toggleCollapse = (path: string) => {
		setCollapsed((prev) => {
			const next = new Set(prev);
			if (next.has(path)) {
				next.delete(path);
			} else {
				next.add(path);
			}
			return next;
		});
	};

	const renderValue = (
		value: unknown,
		depth: number,
		path: string,
	): React.ReactNode => {
		if (value === null) {
			return (
				<span className="inline-flex items-center gap-1 group">
					<span className="text-gray-500">null</span>
					<button
						type="button"
						onClick={() => copyToClipboard("null", path)}
						className="opacity-0 group-hover:opacity-100 transition-opacity"
						title="Copy value"
					>
						{copiedValue === path ? (
							<Check className="h-3 w-3 text-green-600" />
						) : (
							<Copy className="h-3 w-3 text-gray-400 hover:text-gray-600" />
						)}
					</button>
				</span>
			);
		}

		if (typeof value === "boolean") {
			return (
				<span className="inline-flex items-center gap-1 group">
					<span className="text-purple-600 dark:text-purple-400">
						{String(value)}
					</span>
					<button
						type="button"
						onClick={() => copyToClipboard(String(value), path)}
						className="opacity-0 group-hover:opacity-100 transition-opacity"
						title="Copy value"
					>
						{copiedValue === path ? (
							<Check className="h-3 w-3 text-green-600" />
						) : (
							<Copy className="h-3 w-3 text-gray-400 hover:text-gray-600" />
						)}
					</button>
				</span>
			);
		}

		if (typeof value === "number") {
			return (
				<span className="inline-flex items-center gap-1 group">
					<span className="text-amber-600 dark:text-amber-400">{value}</span>
					<button
						type="button"
						onClick={() => copyToClipboard(String(value), path)}
						className="opacity-0 group-hover:opacity-100 transition-opacity"
						title="Copy value"
					>
						{copiedValue === path ? (
							<Check className="h-3 w-3 text-green-600" />
						) : (
							<Copy className="h-3 w-3 text-gray-400 hover:text-gray-600" />
						)}
					</button>
				</span>
			);
		}

		if (typeof value === "string") {
			const { display, full } = truncateString(value);
			return (
				<span className="inline-flex items-center gap-1 group">
					<span className="text-green-600 dark:text-green-400" title={full}>
						"{display}"
					</span>
					<button
						type="button"
						onClick={() => copyToClipboard(full, path)}
						className="opacity-0 group-hover:opacity-100 transition-opacity"
						title="Copy value"
					>
						{copiedValue === path ? (
							<Check className="h-3 w-3 text-green-600" />
						) : (
							<Copy className="h-3 w-3 text-gray-400 hover:text-gray-600" />
						)}
					</button>
				</span>
			);
		}

		if (Array.isArray(value)) {
			return renderArray(value, depth, path);
		}

		if (typeof value === "object") {
			return renderObject(value as Record<string, unknown>, depth, path);
		}

		return <span className="text-gray-500">{String(value)}</span>;
	};

	const renderArray = (
		arr: unknown[],
		depth: number,
		path: string,
	): React.ReactNode => {
		const isCollapsed = collapsed.has(path);

		if (arr.length === 0) {
			return <span className="text-gray-500">[]</span>;
		}

		return (
			<span>
				<button
					type="button"
					onClick={() => toggleCollapse(path)}
					className="inline-flex items-center gap-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-0.5 -ml-0.5"
				>
					<ChevronRight
						className={cn(
							"h-3 w-3 transition-transform text-gray-400",
							!isCollapsed && "rotate-90",
						)}
					/>
					<span className="text-gray-500">[</span>
				</button>
				{isCollapsed ? (
					<span className="text-gray-400 italic">{arr.length} items</span>
				) : (
					arr.map((item, index) => {
						const itemPath = `${path}[${index}]`;
						return (
							<div key={itemPath} style={{ marginLeft: "1rem" }}>
								{renderValue(item, depth + 1, itemPath)}
								{index < arr.length - 1 && (
									<span className="text-gray-500">,</span>
								)}
							</div>
						);
					})
				)}
				<span className="text-gray-500">]</span>
			</span>
		);
	};

	const renderObject = (
		obj: Record<string, unknown>,
		depth: number,
		path: string,
	): React.ReactNode => {
		const keys = Object.keys(obj);
		const isCollapsed = collapsed.has(path);

		if (keys.length === 0) {
			return <span className="text-gray-500">{"{}"}</span>;
		}

		return (
			<span>
				<button
					type="button"
					onClick={() => toggleCollapse(path)}
					className="inline-flex items-center gap-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-0.5 -ml-0.5"
				>
					<ChevronRight
						className={cn(
							"h-3 w-3 transition-transform text-gray-400",
							!isCollapsed && "rotate-90",
						)}
					/>
					<span className="text-gray-500">{"{"}</span>
				</button>
				{isCollapsed ? (
					<span className="text-gray-400 italic">...</span>
				) : (
					keys.map((key, index) => {
						const keyPath = `${path}.${key}`;
						return (
							<div key={keyPath} style={{ marginLeft: "1rem" }}>
								<span className="text-blue-600 dark:text-blue-400">
									"{key}"
								</span>
								<span className="text-gray-500">: </span>
								{renderValue(obj[key], depth + 1, keyPath)}
								{index < keys.length - 1 && (
									<span className="text-gray-500">,</span>
								)}
							</div>
						);
					})
				)}
				<span className="text-gray-500">{"}"}</span>
			</span>
		);
	};

	return (
		<div className={cn("font-mono text-sm relative group/json", className)}>
			<button
				type="button"
				onClick={copyEntireJson}
				className="opacity-0 group-hover/json:opacity-100 sticky top-0 right-0 float-right z-10 flex items-center gap-1.5 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded shadow-sm transition-opacity"
				title="Copy entire JSON"
			>
				{copiedJson ? (
					<>
						<Check className="h-3.5 w-3.5 text-green-600" />
						<span className="text-green-600">Copied!</span>
					</>
				) : (
					<>
						<Clipboard className="h-3.5 w-3.5 text-gray-600 dark:text-gray-400" />
						<span className="text-gray-600 dark:text-gray-400">Copy JSON</span>
					</>
				)}
			</button>
			<div className="pt-8">{renderValue(data, 0, "$")}</div>
		</div>
	);
}

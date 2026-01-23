import "./ProgressIndicator.css";
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

// --- Step 1: Create - Geometric Assembly ---
// Orbiting geometric shapes that represent credential data being assembled
function GeometricAssembly({ isActive }: { isActive: boolean }) {
	if (!isActive) return null;

	// 6 geometric shapes: triangles and diamonds
	const shapes = [
		{ className: "geo-shape-1", path: "M3 0L6 6H0L3 0Z" }, // triangle up
		{ className: "geo-shape-2", path: "M3 0L6 3L3 6L0 3L3 0Z" }, // diamond
		{ className: "geo-shape-3", path: "M3 6L0 0H6L3 6Z" }, // triangle down
		{ className: "geo-shape-4", path: "M3 0L6 3L3 6L0 3L3 0Z" }, // diamond
		{ className: "geo-shape-5", path: "M3 0L6 6H0L3 0Z" }, // triangle up
		{ className: "geo-shape-6", path: "M0 3L3 0L6 3L3 6L0 3Z" }, // rotated diamond
	];

	return (
		<>
			{shapes.map((shape) => (
				<svg
					key={shape.className}
					className={cn("geo-shape", shape.className)}
					width="6"
					height="6"
					viewBox="0 0 6 6"
					fill="none"
					aria-hidden="true"
				>
					<path d={shape.path} fill="currentColor" fillOpacity="0.7" />
				</svg>
			))}
		</>
	);
}

// --- Step 2: Authorization - Cryptographic Hash Ring ---
// Rotating ring of hex characters that scramble, representing hash computation
function CryptoHashRing({ isActive }: { isActive: boolean }) {
	if (!isActive) return null;

	// 16 characters positioned in a circle
	const chars = Array.from({ length: 16 }, (_, i) => i);

	return (
		<div className="hash-ring">
			{chars.map((i) => (
				<span key={i} className="hash-char">
					<span className="sr-only">Crypto char</span>
				</span>
			))}
		</div>
	);
}

// --- Step 3: Result - Holographic Seal ---
// Iridescent rainbow shimmer like a holographic security sticker
function HolographicSeal({ isActive }: { isActive: boolean }) {
	if (!isActive) return null;

	return <div className="holographic-overlay" />;
}

// --- Connecting Lines: Encryption Stream ---
// Animated particles flowing and "decrypting" as they travel
// Only completed lines show the flowing animation
function EncryptionStream({
	status,
}: {
	status: "completed" | "active" | "pending";
}) {
	// Only show particles on completed lines
	const showParticles = status === "completed";

	return (
		<div className={cn("encryption-line", status)}>
			<div className="encryption-line-bg" />
			<div
				className="encryption-line-progress"
				style={{ width: status === "pending" ? "0%" : "100%" }}
			/>
			{showParticles && (
				<>
					<span className="encryption-particle" />
					<span className="encryption-particle" />
					<span className="encryption-particle" />
					<span className="encryption-particle" />
					<span className="encryption-particle" />
				</>
			)}
		</div>
	);
}

// --- Step Circle ---
// The main step indicator with conditional animations
function StepCircle({
	index,
	stage,
	currentIndex,
}: {
	index: number;
	stage: { id: AppStage; label: string };
	currentIndex: number;
}) {
	const isCompleted = index < currentIndex;
	const isActive = index === currentIndex;
	const isPending = index > currentIndex;

	// Determine which animation to show
	const showGeometric = stage.id === "create" && isActive;
	const showHashRing = stage.id === "authorization" && isActive;
	const showHolographic = stage.id === "result" && isActive;

	return (
		<div className="flex flex-col items-center">
			<div className="relative">
				{/* Geometric Assembly - Create step */}
				<GeometricAssembly isActive={showGeometric} />

				{/* Crypto Hash Ring - Authorization step */}
				<CryptoHashRing isActive={showHashRing} />

				{/* Step circle */}
				<div
					className={cn(
						"relative w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all duration-300",
						// Completed state
						isCompleted && "bg-primary text-primary-foreground border-primary",
						// Active state with stage-specific styling
						isActive &&
							stage.id === "create" &&
							"bg-primary text-primary-foreground border-primary ring-2 ring-primary/30",
						isActive &&
							stage.id === "authorization" &&
							"bg-primary text-primary-foreground border-primary ring-2 ring-primary/30",
						isActive &&
							stage.id === "result" &&
							"bg-primary text-primary-foreground border-primary holographic-glow seal-enter",
						// Pending state
						isPending &&
							"bg-muted text-muted-foreground border-muted-foreground/30",
					)}
				>
					{/* Holographic overlay - Result step */}
					<HolographicSeal isActive={showHolographic} />

					{/* Step number or checkmark */}
					{isCompleted ? (
						<svg
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={3}
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					) : (
						<span className="relative z-10">{index + 1}</span>
					)}
				</div>
			</div>

			{/* Label */}
			<span
				className={cn(
					"mt-2 text-xs font-medium transition-colors duration-300",
					isCompleted && "text-foreground",
					isActive && "text-foreground",
					isPending && "text-muted-foreground",
				)}
			>
				{stage.label}
			</span>
		</div>
	);
}

export function ProgressIndicator({ currentStage }: ProgressIndicatorProps) {
	const currentIndex = stages.findIndex((s) => s.id === currentStage);

	return (
		<div className="flex items-center justify-center mb-8">
			{stages.map((stage, index) => (
				<div key={stage.id} className="flex items-center">
					<StepCircle index={index} stage={stage} currentIndex={currentIndex} />

					{/* Connecting line with encryption stream */}
					{index < stages.length - 1 && (
						<EncryptionStream
							status={
								index < currentIndex
									? "completed"
									: index === currentIndex
										? "active"
										: "pending"
							}
						/>
					)}
				</div>
			))}
		</div>
	);
}

import { QRCodeSVG } from "qrcode.react";

interface QRCodeDisplayProps {
	url: string;
}

export function QRCodeDisplay({ url }: QRCodeDisplayProps) {
	return (
		<div className="flex flex-col items-center gap-4">
			{/* Mobile: 256px (64 * 4) */}
			<div className="md:hidden p-4 bg-white rounded-lg shadow-sm">
				<QRCodeSVG value={url} size={256} level="M" includeMargin />
			</div>
			{/* Tablet: 320px (80 * 4) */}
			<div className="hidden md:block lg:hidden p-4 bg-white rounded-lg shadow-sm">
				<QRCodeSVG value={url} size={320} level="M" includeMargin />
			</div>
			{/* Desktop: 384px (96 * 4) */}
			<div className="hidden lg:block p-4 bg-white rounded-lg shadow-sm">
				<QRCodeSVG value={url} size={384} level="M" includeMargin />
			</div>
			<p className="text-sm md:text-base text-center max-w-sm md:max-w-md">
				Scan this QR code with your wallet app to authorize the request
			</p>
		</div>
	);
}

import { QRCodeSVG } from "qrcode.react";

interface QRCodeDisplayProps {
	url: string;
}

export function QRCodeDisplay({ url }: QRCodeDisplayProps) {
	return (
		<div className="flex flex-col items-center gap-4">
			<div className="p-4 bg-white rounded-lg shadow-sm">
				<QRCodeSVG value={url} size={256} level="M" includeMargin />
			</div>
			<p className="text-sm text-muted-foreground text-center max-w-sm">
				Scan this QR code with your wallet app to authorize the request
			</p>
		</div>
	);
}

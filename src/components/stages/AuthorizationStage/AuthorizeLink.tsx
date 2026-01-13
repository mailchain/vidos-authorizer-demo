interface AuthorizeLinkProps {
	url: string;
}

export function AuthorizeLink({ url }: AuthorizeLinkProps) {
	return (
		<div className="text-center">
			<p className="text-sm text-muted-foreground mb-2">
				Or open directly on this device:
			</p>
			<a
				href={url}
				className="text-primary hover:underline text-sm break-all"
				target="_blank"
				rel="noopener noreferrer"
			>
				Open in Wallet
			</a>
		</div>
	);
}

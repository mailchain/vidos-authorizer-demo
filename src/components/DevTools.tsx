import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthorization } from "@/context/AuthorizationContext";

type Tab = "request" | "response";

export function DevTools() {
	const { state, dispatch } = useAuthorization();
	const [activeTab, setActiveTab] = useState<Tab>("request");

	const toggleDevTools = () => {
		dispatch({ type: "TOGGLE_DEV_TOOLS" });
	};

	return (
		<div className="mt-6">
			<Button
				variant="outline"
				size="sm"
				onClick={toggleDevTools}
				className="mb-2"
			>
				{state.showDevTools ? "Hide" : "Show"} Developer Tools
			</Button>

			{state.showDevTools && (
				<Card>
					<CardHeader className="pb-3">
						<CardTitle className="text-sm font-medium">Developer Tools</CardTitle>
						<div className="flex gap-2">
							<Button
								variant={activeTab === "request" ? "default" : "outline"}
								size="sm"
								onClick={() => setActiveTab("request")}
							>
								Request
							</Button>
							<Button
								variant={activeTab === "response" ? "default" : "outline"}
								size="sm"
								onClick={() => setActiveTab("response")}
							>
								Response
							</Button>
						</div>
					</CardHeader>
					<CardContent>
						<div className="bg-muted rounded-md p-3 overflow-auto max-h-80">
							<pre className="text-xs font-mono whitespace-pre-wrap break-all">
								{activeTab === "request" ? (
									state.lastRequest ? (
										JSON.stringify(state.lastRequest, null, 2)
									) : (
										<span className="text-muted-foreground">
											No request sent yet
										</span>
									)
								) : state.lastResponse ? (
									JSON.stringify(state.lastResponse, null, 2)
								) : (
									<span className="text-muted-foreground">
										No response received yet
									</span>
								)}
							</pre>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
}

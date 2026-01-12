import { useMemo } from "react";
import "./App.css";
import { createAuthorizerClient } from "./api/client";
import { Button } from "./components/ui/button";
import { AUTHORIZER_API_URL, VIDOS_API_KEY } from "./tmp";

function App() {
	const client = useMemo(
		() => createAuthorizerClient(AUTHORIZER_API_URL, VIDOS_API_KEY),
		[],
	);

	return (
		<div>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<Button>Click me</Button>
		</div>
	);
}

export default App;

import "./App.css";
import { AuthorizationFlow } from "./components/AuthorizationFlow";
import { AuthorizationProvider } from "./context/AuthorizationContext";

function App() {
	return (
		<AuthorizationProvider>
			<div className="min-h-screen bg-background p-4 md:p-8">
				<header className="text-center mb-8">
					<h1 className="text-2xl font-bold">Vidos Authorizer Example</h1>
					<p className="text-muted-foreground">
						OID4VP Authorization Request Demo
					</p>
				</header>
				<main>
					<AuthorizationFlow />
				</main>
			</div>
		</AuthorizationProvider>
	);
}

export default App;

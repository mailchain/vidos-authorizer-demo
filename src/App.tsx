import "./App.css";
import { AuthorizationFlow } from "./components/AuthorizationFlow";
import { AuthorizationProvider } from "./context/AuthorizationContext";

function App() {
	return (
		<AuthorizationProvider>
			<div className="min-h-screen bg-background p-4 md:p-8">
				<header className="text-center mb-8">
					<div className="flex items-center justify-center mb-4">
						<img
							src="/vidos-logo.svg"
							alt="Vidos Logo"
							className="h-16 w-auto"
						/>
					</div>
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

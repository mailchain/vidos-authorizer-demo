import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
	const { mode, setMode } = useTheme();

	const handleToggle = () => {
		switch (mode) {
			case "light":
				setMode("dark");
				break;
			case "dark":
				setMode("system");
				break;
			case "system":
				setMode("light");
				break;
		}
	};

	const getIcon = () => {
		switch (mode) {
			case "light":
				return <Sun className="h-5 w-5" />;
			case "dark":
				return <Moon className="h-5 w-5" />;
			case "system":
				return <Monitor className="h-5 w-5" />;
		}
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={handleToggle}
			aria-label={`Toggle theme, current: ${mode}`}
		>
			{getIcon()}
		</Button>
	);
}

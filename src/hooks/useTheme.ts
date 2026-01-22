import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme";

function getStoredMode(): ThemeMode {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === "light" || stored === "dark" || stored === "system") {
		return stored;
	}
	return "system";
}

function getSystemTheme(): ResolvedTheme {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function resolveTheme(mode: ThemeMode): ResolvedTheme {
	if (mode === "system") {
		return getSystemTheme();
	}
	return mode;
}

export function useTheme() {
	const [mode, setModeState] = useState<ThemeMode>(getStoredMode);
	const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
		resolveTheme(getStoredMode()),
	);

	useEffect(() => {
		const newResolved = resolveTheme(mode);
		setResolvedTheme(newResolved);

		if (newResolved === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [mode]);

	useEffect(() => {
		if (mode !== "system") return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => {
			const newResolved = getSystemTheme();
			setResolvedTheme(newResolved);

			if (newResolved === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [mode]);

	const setMode = (newMode: ThemeMode) => {
		localStorage.setItem(STORAGE_KEY, newMode);
		setModeState(newMode);
	};

	return { mode, resolvedTheme, setMode };
}

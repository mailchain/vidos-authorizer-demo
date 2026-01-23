import type { CustomCasesSlice, SliceCreator } from "../types";

export const createCustomCasesSlice: SliceCreator<CustomCasesSlice> = (
	set,
) => ({
	customCredentialCases: [],

	addCustomCredentialCase: (credCase) =>
		set((state) => ({
			customCredentialCases: [...state.customCredentialCases, credCase],
			error: null,
		})),

	updateCustomCredentialCase: (id, credCase) =>
		set((state) => ({
			customCredentialCases: state.customCredentialCases.map((c) =>
				c.id === id ? credCase : c,
			),
			error: null,
		})),

	deleteCustomCredentialCase: (id) =>
		set((state) => ({
			customCredentialCases: state.customCredentialCases.filter(
				(c) => c.id !== id,
			),
			error: null,
		})),
});

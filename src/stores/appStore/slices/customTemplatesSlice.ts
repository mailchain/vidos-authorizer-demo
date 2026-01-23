import type { CustomTemplatesSlice, SliceCreator } from "../types";

export const createCustomTemplatesSlice: SliceCreator<CustomTemplatesSlice> = (
	set,
) => ({
	customRequestTemplates: [],

	addCustomTemplate: (template) =>
		set((state) => ({
			customRequestTemplates: [...state.customRequestTemplates, template],
			error: null,
		})),

	updateCustomTemplate: (id, template) =>
		set((state) => ({
			customRequestTemplates: state.customRequestTemplates.map((t) =>
				t.id === id ? template : t,
			),
			error: null,
		})),

	deleteCustomTemplate: (id) =>
		set((state) => ({
			customRequestTemplates: state.customRequestTemplates.filter(
				(t) => t.id !== id,
			),
			error: null,
		})),

	setCustomTemplates: (templates) =>
		set({
			customRequestTemplates: templates,
			error: null,
		}),
});

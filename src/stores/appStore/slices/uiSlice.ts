import type { SliceCreator, UiSlice } from "../types";

export const createUiSlice: SliceCreator<UiSlice> = (set) => ({
	showPreview: false,
	error: null,

	setShowPreview: (showPreview) => set({ showPreview }),
	setError: (error) => set({ error }),
	resetError: () => set({ error: null }),
});

import type { DebugSlice, SliceCreator } from "../types";

export const createDebugSlice: SliceCreator<DebugSlice> = (set) => ({
	lastRequest: null,
	lastResponse: null,

	setLastRequest: (lastRequest) => set({ lastRequest }),
	setLastResponse: (lastResponse) => set({ lastResponse }),
});

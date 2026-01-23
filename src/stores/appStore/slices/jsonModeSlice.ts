import type { JsonModeSlice, SliceCreator } from "../types";

export const createJsonModeSlice: SliceCreator<JsonModeSlice> = (set) => ({
	useRawJsonMode: false,
	rawJsonContent: "",
	customJsonRequests: [],

	setUseRawJsonMode: (useRawJsonMode) => set({ useRawJsonMode }),
	setRawJsonContent: (rawJsonContent) => set({ rawJsonContent }),

	addCustomJsonRequest: (request) =>
		set((state) => ({
			customJsonRequests: [...state.customJsonRequests, request],
			error: null,
		})),

	updateCustomJsonRequest: (id, request) =>
		set((state) => ({
			customJsonRequests: state.customJsonRequests.map((req) =>
				req.id === id ? request : req,
			),
			error: null,
		})),

	deleteCustomJsonRequest: (id) =>
		set((state) => ({
			customJsonRequests: state.customJsonRequests.filter(
				(req) => req.id !== id,
			),
			error: null,
		})),
});

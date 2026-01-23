import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getManagedAuthorizerUrl } from "@/utils/env";
import { createConfigSlice } from "./slices/configSlice";
import { createCredentialRequestsSlice } from "./slices/credentialRequestsSlice";
import { createCustomCasesSlice } from "./slices/customCasesSlice";
import { createDebugSlice } from "./slices/debugSlice";
import { createJsonModeSlice } from "./slices/jsonModeSlice";
import { createResponseModeSlice } from "./slices/responseModeSlice";
import { createSessionSlice } from "./slices/sessionSlice";
import { createUiSlice } from "./slices/uiSlice";
import type { AppState } from "./types";

export const useAppStore = create<AppState>()(
	persist(
		(...a) => ({
			...createConfigSlice(...a),
			...createCredentialRequestsSlice(...a),
			...createResponseModeSlice(...a),
			...createCustomCasesSlice(...a),
			...createJsonModeSlice(...a),
			...createSessionSlice(...a),
			...createUiSlice(...a),
			...createDebugSlice(...a),
		}),
		{
			name: "vidos-flow-storage",
			partialize: (state) => ({
				ownAuthorizerUrl: state.ownAuthorizerUrl,
				instanceType: state.instanceType,
				customCredentialCases: state.customCredentialCases,
				customJsonRequests: state.customJsonRequests,
			}),
			merge: (persistedState, currentState) => {
				console.log("Merging persisted state:", persistedState, currentState);
				const persisted = persistedState as Partial<AppState>;
				return {
					...currentState,
					...persisted,
					instanceType: getManagedAuthorizerUrl()
						? (persisted.instanceType ?? currentState.instanceType)
						: "own",
				} satisfies AppState;
			},
		},
	),
);

export * from "./selectors";
// Re-export types and selectors
export * from "./types";

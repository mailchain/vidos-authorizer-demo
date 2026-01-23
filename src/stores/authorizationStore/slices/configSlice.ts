import { getManagedAuthorizerUrl } from "@/utils/env";
import type { ConfigSlice, SliceCreator } from "../types";

export const createConfigSlice: SliceCreator<ConfigSlice> = (set) => ({
	instanceType: getManagedAuthorizerUrl() ? "managed" : "own",
	ownAuthorizerUrl: "",
	setInstanceType: (instanceType) => set({ instanceType, error: null }),
	setOwnAuthorizerUrl: (ownAuthorizerUrl) =>
		set({ ownAuthorizerUrl, error: null }),
});

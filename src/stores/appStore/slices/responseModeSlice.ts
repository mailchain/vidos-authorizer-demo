import type { ResponseModeConfig } from "@/types/app";
import type { ResponseModeSlice, SliceCreator } from "../types";

export const createResponseModeSlice: SliceCreator<ResponseModeSlice> = (
	set,
) => ({
	responseModeConfig: { mode: "direct_post.jwt" } as ResponseModeConfig,
	setResponseModeConfig: (responseModeConfig) =>
		set({ responseModeConfig, error: null }),
});

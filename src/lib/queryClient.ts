import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 3,
			staleTime: 0,
			refetchOnWindowFocus: false,
		},
		mutations: { retry: 3 },
	},
});

const QueryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};

export { QueryClientOptions };

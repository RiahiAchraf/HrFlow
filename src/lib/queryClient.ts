const QueryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};

export default QueryClientOptions;

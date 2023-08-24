const QueryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};

export default QueryClientOptions;

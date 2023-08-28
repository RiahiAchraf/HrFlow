'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

import { QueryClientOptions } from '@/lib/queryClient';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient(QueryClientOptions));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

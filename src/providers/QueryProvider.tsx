'use client';

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { toast } from 'react-toastify';

function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (error) => {
          console.error('Error:', error);
          toast.error(`error: ${error.message}`);
        },
        // TODO: 각 상황에 맞는 message 보여주기
        onSuccess: () => toast.success('등록 성공'),
      },
      queries: {
        // throwOnError: true,
      },
    },
    queryCache: new QueryCache({
      onError: (error) => toast.error(`error: ${error.message}`),
      onSuccess: () => toast.success('데이터 페칭 성공'),
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProvider;

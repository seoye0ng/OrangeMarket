import NextUiProvider from './NextUiProvider';
import QueryProvider from './QueryProvider';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <NextUiProvider>{children}</NextUiProvider>
    </QueryProvider>
  );
}

export default Provider;

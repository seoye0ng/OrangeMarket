import NextUiProvider from './NextUiProvider';
import QueryProvider from './QueryProvider';
import ToastProvider from './ToastProvider';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <NextUiProvider>
        {children}
        <ToastProvider />
      </NextUiProvider>
    </QueryProvider>
  );
}

export default Provider;

import QueryProvider from './QueryProvider';

function Provider({ children }: { children: React.ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>;
}

export default Provider;

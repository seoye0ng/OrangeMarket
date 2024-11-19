import { HeaderProvider } from './headerContext';

function ContextProvider({ children }: { children: React.ReactNode }) {
  return <HeaderProvider>{children}</HeaderProvider>;
}

export default ContextProvider;

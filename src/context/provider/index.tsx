import { HeaderProvider } from './HeaderContext';
import { SearchProvider } from './SearchContext';

function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeaderProvider>
      <SearchProvider>{children}</SearchProvider>
    </HeaderProvider>
  );
}

export default ContextProvider;

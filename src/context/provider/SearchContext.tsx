'use client';

import { createContext, useState, ReactNode, useMemo, useContext } from 'react';

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');

  const value = useMemo(() => ({ searchTerm, setSearchTerm }), [searchTerm]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export const useSearchContext = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};

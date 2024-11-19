'use client';

import { createContext, useState, ReactNode, useMemo, useContext } from 'react';

interface IHeaderContext {
  isHeaderClick: boolean;
  setIsHeaderClick: (value: boolean) => void;
}

export const HeaderContext = createContext<IHeaderContext | undefined>(
  undefined,
);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [isHeaderClick, setIsHeaderClick] = useState(false);

  const value = useMemo(
    () => ({ isHeaderClick, setIsHeaderClick }),
    [isHeaderClick],
  );

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
}

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return context;
};

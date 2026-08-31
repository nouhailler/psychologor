import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

interface SearchOverlayContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const SearchOverlayContext = createContext<SearchOverlayContextValue | null>(null);

export function SearchOverlayProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(
    () => ({ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }),
    [isOpen],
  );
  return <SearchOverlayContext.Provider value={value}>{children}</SearchOverlayContext.Provider>;
}

export function useSearchOverlay() {
  const ctx = useContext(SearchOverlayContext);
  if (!ctx) throw new Error('useSearchOverlay must be used within SearchOverlayProvider');
  return ctx;
}

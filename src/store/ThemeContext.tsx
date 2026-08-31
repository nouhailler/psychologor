import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';
export type TextSize = 'normal' | 'large' | 'x-large';

interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_KEY = 'psychologor:theme';
const TEXT_SIZE_KEY = 'psychologor:text-size';

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', mode);
  }
}

function applyTextSize(size: TextSize) {
  const root = document.documentElement;
  root.setAttribute('data-text-size', size);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem(THEME_KEY);
    return (stored as ThemeMode) ?? 'system';
  });
  const [textSize, setTextSizeState] = useState<TextSize>(() => {
    const stored = localStorage.getItem(TEXT_SIZE_KEY);
    return (stored as TextSize) ?? 'normal';
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    applyTextSize(textSize);
  }, [textSize]);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem(THEME_KEY, mode);
  }, []);

  const setTextSize = useCallback((size: TextSize) => {
    setTextSizeState(size);
    localStorage.setItem(TEXT_SIZE_KEY, size);
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, textSize, setTextSize }),
    [theme, setTheme, textSize, setTextSize],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

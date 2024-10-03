import {
  FC,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface ThemeModeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeModeContext = createContext<ThemeModeContext | null>(null);

const ThemeModeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState(false);
  const isFirstRender = useRef(true);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  useEffect(() => {
    if (isFirstRender.current) {
      setTimeout(() => {
        toggleTheme();
      }, 1000);

      setTimeout(() => {
        toggleTheme();
      }, 1750);

      isFirstRender.current = false;
    }
  }, [toggleTheme]);

  return (
    <ThemeModeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;

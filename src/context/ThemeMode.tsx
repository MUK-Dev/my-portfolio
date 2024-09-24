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
        console.log('hello 1');
        toggleTheme();
      }, 1000);

      setTimeout(() => {
        console.log('hello 2');
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

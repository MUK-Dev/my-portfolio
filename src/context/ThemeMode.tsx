import { FC, createContext, useState } from 'react'

export interface ThemeModeContext {
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeModeContext = createContext<ThemeModeContext | null>(null)

const ThemeModeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <ThemeModeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeModeProvider

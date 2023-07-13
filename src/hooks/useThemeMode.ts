import { useContext } from 'react'
import { ThemeModeContext } from '../context/ThemeMode'

export default function useThemeMode() {
  const context: ThemeModeContext = useContext(ThemeModeContext)!

  return context
}

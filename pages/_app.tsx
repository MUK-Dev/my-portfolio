import ThemeModeProvider from '@/src/context/ThemeMode'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <Component {...pageProps} />
    </ThemeModeProvider>
  )
}

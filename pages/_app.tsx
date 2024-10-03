import ThemeModeProvider from '@/src/context/ThemeMode';
import '@/styles/globals.css';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <GoogleAnalytics
        measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!}
      />
      <Component {...pageProps} />
    </ThemeModeProvider>
  );
}

import Head from 'next/head'

import {
  Contact,
  Header,
  Hero,
  Projects,
  Skills,
} from '@/src/components/sections'
import useThemeMode from '@/src/hooks/useThemeMode'

export default function Home() {
  const { isDark } = useThemeMode()

  return (
    <>
      <Head>
        <title>M. Usman Khilji</title>
      </Head>
      <main className={`${isDark ? 'dark' : ''}`}>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

import Head from 'next/head'

import { Header, Hero, Projects, Skills } from '@/src/components/sections'
import useThemeMode from '@/src/hooks/useThemeMode'

export default function Home() {
  const { isDark } = useThemeMode()

  return (
    <>
      <Head>
        <title>M. Usman Khilji</title>
      </Head>
      <main className={`${isDark ? 'dark' : ''} overflow-x-hidden`}>
        <Header />
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

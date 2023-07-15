import Head from 'next/head'
import { MdPersonOutline } from 'react-icons/md'

import { Header, Hero, Skills } from '@/src/components/sections'
import useThemeMode from '@/src/hooks/useThemeMode'

const getStaticPaths = () => {}

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
        <section className='bg-gradient-to-b from-orange-100 to-white dark:from-slate-900 dark:to-slate-950 min-h-screen'>
          Next Section
        </section>
      </main>
    </>
  )
}

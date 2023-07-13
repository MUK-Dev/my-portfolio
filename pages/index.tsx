import Head from 'next/head'
import { MdPersonOutline } from 'react-icons/md'

import { Header } from '@/src/components/sections'
import useThemeMode from '@/src/hooks/useThemeMode'

export default function Home() {
  const { isDark } = useThemeMode()

  return (
    <>
      <Head>
        <title>M. Usman Khilji</title>
      </Head>
      <main className={`bg-white ${isDark ? 'dark' : ''}`}>
        <Header />
      </main>
    </>
  )
}

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import useThemeMode from '@/src/hooks/useThemeMode'
import { Clouds } from '../../ui/hero'

const Hero = () => {
  const { isDark } = useThemeMode()

  const MOON_SUN = {
    initial: {
      y: '100vh',
      scale: 0.2,
    },
    animate: {
      y: '-20vh',
      scale: 1,
    },
    exit: {
      y: '-100vh',
      scale: 0.2,
    },
  }

  const DAY_NIGHT = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  const CLOUDS = {
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <main
      id='intro'
      className='flex w-full justify-center items-center h-[90vh] dark:bg-slate-950 transition-colors relative'
    >
      <div className='flex flex-col'>
        <h1 className='font-fasthand text-center text-7xl dark:text-slate-50'>
          Hi im Usman
        </h1>
        <h3 className='font-fasthand text-center text-3xl dark:text-slate-50'>
          game & frontend developer
        </h3>
      </div>
      <AnimatePresence mode='popLayout'>
        {isDark ? (
          <motion.div
            variants={MOON_SUN}
            initial='initial'
            animate='animate'
            exit='exit'
            key='moon'
            transition={{
              type: 'keyframes',
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
            }}
          >
            <Image
              src='/assets/header/moon.png'
              alt='moon'
              width={150}
              height={150}
            />
          </motion.div>
        ) : (
          <motion.div
            variants={MOON_SUN}
            initial='initial'
            animate='animate'
            exit='exit'
            key='sun'
            transition={{
              type: 'keyframes',
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
            }}
          >
            <Image
              src='/assets/header/sun.png'
              alt='sun'
              width={150}
              height={150}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode='popLayout'>
        {isDark && (
          <motion.div
            key='night'
            variants={DAY_NIGHT}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
              type: 'keyframes',
              ease: 'linear',
            }}
            className='absolute top-[-10vh] left-0 w-full h-screen -z-0'
          >
            <Image
              src='/assets/hero/night.png'
              alt='night'
              layout='fill'
              objectFit='cover'
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        key='day'
        className='absolute top-0 left-0 bg-gradient-to-b from-[#1291cb] to-[transparent] w-full h-[90vh] -z-10'
      />

      <AnimatePresence mode='popLayout'>
        {!isDark && (
          <motion.div
            key='clouds'
            variants={CLOUDS}
            animate='animate'
            exit='exit'
            transition={{
              type: 'keyframes',
              ease: 'linear',
            }}
          >
            <Clouds />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Hero

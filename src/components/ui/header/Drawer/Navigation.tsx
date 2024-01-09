import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import Link from 'next/link'
import { BiLogoUpwork, BiLogoLinkedin } from 'react-icons/bi'
import { FiGithub, FiYoutube } from 'react-icons/fi'
import ThemeSwitch from '../ThemeSwitch'
import useThemeMode from '@/src/hooks/useThemeMode'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const GITHUB_LINK = 'https://github.com/MUK-Dev'
const UPWORK_LINK = 'https://www.upwork.com/freelancers/~015dfb967e68c8adec'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/muk-dev/'
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCWdnFCZ3L5di3EMFksP8Y_g'

export const Navigation = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean
  toggle: () => void
}) => {
  const { isDark, toggleTheme } = useThemeMode()

  return (
    <motion.ul
      className={`text-center w-full absolute top-10 left-1/2 -translate-x-1/2`}
      variants={variants}
      // transition={{ delay: 0.2 }}
      animate={isOpen ? 'open' : 'closed'}
    >
      {itemIds.map(i => (
        <MenuItem i={i} key={i} isOpen={isOpen} toggle={toggle} />
      ))}

      <motion.li
        variants={liVariants}
        animate={isOpen ? 'open' : 'closed'}
        className='mb-3'
      >
        <ThemeSwitch isDark={isDark} onChange={toggleTheme} />
      </motion.li>
      <motion.li
        variants={liVariants}
        animate={isOpen ? 'open' : 'closed'}
        className='flex-1 flex md:hidden justify-center items-center gap-5 dark:text-gray-200 transition-colors z-30'
      >
        <Link href={GITHUB_LINK} target='_blank'>
          <FiGithub style={{ fontSize: '20px' }} />
        </Link>
        <Link href={UPWORK_LINK} target='_blank'>
          <BiLogoUpwork style={{ fontSize: '25px' }} />
        </Link>
        <Link href={LINKEDIN_LINK} target='_blank'>
          <BiLogoLinkedin style={{ fontSize: '20px' }} />
        </Link>
        <Link href={YOUTUBE_LINK} target='_blank'>
          <FiYoutube style={{ fontSize: '20px' }} />
        </Link>
      </motion.li>
    </motion.ul>
  )
}

const itemIds = ['Intro', 'Skills', 'Projects', 'Contact']

import * as React from 'react'
import { motion } from 'framer-motion'
import NavBtn from '../NavBtn'

const variants = {
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

export const MenuItem = ({ i, isOpen, toggle }: any) => {
  return (
    <motion.li
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='mb-3'
      onClick={toggle}
    >
      <NavBtn href={`#${i.toLowerCase()}`} large>
        {i}
      </NavBtn>
    </motion.li>
  )
}

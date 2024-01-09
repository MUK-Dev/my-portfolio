import { motion, useInView } from 'framer-motion'
import { FC, useId } from 'react'

const data = [
  '/assets/skills/csharp.png',
  '/assets/skills/firebase.png',
  '/assets/skills/framer-motion.png',
  '/assets/skills/git.png',
  '/assets/skills/github.png',
  '/assets/skills/JS.png',
  '/assets/skills/mongodb.png',
  '/assets/skills/mui.png',
  '/assets/skills/nestjs.png',
  '/assets/skills/nextjs.png',
  '/assets/skills/nodejs.png',
  '/assets/skills/npm.png',
  '/assets/skills/react.png',
  '/assets/skills/react-query.png',
  '/assets/skills/sass.png',
  '/assets/skills/swagger.png',
  '/assets/skills/tailwindcss.png',
  '/assets/skills/TS.png',
  '/assets/skills/unity.png',
]

interface Props {
  isInView: boolean
  invert?: boolean
}

const ParticleSystem: FC<Props> = ({ isInView, invert = false }) => {
  return invert ? (
    <>
      {data.map((img, i) => {
        const RANDOM_IMAGE_DIMENSIONS = Math.floor(Math.random() * 75)
        const INITIAL_AND_EXIT_VALUE = 100 + Math.floor(Math.random() * 500)
        return (
          <motion.img
            key={i}
            src={img}
            alt={img}
            width={75 + RANDOM_IMAGE_DIMENSIONS}
            height={75 + RANDOM_IMAGE_DIMENSIONS}
            className='absolute -left-40'
            initial={
              isInView
                ? {
                    x: 0,
                    y: INITIAL_AND_EXIT_VALUE,
                    opacity: 1,
                  }
                : {}
            }
            animate={
              isInView
                ? {
                    x: 200 + Math.floor(Math.random() * 800),
                    y: -500 + Math.floor(Math.random() * 800),
                    opacity: 0,
                  }
                : {}
            }
            exit={
              isInView
                ? {
                    x: 0,
                    y: INITIAL_AND_EXIT_VALUE,
                    opacity: 0,
                  }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: Math.ceil(Math.random() * 3) + 1,
              delay: 0.1 + Math.random() * i,
            }}
          />
        )
      })}
    </>
  ) : (
    <>
      {data.map((img, i) => {
        const RANDOM_IMAGE_DIMENSIONS = Math.floor(Math.random() * 75)
        return (
          <motion.img
            key={i}
            src={img}
            alt={img}
            width={75 + RANDOM_IMAGE_DIMENSIONS}
            height={75 + RANDOM_IMAGE_DIMENSIONS}
            className='absolute -right-40'
            initial={
              isInView
                ? {
                    x: 0,
                    y: 100 + Math.floor(Math.random() * 500),
                  }
                : {}
            }
            animate={
              isInView
                ? {
                    x: -1 * (200 + Math.floor(Math.random() * 800)),
                    y: -500 + Math.floor(Math.random() * 800),
                    opacity: 0,
                  }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: Math.ceil(Math.random() * 3) + 1,
              delay: 0.1 + Math.random() * i,
            }}
          />
        )
      })}
    </>
  )
}

export default ParticleSystem

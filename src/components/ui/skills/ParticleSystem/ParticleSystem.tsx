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
  return (
    <>
      {data.map((img, i) => (
        <Particle
          img={img}
          index={i}
          inverted={invert}
          isInView={isInView}
          key={i}
        />
      ))}
    </>
  )
}

interface ParticleProps {
  img: string
  isInView: boolean
  index: number
  inverted: boolean
}

const Particle: FC<ParticleProps> = ({ index, img, isInView, inverted }) => {
  const id = useId()
  const RANDOM_IMAGE_DIMENSIONS = Math.floor(Math.random() * 75)
  return (
    <motion.img
      key={id}
      src={img}
      alt={img}
      width={75 + RANDOM_IMAGE_DIMENSIONS}
      height={75 + RANDOM_IMAGE_DIMENSIONS}
      className={`absolute ${inverted ? '-left-40' : '-right-40'}`}
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
              x: inverted
                ? 200 + Math.floor(Math.random() * 800)
                : -1 * (200 + Math.floor(Math.random() * 800)),
              y: -500 + Math.floor(Math.random() * 800),
              opacity: 0,
            }
          : {}
      }
      transition={{
        repeat: Infinity,
        duration: Math.ceil(Math.random() * 3) + 1,
        delay: 0.1 + Math.random() * index,
      }}
    />
  )
}

export default ParticleSystem

import { motion } from 'framer-motion'

const Clouds = () => {
  return (
    <>
      <motion.img
        src='/assets/hero/cloud.png'
        alt='clouds'
        width={200}
        height={200}
        className='absolute top-24 left-80 z-10'
        initial={{
          x: '-100vw',
          opacity: 0,
        }}
        animate={{
          x: '0',
          opacity: 1,
        }}
        transition={{
          type: 'keyframes',
          ease: 'linear',
        }}
      />
      <motion.img
        src='/assets/hero/cloud.png'
        alt='clouds'
        width={250}
        height={250}
        className='absolute top-auto left-auto right-36 z-10'
        initial={{
          x: '100vw',
          opacity: 0,
        }}
        animate={{
          x: '0',
          opacity: 1,
        }}
        transition={{
          type: 'keyframes',
          ease: 'linear',
        }}
      />
      <motion.img
        src='/assets/hero/cloud.png'
        alt='clouds'
        width={150}
        height={150}
        className='absolute top-0 left-auto right-4 z-10'
        initial={{
          x: '100vw',
          opacity: 0,
        }}
        animate={{
          x: '0',
          opacity: 1,
        }}
        transition={{
          type: 'keyframes',
          ease: 'linear',
        }}
      />
      <motion.img
        src='/assets/hero/cloud.png'
        alt='clouds'
        width={100}
        height={100}
        className='absolute top-80 left-4 z-10'
        initial={{
          x: '-100vw',
          opacity: 0,
        }}
        animate={{
          x: '0',
          opacity: 1,
        }}
        transition={{
          type: 'keyframes',
          ease: 'linear',
        }}
      />
      <motion.img
        src='/assets/hero/cloud.png'
        alt='clouds'
        width={200}
        height={200}
        className='absolute top-5 left-1/2 z-10'
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'keyframes',
          ease: 'linear',
        }}
      />
    </>
  )
}

export default Clouds

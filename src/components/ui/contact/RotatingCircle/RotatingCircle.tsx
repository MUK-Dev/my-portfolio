import { useAnimate, useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'

const RotatingCircle = () => {
  const [scope, animate] = useAnimate()
  const rotation = useMotionValue(45)
  const firstRender = useRef(true)

  const animationSequence = async () => {
    const r = rotation.get()
    await animate(scope.current, { rotateZ: r })
    await animate(scope.current, { scale: 1.1 })
    await animate(scope.current, { scale: 1 })
    rotation.set(r + 45)
    setTimeout(animationSequence, 100)
  }

  useEffect(() => {
    if (firstRender.current) animationSequence()
    else firstRender.current = false
  }, [])

  return (
    <div ref={scope} className='absolute top-44 w-96 h-96 rounded-full'>
      <div className='relative w-full h-full'>
        {/* Top */}
        <div className='w-[2px] h-10 bg-red-500 absolute -top-12 left-1/2 -translate-x-1/2' />
        {/* Right */}
        <div className='w-[2px] h-10 bg-amber-500 absolute top-1/2 -right-8 -translate-y-1/2 rotate-90' />
        {/* Left */}
        <div className='w-[2px] h-10 bg-yellow-500 absolute top-1/2 -left-8 -translate-y-1/2 rotate-90' />
        {/* Top */}
        <div className='w-[2px] h-10 bg-lime-500 absolute -bottom-12 left-1/2 -translate-x-1/2' />
      </div>
      <div className='relative -translate-y-96 w-full h-full rotate-45'>
        {/* Top Right */}
        <div className='w-[2px] h-10 bg-emerald-500 absolute -top-12 left-1/2 -translate-x-1/2' />
        {/* Bottom Right */}
        <div className='w-[2px] h-10 bg-sky-500 absolute top-1/2 -right-8 -translate-y-1/2 rotate-90' />
        {/* Bottom Left */}
        <div className='w-[2px] h-10 bg-violet-500 absolute top-1/2 -left-8 -translate-y-1/2 rotate-90' />
        {/* Top Left */}
        <div className='w-[2px] h-10 bg-pink-500 absolute -bottom-12 left-1/2 -translate-x-1/2' />
      </div>
    </div>
  )
}

export default RotatingCircle

/* eslint-disable @next/next/no-img-element */
import useThemeMode from '@/src/hooks/useThemeMode'
import { FC, useEffect, useState } from 'react'

interface AnimatedImageProps {
  images: string[]
  position: {
    top?: string | number
    left?: string | number
    right?: string | number
    bottom?: string | number
  }
  duration?: number
  width: number | `${number}` | undefined
  height: number | `${number}` | undefined
  customClasses?: string
  rotation?: string
  invert?: boolean
}

const AnimatedImage: FC<AnimatedImageProps> = ({
  images,
  position,
  duration = 200,
  height,
  width,
  customClasses,
  rotation,
  invert = false,
}) => {
  const { isDark } = useThemeMode()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(currentImageIndex)
      const newIndex = (currentImageIndex + 1) % images.length
      setCurrentImageIndex(newIndex)
    }, duration)

    return () => {
      clearInterval(interval)
    }
  }, [currentImageIndex, duration, images.length])

  return (
    <img
      src={images[currentImageIndex]}
      alt={images[currentImageIndex]}
      style={{ ...position, transform: rotation }}
      width={width}
      height={height}
      className={`${customClasses} absolute ${invert ? 'scale-x-[-1]' : ''} ${
        isDark ? 'invert transition-all' : ''
      }`}
    />
  )
}

export default AnimatedImage

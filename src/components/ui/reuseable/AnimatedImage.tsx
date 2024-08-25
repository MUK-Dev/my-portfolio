/* eslint-disable @next/next/no-img-element */
import useThemeMode from '@/src/hooks/useThemeMode'
import { FC, useEffect, useState } from 'react'

interface AnimatedImageProps {
  images: string[]
  position?: {
    top?: string | number
    left?: string | number
    right?: string | number
    bottom?: string | number
  }
  duration?: number
  width: number | `${number}` | undefined
  height: number | `${number}` | undefined
  className?: string | undefined
  rotation?: string
  invert?: boolean
}

const AnimatedImage: FC<AnimatedImageProps> = ({
  images,
  position,
  duration = 200,
  height,
  width,
  className,
  rotation,
  invert = false,
}) => {
  const { isDark } = useThemeMode()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentImageIndex + 1) % images.length
      setCurrentImageIndex(newIndex)
    }, duration)

    return () => {
      clearInterval(interval)
    }
  }, [currentImageIndex, duration, images.length])

  return images.map((image, index) => (
    <img
      key={image}
      src={image}
      alt={image}
      style={{
        ...position,
        transform: rotation,
        display: index === currentImageIndex ? 'block' : 'none',
      }}
      width={width}
      height={height}
      className={`${className} absolute ${invert ? 'scale-x-[-1]' : ''} ${
        isDark ? 'invert transition-all' : ''
      }`}
    />
  ))
}

export default AnimatedImage

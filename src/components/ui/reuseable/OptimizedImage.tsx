import { useState } from 'react'
import { Blurhash } from 'react-blurhash'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface IOptimizedImageProps {
  image: { src: string; blurhash: string }
}

function OptimizedImage(props: IOptimizedImageProps) {
  const { image } = props

  const [isLoaded, setLoaded] = useState(false)
  const [isLoadStarted, setLoadStarted] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  const handleLoadStarted = () => {
    setLoadStarted(true)
  }

  return (
    <div className='relative'>
      <LazyLoadImage
        key={image.blurhash}
        src={image.src}
        height='100%'
        width='100%'
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
      />
      {!isLoaded && isLoadStarted && (
        <Blurhash
          hash={image.blurhash}
          width='100%'
          height='100%'
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className='absolute top-0 left-0 z-20'
        />
      )}
    </div>
  )
}

export default OptimizedImage

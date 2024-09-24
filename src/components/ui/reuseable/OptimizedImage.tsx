import { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IOptimizedImageProps {
  image: { src: string; blurhash: string };
}

function OptimizedImage(props: IOptimizedImageProps) {
  const { image } = props;

  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    setLoadStarted(true);
  };

  return (
    <div className='relative hidden 2xl:block'>
      <LazyLoadImage
        key={image.blurhash}
        src={image.src}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
        className='absolute top-0 left-0 z-0'
      />
      {!isLoaded && isLoadStarted && (
        <Blurhash
          hash={image.blurhash}
          width='1920px'
          height='1080px'
          resolutionX={64}
          resolutionY={64}
          punch={1}
          className='absolute top-0 left-0 z-20'
        />
      )}
    </div>
  );
}

export default OptimizedImage;

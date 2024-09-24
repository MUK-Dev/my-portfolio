import { useState } from 'react';
import { TiArrowRightOutline, TiArrowLeftOutline } from 'react-icons/ti';
import { AnimatePresence, motion } from 'framer-motion';
import { encode } from 'blurhash';
import OptimizedImage from '../../ui/reuseable/OptimizedImage';
import getProjectsData from '@/src/services/getProjectsData';

interface SlideProps {
  type: 'GAME' | 'WEB';
  img: string;
  title: string;
  description: string;
  learned: string;
  skills: string[];
  blurHash: string;
  link?: string;
}

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [filters, setFilters] = useState<string[]>([]);

  const data = getProjectsData<SlideProps[]>();

  const filteredData = data.filter((d) => {
    if (filters.length <= 0) return true;
    if (filters.includes(d.type)) return true;
  });

  const handleNext = () => {
    let newIndex = index + 1;
    if (newIndex >= filteredData.length) newIndex = 0;
    setIndex(newIndex);
  };

  const handlePrevious = () => {
    let newIndex = index - 1;
    if (newIndex < 0) newIndex = filteredData.length - 1;
    setIndex(newIndex);
  };

  const makeSlide = (data: SlideProps) => {
    return (
      <motion.div
        key={data.img}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='flex-grow-1 min-w-0 relative h-full w-full max-h-[80vh] 2xl:max-h-[none] overflow-auto 2xl:overflow-hidden rounded-xl'
      >
        <OptimizedImage image={{ src: data.img, blurhash: data.blurHash }} />
        <div className='flex flex-col justify-center items-start z-50 gap-3 px-4 pb-4 2xl:pb-0 2xl:h-full 2xl:px-10 text-black dark:text-white 2xl:w-1/3 absolute top-0 left-0 bg-gradient-to-b from-[#FFEDD5ca] dark:from-[#0f172aca] to-[#d7f1f7ca] dark:to-[#0f262aca] rounded-xl 2xl:rounded-none'>
          <h4 className='px-4 py-2 bg-amber-100 dark:bg-slate-700 text-center rounded-full'>
            {data.type}
          </h4>
          <h3 className='text-2xl font-bold'>{data.title}</h3>
          <p className='text-xl'>{data.description}</p>
          <p className='text-xl'>{data.learned}</p>
          <div className='flex gap-2 flex-wrap'>
            {data.skills.map((s, i) => (
              <p
                key={i}
                className='px-4 py-2 bg-amber-100 dark:bg-slate-700 text-center rounded-full'
              >
                {s}
              </p>
            ))}
          </div>
          {data.link && (
            <>
              <a
                className='w-28 h-10 mt-4 flex items-center z-50 justify-center bg-amber-300 dark:bg-slate-500 text-black rounded-xl relative transition-transform hover:-translate-y-1'
                href={data.link}
                target='_blank'
              >
                Visit
              </a>
              <div className='w-28 h-10 -translate-y-11 rounded-xl z-40 bg-amber-400 dark:bg-slate-600' />
            </>
          )}
        </div>
      </motion.div>
    );
  };

  const addFilter = (type: 'GAME' | 'WEB') => {
    if (filters.includes(type)) {
      setFilters((prev) => prev.filter((d) => d !== type));
      setIndex(0);
    } else {
      const newArray = [...filters];
      newArray.push(type);
      setFilters(newArray);
      setIndex(0);
    }
  };

  return (
    <section
      id='projects'
      className='bg-gradient-to-b px-3 from-orange-100 to-white dark:from-slate-900 dark:to-slate-950 pb-16 transition-colors flex flex-col items-center'
    >
      <h2 className='text-5xl pb-7 dark:text-slate-50 z-50'>
        Projects: {filteredData.length}
      </h2>
      {/* <h3 className='hidden 2xl:block font-fasthand text-4xl pb-2 dark:text-slate-50 z-50'>
        Filters
      </h3>
      <div className='hidden 2xl:flex  gap-3 pb-2'>
        <button
          className={`px-4 py-2 border border-amber-300 dark:border-slate-700 ${
            filters.includes('WEB') ? 'bg-amber-300 dark:bg-slate-700' : ''
          } text-center dark:text-white rounded-full`}
          onClick={() => addFilter('WEB')}
        >
          WEB
        </button>
        <button
          className={`px-4 py-2 border border-amber-300 dark:border-slate-700 ${
            filters.includes('GAME') ? 'bg-amber-300 dark:bg-slate-700' : ''
          } text-center dark:text-white rounded-full`}
          onClick={() => addFilter('GAME')}
        >
          GAME
        </button>
      </div> */}
      <div className='flex items-center w-full h-[85vh] gap-3'>
        <button className='w-5 h-5 2xl:w-10 2xl:h-10' onClick={handlePrevious}>
          <TiArrowLeftOutline className='w-5 h-5 2xl:w-10 2xl:h-10 dark:text-white' />
        </button>
        <AnimatePresence mode='popLayout'>
          {makeSlide(filteredData[index])}
        </AnimatePresence>
        <button className='w-5 h-5 2xl:w-10 2xl:h-10' onClick={handleNext}>
          <TiArrowRightOutline className='w-5 h-5 2xl:w-10 2xl:h-10 dark:text-white' />
        </button>
      </div>
    </section>
  );
};

export default Projects;

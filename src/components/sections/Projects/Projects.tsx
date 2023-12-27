import { TiArrowRightOutline, TiArrowLeftOutline } from 'react-icons/ti'

const Projects = () => {
  return (
    <section
      id='projects'
      className='bg-gradient-to-b from-orange-100 to-white dark:from-slate-900 dark:to-slate-950 h-screen transition-colors flex flex-col items-center'
    >
      <h2 className='font-fasthand text-7xl pb-5 dark:text-slate-50 z-50'>
        Projects
      </h2>
      <div className='flex items-center gap-10'>
        <button className='w-10 h-10'>
          <TiArrowLeftOutline className='w-10 h-10' />
        </button>
        <img
          src='/assets/projects/HOME OWNER.png'
          alt='home'
          className='flex-1 min-w-0'
        />
        <button className='w-10 h-10'>
          <TiArrowRightOutline className='w-10 h-10' />
        </button>
      </div>
    </section>
  )
}

export default Projects

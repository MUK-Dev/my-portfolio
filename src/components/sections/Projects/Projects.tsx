import { useState } from 'react'
import { TiArrowRightOutline, TiArrowLeftOutline } from 'react-icons/ti'
import { AnimatePresence, motion } from 'framer-motion'

interface SlideProps {
  img: string
  title: string
  description: string
  learned: string
  skills: string[]
  link?: string
}

const data: SlideProps[] = [
  {
    img: '/assets/projects/HOME OWNER.png',
    title: 'HOME OWNER',
    description:
      'My first published mobile game. This is a casual mobile game good for passing time. You defend your home from endless waves of animals.',
    learned:
      'I learned Unity animator for 2D, basic logic for gameplay loop, UI, implementing Ads, delivering a finished product.',
    skills: ['Unity', 'Adobe Photoshop', 'Unity Ads'],
    link: 'https://play.google.com/store/apps/details?id=com.MysticCraftz.HomeOwnerClickerDefence&hl=en_US',
  },
  {
    img: '/assets/projects/Kitchen Chaos.png',
    title: 'Kitchen Chaos',
    description:
      'This was my first game made with Unity. It is a cooking game where you prepare and deliver recipies. Made by following the Unity Course from Code Monkey on Youtube.',
    learned:
      'I learned Unity layout, C#, OOP concepts, UI, raycasts, animator, Singletons, State Machines, and C# events',
    skills: ['Unity'],
  },
  {
    img: '/assets/projects/Survival Game.png',
    title: 'Survival Game',
    description:
      'I made this game as the capstone project for my Unity Game Development bootcamp at Game Train. I made many system all by myself with as little help as I could from youtube videos by lots of trial and error.',
    learned:
      'I learned different types of raycasts(box, capsule, circle etc), Unity New Input System,NavMesh, AI, Character rigs, Animator for 3D characters, Animation Layers, Inventory System, Detecting objects near player, Drag and drop UI, AI state machines, Using pre made assets',
    skills: ['Unity', 'Blender'],
    link: 'https://play.unity.com/mg/other/survival-game-build-webgl',
  },
]

const Projects = () => {
  const [index, setIndex] = useState(0)

  const makeSlide = (data: SlideProps) => {
    return (
      <motion.div
        key={data.img}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='flex-1 min-w-0 relative max-h-[85vh] overflow-hidden rounded-xl'
      >
        <img src={data.img} alt={data.img} className='w-full' />
        <div className='flex flex-col justify-center items-start gap-3 px-10 text-black dark:text-white h-full w-1/3 absolute top-0 left-0 bg-gradient-to-b from-[#FFEDD5ca] dark:from-[#0f172aca] to-[#d7f1f7ca] dark:to-[#0f262aca]'>
          <h3 className='font-fasthand text-5xl'>{data.title}</h3>
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
    )
  }

  const handleNext = () => {
    let newIndex = index + 1
    if (newIndex >= data.length) newIndex = 0
    setIndex(newIndex)
  }

  const handlePrevious = () => {
    let newIndex = index - 1
    if (newIndex < 0) newIndex = data.length - 1
    setIndex(newIndex)
  }

  return (
    <section
      id='projects'
      className='bg-gradient-to-b px-3 from-orange-100 to-white dark:from-slate-900 dark:to-slate-950 min-h-screen pb-5 transition-colors flex flex-col items-center'
    >
      <h2 className='font-fasthand text-7xl pb-10 dark:text-slate-50 z-50'>
        Projects
      </h2>
      <div className='flex items-center gap-10'>
        <button className='w-10 h-10' onClick={handlePrevious}>
          <TiArrowLeftOutline className='w-10 h-10 dark:text-white' />
        </button>
        <AnimatePresence mode='wait'>{makeSlide(data[index])}</AnimatePresence>
        <button className='w-10 h-10' onClick={handleNext}>
          <TiArrowRightOutline className='w-10 h-10 dark:text-white' />
        </button>
      </div>
    </section>
  )
}

export default Projects

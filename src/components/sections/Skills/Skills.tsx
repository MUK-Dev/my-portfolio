// import { useRef } from 'react'
import { SkillsGrid, Waves } from '../../ui/skills'
// import { useInView } from 'framer-motion'

const Skills = () => {
  // const section = useRef<any>()
  // const isSectionInView = useInView(section, {
  //   margin: '0px 100px -50px 0px',
  // })

  return (
    <section
      // ref={section}
      id='skills'
      className='relative min-h-[90vh] dark:bg-slate-950 transition-colors flex justify-start items-center flex-col overflow-hidden'
    >
      <h2 className='font-fasthand text-7xl dark:text-slate-50 z-50'>Skills</h2>
      <Waves />
      <SkillsGrid />
      {/* <ParticleSystem isInView={isSectionInView} /> */}
      {/* <ParticleSystem isInView={isSectionInView} invert /> */}
    </section>
  )
}

export default Skills

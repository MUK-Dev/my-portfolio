import { useRef } from 'react'
import { ParticleSystem, Waves } from '../../ui/skills'
import { useInView } from 'framer-motion'

const Skills = () => {
  const section = useRef<any>()
  const isSectionInView = useInView(section, {
    margin: '0px 100px -50px 0px',
  })
  return (
    <section
      ref={section}
      className='relative min-h-screen dark:bg-slate-950 transition-colors flex justify-center pt-80 overflow-hidden'
    >
      <h2 className='font-fasthand text-7xl dark:text-slate-50 z-50'>Skills</h2>
      <Waves />
      <ParticleSystem isInView={isSectionInView} />
      <ParticleSystem isInView={isSectionInView} invert />
    </section>
  )
}

export default Skills

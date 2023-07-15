import Image from 'next/image'
import { Waves } from '../../ui/skills'

const Skills = () => {
  return (
    <section className='relative min-h-screen dark:bg-slate-950 transition-colors flex justify-center pt-80'>
      <h2 className='font-fasthand text-7xl dark:text-slate-50 z-50'>Skills</h2>
      <Waves />
    </section>
  )
}

export default Skills

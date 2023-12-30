import { SkillsGrid, Waves } from '../../ui/skills'

const Skills = () => {
  return (
    <section
      id='skills'
      className='relative pb-5 md:pb-0 md:min-h-[90vh] dark:bg-slate-950 transition-colors flex justify-start items-center flex-col overflow-hidden'
    >
      <h2 className='font-fasthand text-7xl dark:text-slate-50 z-50'>Skills</h2>
      <Waves />
      <SkillsGrid />
    </section>
  )
}

export default Skills

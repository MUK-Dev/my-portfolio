import { Waves } from '../../ui/skills'

const data = [
  '/assets/skills/csharp.png',
  '/assets/skills/firebase.png',
  '/assets/skills/framer-motion.png',
  '/assets/skills/git.png',
  '/assets/skills/github.png',
  '/assets/skills/JS.png',
  '/assets/skills/mongodb.png',
  '/assets/skills/mui.png',
  '/assets/skills/nestjs.png',
  '/assets/skills/nextjs.png',
  '/assets/skills/nodejs.png',
  '/assets/skills/npm.png',
  '/assets/skills/react.png',
  '/assets/skills/react-query.png',
  '/assets/skills/sass.png',
  '/assets/skills/swagger.png',
  '/assets/skills/tailwindcss.png',
  '/assets/skills/TS.png',
  '/assets/skills/unity.png',
]

const Skills = () => {
  return (
    <section className='relative min-h-screen dark:bg-slate-950 transition-colors flex justify-center pt-80 overflow-hidden'>
      <h2 className='font-fasthand text-7xl dark:text-slate-50 z-50'>Skills</h2>
      <Waves />
    </section>
  )
}

export default Skills

import useThemeMode from '@/src/hooks/useThemeMode'

const skillsData = [
  '/assets/skills/csharp.png',
  '/assets/skills/cpp.png',
  '/assets/skills/unity.png',
  '/assets/skills/JS.png',
  '/assets/skills/TS.png',
  '/assets/skills/mongodb.png',
  '/assets/skills/blender.png',
  '/assets/skills/nodejs.png',
  '/assets/skills/react.png',
  //   '/assets/skills/git.png',
  //   '/assets/skills/firebase.png',
  //   '/assets/skills/framer-motion.png',
  //   '/assets/skills/github.png',
  //   '/assets/skills/mui.png',
  //   '/assets/skills/nestjs.png',
  //   '/assets/skills/nextjs.png',
  //   '/assets/skills/npm.png',
  //   '/assets/skills/react-query.png',
  //   '/assets/skills/sass.png',
  //   '/assets/skills/swagger.png',
  //   '/assets/skills/tailwindcss.png',
]

const SkillsGrid = () => {
  const { isDark } = useThemeMode()
  //   const makeGrid = (): string[][] => {
  //     const result: string[][] = []
  //     let lowerLimit = 0
  //     let upperLimit = 1
  //     let numberToAdd = 2

  //     while (numberToAdd < skillsData.length) {
  //       console.log(`L: ${lowerLimit} U: ${upperLimit}`)

  //       result.push(skillsData.slice(lowerLimit, upperLimit))
  //       lowerLimit = upperLimit
  //       upperLimit += numberToAdd
  //       numberToAdd++
  //     }

  //     return result
  //   }

  const imageClasses = `h-20 ${isDark ? 'invert' : 'invert-0'}`

  return (
    <div className='z-30 pt-5'>
      <div className='flex justify-center gap-20 py-2'>
        <img src={skillsData[0]} alt={skillsData[0]} className={imageClasses} />
      </div>
      <div className='flex justify-center gap-20 py-2'>
        <img src={skillsData[1]} alt={skillsData[1]} className={imageClasses} />
        <img src={skillsData[2]} alt={skillsData[2]} className={imageClasses} />
      </div>
      <div className='flex justify-center gap-20 py-2'>
        <img src={skillsData[3]} alt={skillsData[3]} className={imageClasses} />
        <img src={skillsData[4]} alt={skillsData[4]} className={imageClasses} />
        <img src={skillsData[5]} alt={skillsData[5]} className={imageClasses} />
      </div>
      <div className='flex justify-center gap-20 py-2'>
        <img src={skillsData[6]} alt={skillsData[6]} className={imageClasses} />
        <img src={skillsData[7]} alt={skillsData[7]} className={imageClasses} />
      </div>
      <div className='flex justify-center gap-20 py-2'>
        <img src={skillsData[8]} alt={skillsData[0]} className={imageClasses} />
      </div>
    </div>
  )
}

export default SkillsGrid

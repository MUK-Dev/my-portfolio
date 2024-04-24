import AnimatedImage from '../../ui/reuseable/AnimatedImage'
import { SkillsGrid, Waves } from '../../ui/skills'

const Skills = () => {
  return (
    <section
      id='skills'
      className='relative pb-5 min-h-screen md:pb-0 md:min-h-[90vh] dark:bg-slate-950 transition-colors flex justify-start items-center flex-col overflow-hidden'
    >
      <h2 className='font-fasthand text-7xl dark:text-slate-50 z-50'>Skills</h2>
      <SkillsGrid />
      <AnimatedImage
        images={[
          '/assets/animatedImages/leapord/Leapord1.png',
          '/assets/animatedImages/leapord/Leapord2.png',
        ]}
        width={100}
        height={100}
        position={{
          bottom: '25rem',
          right: '30rem',
        }}
        rotation='rotate(45deg)'
      />
      <AnimatedImage
        images={[
          '/assets/animatedImages/fox/Fox1.png',
          '/assets/animatedImages/fox/Fox2.png',
        ]}
        width={100}
        height={100}
        position={{
          top: '7rem',
          left: '30rem',
        }}
        rotation='rotate(-45deg)'
      />
      <AnimatedImage
        images={[
          '/assets/animatedImages/beetle/Sprite-0002.png',
          '/assets/animatedImages/beetle/Sprite-0003.png',
          '/assets/animatedImages/beetle/Sprite-0004.png',
          '/assets/animatedImages/beetle/Sprite-0005.png',
          '/assets/animatedImages/beetle/Sprite-0006.png',
          '/assets/animatedImages/beetle/Sprite-0007.png',
          '/assets/animatedImages/beetle/Sprite-0008.png',
          '/assets/animatedImages/beetle/Sprite-0009.png',
          '/assets/animatedImages/beetle/Sprite-0010.png',
        ]}
        width={100}
        height={100}
        position={{
          bottom: '3rem',
          left: '39%',
        }}
        customClasses='z-[200]'
      />
      <Waves />
    </section>
  )
}

export default Skills

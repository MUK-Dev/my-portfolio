import AnimatedImage from '../../ui/reuseable/AnimatedImage';
import { SkillsGrid, Waves } from '../../ui/skills';

const Skills = () => {
  return (
    <section
      id='skills'
      className='relative pb-5 min-h-screen md:pb-0 md:min-h-[90vh] dark:bg-slate-950 transition-colors flex justify-start items-center flex-col overflow-hidden'
    >
      <h2 className='text-5xl dark:text-slate-50 z-50'>Skills</h2>
      <SkillsGrid />
      {/* Leapord animation */}
      <AnimatedImage
        images={[
          '/assets/animatedImages/leapord/Leapord1.png',
          '/assets/animatedImages/leapord/Leapord2.png',
        ]}
        width={100}
        height={100}
        rotation='rotate(35deg)'
        className='right-8 top-16 md:w-[100px] w-16'
      />
      {/* Fox animation */}
      <AnimatedImage
        images={[
          '/assets/animatedImages/fox/Fox1.png',
          '/assets/animatedImages/fox/Fox2.png',
        ]}
        width={100}
        height={100}
        rotation='rotate(-45deg)'
        className='left-7 top-10 md:w-[100px] w-16'
      />
      {/* Beetle animation */}
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
        className='z-[200] '
      />
      <Waves />
    </section>
  );
};

export default Skills;

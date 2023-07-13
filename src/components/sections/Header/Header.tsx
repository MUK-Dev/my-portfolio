import { MdPersonOutline } from 'react-icons/md'
import { FiGithub, FiYoutube } from 'react-icons/fi'
import { BiLogoUpwork, BiLogoLinkedin } from 'react-icons/bi'
import { NavBtn, ThemeSwitch } from '../../ui/header'
import Link from 'next/link'
import useThemeMode from '@/src/hooks/useThemeMode'

const GITHUB_LINK = 'https://github.com/MUK-Dev'
const UPWORK_LINK = 'https://www.upwork.com/freelancers/~015dfb967e68c8adec'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/muk-dev/'
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCWdnFCZ3L5di3EMFksP8Y_g'

const Header = () => {
  const { isDark, toggleTheme } = useThemeMode()

  return (
    <nav className='-z-40 dark:bg-slate-950 transition-colors'>
      <div className='flex px-40 h-[10vh] items-center'>
        <div className='flex-1 flex items-center gap-4'>
          <div className='p-2 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl'>
            <MdPersonOutline style={{ fontSize: '25px' }} />
          </div>
          <h1 className='font-semibold dark:text-white  z-30'>Portfolio</h1>
        </div>
        <div className='flex justify-center border border-gray-800 rounded-xl transition-colors z-30'>
          <NavBtn>Intro</NavBtn>
          <NavBtn>Projects</NavBtn>
          <NavBtn>Contact</NavBtn>
          <NavBtn>Conclusion</NavBtn>
        </div>
        <div className='flex-1 flex justify-end items-center gap-5 dark:text-gray-200 transition-colors z-30'>
          <ThemeSwitch isDark={isDark} onChange={toggleTheme} />
          <Link href={GITHUB_LINK} target='_blank'>
            <FiGithub style={{ fontSize: '20px' }} />
          </Link>
          <Link href={UPWORK_LINK} target='_blank'>
            <BiLogoUpwork style={{ fontSize: '25px' }} />
          </Link>
          <Link href={LINKEDIN_LINK} target='_blank'>
            <BiLogoLinkedin style={{ fontSize: '20px' }} />
          </Link>
          <Link href={YOUTUBE_LINK} target='_blank'>
            <FiYoutube style={{ fontSize: '20px' }} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header

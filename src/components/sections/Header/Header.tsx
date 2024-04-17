import { MdPersonOutline } from 'react-icons/md'
import { FiGithub, FiYoutube } from 'react-icons/fi'
import { BiLogoUpwork, BiLogoLinkedin } from 'react-icons/bi'
import { Drawer, NavBtn, ThemeSwitch } from '../../ui/header'
import Link from 'next/link'
import useThemeMode from '@/src/hooks/useThemeMode'

const GITHUB_LINK = 'https://github.com/MUK-Dev'
const UPWORK_LINK = 'https://www.upwork.com/freelancers/~015dfb967e68c8adec'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/m-usman-khilji/'
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCWdnFCZ3L5di3EMFksP8Y_g'

const Header = () => {
  const { isDark, toggleTheme } = useThemeMode()

  return (
    <nav className='-z-40 bg-[#1291cb] dark:bg-slate-950 transition-colors'>
      <div className='flex px-3 md:px-40 h-[10vh] items-center'>
        <div className='flex-1 flex items-center gap-4'>
          <div className='p-2 bg-gradient-to-br from-[#9A4993] to-[#6A1577] rounded-xl'>
            <MdPersonOutline color='white' style={{ fontSize: '25px' }} />
          </div>
          <h1 className='font-semibold dark:text-white  z-30'>Portfolio</h1>
        </div>
        <div className='hidden md:flex justify-center border border-gray-800 rounded-xl transition-colors z-30'>
          <NavBtn href='#intro'>Intro</NavBtn>
          <NavBtn href='#skills'>Skills</NavBtn>
          <NavBtn href='#projects'>Projects</NavBtn>
          <NavBtn href='#contact'>Contact</NavBtn>
          {/* <NavBtn href='#conclusion'>Conclusion</NavBtn> */}
        </div>
        <div className='flex-1 hidden md:flex justify-end items-center gap-5 dark:text-gray-200 transition-colors z-30'>
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
        <div className='md:flex-1 flex md:hidden z-50'>
          <Drawer />
        </div>
      </div>
    </nav>
  )
}

export default Header

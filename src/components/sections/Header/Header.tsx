import { MdPersonOutline } from 'react-icons/md'
import { FiGithub } from 'react-icons/fi'
import { BiLogoUpwork, BiLogoLinkedin } from 'react-icons/bi'
import { NavBtn, ThemeSwitch } from '../../ui/header'
import Link from 'next/link'
import useThemeMode from '@/src/hooks/useThemeMode'

const GITHUB_LINK = 'https://github.com/MUK-Dev'
const UPWORK_LINK = 'https://www.upwork.com/freelancers/~015dfb967e68c8adec'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/muk-dev/'

const Header = () => {
  const { isDark, toggleTheme } = useThemeMode()

  return (
    <nav className='flex px-40 h-[10vh] items-center dark:bg-slate-950 transition-colors'>
      <div className='flex-1 flex items-center gap-4'>
        <div className='p-2 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl'>
          <MdPersonOutline style={{ fontSize: '25px' }} />
        </div>
        <h1 className='font-semibold dark:text-white'>Portfolio</h1>
      </div>
      <div className='flex justify-center border border-gray-400 rounded-xl transition-colors'>
        <NavBtn>Intro</NavBtn>
        <NavBtn>Projects</NavBtn>
        <NavBtn>Contact</NavBtn>
        <NavBtn>Conclusion</NavBtn>
      </div>
      <div className='flex-1 flex justify-end items-center gap-5 dark:text-gray-200 transition-colors'>
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
      </div>
    </nav>
  )
}

export default Header

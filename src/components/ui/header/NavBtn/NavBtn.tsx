import { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  onClick?: () => void
}

const NavBtn: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='py-3 px-5 text-gray-800 hover:text-black transition-colors dark:text-gray-300 hover:dark:text-gray-400'
    >
      {children}
    </button>
  )
}

export default NavBtn

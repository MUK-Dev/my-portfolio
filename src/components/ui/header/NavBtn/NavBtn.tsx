import { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  href: string
  large?: boolean
}

const NavBtn: FC<Props> = ({ children, href, large }) => {
  if (large)
    return (
      <a
        href={href}
        className='py-3 text-lg cursor-pointer px-5 text-gray-800 hover:text-black transition-colors dark:text-gray-300 hover:dark:text-gray-400'
      >
        {children}
      </a>
    )

  return (
    <a
      href={href}
      className='py-3 cursor-pointer px-5 text-gray-800 hover:text-black transition-colors dark:text-gray-300 hover:dark:text-gray-400'
    >
      {children}
    </a>
  )
}

export default NavBtn

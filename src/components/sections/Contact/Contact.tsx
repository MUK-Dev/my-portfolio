import React from 'react'
import { MdMailOutline } from 'react-icons/md'
import { RotatingCircle } from '../../ui/contact'
import { FiGithub, FiYoutube } from 'react-icons/fi'
import { BiLogoUpwork, BiLogoLinkedin } from 'react-icons/bi'

const Contact = () => {
  return (
    <section
      id='contact'
      className='p-5 min-h-screen max-h-screen md:min-h-[80vh] bg-white dark:bg-slate-950 overflow-hidden w-full relative'
    >
      <h2 className='font-fasthand text-center text-7xl pb-[10rem] dark:text-slate-50 z-50'>
        Contact
      </h2>
      <div className='flex items-start justify-center text-black dark:text-white'>
        <div className='flex flex-col z-30 gap-6 underline cursor-pointer'>
          <a
            href='mailTo:zafarusman935@gmail.com'
            className='flex gap-3 items-center'
            target='_blank'
          >
            <MdMailOutline style={{ fontSize: '20px' }} />
            <p>Zafarusman935@gmail.com</p>
          </a>
          <a
            href='https://github.com/MUK-Dev'
            className='flex gap-3 items-center'
            target='_blank'
          >
            <FiGithub style={{ fontSize: '20px' }} />
            <p>Github</p>
          </a>
          <a
            href='https://www.upwork.com/freelancers/~015dfb967e68c8adec'
            className='flex gap-3 items-center'
            target='_blank'
          >
            <BiLogoUpwork style={{ fontSize: '25px' }} />
            <p>Upwork</p>
          </a>
          <a
            href='https://www.linkedin.com/in/muk-dev/'
            className='flex gap-3 items-center'
            target='_blank'
          >
            <BiLogoLinkedin style={{ fontSize: '20px' }} />
            <p>LinkedIn</p>
          </a>
          <a
            href='https://www.youtube.com/channel/UCWdnFCZ3L5di3EMFksP8Y_g'
            className='flex gap-3 items-center'
            target='_blank'
          >
            <FiYoutube style={{ fontSize: '20px' }} />
            <p>Youtube</p>
          </a>
        </div>
        <RotatingCircle />
      </div>
    </section>
  )
}

export default Contact

/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, FC } from 'react'
import s from './ThemeSwitch.module.css'

interface Props {
  isDark: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ThemeSwitch: FC<Props> = ({ isDark, onChange }) => {
  return (
    <label className={s.switch}>
      <input type='checkbox' checked={isDark} onChange={onChange} />
      <span className={s.slider}>
        <div className={s.thumb}>
          <img className={s.sun} src='/assets/header/sun.png' alt='sun' />
          <img className={s.moon} src='/assets/header/moon.png' alt='moon' />
        </div>
        <div className={s.imagesContainer}>
          <img className={s.night} src='/assets/header/night.png' alt='night' />
          <img className={s.day} src='/assets/header/day.png' alt='day' />
        </div>
      </span>
    </label>
  )
}

export default ThemeSwitch

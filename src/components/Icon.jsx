import React from 'react'
import './icon.css'
import style from './icon.module.css'

export function IconA() {
  return (
    <div className='blue'>
      ICON A
    </div>
  )
}

export function IconB() {
  return (
    <div className={style.red}>
      ICON B
    </div>
  )
}

import React from 'react'

import style from './style.css'

export const Overlay = ({ children, onClick }) => (
  <div className={style.overlay} onClick={onClick}> 
    {children}
  </div>
)

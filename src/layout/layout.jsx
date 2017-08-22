import React from 'react'

import style from './style.css'

export const Layout = ({ children }) => (
  <div>
    <div className={'container-fluid'}>
      <div className={style.content}>
        {children}
      </div>
    </div>
  </div>
)

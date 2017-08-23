import React from 'react'

import style from './style.css'

import { Header } from './header'

export const Layout = ({ children }) => (
  <div className={style.content}>
    <Header />
    <div className={style.content}>
        <div className={style.contentInside}>
            <div className={'container-fluid'}>
                {children}
            </div>
        </div>
    </div>
  </div>
)

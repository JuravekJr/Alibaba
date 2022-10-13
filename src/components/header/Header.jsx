import React from 'react'
import s from './Header.module.css'
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  if (
    location.pathname === '/approuter/signin' ||
    location.pathname === '/cartrouter/signin' ||
    location.pathname === '/approuter/admin'
  ) {
    return <></>
  } else {
    return <div className={s.header}></div>
  }
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import s from './ScrollNav.module.css'

function ScrollNav({show}) {
  return (
    <div className={`${s.scroll_nav} ${show && s.active}`}>
        <Link to='/'></Link>
        <div className={s.form}>
            <input type="text" placeholder='What are you looking for...'/>
            <button>
                <AiOutlineSearch/>
                <span>Search</span>
            </button>
        </div>
    </div>
  )
}

export default ScrollNav
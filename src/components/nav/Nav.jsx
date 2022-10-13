import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import Category from '../category/Category'
import s from './Nav.module.css'

function Nav() {
    const [show, setShow] = useState(false)
  return (
    <div className={s.nav}>
        <ul className={s.list}>
            <li 
            className={s.item}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            >
                <AiOutlineBars/>
                <span>Categories</span>
                <BsChevronDown/>
                {
                    show && <Category/>
                }
            </li>
            <li className={s.item}>
                Ready to Ship
            </li>
            <li className={s.item}>
                Personal Protective E...
            </li>
            <li className={s.item}>
                Trade Shows 
            </li>
            <li className={s.item}>
                <span>Buyer Central</span> <BsChevronDown/>
            </li>
            <li className={s.item}>
                <span>Sell on Alibaba</span> <BsChevronDown/>
            </li>
            <li className={s.item}>
                <span>Help</span> <BsChevronDown/>
            </li>
        </ul>
        <ul className={s.main}>
            <li className={s.main_li}>
                English - USD<BsChevronDown/>
            </li>
            <li className={s.main_li}>
                Ship to: <img src='https://c4.wallpaperflare.com/wallpaper/136/687/807/flag-uzbekistan-flag-of-uzbekistan-uzbekistan-large-flag-uzbek-hd-wallpaper-preview.jpg' /> <BsChevronDown/>
            </li>
        </ul>
    </div>
  )
}

export default Nav
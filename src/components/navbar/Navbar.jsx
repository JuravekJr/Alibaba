import React, { useState } from 'react'
import s from './Navbar.module.css'
import { IoCameraOutline, IoChatboxEllipsesOutline, IoCartOutline, IoPersonOutline } from 'react-icons/io5'
import { AiOutlineCrown, AiOutlineSearch } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { NAV_BOXES } from '../../static/static'
import NavBox from '../nav-box/NavBox'
import { useStateValue } from '../../context/stateProvider/StateProvider'

function Navbar() {
    const [state, dispatch] = useStateValue()
    const [navId, setNavId] = useState(-1)
    const location = useLocation()

    React.useEffect(() => {
        if (
            location.pathname.includes('/approuter') ||
            location.pathname.includes('/cartrouter')
        ) {
            setNavId(-1)
        }
    })

  if ( 
    location.pathname.includes('/approuter') ||
    location.pathname.includes('/cartrouter')
    ) {
        return <></>
    }

  return (
    <div className={s.navbar}>
        <div className={s.nav_p}>
        <Link to='/' className={s.logo}></Link>
        <div className={s.form}>
            <select name="" id="">
                <option value="">Products</option>
                <option value="">Suppliers</option>
            </select>
            <input type="text" placeholder='What are you looking for...'/>
            <IoCameraOutline/>
        </div>
        <button className={s.btn_search}>
                <AiOutlineSearch/>
                Search
        </button>
        </div>
        <Link
        to={state.user === null ? '/approuter/signin' : '/approuter/admin'}
        className={s.signin}
        onMouseEnter={() => setNavId(3)}
        onMouseLeave={() => setNavId(-1)}
        >
            <IoPersonOutline/>
            <div className={s.signin_text}>
                <Link 
                to={state.user === null ? '/approuter/signin' : '/approuter/admin'}
                onClick={() => setNavId(-1)}
                >{state.user === null ? 'Sign In' : 'Admin'}</Link>
                <span>{state.user === null ? 'Join Free' : 'Panel'}</span>
            </div>
            { navId === 3 && <NavBox show={navId}/> }
        </Link>
        {
            NAV_BOXES?.map(({id, title})=> <div 
            className={s.nav_box} 
            key={id}
            onMouseEnter={() => setNavId(id)}
            onMouseLeave={() => setNavId(-1)}
            >
                {
                    id === 0 ? <IoChatboxEllipsesOutline/> :
                    id === 1 ? <AiOutlineCrown/> :
                    <IoCartOutline/>
                }
                {
                    id === 2 ? <Link to='/cartrouter/cart'>{ title }</Link> : <p>{ title }</p>
                }
                {
                    navId === id && <NavBox show={id}/>
                }
            </div>)
        }
    </div>
  )
}

export default Navbar
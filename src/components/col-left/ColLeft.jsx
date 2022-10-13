import React, { useState } from 'react'
import s from './ColLeft.module.css'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { BANNER_CATEGORY } from '../../static/static'
import BannerCategory from '../banner-category/BannerCategory'
import { useStateValue } from '../../context/stateProvider/StateProvider'

function ColLeft() {
    const [data, setData] = useState(null)
    const [state, dispatch] = useStateValue()

  return ( <>
    <div className={s.col_left}>
        <div className={s.title}>
            <h3>my markets</h3>
        </div>
        <ul className={s.collection}>
            {
                BANNER_CATEGORY?.map(item=> 
                    <li 
                    key={item.id}
                    className={`${s.item} ${state.sort && data.id === item.id ? s.active : ''}`}
                    onMouseEnter={() => {
                        setData(item)
                        dispatch({type: 'SET_SORT', payload: true})
                    }}
                    onMouseLeave={() => {
                        dispatch({type: 'SET_SORT', payload: false})
                    }}
                    >
                        <div>
                            <span className={s.img}>
                                <img src={item.image}/>
                            </span>
                            <span className={s.txt}>{item.title}</span>
                        </div>
                        <HiOutlineChevronRight/>
                    </li>
                )
            }
        </ul>
    </div>
        {
            state.sort && <BannerCategory all={data}/>
        }
    </>
  )
}

export default ColLeft
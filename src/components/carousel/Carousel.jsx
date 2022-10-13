import React, { useState, useEffect } from 'react'
import s from './Carousel.module.css'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi'
import { useStateValue } from '../../context/stateProvider/StateProvider'

function Carousel() {
  const [state, dispatch] = useStateValue()

  const images = [
    "https://s.alicdn.com/@img/imgextra/i2/O1CN01lLjvQB1qsrifzUGRs_!!6000000005552-2-tps-990-400.png",
    'https://s.alicdn.com/@img/imgextra/i3/O1CN01CcrZeI1hkmAVDkJ2Q_!!6000000004316-2-tps-990-400.png',
    'https://s.alicdn.com/@img/imgextra/i2/O1CN01YZhuhc1qIE27EzvwI_!!6000000005472-2-tps-990-400.png',
    'https://s.alicdn.com/@img/imgextra/i2/O1CN01rYC4hI1lJzSxuJUm1_!!6000000004799-2-tps-990-400.png',
    'https://s.alicdn.com/@img/imgextra/i2/O1CN01E783eT1zft0iIRWRN_!!6000000006742-2-tps-990-400.png',
    'https://s.alicdn.com/@img/imgextra/i2/O1CN01fLCgbW1qGORYr3IYo_!!6000000005468-2-tps-990-400.png',
    'https://s.alicdn.com/@img/imgextra/i1/O1CN01qBzII21SgSCr3Lmq4_!!6000000002276-0-tps-990-400.jpg'
  ]

  return (
    <div className={s.carousel}>
        <img className={s.image} src={ images[state.carousel] }/>
        <div 
        className={[s.icon_box, s.icon_box1].join(' ')}
        onClick={() => dispatch({type: 'DEC_CAROUSEL'})}
        >
            <HiOutlineChevronLeft/>
        </div>
        <div 
        className={[s.icon_box, s.icon_box2].join(' ')}
        onClick={() => dispatch({type: 'INC_CAROUSEL'})}
        >
            <HiOutlineChevronRight/>
        </div>
    </div>
  )
}

export default Carousel
import React from 'react'
import Carousel from '../carousel/Carousel'
import ColLeft from '../col-left/ColLeft'
import ColRight from '../col-right/ColRight'
import s from './Banner.module.css'
import { useStateValue } from '../../context/stateProvider/StateProvider'

function Banner() {
  const [state, dispatch] = useStateValue()
  return (
    <div className={s.banner}>
      <ColLeft />
      <Carousel />
      <ColRight />
      <div className={s.set_carousel}>
        {
          new Array(6).fill("").map((_, inx) => <span
            key={inx}
            className={state.carousel === inx ? s.active : ''}
            onMouseEnter={() => dispatch({ type: 'SET_CAROUSEL', payload: inx })}
          ></span>)
        }
      </div>
    </div>
  )
}

export default Banner
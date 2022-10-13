import React from 'react'
import s from './BannerCategory.module.css'
import { useStateValue } from '../../context/stateProvider/StateProvider'

function BannerCategory({all}) {
    const [state, dispatch] = useStateValue()
  return (
    <div 
        className={`${s.category} ${state.sort && s.active}`}
        onMouseEnter={() => dispatch({type: 'SET_SORT', payload: true})}
        onMouseLeave={() => dispatch({type: 'SET_SORT', payload: false})}
    >
        {
            all.data?.map((dl, id) =>
                <dl key={id}>
                    <dt>{dl.name}</dt>
                    {
                        dl.info?.map((txt, inx) =>
                            <dd key={inx}>{txt}</dd>
                        )
                    }
                </dl>
            )
        }
        {
            all.info?.map((stroke, index)=> 
                <div key={index} className={s.stroke}>
                    {
                        stroke?.map((txt, inx) => 
                            <span className={s.stroke_text} key={inx}>{txt}<span>/</span></span>
                        )
                    }
                </div>    
            )
        }
    </div>
  )
}

export default BannerCategory
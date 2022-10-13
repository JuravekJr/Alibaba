import React from 'react'
import s from './ColRight.module.css'
import { BANNER_INFO } from '../../static/static'

function ColRight() {
  return (
    <div className={s.col_right}>
        <button className={s.top_btn}>Selected Machinery</button>
        <div className={s.list}>
            {
                BANNER_INFO?.map(box => 
                    <div className={s.box} key={box.id}>
                        <div className={s.title}>{box.title}</div>
                        <div className={s.source_now}>Source Now</div>
                        <div className={s.image}>
                            <img src={box.image}/>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default ColRight
import React from 'react'
import s from './Box.module.css'
import { BOXES } from '../../static/static'

function Box() {
  return (
    <div className={s.main}>
        {
            BOXES?.map(box=> 
                <div className={s.box} key={box.id}>
                    <div className={s.header}>
                        <div className={s.text}>
                            <h1>{box.title}</h1>
                            <p>{box.text}</p>
                        </div>
                    </div>
                    <div className={s.box_body}>
                        {
                            box.desc?.map(card => 
                                <div className={s.card} key={card.extraId}>
                                    <h4>{card.extraTitle}</h4>
                                    <div className={s.card_main}>
                                        {
                                            card.images?.map((img, inx) => 
                                                <img src={img} key={inx} />    
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>    
            )
        }
    </div>
  )
}

export default Box
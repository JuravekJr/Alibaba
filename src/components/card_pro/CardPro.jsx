import React from 'react'
import s from './CardPro.module.css'
import { CARD_PRODUCTS } from '../../static/static'

function CardPro() {
  return (
    <div className={s.card_pro}>
        {
            CARD_PRODUCTS?.map(card => 
                <div className={s.card} key={card.id}>
                    <h3>{card.title}</h3>
                    <div className={s.main}>
                        {
                            card.desc?.map(pro => 
                                <div className={s.pro} key={pro.id}>
                                    <img src={pro.image} alt="" />
                                    <h4>{pro.price}</h4>
                                    <p>{pro.text}</p>
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

export default CardPro
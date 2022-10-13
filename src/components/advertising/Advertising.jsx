import React from 'react'
import s from './Advertising.module.css'

function Advertising({all}) {
  return (
    <div className={s.promotion}>
      <div className={s.header}>
        <h2>{all.title}</h2>
        <div className={s.stick}></div>
      </div>
      <div className={s.promo}>
        <img 
        src={all.image} alt=""
        />
        <h3 
          className={s.image_text}
        >
          {
            all.index === 1 ? 'Shopping Guide for Trending Styles'
            : all.index === 2 ? 'Selected Novelty Products'
            : 'Diversified Procurement Solution'
          }
        </h3>
        <button className={s.image_btn}>Source Now</button>
        <div className={s.main}>
          {
            all.data?.map(i=> 
              <div key={i.id} className={s.box}>
                <div className={s.text}>
                  <h4>{i.dataTitle}</h4>
                  <p>{i.desc}</p>
                </div>
                <div className={s.right}>
                  <img src={i.dataImage} alt="" />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Advertising
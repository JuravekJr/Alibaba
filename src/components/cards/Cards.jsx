import React from 'react'
import s from './Cards.module.css'
import { BsChevronRight } from 'react-icons/bs'

function Cards() {
  return (
    <div className={s.cards}>
        <div className={s.header}>
            <h3>WEEKLY DEALS</h3>
            <div className={[s.stick, s.stick1].join(' ')}></div>
            <h3>ALIBABA.COM LIVESTREAMS</h3>
            <div className={[s.stick, s.stick2].join(' ')}></div>
            <h3>SMALL COMMODITIES MARKETPLACE...</h3>
        </div>
        <div className={s.main}>
            <div className={s.card}>
                <div className={s.left}>
                    <img src="https://s.alicdn.com/@sc04/kf/H3ccc5343411645d1a5dbece93e38fe00L.jpg_220x220.jpg" alt="" />
                    <button className={s.btn}>View more <BsChevronRight/></button>
                </div>
                <div className={s.right}>
                    <img src="https://i.pinimg.com/originals/85/ef/18/85ef18fba4481c02d5487574dda7ff1a.jpg" alt="" />
                    <p>UZS&nbsp;22,389.48</p>
                    <span>
                        <del>UZS&nbsp;24,913.78</del>
                        <i>-10%</i>
                    </span>
                </div>
            </div>
            <div className={s.card}>
                <div className={s.left}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3HgUrPv68iGvuBraGZ143uRdwPP6yHnVHg&usqp=CAU" alt="" />
                    <button className={s.btn}>View more <BsChevronRight/></button>
                </div>
                <div className={s.right}>
                    <img src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg" alt="" />
                    <p>UZS&nbsp;22,389.48</p>
                </div>
            </div>
            <div className={s.card}>
                <div className={s.left}>
                    <img src="https://post.healthline.com/wp-content/uploads/2021/10/1493496-Best-Hair-Growth-Products-for-Thinning-Hair-and-Hair-Loss-732x549-Feature_02.jpg" alt="" />
                    <button className={s.btn}>View more <BsChevronRight/></button>
                </div>
                <div className={s.right}>
                    <img src="https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_softscented_product_collections_large_2x.jpg?la=en-ph" alt="" />
                    <p>UZS&nbsp;22,389.48</p>
                    <span>10 Pieces(MOQ)</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
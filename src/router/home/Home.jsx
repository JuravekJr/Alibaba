import React, { useState } from 'react'
import Nav from '../../components/nav/Nav'
import s from './Home.module.css'
import RegionFooter from '../../components/region_footer'
import Wrapper from '../../components/wrapper/Wrapper'
import Services from '../../components/services/Services'
import Banner from '../../components/banner/Banner'
import Advertising from '../../components/advertising/Advertising'
import Request from '../../components/request/Request'
import Cards from '../../components/cards/Cards'
import CardPro from '../../components/card_pro/CardPro'
import { PROMOS } from '../../static/static'
import Box from '../../components/box/Box'
import ScrollNav from '../../components/scroll-nav/ScrollNav'
import { BsChevronUp } from 'react-icons/bs'
import { GoChecklist } from 'react-icons/go'

function Home() {
  window.onscroll = function () { scrollFunction() };
  const [nav, setNav] = useState(false)
  const [box, setBox] = useState(false)

  function scrollFunction() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      setNav(true)
    } else {
      setNav(false)
    }

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      setBox(true)
    } else {
      setBox(false)
    }

  }

  document.title = 'Alibaba.com'
  return (
    <div className={s.container}>
      <input type="radio" id="top" className={s.radio} />
      <ScrollNav show={nav} />
      <Nav />
      <div className={s.top_image_box}></div>
      <div className={s.image_box}></div>
      <main>
        <Banner />
        <CardPro />
        <Box />
        {PROMOS?.map((promo, inx) => <Advertising all={promo} key={inx} />)}
        <Cards />
        <Request />
        <Wrapper />
        <Services />
        <RegionFooter />
      </main>
      <div className={s.boxes}>
        {
          box && <label htmlFor='top' className={s.box1}>
            <BsChevronUp />
          </label>
        }
        <div className={s.box2}>
          <span>Leave Feedback</span>
          <GoChecklist />
        </div>
      </div>
    </div>
  )
}

export default Home
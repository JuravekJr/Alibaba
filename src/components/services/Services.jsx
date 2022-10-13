import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'
import { BsArrowRight } from 'react-icons/bs'
import s from './Services.module.css'

function Services() {
  return (
    <div className={s.service}>
        <div className={s.header}>
            <div className={s.top}>
                <h3>OUR TRADE SERVICES ARE HERE FOR YOU</h3>
                <div className={s.stick}></div>
            </div>
            <p>Alibaba.com's trade services help ensure that your purchases are protected.</p>
        </div>
        <div className={s.main}>
            <div className={s.card}>
                <div className={s.card_hover}>
                    <h4 className={s.benefit_txt}>Benefits</h4>
                    <ul className={s.collection}>
                        <li>
                            On-time shipping
                        </li>
                        <li>
                            Quality protection
                        </li>
                    </ul>
                    <div className={s.space}></div>
                    <span>Learn more<BsArrowRight/></span>
                </div>
                <div className={s.image}>
                    <div className={s.rectengle}></div>
                    <p>Trade Assurance is a free order protection service offered by Alibaba.com.</p>
                </div>
                <div className={s.bottom}>
                    <div className={s.text}>
                        <h3>Trade Assurance</h3>
                        <p>ORDER PROTECTION</p>
                    </div>
                    <img src="https://sc04.alicdn.com/kf/H7e9276065b604e0e98c23e96b53b8847x.jpg" alt="" />
                </div>
            </div>
            <div className={s.card}>
            <div className={s.card_hover}>
                    <h4 className={s.benefit_txt}>Benefits</h4>
                    <ul className={s.collection}>
                        <li>
                            Global online payment
                        </li>
                        <li>
                            Security compliance
                        </li>
                        <li>
                            provide online refund if goods is not
                        </li>
                    </ul>
                    <div className={s.space}></div>
                    <span>Learn more<BsArrowRight/></span>
                </div>
                <div className={s.image}>
                    <div className={s.rectengle}></div>
                    <p>Fast payment and setlement, supporting 6 major global card types and 21 local currencies</p>
                </div>
                <div className={s.bottom}>
                    <div className={s.text}>
                        <h3>PAYMENT</h3>
                        <p>PAYMENT SOLUTION</p>
                    </div>
                    <div className={s.payment}>
                        PAY
                    </div>
                </div>
            </div>
            <div className={s.card}>
            <div className={s.card_hover}>
                    <h4 className={s.benefit_txt}>Benefits</h4>
                    <ul className={s.collection}>
                        <li>
                            Producting monitoring
                        </li>
                        <li>
                            On-sity factory check
                        </li>
                        <li>
                            Reduced risks in delays and product
                        </li>
                    </ul>
                    <div className={s.space}></div>
                    <span>Learn more<BsArrowRight/></span>
                </div>
                <div className={s.image}>
                    <div className={s.rectengle}></div>
                    <p>Production monitoring and inpection services on your Alibaba.com Trade Assurance orders.</p>
                </div>
                <div className={s.bottom}>
                    <div className={s.text}>
                        <h3>Inspection solution</h3>
                        <p>Inspection</p>
                    </div>
                    <div className={s.icon_box1}>
                        <AiOutlineSearch/>
                    </div>
                </div>
            </div>
            <div className={s.card}>
            <div className={s.card_hover}>
                    <h4 className={s.benefit_txt}>Benefits</h4>
                    <ul className={s.collection}>
                        <li>
                            Fast ocean and air shipping 
                        </li>
                        <li>
                            Competitive prices
                        </li>
                        <li>
                            Online tracking
                        </li>
                    </ul>
                    <div className={s.space}></div>
                    <span>Learn more<BsArrowRight/></span>
                </div>
                <div className={s.image}>
                    <div className={s.rectengle}></div>
                    <p>Fast, reliable shipping by ocean or air</p>
                </div>
                <div className={s.bottom}>
                    <div className={s.text}>
                        <h3>Ocean and air shipping</h3>
                        <p>LOGISTICS SERVICE</p>
                    </div>
                    <div className={s.icon_box2}>
                        <GiEarthAmerica/>
                        <FaMapMarkerAlt/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
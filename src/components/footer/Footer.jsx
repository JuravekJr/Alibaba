import React from 'react'
import s from './Footer.module.css'
import { FOOTER_DATA } from '../../static/static'
import { AiFillApple, AiFillAndroid, AiOutlineFacebook, AiOutlineInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { IoLogoTiktok, IoEarth } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'

function Footer() {
    const location = useLocation()

    if (
        location.pathname === '/approuter/admin' 
    ) {
        return <></>
    }

    if ( location.pathname === '/approuter/signin' ) {
        return <div className={s.signin_footer}>
            <div className={s.many_texts}>
        <p><IoEarth/> Alibaba.com Site: <span>International - Español - Português - Deutsch - Français - Italiano - हिंदी - Pусский - 한국어 - 日本語 - اللغة العربية - ภาษาไทย - Türk - Nederlands - tiếng Việt - Indonesian - עברית</span></p>
        <div className={s.many_links}>
            <span>Alibaba Group</span> | 
            <span>Taobao Marketplace</span> |
            <span>Tmall.com</span> |
            <span>Alibaba Group</span> | 
            <span>Taobao Marketplace</span> |
            <span>Tmall.com</span> |
            <span>Alibaba Group</span> | 
            <span>Taobao Marketplace</span> |
            <span>Tmall.com</span> |
        </div>
        <div className={s.many_links1}>
            <span>Alibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb | Umeng | Xiami | DingTalk | Alipay | Lazada | Alibaba Security</span>
        </div>
        <p className={s.hovered_text}>Browse Alphabetically: <span>Onetouch | Showroom | Country Search | Suppliers | Affiliate</span></p>
        <p className={[s.sal_pasroq, s.hover_text].join(' ')}>Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use</p>
        <p><img src='https://preview.redd.it/n2ctlv062sp11.jpg?width=640&crop=smart&auto=webp&s=35bd5c2b8f364e073f6b07539d8dd62af8682c30'/>© 1999-2022 Alibaba.com. All rights reserved.</p>
    </div>
        </div>
    }

    if ( location.pathname === '/cartrouter/cart' ) {
        return  <>
                    <div className={s.cart_footer}>
                        <div className={s.many_texts}>
                            <p>AliExpress | 1688.com | Tmall Taobao World | Alipay | Lazada</p>
                            <div className={s.many_links}>
                                <span>Browse Alphabetically Onetouch</span> | 
                                <span> Showroom</span> |
                                <span> Country Search</span> |
                                <span> Suppliers</span> | 
                                <span> Affiliate</span>
                            </div>
                        </div>
                        <p className={[s.sal_pasroq, s.hover_text].join(' ')}>Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use</p>
                        <p className={s.flag_text}>
                            <img src='https://preview.redd.it/n2ctlv062sp11.jpg?width=640&crop=smart&auto=webp&s=35bd5c2b8f364e073f6b07539d8dd62af8682c30'/>
                            © 1999-2022 Alibaba.com. All rights reserved.
                        </p>
                    </div>
                    <div className={s.pustoy_joy}></div>
                </>
    }

  return (
    <div className={s.footer}>
        <div className={s.top}>
            <div className={s.form}>
                <p className={s.text}>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</p>
                <div>
                    <div className={s.email_box}>
                        <input type="text" placeholder='Your email'/>
                        <button>Subcribe</button>
                    </div>
                    <p className={s.txt}>We'll never share your email address with a third-party.</p>
                </div>
            </div>
            <div className={s.extra_info}>
                {
                    FOOTER_DATA?.map(({ id, title, data }) => 
                    <dl className={s.collection} key={id}>
                        <dt className={[s.item, s.main_item].join(' ')}>
                            { title }
                        </dt>
                        {
                            data?.map((txt, inx) => 
                            <dd className={s.item} key={inx}>
                                { txt }
                            </dd> )
                        }
                    </dl>)
                }
            </div>
        </div>
        <div className={s.bottom}>
            <div className={s.bm_net}>
                <div className={s.install}>
                    <span>Download :</span>
                    <button className={s.app_btn}>
                        <AiFillApple/>
                        <div className={s.btn_text}>
                            <span>Available on the</span>
                            <p>APP Store</p>
                        </div>
                    </button>
                    <button className={s.play_btn}>
                        <AiFillAndroid/>
                        <div className={s.btn_text}>
                            <span>Available on the</span>
                            <p>Google Play</p>
                        </div>
                    </button>
                </div>
                <h3>Alibaba Supplier App : <img src="https://image.winudf.com/v2/image1/Y29tLmFsaWJhYmEuaWNidS5hcHAuc2VsbGVyX2ljb25fMTU2MzQ2NzYyNl8wNjE/icon.png?w=&fakeurl=1" alt="" /></h3>
                <h3>Follow Us : <AiOutlineFacebook/><AiOutlineInstagram/><IoLogoTiktok/><AiFillLinkedin/><AiFillYoutube/><AiOutlineTwitter/></h3>
            </div>
            <div className={s.many_texts}>
                <p><IoEarth/> Alibaba.com Site: <span>International - Español - Português - Deutsch - Français - Italiano - हिंदी - Pусский - 한국어 - 日本語 - اللغة العربية - ภาษาไทย - Türk - Nederlands - tiếng Việt - Indonesian - עברית</span></p>
                <div className={s.many_links}>
                    <span>Alibaba Group</span> | 
                    <span>Taobao Marketplace</span> |
                    <span>Tmall.com</span> |
                    <span>Alibaba Group</span> | 
                    <span>Taobao Marketplace</span> |
                    <span>Tmall.com</span> |
                    <span>Alibaba Group</span> | 
                    <span>Taobao Marketplace</span> |
                    <span>Tmall.com</span> |
                </div>
                <div className={s.many_links1}>
                    <span>Alibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb | Umeng | Xiami | DingTalk | Alipay | Lazada | Alibaba Security</span>
                </div>
                <p className={s.hovered_text}>Browse Alphabetically: <span>Onetouch | Showroom | Country Search | Suppliers | Affiliate</span></p>
                <p className={[s.sal_pasroq, s.hover_text].join(' ')}>Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
                <p><img src='https://img.alicdn.com/tfs/TB1VtZtebH1gK0jSZFwXXc7aXXa-65-70.gif'/>© 1999-2022 Alibaba.com. All rights reserved. <img className={s.logotip_image} src='https://img.alicdn.com/tfs/TB1QhYprKT2gK0jSZFvXXXnFXXa-20-20.png'/><span>浙公网安备 33010002000092号 浙B2-20120091-4</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer
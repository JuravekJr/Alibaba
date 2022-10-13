import React from 'react'
import s from './NavBox.module.css'
import { Link } from 'react-router-dom'
import { AiFillCrown } from 'react-icons/ai'
import { useStateValue } from '../../context/stateProvider/StateProvider'

function NavBox({show}) {
    const [state, dispatch] = useStateValue()
  return (
    <>
        {
            show === 3 && state.user === null ?  <div className={s.signin}>
                <div className={s.signin_p}>
                <p className={s.text1}>Welcome back</p>
                <Link to='/approuter/signin' className={s.link}>
                    <button className={s.signin_btn}>Sign In</button>
                </Link> 
                <button className={s.join_btn}>Join Free</button>
                <div className={s.continue_box}>
                    <p>Continue with:</p>
                </div>
                <div className={s.continue_icons}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/480px-Facebook_logo_36x36.svg.png" alt="Facebook Logo" />
                    <img src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="Google Logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="Linkedin Logo" />
                    <img src="https://image.shutterstock.com/image-photo/image-260nw-601425683.jpg" alt="Twitter Logo" />
                </div>
                <p className={s.text2}>By sliding to Continue with or Create My Account , I agree to <span >Alibaba.com Free Membership Agreement</span> and <span>Receive Marketing Materials</span></p>
                </div>
                <div className={s.hr}></div>
                <h4>My Alibaba</h4>
                <ul className={s.collection}>
                    <li className={s.item}>Manage RFQ</li>
                    <li className={s.item}>Orders</li>
                    <li className={s.item}>Favourites</li>
                    <li className={s.item}>Account</li>
                </ul>
                <div className={s.hr}></div>
                <p className={s.item}>Submit RFQ</p>
            </div>
            : show === 0 ? 
            <div className={s.chat}>
                <h3>Unread message reminder</h3>
                <p>We will remind you here when there is new message. Please log in to view.</p>
                <button className={s.chat_btn}>Sign In</button>
                <p>New user? Please <span>register</span> and start your business!</p>
            </div> : show === 2 && state.user === null ? 
            <div className={s.cart}>
                <p>you havent login. <Link to='/cartrouter/signin'>please login.</Link></p>
            </div>
            : show === 1 ?
            <div className={s.orders}>
                <p><AiFillCrown/> <span>Trade Assurance</span> <span>Learn more</span></p>
                <p>protects your Alibaba.com orders</p>
                <p>Trade Assurance ensures:</p>
                <span className={s.list_item}>Product quality</span>
                <span className={s.list_item}>On-time shipment</span>
                <button className={s.order_btn}>Order with Trade Assurance</button>
            </div> 
            : <></>
        }
    </>
  )
}

export default NavBox
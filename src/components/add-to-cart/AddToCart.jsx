import React from 'react'
import s from './AddToCart.module.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { BiMessageSquareMinus } from 'react-icons/bi'
import { useStateValue } from '../../context/stateProvider/StateProvider'

const AddToCart = ({pro}) => {
    const [state, dispatch] = useStateValue()
  return (
    <div className={s.right}>
        <div className={s.top}>
            <p>The minimum order quantity is 2 pieces</p>
            <div className={s.min_text}>
                <span>0/2 pieces</span>
                <p>from</p>
                <h3>$ 348860.36</h3>
            </div>
            <div>Processing Time 10 days <AiOutlineInfoCircle/></div>
            <div className={s.dotted}>
                <div className={s.min_ship}>
                    <div>Shipping</div>
                    <p>from</p>
                    <h3>$ 2,334,966.01</h3>
                </div>
                <div className={s.right_text}>
                    <p>FedEx IP <span>Change</span></p>
                </div>
            </div>
            <span className={s.delivery_text}>Estimated delivery<p>7/11-7/14</p> <AiOutlineInfoCircle/></span>
            <button className={[s.btn, s.btn1].join(' ')}>Start Order</button>
            <button className={[s.btn, s.btn2].join(' ')}><BiMessageSquareMinus/> Contact Supplier</button>
            <button 
            className={[s.btn, s.btn3].join(' ')}
            onClick={() => dispatch({type: 'ADD_TO_CART', payload: pro})}
            ><BsCart2/> Add to cart</button>
        </div>
        <div className={s.bottom}>
            <p>Shishi City Chijin Clothing Firm</p>
            <span>Trading Company</span>
            <div className={s.lang_box}>
                <div className={s.lang_left}><img src="https://media.istockphoto.com/vectors/turkish-flag-correct-proportions-vector-vector-id1053420278?k=20&m=1053420278&s=612x612&w=0&h=dzCVS6ZGsGfKZD4gVFJlTEZUxk3Kq-uKVN5ISBwhryM=" alt="" />CN</div>
                <div className={s.lang_right}>1<sup>YR</sup></div>
            </div>
            <span className={s.time_delievery}>On-time delivery rate</span>
            <p className={s.percent_text}>100%</p>
        </div>
    </div>
  )
}

export default AddToCart
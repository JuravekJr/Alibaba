import React from 'react'
import s from './Request.module.css'
import { BsChevronDown } from 'react-icons/bs'

function Request() {
  return (
    <div className={s.request}>
        <div className={s.header}>
            <div className={s.text}>
                <img
                data-src="https://img.alicdn.com/tfs/TB1BNqtyND1gK0jSZFKXXcJrVXa-96-68.png" 
                src="https://img.alicdn.com/tfs/TB1BNqtyND1gK0jSZFKXXcJrVXa-96-68.png" alt="" 
                />
                <h2 className={s.headerTitle}>REQUEST FOR QUOTATION</h2>
                <span>Customization Service</span>
            </div>
            <div className={s.stick}></div>
        </div>
        <div className={s.main}>
            <div className={s.image}>
                <h3>Global Sourcing Marketplace</h3>
                <button>Learn more</button>
            </div>
            <div className={s.form}>
                <h3>One Request, Multiple Quotes</h3>
                <div className={s.space}></div>
                <div className={s.form_items}>
                    <input type="text" placeholder='What are you looking for…'/>
                    <div className={s.form_box}>
                        <input type="number" placeholder='Quantity'/>
                        <div className={s.select}>
                            <span>
                                <span>Piece/Pieces</span>
                                <BsChevronDown/>
                            </span>
                        </div>
                    </div>
                    <button className={s.btn}>Request For Quotation</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Request
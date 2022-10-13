import React from 'react'
import s from './AddedProducts.module.css'
import { useStateValue } from '../../context/stateProvider/StateProvider'

function AddedProducts() {
  const [state, dispatch] = useStateValue()
  return (
    <>
      {
        state.cartPro.length !== 0 ?
          <div className={s.cart_wrapper}>
            {
              state.cartPro?.map((pro, inx) => 
                <div 
                className={s.product}
                key={inx}
                >
                  <img src={pro.image} alt="" />
                  <div className={s.text}>
                    <h3>{pro.title}</h3>
                    <span>{pro.price}</span>
                  </div>
                </div>
              )
            }
          </div>
        : <div className={s.added_pro}>
            <div className={s.empty_box}>
              <img src="https://icons.veryicon.com/png/128/miscellaneous/cloud-valley-school-icon-library/loading-64.png" alt="" />
              <div className={s.empty_text}>
                <h2>Your shopping cart is empty.</h2>
                <span>Continue shopping</span>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default AddedProducts
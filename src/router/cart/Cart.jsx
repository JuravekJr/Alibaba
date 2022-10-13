import React from 'react'
import s from './Cart.module.css'
import AddedProducts from '../../components/added-products/AddedProducts'
import Form from '../../components/form/Form'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className={s.cart}>
      <div className={s.navbar}>
        <Link to='/' className={s.logo}></Link>
        <h2>Shopping Cart</h2>
      </div>
      <div className={s.main}>
        <AddedProducts/>
        <Form/>
      </div>
    </div>
  )
}

export default Cart
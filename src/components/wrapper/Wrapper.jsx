import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Wrapper.module.css'
import { db } from '../../server/firebase'
import { useStateValue } from '../../context/stateProvider/StateProvider'

function Wrapper() {
    const [state, dispatch] = useStateValue()
    const [data, setData] = useState([])
  

    useEffect(() => {
        db.collection('products').onSnapshot(product => {
            setData(
                product.docs.map(pro => ({
                    id: pro.id,
                    data: pro.data()
                }))
            )
        })
    }, [])

    useEffect(() => {
        dispatch({type: 'ADD_PRODUCT', payload: data})
    }, [data])

  return (
    <div className={s.wrapper}>
        <div className={s.top}>
            <h3>Just for you</h3>
            <div className={s.hr}></div>
        </div>
        <div className={s.pro_wrapper}>
            {
                state.data?.map(({id, data}, inx) => <Link 
                to={`/singlePro/${id}`} key={inx} className={s.product}>
                <img src={data.image} alt="" />
                <div className={s.pro_body}>
                    <p className={s.title}>{data.title}</p>
                    <span className={s.price}>${data.price}</span>
                    <span className={s.piece}>2 Pieces (Min. order)</span>
                </div>
            </Link>)
            }
        </div>
    </div>
  )
}

export default Wrapper
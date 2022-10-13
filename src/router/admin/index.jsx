import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import s from './admin.module.css'
import { db } from '../../server/firebase'

const Index = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)

  const [category, setCategory] = useState('products')

  const SavePro = () => {
    let mainTitle = title.trim('').length
    let mainImage = image.trim('').length

    if (
      mainTitle === '' ||
      mainImage === '' ||
      price === 0 ||
      price === null ||
      price === undefined ||
      price === false ||
      price === NaN
    ) {
        alert('Please complete your input(s)!!!');
        return;
    } else {
      db.collection(category).add({
        title, image, price
      })

      setTitle('')
      setImage('')
      setPrice(0)
    }
  }

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

  document.title = 'Alibaba.com - Admin panel'
  return (
    <div className={s.admin}>
      <div className={s.nav}>
        <Link to='/' className={s.logo}></Link>
      </div>
      <div className={s.main}>
        <div className={s.panel}>
          <div className={s.header}>
            <h2>Admin Panel</h2>
          </div>
          <div className={s.form}>
              <input 
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text" id="inp1" className={s.inp} placeholder='Product name' 
              />
              <input 
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="text" id="inp2" className={s.inp} placeholder='Product image'
              />
              <input 
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="text" id="inp3" className={s.inp} placeholder='Product price' 
              />
            <div className={s.colunm}></div>
            <button
            className={s.submit}
            onClick={SavePro}
            >submit</button>
          </div>
        </div>
        <div className={s.wrapper}>
          {
            data?.map(({id, data}) => <div className={s.product} key={id}>
            <img src={data.image} alt="" />
            <div className={s.about_pro}>
              <h2>{data.title}</h2>
              <p>{data.price} $</p>
            </div>
          </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Index
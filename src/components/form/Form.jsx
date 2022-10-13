import React from 'react'
import s from './Form.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

function Form() {
  return (
    <div className={s.form}>
      <input type="text" placeholder='What are you looking for...'/>
      <button>
        <AiOutlineSearch/>
        <span>Search</span>
      </button>
    </div>
  )
}

export default Form
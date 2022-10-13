import React from 'react'
import { Link } from 'react-router-dom'
import s from './SignIn.module.css'
import { useStateValue } from '../../context/stateProvider/StateProvider'
import { googleProvider, auth } from '../../server/firebase'

function SignIn() {
  const [state, dispatch] = useStateValue()
  const signupWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
        .then(res=> dispatch({type: 'ADD_USER', payload: res.user}))
        .catch(err=> console.log(err))
  }

  document.title = 'Alibaba.com - SignIn'
  return (
    <div className={s.signin}>
      <div className={s.header}>
        <div className={s.nav}>
          <Link to='/'></Link>
          <select>
            <option>English</option>
            <option>Russian</option>
            <option>Uzbek</option>
            <option>Kiril</option>
            <option>Latin</option>
            <option>Chinese</option>
            <option>British</option>
            <option>Japanese</option>
          </select>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.big_box}></div>
        <div className={s.card}>
          <div className={s.login}>
            <div className={s.qr_box}>
              <div className={s.qr_code}></div>
              <div className={s.login_wrap}>
                <div className={s.form}>
                  <label htmlFor="acc" className={s.inp_label}>Account:</label>
                  <input type="text" id="acc" className={s.inp} placeholder='Email address or member ID'/>
                  <div className={s.password_box}>
                    <label htmlFor="pass">Password:</label>
                    <span>Forgot Password?</span>
                  </div>
                  <input type="password" id="pass" className={s.inp} placeholder='Password'/>
                  <label className={s.check_signed} htmlFor="check">
                    <input type="checkbox" id="check" />
                    <span>Stay signed in</span>
                  </label>
                  <button 
                  className={s.signin_btn}
                  >Sign In</button>
                </div>
                <div className={s.links}>
                  <span>Mobile number sign in</span>
                  <span>Join Free</span>
                </div>
                <div className={s.row}></div>
                <div className={s.other_ways}>
                  <p>Sign in with:</p>
                  <img src="https://seeklogo.com/images/F/facebook-logo-C64946D6D2-seeklogo.com.png" alt="" />
                  <img
                    src="https://blog.hubspot.com/hubfs/image8-2.jpg" 
                    alt="" 
                    onClick={signupWithGoogle}
                  />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
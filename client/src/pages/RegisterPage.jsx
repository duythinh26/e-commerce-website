import React from 'react'
import "../components/css/RegisterPage.css"

const RegisterPage = () => {
  return (
    <div className="register__container">
        <div className="register__wrapper">
            <h1 className="register__title">Create Account</h1>
            <form action="" className='register__form'>
              <input className='register__input' type="text" placeholder='Firstname' />
              <input className='register__input' type="text" placeholder='Lastname' />
              <input className='register__input' type="text" placeholder='Username' />
              <input className='register__input' type="email" placeholder='Email' />
              <input className='register__input' type="password" placeholder='Password' />
              <input className='register__input' type="password" placeholder='Confirm password' />
              <span className="agreement">
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
              </span>
              <button className="create-account">Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage;
import React from 'react';
import { Link } from "react-router-dom";

export const ForgotPW = () => {
  return (
    <div className='container'>
      <div className="forgot-password">
        <div className="icon-container">
          <Link to=".">
            <i className=''></i>
          </Link>
        </div>
        <h1>Forgot Password</h1>
        <p>Enter your email address and we'll send you a link to reset your password.</p>
        <form autoComplete=''>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type={'email'} id='email' required/>
            <i className=''></i>
          </div>
          <button type={'submit'} className='button'>Send Email<i className=''></i></button>
        </form>
      </div>
    </div>
  )
}
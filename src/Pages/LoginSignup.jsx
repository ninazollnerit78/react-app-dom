import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="container ram">
        <h2>SIGNUP</h2>
        <div className="forma">
          <input type="text" placeholder='NAME' />
          <input type="email" placeholder='EMAIL' />
          <input type="password" placeholder='PASSWORD' />
        </div>
        <button className='btn-green'>CONTINUE</button>
        <p>Already have an account? <span>Login here!</span></p>
        <div className="terms-of-use">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy!</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
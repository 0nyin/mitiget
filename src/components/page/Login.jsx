import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import user_icon from "../../assets/person.png"
import user_email from "../../assets/email.png"
import user_password from "../../assets/password.png"
import "./Login.css"


function Login() {
      

  return (
    <div className='reg-container'>
      <div className='container'>
        <div className='hearder'>
          <div className='text'>Login</div>
        </div>

        <form>
          <div className='inputs' >

            <div className='input'>
            <img src={user_email} alt='' />
            <input type='email Id' placeholder='Email' required  />
            </div>

            <div className='input'>
            <img src={user_password} alt='' />
            <input type='password' placeholder='password' required  />
            </div>
            </div>
          <div className='forgot-password'> Forgot password? <span>Click here!</span>
         
          </div>
          
          <div className='submit-container'>
            
            <input type="submit" value="Submit" class="submit" />
            
          </div>
      </form>
        
      </div>
     
    </div>
  )
}

export default Login

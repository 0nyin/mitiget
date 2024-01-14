import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import user_icon from "../../assets/person.png"
import user_email from "../../assets/email.png"
import user_password from "../../assets/password.png"
import "./Register.css"


function Login() {
      
    

  return (
    <div className='reg-container'>
      <div className='container'>
        <div className='hearder'>
          <div className='text'>Register</div>
        </div>

        <form>
          <div className='inputs' >

            <div className='input'>
            <img src={user_icon} alt='' />
            <input type='text' placeholder='Name' required  />
            </div>
            

            <div className='input'>
            <img src={user_email} alt='' />
            <input type='email Id' placeholder='Email' required  />
            </div>

            <div className='input'>
            <img src={user_password} alt='' />
            <input type='password' placeholder='password' required  />
            </div>
            </div>
          <div className='forgot-password'> Already have an account?
         
          <Link to='/Login'>
          <span>Login!</span>
          </Link>
          
          </div>
          
          <div className='submit-container'>
            
            <input type="submit" value="send" class="submit" />
          
            
          </div>
      </form>
        
      </div>
     
    </div>
  )
}

export default Login


  
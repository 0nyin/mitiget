import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Otppage.css"

function Otppage() {

    const [inputValues, setInputValues] = useState({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
    });
  
    const handleInputChange = (e, inputName) => {
      // Allow only numbers from 0 to 9
      const value = e.target.value.replace(/[^0-9]/g, '').slice(0,1);
  
      //  Update the state with the input value
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [inputName]: value,
      }));
    };

    const handleVerifyClick = () => {

      const isFilled = Object.values(inputValues).every((value) => value !== '');
  
      if (isFilled) {
       
        alert('Login successful');
      } else {
        
        alert('Please fill in all inputs');
      }
    };

  return (
    <div className='otp-container'>
      <div className='otp-content'>
        <h2>Verify your account</h2>
        <p>We emailed you the six digit code to personal@email.com<br />
          Enter the code bello to confirm your email address
        </p>
          <div className='otp-digit'>
            <input type='number' 
             id="input1"
             value={inputValues.input1}
             onChange={(e) => handleInputChange(e, 'input1')}
             className='code' 
             placeholder='0' 
             required />

            <input type='number' 
             id="input2"
             value={inputValues.input2}
             onChange={(e) => handleInputChange(e, 'input2')}
             className='code' 
             placeholder='0' 
             required />

            <input type='number' 
             id="input3"
             value={inputValues.input3}
             onChange={(e) => handleInputChange(e, 'input3')}
             className='code' 
             placeholder='0' 
             required />

            <input type='number' 
              id="input4"
              value={inputValues.input4}
              onChange={(e) => handleInputChange(e, 'input4')}
             className='code' 
             placeholder='0' 
             required />

            <input type='number' 
              id="input5"
              value={inputValues.input5}
              onChange={(e) => handleInputChange(e, 'input5')}
             className='code' 
             placeholder='0' 
             required />

            <input type='number' 
              id="input6"
              value={inputValues.input6}
              onChange={(e) => handleInputChange(e, 'input6')}
             className='code' 
             placeholder='0' 
             required />
            
          </div>

          <div>
          <Link to="/Dashboard">
          {/* {Login successful ? <Link to="/Dashboard"></Link> : "" } */}
          <button type='button' className='btn btn-primary' onClick={handleVerifyClick}>Verify</button>
            
          </Link>
          </div>

          <small>
            if you didnt receive the code <strong>!!!RESEND</strong>
          </small>
      </div>
    </div>
  )
}

export default Otppage

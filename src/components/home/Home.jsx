import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <div className='hero-container'>
            <div className='containerr'>
                <h2>Mitiget Offers</h2>
                <p>A better way to ship web Apps</p>
            </div>

            <div className='button-container'>
                
                <div>
                    <Link to="/Register">
                        <button className='button'>Sign Up</button>
                    </Link>
                </div>
                
                <div>
                    <Link to="/Login">
                        <button className='button'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home

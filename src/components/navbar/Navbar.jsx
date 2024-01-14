import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
    const [click , setClick] = useState(false)
    
    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

  return (
    <div className='navbar'>
    <div className='navbar-container'>
      <img src="" />

      <div className='menu-icon' onClick={handleClick}>
        {click ? <FaTimes  className='fa-times'/> :  <FaBars className='fa-bars' />}
                      
      </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-items'>
            <Link to='/'  className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>

          <li className='nav-items'>
            <Link to='/#' className='nav-links' onClick={closeMobileMenu}>About</Link>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import logo from '../images/logo2.png'

const Navbar = () => {
  return (
      <header>
        <div id='logo'> 
          <Link to='/'><img className='logo' src={logo}></img></Link>
        </div>
        <div id='nav'>
          <ul>
            <li><Link to='/' class="active">Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/forum'>Forum</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
            <li><Link to='/login' style={{fontSize: '22px'}}><FaUser/></Link></li>
          </ul>
        </div>
      </header>
  )
}

export default Navbar

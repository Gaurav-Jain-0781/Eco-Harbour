import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
// import logo from '/images/logo2.png'

const Navbar = () => {
  return (
      <header>
        <div id='logo'> 
          <Link to='/'><img className='logo' src="/images/logo2.png" alt='logo'></img></Link>
        </div>
        <div id='nav'>
          <ul>
            <li><strong><Link to='/' class="active">Home</Link></strong></li>
            <li><strong><Link to='/services'>Services</Link></strong></li>
            <li><strong><Link to='/forum'>Forum</Link></strong></li>
            <li><strong><Link to='/contact-us'>Contact Us</Link></strong></li>
            <li><strong><Link to='/login' style={{fontSize: '22px'}}><FaUser/></Link></strong></li>
          </ul>
        </div>
      </header>
  )
}

export default Navbar

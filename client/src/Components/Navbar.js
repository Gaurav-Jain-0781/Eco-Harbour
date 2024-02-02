import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Navbar = ({login, tooglelogin}) => {
  return (
      <header>
        <div id='logo'> 
          <Link to='/'><img className='logo' src="/images/logo2.png" alt='logo'></img></Link>
        </div>
        <div id='nav'>
          <ul>
            <li><strong><Link to='/' className="active">Home</Link></strong></li>
            <li><strong><Link to='/services'>Services</Link></strong></li>
            <li><strong><Link to='/forum'>Forum</Link></strong></li>
            <li><strong><Link to='/about'>Contact Us</Link></strong></li>
            <li><button><FaUser onClick={tooglelogin}/></button></li>
          </ul>
        </div>
      </header>
  )
}

export default Navbar

import React from 'react'
import { FaUser } from 'react-icons/fa'
import logo from '../images/logo2.png'

const Navbar = () => {
  return (
      <header>
        <div id='logo'> 
          <img className='logo' src={logo}></img>
        </div>
        <div id='nav'>
          <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="about">About</a></li>
            <li><a href='contact.html'>Contact Us</a></li>
            <li><a href="contact" style={{fontSize:22}}><FaUser/></a></li>
          </ul>
        </div>
      </header>
  )
}

export default Navbar

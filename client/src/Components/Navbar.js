import React from 'react'
import { FaUser } from 'react-icons/fa'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
      <header>
          <img className='logo' src={logo}></img>
          <nav class="navigation">
              <a href="#home" class="active">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Login</a>
          </nav>
      </header>
  )
}

export default Navbar

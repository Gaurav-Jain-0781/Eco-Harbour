import React from 'react'
import Navbar from '../Components/Navbar'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'
import AboutSections, { AboutHeader , AboutForm } from '../Components/AboutSections'

import '../Styles/about.css'

const About = ({login}) => {
  return (
    <>
      <Navbar login={login}/>
      <AboutHeader/>
      <AboutSections/>
      <AboutForm/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default About

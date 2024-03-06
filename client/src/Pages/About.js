import React from 'react'
import Navbar from '../Components/Navbar'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'

const About = ({login, tooglelogin}) => {
  return (
    <>
      <Navbar login={login} tooglelogin={tooglelogin}/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default About

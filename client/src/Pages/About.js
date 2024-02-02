import React from 'react'

import Navbar from '../Components/Navbar'
import Login from '../Components/login'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'

const About = ({login, tooglelogin}) => {
  return (
    <>
        <Navbar login={login} tooglelogin={tooglelogin}/>
        <div className={login ? 'blur' : ''}>
            <SignUp/>
            <Footer/>
        </div>
        {login ? <Login/> : ''}
    </>
  )
}

export default About

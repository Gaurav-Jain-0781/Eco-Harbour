import React from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/login'
import Hero from '../Components/Hero'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'
import Explore, { Perks } from '../Components/Explore'

import '../Styles/style.css'
import '../Styles/login.css'

const Home = ({login, tooglelogin}) => {
  return (
    <>
      <Navbar login={login} tooglelogin={tooglelogin}/>
      <div className={login ? 'blur' : 'none'}>
        <Hero/>
        <Explore/>
        <Perks/>
        <SignUp/>
        <Footer/>
      </div>
      {login ? <Login/> : ''}
    </>
  )
}

export default Home

import React from 'react'
import Navbar from '../Components/Navbar'
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
      <Hero/>
      <Explore/>
      <Perks/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default Home

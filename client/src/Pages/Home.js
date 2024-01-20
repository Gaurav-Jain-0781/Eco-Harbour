import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'

import '../Styles/style.css'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default Home

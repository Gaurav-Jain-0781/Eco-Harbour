import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'
import Harbours from '../Components/Harbours'
import Harbour_Services from '../Components/Services'

import '../Styles/style.css'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Harbours/>
      <Harbour_Services/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default Home

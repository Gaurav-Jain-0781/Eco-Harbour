import React from 'react'
import Navbar from '../Components/Navbar'
import HarbourService, { ServiceHeader } from '../Components/HarbourServices'
import Fish from '../Components/Fish'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'

import '../Styles/service.css'

const Service = ({login, tooglelogin}) => {
  return (
    <>
      <Navbar login={login} tooglelogin={tooglelogin}/>
      <ServiceHeader/>
      <HarbourService/>
      <Fish/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default Service

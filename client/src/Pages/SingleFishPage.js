import React from 'react'
import Navbar from '../Components/Navbar'
import SingleFish from '../Components/SingleFish'
import { PreferedFishes } from '../Components/SingleFish'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'

import '../Styles/service.css'
import '../Styles/harbour.css'

const SingleFishPage = () => {
  return (
    <div>
      <Navbar/>
      <SingleFish/>
      <PreferedFishes/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default SingleFishPage

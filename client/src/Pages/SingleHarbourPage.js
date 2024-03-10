import React from 'react'
import Navbar from '../Components/Navbar'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'
import SingleHarbour from '../Components/SingleHarbour'

const SingleHarbourPage = () => {
  return (
    <div>
      <Navbar/>
      <SingleHarbour/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default SingleHarbourPage

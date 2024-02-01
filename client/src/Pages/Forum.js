import React from 'react'

import Navbar from '../Components/Navbar'
import PageHeader from '../Components/Page-Header'
import Community from '../Components/Community'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'

import '../Styles/forum.css'

const Forum = () => {
  return (
    <>
      <Navbar/>
      <PageHeader/>
      <Community/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default Forum

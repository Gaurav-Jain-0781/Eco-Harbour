import React from 'react'
import Navbar from '../Components/Navbar'
import Community , { Post }  from '../Components/Community'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'

import '../Styles/forum.css'

const Forum = ({login, tooglelogin}) => {
  return (
    <>
      <Navbar login={login} tooglelogin={tooglelogin}/>
      <Community/>
      <Post/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default Forum

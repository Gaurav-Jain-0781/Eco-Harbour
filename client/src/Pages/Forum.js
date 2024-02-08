import React from 'react'

import Navbar from '../Components/Navbar'
import Login from '../Components/login'
import Community , { Post }  from '../Components/Community'
import SignUp from '../Components/SignUp'
import Footer from '../Components/Footer'

import '../Styles/forum.css'

const Forum = ({login, tooglelogin}) => {
  return (
    <>
      <Navbar login={login} tooglelogin={tooglelogin}/>
      <div className={login ? 'blur' : 'none'}>
        <Community/>
        <Post/>
        <SignUp/>
        <Footer/>
      </div>
      {login ? <Login/> : ''}
    </>
  )
}

export default Forum

import React from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/login'

const LoginPage = ({ login, tooglelogin }) => {
  return (
    <div>
      <Navbar/>
      <Login login={login} tooglelogin={tooglelogin}/>
    </div>
  )
}

export default LoginPage

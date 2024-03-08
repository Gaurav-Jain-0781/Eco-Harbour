import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import axios from 'axios'

const Navbar = ({login, tooglelogin}) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  const checkLogin = async () => {
    console.log("before", loggedIn)
    const { data } = await axios.get('/user/profile')
    
    if(data._id){
      setLoggedIn(true)
      setUser(data)
      console.log(user)
    }
    console.log(loggedIn)
  } 

  useEffect(() => {
    checkLogin()
  }, [loggedIn])

  return (
      <header>
        <div id='logo'> 
          <Link to='/'><img className='logo' src="/images/logo2.png" alt='logo'></img></Link>
        </div>
        <div id='nav'>
          <ul>
            <li><strong><Link to='/' className="active">Home</Link></strong></li>
            <li><strong><Link to='/services'>Services</Link></strong></li>
            <li><strong><Link to='/forum'>Forum</Link></strong></li>
            <li><strong><Link to='/about'>Contact Us</Link></strong></li>
            <li>
              <Link to={loggedIn ? '/dashboard' : '/login'}>
                {loggedIn ? `${user.first_name.slice(0, 1).toUpperCase()}` : <FaUser onClick={tooglelogin}/>}
              </Link>
            </li>
          </ul>
        </div>
      </header>
  )
}

export default Navbar

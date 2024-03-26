import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import axios from 'axios'

const Navbar = ({login, tooglelogin}) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const location = useLocation()

  const checkLogin = async () => {
    try {
      const { data } = await axios.get('/user/profile')
      
      if(data._id){
        setLoggedIn(true)
        setUser(data)
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("No user found");
      } else if (error.message === "Request failed with status code 401") {
        console.log("User not logged in");
      } else {
        console.error("Error fetching user profile:", error.message);
      }
    } 
  } 

  useEffect(() => {
    checkLogin()
  }, [loggedIn])

  return (
      <header>
        <div> 
          <Link to='/'><img className='logo' src="/images/logo2.png" alt='logo'></img></Link>
        </div>
        <div id='nav'>
          <ul>
            <li><strong><Link to='/' className={location.pathname === '/' ? "active" : ''}>Home</Link></strong></li>
            <li><strong><Link to='/services' className={location.pathname === '/services' ? 'active' : ''}>Services</Link></strong></li>
            <li><strong><Link to='/forum' className={location.pathname === '/forum' ? 'active' : ''}>Forum</Link></strong></li>
            <li><strong><Link to='/about'className={location.pathname === '/about' ? 'active' : ''}>Contact Us</Link></strong></li>
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

export const AdminNavbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const location = useLocation()

  const checkAdminLogin = async () => {
    try {
      const { data } = await axios.get('/user/profile')
      
      if(data._id){
        setLoggedIn(true)
        setUser(data)
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("No user found");
      } else if (error.message === "Request failed with status code 401") {
        console.log("User not logged in");
      } else {
        console.error("Error fetching user profile:", error.message);
      }
    } 
  } 

  useEffect(() => {
    checkAdminLogin()
  }, [loggedIn])

  return (
      <header>
        <div> 
          <Link to='/'><img className='logo' src="/images/logo2.png" alt='logo'></img></Link>
        </div>
        <div id='nav'>
          <ul>
            <li><strong><Link to='/' className={location.pathname === '/' ? "active" : ''}>Home</Link></strong></li>
            <li><strong><Link to='/services' className={location.pathname === '/services' ? 'active' : ''}>Services</Link></strong></li>
            <li><strong><Link to='/forum' className={location.pathname === '/forum' ? 'active' : ''}>Forum</Link></strong></li>
            <li><strong><Link to='/about'className={location.pathname === '/about' ? 'active' : ''}>Contact Us</Link></strong></li>
            <li>
              <Link to={loggedIn ? '/dashboard' : '/login'}>
                {loggedIn ? `${user.first_name.slice(0, 1).toUpperCase()}` : <FaUser/>}
              </Link>
            </li>
          </ul>
        </div>
      </header>
  )
}

export default Navbar

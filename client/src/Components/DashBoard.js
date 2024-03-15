import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser, FaGift, FaChartPie } from 'react-icons/fa'
import { MdLogout, MdDashboard  } from "react-icons/md";

const DashBoard = () => {
  const [ user, setUser ] = useState({})
  const [ activeTab, setActiveTab ] = useState('dashboard')
  const navigate = useNavigate()
  
  useEffect(() => {
    const getUser = async() => {
      try {
        const { data } = await axios.get('/user/profile')
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [user])

  const handelClick = async() => {
    try {
      const { data } = await axios.post('/user/logout')

      if(data.message === "Logout Successfull"){
        toast.success("Logout Successfull")
        navigate('/')
      } 
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed');
    }
  }

  const toogleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="sidebar">
        <div>
          <ul className="nav">
            <li>
              <Link className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => toogleTab('dashboard')}>
                <MdDashboard/>Dashboard
              </Link>
            </li>
            <li>
              <Link className={activeTab === 'userInfo' ? 'active' : ''} onClick={() => toogleTab('userInfo')}>
                <FaUser/>User
              </Link>
            </li>
            <li>
              <Link className={activeTab === 'analytics' ? 'active' : ''} onClick={() => toogleTab('analytics')}>
                <FaChartPie/>Analytics
              </Link>
            </li>
            <li>
              <Link className={activeTab === 'rewards' ? 'active' : ''}  onClick={() => toogleTab('rewards')}>
                <FaGift/>Reward
              </Link>
            </li>
          </ul>
        </div>
        <div id='logout'>
          <button className='btn' onClick={handelClick}><MdLogout/>Logout</button>
        </div>
      </div>

      <div className="content" id="dashboardContent" style={{ display: activeTab === 'dashboard' ? 'flex' : 'none' }}>
        {user ? (
          <>
            <h1>Welcome back, {user.first_name ? user.first_name.toUpperCase() : ''} 👋</h1>
            <div className="dashBoard-card">
              <h2>User Information</h2>
              <p> {user._id} </p>
              <p> {user.email} </p>
              <p> {user.first_name} </p>
              <p> {user.status} </p>
              <p> {user.score} </p>
              <p> {user.contact_no} </p>
            </div>
            <div className="card">
              <h2>Recent Sails</h2>
              <p>No recent activity.</p>
            </div>
          </>
        ) : (
          <Spinner/>
        )}
      </div>

      <div className="content" id="userInfoContent" style={{ display: activeTab === 'userInfo' ? 'flex' : 'none' }}>
        <div className="card">
          <h2>User Information</h2>
          <p>Username: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Mobile: 1234567890</p>
          <p>Place: Your Place</p>
          <p>Harbours: List of Harbours</p>
        </div>
      </div>

      <div className="content" id="analyticsContent" style={{ display: activeTab === 'analytics' ? 'flex' : 'none' }}>
        <h2>Analytics</h2>
        <div className="analytics">
          <div className="analytics-card">
            <img src="fish.png" alt="Fish Icon"/>
            <h3>Fish Records</h3>
            <p>Total fish records: 500</p>
          </div>
          <div className="analytics-card">
            <img src="catches.png" alt="Catches Icon"/>
            <h3>Catches</h3>
            <p>Total catches: 200</p>
          </div>
          <div className="analytics-card">
            <img src="harbours.png" alt="Harbours Icon"/>
            <h3>Visited Harbours</h3>
            <p>Total harbours visited: 10</p>
          </div>
        </div>
      </div>

      <div className="content" id="rewardsContent" style={{ display: activeTab === 'rewards' ? 'flex' : 'none' }}>
        <div className="card">
          <h2>Rewarrds</h2>
        </div>
      </div>

    </>
  )
}

export default DashBoard

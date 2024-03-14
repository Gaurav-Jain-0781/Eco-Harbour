import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser, FaGift } from 'react-icons/fa'
import { MdLogout, MdDashboard  } from "react-icons/md";

const DashBoard = () => {
  const navigate = useNavigate()
  
  const showDashboard = () => {
    document.getElementById('dashboardContent').style.display = 'block';
    document.getElementById('userInfoContent').style.display = 'none';
    document.getElementById('analyticsContent').style.display = 'none';
  }

  const showUserInfo = () => {
    document.getElementById('dashboardContent').style.display = 'none';
    document.getElementById('userInfoContent').style.display = 'block';
    document.getElementById('analyticsContent').style.display = 'none';
  }

  const showAnalytics = () => {
    document.getElementById('dashboardContent').style.display = 'none';
    document.getElementById('userInfoContent').style.display = 'none';
    document.getElementById('analyticsContent').style.display = 'block';
  }

  const handelClick = async() => {
    const { data } = await axios.post('/user/logout')

    if(data.message === "Logout Successfull"){
      toast.success("Logout Successfull")
      navigate('/')
    }
  }

  return (
    <>
      <div className="sidebar">
        <div className="logo">Eco Harbour</div>
        <ul className="nav">
          <li><a href="#" className="active" onclick="showDashboard()"><MdDashboard/>Dashboard</a></li>
          <li><a href="#" onclick="showUserInfo()"><FaUser/>User</a></li>
          <li><a href="#" onclick="showAnalytics()"><FaGift/>Analytics</a></li>
          <li><a href="#" onclick=""><FaGift/>Reward</a></li>
          <li><button onClick={handelClick}><MdLogout/>Logout</button></li>
        </ul>
      </div>

      <div className="content" id="dashboardContent">
        <h1>Welcome to Your Dashboard</h1>
        <div className="card">
          <h2>User Information</h2>
          <p>Username: John Doe</p>
          <p>Email: john@example.com</p>
        </div>
        <div className="card">
          <h2>Recent Activity</h2>
          <p>No recent activity.</p>
        </div>
        <div className="card">
          <h2>Settings</h2>
          <p>Update your account settings here.</p>
        </div>
      </div>

      <div className="content" id="userInfoContent" style={{display: "none"}}>
        <div className="card">
          <h2>User Information</h2>
          <p>Username: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Mobile: 1234567890</p>
          <p>Place: Your Place</p>
          <p>Harbours: List of Harbours</p>
        </div>
      </div>

      <div className="content" id="analyticsContent" style={{display: "none"}}>
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

    </>
  )
}

export default DashBoard

import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaBars, FaBorderNone, FaUser, FaHeart } from 'react-icons/fa'
import { FaChartPie } from 'react-icons/fa6'
import { MdSettings } from "react-icons/md";

const DashBoard = () => {
  const navigate = useNavigate()
  
  const handelClick = async() => {
    const { data } = await axios.post('/user/logout')

    if(data.message === "Logout Successfull"){
      toast.success("Logout Successfull")
      navigate('/')
    }
  }

  return (
    <div>
      <h1>User DashBoard</h1>
      <button onClick={handelClick}> Logout </button>
    </div>
  )
}

export const Sidebar = () => {
  
  const handelClick = () => {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let searchBtn = document.querySelector(".bx-search");

    btn.onclick = function(){
      sidebar.classList.toggle("active");
    }
    searchBtn.onclick = function(){
      sidebar.classList.toggle("active");
    }
  }

  return (
    <div className="sidebar">
      <FaBars id="btn" onClick={handelClick}/>
      <ul className="nav_list">
        <li>
          <a href="#">
            <FaBorderNone/>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <FaUser/>
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="#">
            <FaChartPie/>
            <span className="links_name">Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#">
            <FaHeart/>
            <span className="links_name">Saved</span>
          </a>
          <span className="tooltip">Saved</span>
        </li>
        <li>
          <a href="#">
            <MdSettings/>
            <span className="links_name">Setting</span>
          </a>
          <span className="tooltip">Setting</span>
        </li>
      </ul>
      <div className="content">
        <div className="user">
          <div className="user_details">
            <img decoding="async" src="images/profile.jpg" alt=""/>
            <div className="name_job">
              <div className="name">UserName</div>
            </div>
          </div>
          <i className='bx bx-log-out' id="log_out"></i>
        </div>
      </div>
    </div>
  )
}

export default DashBoard

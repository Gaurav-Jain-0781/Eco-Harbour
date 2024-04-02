import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser, FaGift, FaChartPie, FaStar, FaShip, FaCheckCircle, FaTrash, FaAward } from 'react-icons/fa'
import { MdLogout, MdDashboard  } from "react-icons/md";
import { GoGoal } from 'react-icons/go'
import Chart from 'chart.js/auto';

const DashBoard = () => {
  const [ user, setUser ] = useState({})
  const [ editable, setEditable ] = useState(false)
  const [ activeTab, setActiveTab ] = useState('dashboard')
  const [ sail, setSail ] = useState(0)
  const [ image, setImage ] = useState(null)
  const [ reward, setReward ] = useState([])

  const navigate = useNavigate()

  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/user/profile');
        setUser(data);

        const { data: rewardData} = await axios.get('/reward')
        setReward(rewardData)

        const { data: sail } = await axios.get(`/record/user/${data._id}`);
        setSail(sail);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []);

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

  const update = async (e) => {
    e.preventDefault()

    const user_name = document.forms['update'].user_name.value
    const first_name = document.forms['update'].first_name.value
    const email = document.forms['update'].email.value
    const contact_no = document.forms['update'].contact_no.value

    try {
      await axios.put('/user/profile', {
        user_name, first_name, email, contact_no
      })      
      toast.success("Profile Updated Successfully")
      setEditable(false)
    } catch (error) {
      console.log(error)
      toast.error("Error in Profile Updation")
    }
  }

  const handelChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    setUser(prevUser => ({
      ...prevUser, 
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async(e, recordId) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('image', image);
    formData.append("id", recordId)

    try {
      await axios.post('/record/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      const { data: sail } = await axios.get(`/record/user/${user._id}`);
      setSail(sail);
      toast.success('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image.');
    }
  }

  const deleteSail = async (id) => {
    try{
      await axios.delete(`/record/delete/${id}`);
      toast.success("Sail Deleted")

      const { data: sail } = await axios.get(`/record/${user._id}`);
      setSail(sail);
    } catch (error) {
      console.log(error)
      toast.error("Error in Sail Deletion")
    }
  }

  const handelClaim = async (rewardId, points) => {
    
    try {
      const { data } = await axios.get(`reward/${rewardId}`)
      const points = data.points

      if(user.score < points){
        toast.error("Insufficient Points")
      }
      else{
        const user_id = user._id
        const data = { user_id, rewardId}
        
        await axios.post('/reward/update', data)
        toast.success("Reward Claimed")

        await axios.post(`/user/reduceScore/${user_id}`, {
          user_id,
          points
        })

        const { data: refreshedUserData } = await axios.get(`/user/profile`);
        setUser(refreshedUserData);

        const { data: refreshedRewards } = await axios.get('/reward');
        setReward(refreshedRewards);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handelAnalytics = () => {
    toogleTab('analytics')

    const lineCtx = lineChartRef.current.getContext('2d');
    const barCtx = barChartRef.current.getContext('2d');
    const pieCtx = pieChartRef.current.getContext('2d');

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const backgroundColors = ['#f44336', '#9b59b6', '#2ecc71', '#ffc107', '#e74c3c', '#3498db', '#1abc9c', '#e67e22', '#95a5a6', '#34495e', '#8e44ad', '#d35400'];
    
    const lineData = {
      labels: labels,
      datasets: [{
          label: 'Sail Data',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          data: [0, 10, 2, 0, 0, 10, 0, 4, 0, 0, 0, 12],
      }]
    };

    const barData = {
      labels: labels,
      datasets: [{
          label: 'My Data',
          backgroundColor: backgroundColors,
          borderColor: 'rgba(255, 99, 132, 1)',
          data: [0, 10, 2, 0, 0, 10, 0, 4, 0, 0, 0, 12],
      }]
    };

    const pieData = {
      labels: labels,
      datasets: [{
          data: [0, 10, 2, 0, 0, 10, 0, 4, 0, 0, 0, 12],
          backgroundColor: backgroundColors,
      }]
    };

    const lineChart = new Chart(lineCtx, {
      type: 'line',
      data: lineData,
      responsive: true,
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      } 
    });

    const barChart = new Chart(barCtx, {
      type: 'bar',
      data: barData,
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    });

    const pieChart = new Chart(pieCtx, {
      type: 'pie',
      data: pieData,
    });
  }

  const handelEdit = () => {
    setEditable(true)
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
                <FaUser/>Profile
              </Link>
            </li>
            <li>
              <Link className={activeTab === 'analytics' ? 'active' : ''} onClick={handelAnalytics}>
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
            <div className='dashBoard-card'>
              <div className='box' style={{backgroundColor: '#5454ffb5'}}>
                <div className='box-icon'>
                  <FaShip/>
                </div>
                <div className='box-content'>
                  <h2> {sail.length} </h2>
                  <p>Sails</p>
                </div>
              </div>
              <div className='box' style={{backgroundColor: '#ff4040c9'}}>
                <div className='box-icon'>
                  <FaCheckCircle/>
                </div>
                <div className='box-content'>
                  <h2 style={{padding: '0px', fontSize: '50px'}}>  {user.status} </h2>
                  <p> Status </p>
                </div>
              </div>
              <div className='box' style={{backgroundColor: '#f351e4c7'}}>
                <div className='box-icon'>
                  <FaStar/>
                </div>
                <div className='box-content'>
                  <h2> {user.score} </h2>
                  <p> Points </p>
                </div>
              </div>
              <div className='box' style={{backgroundColor: '#30f164cc'}}>
                <div className='box-icon'>
                  <GoGoal/>
                </div>
                <div className='box-content'>
                  <h2> {} </h2>
                  <p> Rewards Claimed </p>
                </div>
              </div>
            </div>
            <div id='sails'>
              <h2>Recent Sails</h2>
              {sail.length > 0 ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Searched</th>
                        <th>Date</th>
                        <th>Upload Proof</th>
                        <th>Delete Record</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sail.map((s, index) => {
                        return (
                          <tr key={s._id}>
                            <td> {index + 1} </td>
                            <td> {s.search} </td>
                            <td>{s.createdAt.slice(0, 10)}</td>
                            <td>{s.image === "" ? (
                              <form onSubmit={(e) => handleSubmit(e, s._id)}>
                                <div id="file">
                                  <input type="file" onChange={handleFileChange} name='image'/>
                                  <button type="submit" className='btn'>Upload Image</button>
                                </div>
                              </form>
                            ) : (
                              <p className='proof'> Proof Uploaded </p>
                            )}</td>
                            <td>
                              <button className="btn delete" onClick={() => deleteSail(s._id)}>Delete Sail <FaTrash/> </button>
                            </td>
                            <td>{s.status}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </>
              ) : (
                <p>No recent activity.</p>
              )}
            </div>
          </>
        ) : (
          <Spinner/>
        )}
      </div>

      <div className="content" id="userInfoContent" style={{ display: activeTab === 'userInfo' ? 'flex' : 'none' }}>
        <h1>Manage Profile <FaUser/></h1>
        <form name='update' onSubmit={update}>
          <div style={{display: 'flex'}}>
            <div id='labels'>
              <div className='input-label'>
                <label> User Name : </label>
              </div>
              <div className='input-label'>
                <label> First Name : </label>
              </div>
              <div className='input-label'>
                <label> Email : </label>
              </div>
              <div className='input-label'>
                <label> Contact No : </label>
              </div>
            </div>
            <div id='fields'>
              <input type='text' placeholder='User Name' value={user.first_name} disabled={!editable} name='user_name' onChange={handelChange}/>
              <input type='text' placeholder='First Name' value={user.user_name} disabled={!editable} name='first_name' onChange={handelChange}/>
              <input type='email' placeholder='Email' value={user.email} disabled={!editable} name='email' onChange={handelChange}/>
              <input type='Contact No.' placeholder='Contact No.' value={user.contact_no} disabled={!editable} name='contact_no' onChange={handelChange}/>
            </div>
          </div>
          <div>
            {!editable && <button className='btn' onClick={handelEdit}>Edit</button>}
            {editable && <button className='btn' type="submit">Save</button>}
          </div>
        </form>
      </div>

      <div className="content" id="analyticsContent" style={{ display: activeTab === 'analytics' ? 'flex' : 'none' }}>
        <h1>Analytics <FaChartPie/></h1>
        <div className="analytics">
          <div className="analytics-card" id="lineChart">
            <canvas id="lineChart" ref={lineChartRef}></canvas>
          </div>
          <div className="analytics-card" id="barChart">
            <canvas id="barChart" ref={barChartRef}></canvas>
          </div>
          <div className="analytics-card" id="pieChart">
            <canvas id="pieChart" ref={pieChartRef}></canvas>
          </div>
        </div>
      </div>

      <div className="content" id="rewardsContent" style={{ display: activeTab === 'rewards' ? 'flex' : 'none' }}>
          <div className="reward-card">
            {reward.map((r) => {
              return ( 
                <div className="rcard" key={r._id}>
                    <div className="rcard-image">
                      <img src={r.image_url} alt={r.name}/>
                    </div>
                    <div className="rcard-content">
                        <h2>{r.name}</h2>
                        <p>{r.description}</p>
                        <span className='points'>
                          Points : 
                            <span style={{ fontSize: 'xxx-large', color: user.score < r.points ? 'red' : 'green' }}>
                              {user.score}
                            </span>
                            {" / "}
                            <span>
                              {r.points}
                            </span>
                        </span>
                    </div>
                    <div style={{textAlign: "center"}}>
                        {r.claimed ? (
                          <p className="claimed">Claimed <FaAward style={{fontSize : "24px"}}/></p>
                        ) : (
                          <button className="btn" onClick={() => handelClaim(r._id, r.points)}>Claim Reward</button>
                        )}
                    </div>
                </div>
              )
            })}
          </div>
      </div>

    </>
  )
}

export default DashBoard

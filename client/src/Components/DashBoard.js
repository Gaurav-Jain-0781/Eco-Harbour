import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser, FaGift, FaChartPie, FaStar, FaShip, FaCheckCircle, FaFileImage, FaTrash } from 'react-icons/fa'
import { MdLogout, MdDashboard  } from "react-icons/md";
import { GoGoal } from 'react-icons/go'

const DashBoard = () => {
  const [ user, setUser ] = useState({})
  const [ editable, setEditable ] = useState(false)
  const [ activeTab, setActiveTab ] = useState('dashboard')
  const [ sail, setSail ] = useState(0)
  const [ image, setImage ] = useState(null)

  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/user/profile');
        setUser(data);

        const { data: sail } = await axios.get(`/record/${data._id}`);
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
      const response = await axios.put('/user/profile', {
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
      
      const { data: sail } = await axios.get(`/record/${user._id}`);
      setSail(sail);
      toast.success('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image.');
    }
  }

  const deleteSail = async (id) => {
    try{
      const response = await axios.delete(`/record/delete/${id}`);
      toast.success("Sail Deleted")

      const { data: sail } = await axios.get(`/record/${user._id}`);
      setSail(sail);
    } catch (error) {
      console.log(error)
      toast.error("Error in Sail Deletion")
    }
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
                        <th>Harbour</th>
                        <th>Date</th>
                        <th>Upload Proof</th>
                        <th>Delete Record</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sail.map((s) => {
                        return (
                          <tr key={s._id}>
                            <td> # </td>
                            <td>Harbour Name</td>
                            <td>{s.updatedAt.slice(0, 10)}</td>
                            <td>{s.image === "" ? (
                              <form onSubmit={(e) => handleSubmit(e, s._id)}>
                                <div id="file">
                                  <input type="file" onChange={handleFileChange} name='image'/>
                                  <button type="submit" className='btn'>Upload Image <FaFileImage/></button>
                                </div>
                              </form>
                            ) : (
                              <p className='proof'> Proof Uploaded </p>
                            )}</td>
                            <td>
                              <button className="btn delete" onClick={() => deleteSail(s._id)}>Delete Sail <FaTrash/> </button>
                            </td>
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
                <label> First Name : </label>
              </div>
              <div className='input-label'>
                <label> User Name : </label>
              </div>
              <div className='input-label'>
                <label> Password : </label>
              </div>
              <div className='input-label'>
                <label> Contact No : </label>
              </div>
            </div>
            <div id='fields'>
              <input type='text' placeholder='User Name' value={user.user_name} disabled={!editable} name='user_name' onChange={handelChange}/>
              <input type='text' placeholder='First Name' value={user.first_name} disabled={!editable} name='first_name' onChange={handelChange}/>
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

import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

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

export default DashBoard

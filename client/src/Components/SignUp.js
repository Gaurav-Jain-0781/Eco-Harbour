import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const SignUp = () => {
  const navigate = useNavigate()
  
  const handelClick = async () => {
    const email = document.getElementById('email').value
    
    try {
      const { data } = await axios.get('/user/profile')
      if(data._id){
        const { response } = await axios.post('', email)
        toast.success("Email Recorded Successfully")
      }
    } catch (error) {
      if(error.response.data.message === "Unauthorized User, No Token"){
        toast.warning("Please Login Before Register")
        navigate('/login')
      }
      if(error.response.data.message === "Not Found - /"){
        toast.success("Email Recorded Successfully")
      }
      if(error.response.data.message === "Error in Sail"){
        toast.error("Error in Sail")
      }
      else{
        console.log(error)
      }
    }
  }

  return (
    <section id='signup'>
      <h3>Sign Up for the Latest News and Technology Upadtes</h3>
      <div>
        <input id='email' type='email' placeholder='Your Email Address'/>
        <button className='btn' onClick={handelClick}>Sign Up</button>
      </div>    
    </section>
  )
}

export default SignUp

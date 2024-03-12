import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

const SignUp = () => {
  const handelClick = async () => {
    const email = document.getElementById('email').value

    try {
      const { response } = await axios.post('', email)
      toast.success("Email Recorded Successfully")
    } catch (error) {
      console.log(error)
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

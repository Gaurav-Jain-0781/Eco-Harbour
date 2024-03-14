import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
    const [password, setPassword] = useState(false)

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z'-]{2,30}( [a-zA-Z'-]{2,30})?$/;
        if(nameRegex.test(name)){
            return true
        }
        return false
    }

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailRegex.test(email)){
            return true
        }
        return false
    }

    const validatePassword = (password) => {
        return password.length >= 5  
    }

    const navigate = useNavigate()

    const handelSubmit = async (e) => {
        e.preventDefault()

        const user_name = document.forms["register"].name.value;
        const contact_no = document.forms["register"].phone.value;
        console.log(contact_no)
        const password = document.forms["register"].password.value;
        const cpassword = document.forms["register"].cpassword.value;
     
        if(user_name && contact_no && password && cpassword && (password === cpassword)){
            const user = {
                user_name, 
                contact_no, 
                password
            }
            
            try {
                const { data } = await axios.post('/user/', user)
                
                if(data._id){
                    toast.success("Registration successful")
                    navigate('/login')
                }
                else{
                    toast.success("Registration Failed")
                    console.log(data)
                }

            } catch (error) {
                
                if(error.response.data.message === 'Mobile No. already Exist'){
                    toast.error("Mobile No. Already Exist")
                }
                else if (error.response.data.message === 'Invalid User Data'){
                    toast.error("Invalid Data")
                }
                else{
                    toast.error("Registration Failed")
                    console.log(error)
                }

            }
        }
        else{
            toast.error("Please complete all fields.")
        }
    }


  return (
    <>
        <div className='registration'> 
            <img src='/images/registration.jpg' alt='registration page'></img>
        </div> 
        <div className="container">
            <div className='reg'>
                <h1>Join us Today</h1>
                <form name="register">
                    <div id='form-content'>
                        <div id='form-label'>
                            <label>First Name</label>
                            <label>Mobile No.</label>
                            <label>Password</label>
                            <label>Confirm Password</label>
                        </div>
                        <div id='form-input'>
                            <div>
                                <input type="text" placeholder="Enter your Name" required name='name'/>
                            </div>
                            <div>
                                <input type="text" placeholder="Enter your Mobile No." required name='phone'/>
                            </div>
                            <div style={{display: 'flex'}}>
                                <input type={password ? 'text' : 'password'} placeholder="Enter your Password" required name='password'/>
                                <i id='eye-reg' onClick={() => setPassword(!password)}>{password ? <FaEyeSlash/> : <FaEye/> }</i>
                            </div>
                            <div>
                                <input type="password" placeholder="Confirm your Password" required name='cpassword'/>
                            </div>                                
                        </div>
                    </div>                    
                    <button type="submit" className="btn" style={{width: '120px', margin: '20px'}} onClick={handelSubmit}>
                        Register
                    </button>
                </form>
                <div className="register">
                    <p>Already have an account ?<Link to="/login">Login</Link></p>
                </div>
            </div>
            <div className='wrapper'>
                <img src='/images/registration.jpg' alt='registration'></img>
            </div>
        </div>
    </>
  )
}

export default Register

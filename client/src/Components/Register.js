import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
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
        const email = document.forms["register"].email.value;
        const password = document.forms["register"].password.value;
        const cpassword = document.forms["register"].cpassword.value;
     
        if(user_name && email && password && cpassword && (password === cpassword)){
            const user = {
                user_name, 
                email, 
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
                }

            } catch (error) {
                
                if(error.response.data.message === 'User already Exist'){
                    toast.error("Email Already Exist")
                }
                else if (error.response.data.message === 'Invalid User Data'){
                    toast.error("Invalid Data")
                }
                else{
                    toast.error("Registration Failed")
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
                            <label>Email</label>
                            <label>Password</label>
                            <label>Confirm Password</label>
                        </div>
                        <div id='form-input'>
                            <input type="text" placeholder="Enter your name" required name='name'/>
                            <input type="email" placeholder="Enter your Email" required name='email'/>
                            <input type="password" placeholder="Enter your password" required name='password'/>
                            <input type="text" placeholder="Confirm your password" required name='cpassword'/>
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

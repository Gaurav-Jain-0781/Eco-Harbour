import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (    
    <div className="container">
        <div className='reg'>
            <h1>  Registration Form</h1>
            <form action="#">
                <div className="input-box">
                    <span className="details" details>First Name</span>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                    <span className="details" >Email</span>
                    <input type="email" placeholder="Enter your Email" required />
                </div>
                <div className="input-box">
                    <span className="details">Password</span>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <input type="text" placeholder="Confirm your password" required />
                </div>
                <input type="submit" value="Register" className="btn"/>
            </form>
            <div className="register">
                <p>Already have an account ?<Link to="/">Login</Link></p>
            </div>
        </div>
        <div className='wrapper'>
            <img src='/images/registration.jpg' alt='registration image'></img>
        </div>
    </div>
  )
}

export default Register

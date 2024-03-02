import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <div className='registration'> 
            <img src='/images/registration.jpg' alt='registration page'></img>
        </div> 
        <div className="container">
            <div className='reg'>
                <h1>  Registration Form</h1>
                <form action="#">
                    <div id='form-content'>
                        <div id='form-label'>
                            <label>First Name</label>
                            <label>Email</label>
                            <label>Password</label>
                            <label>Confirm Password</label>
                        </div>
                        <div id='form-input'>
                            <input type="text" placeholder="Enter your name" required />
                            <input type="email" placeholder="Enter your Email" required />
                            <input type="password" placeholder="Enter your password" required />
                            <input type="text" placeholder="Confirm your password" required />
                        </div>
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
    </>
  )
}

export default Register

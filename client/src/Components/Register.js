import React from 'react'

const Register = () => {
  return (    
    <div className="container">
        <form action="#">
            <div>
                <h1>  Registration Form</h1>
            </div>
            <div className="user-details" >
                <div className="input-box">
                    <span className="details" details>Full Name</span>
                    <br/>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                    <span className="details" >Username</span>
                    <br/>
                    <input type="text" placeholder="Enter your username" required />
                </div>
                <div className="input-box">
                    <span className="details" >Email</span>
                    <br/>
                    <input type="email" placeholder="Enter your Email" required />
                </div>
                <div className="input-box">
                    <span className="details">Phone Number</span>
                    <br/>
                    <input type="number" placeholder="Enter your number" required />
                </div>
                <div className="input-box">
                    <span className="details">Password</span>
                    <br/>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <br/>
                    <input type="password" placeholder="Confirm your password" required />
                </div>
            </div>
            <input type="submit" value="Register" className="button"/>
        </form>
    </div>
  )
}

export default Register

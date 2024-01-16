import React, { useState } from 'react'
import {FaEye, FaEyeSlash, FaUser} from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(false);

  return (
    <div id='login'>
        <div className='wrapper'>
            <h1>Login</h1>
            <div className="input">
                <input type="text" placeholder="Username" required onChange={(e) => setEmail(e.target.value)}/>
                <i id="user"><FaUser/></i>
            </div>
            <div className="input">
                <input type={password ? "text" : "password"} placeholder="Password" required/>
                <i id="eye"onClick={() => setPassword(!password)}>{password ? <FaEyeSlash/>: <FaEye/>}</i>
            </div>
            <div className="remember">
                <a href="#">Forgot Password ?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register">
                <p>Dont have an account ?<a href="#">Register</a></p>
            </div>
        </div>
    </div>
  )
}

export default Login

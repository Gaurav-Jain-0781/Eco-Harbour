import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {FaEye, FaEyeSlash, FaUser} from 'react-icons/fa';
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = ({ login, tooglelogin }) => {
    const [user_name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [eye, setEye] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            
            const response = await axios.post('user/auth', {
                user_name, 
                password
            })
            
            toast.success('Login Successful !')
            navigate('/')
        
        } catch (error){
            
            if(error.response.data.message === 'Invalid Email or Password'){
                toast.error("Invalid Email or Password")
            }
            else {
                toast.error("Login Failed")
                console.log("Login Failed", error)
            }
            
        }
    }

    if(login){
        return null
    }

    return (
        <div id='login-wrapper'>
            <div id='login'>
                <div className='wrapper'>
                    <img src='/images/login.jpg' alt='login'/>
                </div>
                <div style={{width: '45%', height: '100%'}}>
                    <form onSubmit={handleSubmit} name="login">
                        <h1>Login</h1>
                        <div className="input">
                            <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} value={user_name}/>
                            <i id="user"><FaUser/></i>
                        </div>
                        <div className="input">
                            <input type={eye ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <i id="eye" onClick={() => setEye(!eye)}>{eye ? <FaEyeSlash/>: <FaEye/>}</i>
                        </div>
                        <div className="remember">
                            <a href="#">Forgot Password ?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="register">
                            <p>Dont have an account ?<Link to="/regitration">Create One</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login

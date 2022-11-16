import "./login.css"
import React, { useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { login } from "../../authContext/apiCalls";
import { Link, useLocation } from "react-router-dom";

const Login = () => {

  const { state } = useLocation();
  const [email, setEmail] = useState(state ? state.registeredEmail.email : "");
  const [password, setPassword] = useState(state ? state.registeredPassword.password : "");

  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) =>{
    e.preventDefault();
    
    login({email, password}, dispatch);
  }

  
  console.log (state);

  return (
    <div className="login">
        <div className="loginWrapper">
          <h2>Log in</h2>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="email" required value={email} onChange= {(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button>Log in</button>
          </form>
          <Link to="/register" style={{display: "block"}}>Register</Link>
        </div>
    </div>
  )
}

export default Login
      

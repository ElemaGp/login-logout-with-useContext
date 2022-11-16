import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import "./register.css"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setEmail(emailRef.current.value);
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);

        try{
            await axios.post("auth/register", { email, username, password });
            navigate("/login",
            {
                state: {
                    registeredEmail:{email}, registeredPassword:{password}
                }
            });
        }catch(err){}

    }
        

  return (
    <div className='register'>
        <div className='registerWrapper'>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' required ref={emailRef} />
                <input type="password" placeholder='password' required ref={passwordRef} />
                <input type="username" placeholder='username' required ref={usernameRef} />
                <button>Sign Up</button>
            </form>
        </div>
        
    </div>
  )
}

export default Register
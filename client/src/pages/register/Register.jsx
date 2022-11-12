import React, { useRef, useState } from 'react'
import "./register.css"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setEmail(emailRef.current.value);
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);

    }
        

  return (
    <div className='register'>
        <div className='registerWrapper'>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' ref={emailRef} />
                <input type="password" placeholder='password' ref={passwordRef} />
                <input type="username" placeholder='username' ref={usernameRef} />
                <button>Sign Up</button>
            </form>
        </div>
        {email && <div>{email}</div>}
        {password && <div>{password}</div>}
        {username && <div>{username}</div>}
    </div>
  )
}

export default Register
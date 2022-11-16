import "./home.css"
import React from 'react'
import { useContext } from "react"
import { AuthContext } from "../../authContext/AuthContext"
import { logout } from "../../authContext/AuthActions"

const Home = () => {

  const {dispatch} = useContext(AuthContext);

  const handleLogout = ()=>{
    dispatch(logout());
  }
    
  return (
    <div className="home">
      <h1>This is the homepage</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home

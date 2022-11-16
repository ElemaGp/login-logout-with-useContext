import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

function App() {

const { user } = useContext(AuthContext);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="register" element={!user ? <Register /> : <Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Dashboard from './pages/Admin/Dashboard';
import Sidebar from './components/Sidebar';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Profile from './pages/client/Profile';
import Envoi from './components/clientcomponent/Envoi';
import Retrait from './components/clientcomponent/Retrait';
import Depot from './components/clientcomponent/Depot';
import Releve from './pages/client/Releve';
import Home from './pages/Home';
import Eror_404 from './pages/Eror_404';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const token = localStorage.getItem('token');
  return (
    <div className="App">
      <Navbar />
 
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={ token ? <Dashboard /> :<Login/>} />
          <Route path="/profile" element={token ? <Profile /> : <Login/> } />
          <Route path="/releve" element={ token ? <Releve /> : <Login/> } />
          <Route path="*" element={<Eror_404 />} />
        </Routes>
        <ToastContainer />

      </Router>

    </div>
  );
}

export default App;

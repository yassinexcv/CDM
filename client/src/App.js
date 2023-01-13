import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Dashboard from './pages/Admin/Dashboard';
import Sidebar from './components/Sidebar';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Profile from './pages/client/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
 
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

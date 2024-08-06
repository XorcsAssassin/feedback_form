import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Reg';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SalespersonDashboard from './pages/salesDashboard';
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/salesperson-Dashboard" element={<SalespersonDashboard/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;

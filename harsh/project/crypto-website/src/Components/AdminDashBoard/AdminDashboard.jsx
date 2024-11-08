// components/AdminDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../Dashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={() => navigate('/login')} className="logout-btn">
          Logout
        </button>
      </div>
      <div className="dashboard-content">
        <h2>Welcome to Admin Panel</h2>
        <p>This is the admin dashboard. You have full administrative access.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
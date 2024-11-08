// components/CustomerDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../Dashboard.css';

const CustomerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Customer Dashboard</h1>
        <button onClick={() => navigate('/login')} className="logout-btn">
          Logout
        </button>
      </div>
      <div className="dashboard-content">
        <h2>Welcome Customer</h2>
        <p>This is the customer dashboard. You have customer level access.</p>
      </div>
    </div>
  );
};

export default CustomerDashboard;
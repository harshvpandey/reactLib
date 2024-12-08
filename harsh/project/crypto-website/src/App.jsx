// App.jsx
import { Routes, Route } from 'react-router-dom'
import SignUp from './Components/SignUp'
import Login from './components/Login'
import AdminDashboard from './Components/AdminDashBoard/AdminDashboard'
import CustomerDashboard from './Components/CustomerDashboard/CustomerDashboard'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />


      {/* Demo direct access routes - REMOVE THESE TWO WHEN ADDING BACKEND */}
      <Route path="/demo-admin" element={<AdminDashboard />} />
      <Route path="/demo-customer" element={<CustomerDashboard />} />
      
      {/* Keep these protected routes for actual implementation */}
      {/* <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/customer" element={<CustomerDashboard />} /> */}
    </Routes>
  )
}

export default App
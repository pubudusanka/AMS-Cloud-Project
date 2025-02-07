import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserLogin from './UserLogin/UserLogin.jsx'
import AttendanceUser from './Attendance/AttendanceUser.jsx'
import QrGenerate from './QrGenerate/QrGenerate.jsx'
import UserReg from './UserReg/UserReg.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

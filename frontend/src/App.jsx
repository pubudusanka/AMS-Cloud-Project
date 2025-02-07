import './App.css'
import AttendanceUser from './Attendance/AttendanceUser'
import LectureLog from './LectureLogin/LectureLog'
import LectureReg from './LectureReg/LectureReg'
import Loader from './Loader'
import QrGenerate from './QrGenerate/QrGenerate'
import UserLogin from './UserLogin/UserLogin'
import UserReg from './UserReg/UserReg'
import Welcome from './WelcomePage/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/page1" element={<UserReg/>} />
                <Route path="/page2" element={<LectureReg/>} />

                <Route path="/page3" element={<UserLogin/>} />
                <Route path="/page4" element={<LectureLog/>} />

                <Route path="/page5" element={<QrGenerate/>} />
                <Route path="/page6" element={<AttendanceUser/>} />
            </Routes>
        </Router>
  )
}

export default App

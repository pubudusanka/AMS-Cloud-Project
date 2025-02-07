import image from '../assets/086f848c64263f1f6d8ac38474f103a4.png'
import './Welcome.css'
import logo from '../assets/image.png'
import student from '../assets/4196591.png'
import lecture from '../assets/lecture-2.png'
import { useNavigate } from 'react-router-dom';

function Welcome () {

  const navigate = useNavigate();

  const handleImageClick = (page) => {
    navigate(`/${page}`);
};


    return(
        <div className="login-container">
            <div className="left-side">
            <div className="logo-container">
            <img src={image} alt="Graduation Cap" className="logo" />
            </div>
            <h2>Student Attendance System</h2>
            </div>
            <div className="right-side">
        <div className="user-icon-container">
        <img src={logo} alt="user-image" className='user-icon' />
        </div>
        <h2>Welcome Back</h2>
        <div className="hyperlink-images">

          <a href='/page1'>
            <img src={student} alt="Hyperlink 1" className="hyperlink-image" onClick={ () => handleImageClick('page1')} />
            <h3>Login as Student</h3>
          </a>

          <a href='/page2'>
          <img src={lecture} alt="Hyperlink 2" className="hyperlink-image" onClick={ () => handleImageClick('page2')} />
          <h3>Login as Lecturere</h3>
          </a>
        </div>
      </div>
        </div>
    );

}
export default Welcome
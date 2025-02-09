import './AttendanceUser.css'
import profilePic from '../assets/4196591.png'
import qr from '../assets/Fake_QR_Code.jpg'


function AttendanceUser () {
    return(
        <div>
            <div className="card1">
            </div>
            <div>
            <img className='card-image1' src={profilePic} alt="profile pricture" />
            </div>
            <div>
            <img src={qr} alt="qr code" className='qr-code1' />
            </div>
            <div>
            <h2 className='card-title1'>Scan the QR</h2>
            </div>
        </div>
    );
}
export default AttendanceUser
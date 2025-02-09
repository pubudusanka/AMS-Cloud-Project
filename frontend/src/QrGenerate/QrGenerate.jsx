import "./QrGenerate.css"
import logo from "../assets/lecture-2.png"
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function QrGenerate () {

    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate();

    const handleNavigation = (page) => {
        Swal.fire("QR Generation Successfully");
        navigate(`/${page}`);
    };

    useEffect (() => {
        setIsLoading(false)
    }); 

    return(
        <div>
            {
                isLoading ? (
                    <div className='loader'>
                        <Circles
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        />
                    </div>
                ) :
                <div className="card">
                <img className='card-image' src={logo} alt="profile pricture" />
                <h2 className='card-title'>QR Code Generating System</h2>
                <div className='box-root' style={{backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: '1'}}>
                <form style={{ border: '1px solid #000', padding: '20px', margin: '20px', borderRadius: '5px' }}>
                    <input className='name' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Lecture ID' />
                    <input className='regNumber' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Subject Name'  />
                    <input className='telNumber' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Date'  />
                    <input className='email' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Your Email Here' />
                    <input className='password' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Time'/>
                    <Button  className='button' variant="contained" color="success" onClick={ () => handleNavigation('page6')}> Generate QR Code </Button>
                </form>
                </div>
            </div>
            }
        </div>
            
    );
}
export default QrGenerate
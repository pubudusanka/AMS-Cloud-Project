import './LectureReg.css'
import * as React from 'react';
import logo from '../assets/image.png'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


function LectureReg () {

    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate();

    const handleNavigation = (page) => {
        navigate(`/${page}`);
    };

    useEffect (() => {
        setIsLoading(false)
    });

    const [name,setName] = useState("");
    const [regNumber,setReg] = useState("");
    const [telNumber,setTel] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleName = (event) =>{
        setName(event.target.value);
    }
    const handleReg = (event) =>{
        setReg(event.target.value);
    }
    const handleTel = (event) =>{
        setTel(event.target.value);
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }


    const handleClick = (event) => {
        event.preventDefault();
        const user = { name, regNumber, telNumber, email, password };
        console.log(user);
    
        fetch("http://localhost:8080/lecture/savelecture", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Student saved:", data);
            Swal.fire("Registration Successfully");
            handleNavigation('page4');
        })
        .catch(error => {
            console.error("There was an error!", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User not Registered!",
              });
        });
    };
    

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
                <h2 className='card-title'>Attendance Marking System</h2>
                <div className='box-root' style={{backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: '1'}}>
                <form style={{ border: '1px solid #000', padding: '20px', margin: '20px', borderRadius: '5px' }}>
                    <input className='name' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Your Name Here' onChange={handleName} value={name} />
                    <input className='regNumber' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Registration Number Here' onChange={handleReg} value={regNumber} />
                    <input className='telNumber' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Mobile Number Here' onChange={handleTel} value={telNumber} />
                    <input className='email' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Your Email Here' onChange={handleEmail} value={email} />
                    <input className='password' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Your Password Here' onChange={handlePassword} value={password} />
                    <Button onClick={handleClick} className='button' variant="contained" color="success"> Sign Up </Button>
                </form>
                </div>
            </div>
            }
        </div>
        
                

    );
}
export default LectureReg
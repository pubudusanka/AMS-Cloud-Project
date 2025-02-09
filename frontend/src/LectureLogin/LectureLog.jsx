import './LectureLog.css'
import * as React from 'react';
import logo from '../assets/image.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


function LectureLog () {

    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const handleNavigation = (page) => {
        navigate(`/${page}`);
    };


    useEffect (() => {
        setIsLoading(false)

        fetch("http://localhost:8080/lecture/getlecture",{
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            const filterData = data.map(user => ({
                email: user.email,
                password: user.password
            }));
            setUsers(filterData);
            console.log(filterData);
        })
        }, []);

    const handleClick = (event) => {
        event.preventDefault();
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            console.log("Logged");
            Swal.fire("Logging Successfully");
            handleNavigation('page5');

        }else{
            console.log("Invalid email or password");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email or Password is Wrong!",
              });
        }
    }

    const [email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

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

                <input className='email' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Your Email Here' onChange={handleEmail} value={email}/>
                <input className='password' type="text" name="name" style={{ display: 'block', margin: '10px 0' }} placeholder='Enter Your Password Here' onChange={handlePassword} value={password} />
                <Button onClick={handleClick} className='button' variant="contained" color="success"> Log In </Button>
            </form>
            </div>
        </div>
            }
        </div>
        
    );
}
export default LectureLog
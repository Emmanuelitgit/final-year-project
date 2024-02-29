import React from 'react';
import "./style.css"
import { Mail, Lock, Visibility, Key, Password } from '@mui/icons-material';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { friendOptions } from '../../utils/Data';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"



const Login = () => {

  const navigate = useNavigate()

  const [value, setValue] = useState({
    email:'',
    Password:'',
    role:''
  });

  const [err, setErr] = useState();
  const [successMessage, setSuccessMessage] = useState()

  const handleChange = (e, data) => {
    const { name, value } = data || e.target; 
  
    setValue(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  };
  
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", value);
  
      if (response.status === 200) {
        const { role } = response.data.data[0]; 
        const {name} = response.data.data[0];
        const {token} = response.data.token;

        localStorage.setItem("role", role);
        localStorage.setItem("user", name);
        localStorage.setItem("token", token);
        
        if (role === 'Admin') {
          navigate("/admin/dashboard");
        } else if (role === 'Doctor') {
          navigate("/doctor/dashboard");
        }else if (role === 'Nurse') {
          navigate("/nurse/dashboard");
        }else if (role === 'Pharmacist') {
          navigate("/pharmacist/dashboard");
        }else if (role === 'Accountant') {
          navigate("/accountant/dashboard");
        }else if (role === 'Laboratorist') {
          navigate("/laboratorist/dashboard");
        }
      }
    } catch (error) {
      if (error.response.status === 404) {
        console.log("user not found")
      }
    }
  };
  
  


  return (
    <div className='login-container'>
      <div className="input-container">
        <div className='panel-bar'>
          <h3 className='panel-title-text'>Login Panel</h3>
        </div>
        <div className="dropdown-input">
          <Dropdown
            placeholder='Select Role'
            fluid
            selection
            search
            options={friendOptions}
            style={{ border:'1px solid black' }}
            name="role"
            onChange={handleChange} 
          />
        </div>
        <div className="input-field">
          <Mail/>
          <input type="email" 
          className='input' 
          placeholder='Email Address' 
          name="email"
          onChange={handleChange}
          autoComplete="true"
          />
        </div>
        <div className="input-field">
          <Lock/>
          <input type="password" 
          className='input' 
          placeholder='Password'
          name="password"
          onChange={handleChange}
          autoComplete="true"
          />
          <Visibility 
             style={{
              marginRight:"6px",
              fontSize:'20px'}}
          />
        </div>
        <div className="button-container">
          <input type="submit" 
          title='Sigin' 
          className='button' 
          onClick={handleLogin} 
          />
        </div>
        <p className='copyright'>@2024 Clinic Management System. Developed by Emmanuel Yidana</p>
      </div>
    </div>
  )
}

export default Login;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth';
import { Logout } from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom"


const LogoutBtn = ({visible}) => {

  const navigate = useNavigate()

  const dispatch = useDispatch();

   const handleLogout = () =>{
    dispatch(logout());
    navigate("/login")
  }

  return (
    <div className='logout-container' 
     onClick={handleLogout}
     style={{marginTop: visible ? "300px" : "0px"}}
    >
      <Logout className='sidebar-icon'/>
      <span className='logout'>Logout</span>
    </div>
  )
}

export default LogoutBtn
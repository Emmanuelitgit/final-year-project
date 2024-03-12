import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth';
import { Logout } from '@mui/icons-material';

const LogoutBtn = ({visible}) => {

  console.log(visible)
  const dispatch = useDispatch();

   const handleLogout = () =>{
    dispatch(logout())
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
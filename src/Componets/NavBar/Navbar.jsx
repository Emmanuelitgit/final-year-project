import React from 'react';
import "./style.css";
import { 
       Menu,
       Notifications, 
       Message, 
       ArrowDropDown } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Panelbar from '../Panelbar/Panelbar';

const Navbar = () => {

   const role = localStorage.getItem("role");
   const user = localStorage.getItem("user");

  return (
    <div className='navbar-container'>
      <div className='menu-title-container'>
         <Menu className='menu-icon'/>
            <span className='navbar-title'>CLINIC SERVICE MANAGEMENT SYSTEM - </span> <span className='zangu'>ZANGU-VUGA</span>
      </div>
      <div className='panel-type-container'>
         <h4 className='panel-type-text'>{role} Panel</h4>
      </div>
      <div className='nav-profile-container'>
          <Badge badgeContent={4} color="primary" className='icons'>
              <MailIcon color="action" className='profile-icon' style={{color:'white'}} />
         </Badge>
         <Badge badgeContent={4} color="primary" className='icons'>
              <NotificationsIcon color="action" className='profile-icon' style={{color:'white'}} />
         </Badge>
         <div className='user-profile-container'>
            <img 
            className='nav-profile-img'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&usqp=CAU" alt="" />
            <span className='user-name'>{user}</span>
            <ArrowDropDown className='dropdown-icon'/>
         </div>
      </div>
      {/* <Panelbar/> */}
    </div>
  )
}

export default Navbar
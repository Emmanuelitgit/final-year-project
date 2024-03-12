import React from 'react';
import "./style.css";
import { Dashboard,Person, Money, AccountBalance } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import LogoutBtn from '../Buttons/LogoutBtn';


const AccountantSidebar = () => {

  return (
    <div className='sidebar-container'>
      <div className='sidebar-items-container'>
        <div className='item'>
          <Link to={"/accountant/dashboard"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Dashboard</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/accountant/invoice-list"}>
          <Money className='sidebar-icon'/>
          <span className='item-name'>Invoice/Take Payment</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/accountant/payment-list"}>
          <AccountBalance className='sidebar-icon'/>
          <span className='item-name'>View Payment</span>
          </Link>
        </div>
        <div className='item'>
         <Link to={"/accountant/profile"}>
         <Person className='sidebar-icon'/>
         <span className='item-name'>Profile</span>
         </Link>
        </div>
      </div>
      <LogoutBtn/>
    </div>
  )
}

export default AccountantSidebar;
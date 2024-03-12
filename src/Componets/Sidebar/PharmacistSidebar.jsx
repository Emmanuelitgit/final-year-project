import React from 'react';
import "./style.css";
import { Dashboard,
        Logout, 
        Settings, 
        Person, 
        Science, 
        LocalPharmacy,
        MedicalServices,
        PeopleAlt,
        Bloodtype,
        ArrowDropDown,
        PersonAdd,
        Healing } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import LogoutBtn from '../Buttons/LogoutBtn';


const PharmacistSidebar = () => {

  return (
    <div className='sidebar-container'>
      <div className='sidebar-items-container'>
        <div className='item'>
          <Link to={"/pharmacist/dashboard"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Dashboard</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/pharmacist/medicine-category"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Medicine Category</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/pharmacist/medicine-list"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Manage Medicine</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/pharmacist/prescription-list"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Provide Medication</span>
          </Link>
        </div>
        <div className='item'>
         <Link to={"/pharmacist/profile"}>
         <Person className='sidebar-icon'/>
         <span className='item-name'>Profile</span>
         </Link>
        </div>
      </div>
      <LogoutBtn/>
    </div>
  )
}

export default PharmacistSidebar;
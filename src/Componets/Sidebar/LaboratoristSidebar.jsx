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


const LaboratoristSidebar = () => {

  return (
    <div className='sidebar-container'>
      <div className='sidebar-items-container'>
        <div className='item'>
          <Link to={"/laboratorist/dashboard"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Dashboard</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/laboratorist/request-list"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Add Diagnosis Report</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/laboratorist/blood-bank"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Manage Blood Bank</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/laboratorist/blood-donor"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Manage Blood Donor</span>
          </Link>
        </div>
        <div className='item'>
         <Link to={"/laboratorist/profile"}>
         <Person className='sidebar-icon'/>
         <span className='item-name'>Profile</span>
         </Link>
        </div>
      </div>
      <LogoutBtn/>
    </div>
  )
}

export default LaboratoristSidebar;
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


const RadiographerSidebar = () => {

  return (
    <div className='sidebar-container'>
      <div className='sidebar-items-container'>
        <div className='item'>
          <Link to={"/radiographer/dashboard"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Dashboard</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/radiographer/request-list"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Add Diagnosis Report</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/radiographer/scan-reports"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>View Reports</span>
          </Link>
        </div>
        <div className='item'>
         <Link to={"/radiographer/profile"}>
         <Person className='sidebar-icon'/>
         <span className='item-name'>Profile</span>
         </Link>
        </div>
      </div>
      <LogoutBtn/>
    </div>
  )
}

export default RadiographerSidebar;
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


const NurseSidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-items-container'>
        <div className='item'>
          <Link to={"/nurse/dashboard"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Dashboard</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/nurse/patient"}>
          <PersonAdd className='sidebar-icon'/>
          <span className='item-name'>Manage Patient</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/nurse/vital-list"}>
          <PersonAdd className='sidebar-icon'/>
          <span className='item-name'>Manage Vitals</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/nurse/appointment"}>
          <Healing className='sidebar-icon'/>
          <span className='item-name'>Manage Appointment</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/nurse/bed-allotment-list"}>
          <PeopleAlt className='sidebar-icon'/>
          <span className='item-name'>Bed Allotment</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/nurse/bed-list"}>
          <PeopleAlt className='sidebar-icon'/>
          <span className='item-name'>View Bed List</span>
          </Link>
        </div>
        <div className='item'>
         <Link to={"/nurse/blood-bank"}>
         <MedicalServices className='sidebar-icon'/>
         <span className='item-name'>View Blood Bank</span>
         </Link>
        </div>
        <div className='item'>
         <Link to={"/nurse/blood-donor-list"}>
         <MedicalServices className='sidebar-icon'/>
         <span className='item-name'>Manage Blood Donor</span>
         </Link>
        </div>
        <div className='item'>
          <Link to={"/nurse/birth-report"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Birth Report</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/nurse/death-report"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Death Report</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/nurse/operation-report"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Operation Report</span>
          </Link>
        </div>
        <div className='item'>
         <Link to={"/nurse/profile"}>
         <Person className='sidebar-icon'/>
         <span className='item-name'>Profile</span>
         </Link>
        </div>
      </div>
      <div className='logout-container'>
        <Logout className='sidebar-icon'/>
        <span className='logout'>Logout</span>
      </div>
    </div>
  )
}

export default NurseSidebar;
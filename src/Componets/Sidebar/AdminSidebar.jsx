import React from 'react';
import "./style.css";
import { Dashboard,
        Share, 
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

const AdminSidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-items-container'>
        <div className='item'>
          <Link to={"/admin/dashboard"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Dashboard</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/admin/department"}>
          <PersonAdd className='sidebar-icon'/>
          <span className='item-name'>Department</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/admin/patient"}>
          <Healing className='sidebar-icon'/>
          <span className='item-name'>Patient</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/doctor"}>
          <PeopleAlt className='sidebar-icon'/>
          <span className='item-name'>Doctor</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/nurse"}>
          <MedicalServices className='sidebar-icon'/>
          <span className='item-name'>Nurse</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/pharmacist"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Pharmacist</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/laboratorist"}>
          <Science className='sidebar-icon'/>
          <span className='item-name'>Laboratorist</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/radiographer"}>
          <Bloodtype className='sidebar-icon'/>
          <span className='item-name'>Radiographer</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/accountant"}>
          <Bloodtype className='sidebar-icon'/>
          <span className='item-name'>Accountant</span></Link>
        </div>
        <div className='item'>
          <Healing className='sidebar-icon'/>
          <span className='item-name'>Monitor Hospiatl</span>
          <ArrowDropDown className='sidebar-icon'/>
        </div>
        <div className='item'>
          <Link to={"/admin/settings"}>
          <Settings className='sidebar-icon'/>
          <span className='item-name'>Settings</span></Link>
          <ArrowDropDown className='sidebar-icon'/>
        </div>
        <div className='item'>
          <Link to={"/admin/profile"}>
          <Person className='sidebar-icon'/>
          <span className='item-name'>Profile</span></Link>
        </div>
      </div>
      <div className='logout-container'>
        <Logout className='sidebar-icon'/>
        <span className='logout'>Logout</span>
      </div>
    </div>
  )
}

export default AdminSidebar
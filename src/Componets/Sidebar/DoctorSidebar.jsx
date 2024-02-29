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


const DoctorSidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-items-container'>
        <div className='item'>
          <Link to={"/doctor/dashboard"}>
          <Dashboard className='sidebar-icon'/>
          <span className='item-name'>Dashboard</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/doctor/patient"}>
          <PersonAdd className='sidebar-icon'/>
          <span className='item-name'>Patient</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/doctor/appointment"}>
          <Healing className='sidebar-icon'/>
          <span className='item-name'>Manage Appointment</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/doctor/bed-allotment-list"}>
          <PeopleAlt className='sidebar-icon'/>
          <span className='item-name'>Bed Allotment</span>
          </Link>
        </div>
        <div className='item'>
         <Link to={"/doctor/blood-bank"}>
         <MedicalServices className='sidebar-icon'/>
         <span className='item-name'>View Blood Bank</span>
         </Link>
        </div>
        <div className='item'>
          <Link to={"/doctor/lab-request"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Lab Request</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/doctor/lab-result"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Lab Result</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/doctor/prescription-list"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Manage Prescription</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/doctor/birth-report"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Birth Report</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/doctor/death-report"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Death Report</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/doctor/operation-report"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Operation Report</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/doctor/profile"}>
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

export default DoctorSidebar
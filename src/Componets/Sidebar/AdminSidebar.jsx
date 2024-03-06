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
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react';
import { useState } from 'react';
import { Collapse } from '@mui/material';

const AdminSidebar = () => {

  const [visible, setVisible] = useState(false)
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
          <Settings className='sidebar-icon'/>
          <span onClick={() => setVisible(!visible)} className='item-name'>Monitor Hospital</span>
          <ArrowDropDown className='sidebar-icon'/>
        </div>
        <Collapse 
           in={visible} className='dropdown-items-container'
           timeout={"auto"}
           unmountOnExit
           easing="easeInOut"
        >
          <div className="dropdown-items">
          <Link to={"/admin/appointment-list"}>
          <Bloodtype className='sidebar-icon'/>
          <span className='item-name'>View Appointment</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/payment"}>
          <Bloodtype className='sidebar-icon'/>
          <span className='item-name'>View Payment</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/bed-allotment-list"}>
          <Bloodtype className='sidebar-icon'/>
          <span className='item-name'>View Bed Allotment</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/medicine-list"}>
          <Bloodtype className='sidebar-icon'/>
          <span className='item-name'>View Medicine</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/blood-bank"}>
          <Bloodtype className='sidebar-icon'/>
          <span className='item-name'>View Blood Bank</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/birth-report"}>
          <Bloodtype className='sidebar-icon'/>
          <span className='item-name'>View Birth Report</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/death-report"}>
          <Bloodtype className='sidebar-icon'/>
          <span className='item-name'>View Death Report</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/operation-report"}>
          <Bloodtype className='sidebar-icon'/>
          <span className='item-name'>View Operation Report</span>
          </Link>
          </div>
        </Collapse>
        <div className='item' style={{marginTop: visible ? "300px" : "0px"}}>
         <Link to={"/admin/settings"}>
         <Settings className='sidebar-icon'/>
          <span className='item-name'>Settings</span>
         </Link>
        </div>
        <div className='item'>
          <Link to={"/admin/profile"}>
          <Person className='sidebar-icon'/>
          <span className='item-name'>Profile</span></Link>
        </div>
      </div>
      <div className='logout-container' style={{paddingTop: visible ? "295px" : "10px"}}>
        <Logout className='sidebar-icon'/>
        <span className='logout'>Logout</span>
      </div>
    </div>
  )
}

export default AdminSidebar
import React from 'react';
import "./style.css";
import { Dashboard,
        Share, Logout, Settings, Person, Science, LocalPharmacy,MedicalServices,PeopleAlt,
        Bloodtype,ArrowDropDown,PersonAdd,Healing, Payment, Bed, ChildCare,
        MedicalInformation,} from '@mui/icons-material';
import  LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import AddCardIcon from '@mui/icons-material/AddCard';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Collapse } from '@mui/material';
import LogoutBtn from '../Buttons/LogoutBtn';


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
          <Link to={"/admin/department-list"}>
          <PersonAdd className='sidebar-icon'/>
          <span className='item-name'>Department</span>
          </Link>
        </div>
        <div className='item'>
          <Link to={"/admin/patient-list"}>
          <Healing className='sidebar-icon'/>
          <span className='item-name'>Patient</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/doctor-list"}>
          <PeopleAlt className='sidebar-icon'/>
          <span className='item-name'>Doctor</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/nurse-list"}>
          <MedicalServices className='sidebar-icon'/>
          <span className='item-name'>Nurse</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/pharmacist-list"}>
          <LocalPharmacy className='sidebar-icon'/>
          <span className='item-name'>Pharmacist</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/laboratorist-list"}>
          <Science className='sidebar-icon'/>
          <span className='item-name'>Laboratorist</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/radiographer-list"}>
          <MonitorWeightIcon className='sidebar-icon'/>
          <span className='item-name'>Radiographer</span></Link>
        </div>
        <div className='item'>
          <Link to={"/admin/accountant-list"}>
          <AddCardIcon className='sidebar-icon'/>
          <span className='item-name'>Accountant</span></Link>
        </div>
        <div className='item'>
          <AddToQueueIcon className='sidebar-icon'/>
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
          <Healing className='sidebar-icon'/>
          <span className='item-name'>View Appointment</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/payment-list"}>
          <Payment className='sidebar-icon'/>
          <span className='item-name'>View Payment</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/bed-allotment-list"}>
          <Bed className='sidebar-icon'/>
          <span className='item-name'>View Bed Allotment</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/medicine-list"}>
          <LocalHospitalIcon className='sidebar-icon'/>
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
          <ChildCare className='sidebar-icon'/>
          <span className='item-name'>View Birth Report</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/death-report"}>
          <MedicalInformation className='sidebar-icon'/>
          <span className='item-name'>View Death Report</span>
          </Link>
          </div>
          <div className="dropdown-items">
          <Link to={"/admin/operation-report"}>
          <ContentCutIcon className='sidebar-icon'/>
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
        <LogoutBtn visible={visible}/>
    </div>
  )
}

export default AdminSidebar
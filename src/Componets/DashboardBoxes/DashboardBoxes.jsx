import React from 'react'
import "./style.css";
import { Person } from '@mui/icons-material'

const DashboardBoxes = () => {
  return (
    <div className='boxes-container'>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Doctor</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Nurse</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Patient</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Pharmacist</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Laboratorist</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Accountant</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Radiographer</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Appointment</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Blood Bank</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Medicine</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Operation Report</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Birth Report</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Death Report</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Bed Allotment</span>
            <span className='role-value'>15</span>
        </div>
        <div className="box">
            <Person className='role-icon'/>
            <span className='role-name'>Notice Board</span>
            <span className='role-value'>15</span>
        </div>
        <div className="horizontal-line"></div>
        <div className="footer-text-container">
        <span className='footer-text'>@2024 Clinic Management System. Developed by Emmanuel Yidana</span>
        </div>
    </div>
  )
}

export default DashboardBoxes
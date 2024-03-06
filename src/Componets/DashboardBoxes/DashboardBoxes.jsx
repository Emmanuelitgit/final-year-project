import React from 'react'
import "./style.css";
import { Person } from '@mui/icons-material'
import { adminBoxes } from '../../utils/Data';
import { doctorBoxes } from '../../utils/Data';
import { nurseBoxes } from '../../utils/Data';


const DashboardBoxes = () => {

    const role = localStorage.getItem("role");

  return (
    <div className=''>
        {role === "Admin" &&
        <div className='boxes-container'>
            {adminBoxes.map((box)=>(
            <div className="box" key={box.id} style={{backgroundColor:box.background}}>
            <img src={box.image} alt="" className='box-img'/>
            <span className='role-name'>{box.name}</span>
        </div>
        ))}
        </div>
        }

       {role === "Doctor" &&
       <div className='boxes-container'>
        {doctorBoxes.map((box)=>(
            <div className="box" key={box.id} style={{backgroundColor:box.background}}>
            <img src={box.image} alt="" className='box-img'/>
            <span className='role-name'>{box.name}</span>
        </div>
        ))}
       </div>
       }

       {role === "Nurse" &&
       <div className='boxes-container'>
        {nurseBoxes.map((box)=>(
            <div className="box" key={box.id} style={{backgroundColor:box.background}}>
            <img src={box.image} alt="" className='box-img'/>
            <span className='role-name'>{box.name}</span>
        </div>
        ))}
       </div>
       }

        <div className="horizontal-line"></div>
        <div className="footer-text-container">
        {/* <span className='footer-text'>@2024 Clinic Management System. Developed by Emmanuel Yidana</span> */}
        </div>
    </div>
  )
}

export default DashboardBoxes
import React from 'react'
import "./style.css";
import { Person } from '@mui/icons-material'
import { accountantBoxes, adminBoxes } from '../../utils/Data';
import { doctorBoxes } from '../../utils/Data';
import { nurseBoxes } from '../../utils/Data';
import { pharmacistBoxes } from '../../utils/Data';
import { LaboratoristBoxes } from '../../utils/Data';
import { radiographerBoxes } from '../../utils/Data';


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

       {role === "Pharmacist" &&
       <div className='boxes-container'>
        {pharmacistBoxes.map((box)=>(
            <div className="box" key={box.id} style={{backgroundColor:box.background}}>
            <img src={box.image} alt="" className='box-img'/>
            <span className='role-name'>{box.name}</span>
        </div>
        ))}
       </div>
       }

       {role === "Laboratorist" &&
       <div className='boxes-container'>
        {pharmacistBoxes.map((box)=>(
            <div className="box" key={box.id} style={{backgroundColor:box.background}}>
            <img src={box.image} alt="" className='box-img'/>
            <span className='role-name'>{box.name}</span>
        </div>
        ))}
       </div>
       }   

       {role === "Accountant" &&
       <div className='boxes-container'>
        {accountantBoxes.map((box)=>(
            <div className="box" key={box.id} style={{backgroundColor:box.background}}>
            <img src={box.image} alt="" className='box-img'/>
            <span className='role-name'>{box.name}</span>
        </div>
        ))}
       </div>
       }

      {role === "Radiographer" &&
       <div className='boxes-container'>
        {radiographerBoxes.map((box)=>(
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
import React from 'react'
import "./style.css"
import ManageProfile from './ManageProfile';

const Profile = () => {
    const role = localStorage.getItem("role");
    const user = localStorage.getItem("user");

  return (
    <div className='profile-container'>
        <div className="profile-img-container">
          <img 
            className='profile-img'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&usqp=CAU" alt="" />
        </div>
        <div className="profile-info-container">
            <div className="info-items">
            <span className='profile-title'>Name:</span> 
            <span className='profile-title-value'>{user} Yidana</span>
            </div>
            <div className='info-items'>
            <span className='profile-title'>Email:</span>
            <span className='profile-title-value'>eyidana001@gmail.com</span>
            </div>
            <div className="info-items">
            <span className='profile-title'>Phone:</span>
            <span className='profile-title-value'>0597893082</span>
            </div>
            <div className="info-items">
            <span className='profile-title'>Address:</span>
            <span className='profile-title-value'>University of Ghana, legon</span>
            </div>
            <div className="info-items">
            <span className='profile-title'>Role:</span>
            <span className='profile-title-value'>Medical Doctor</span>
            </div>
           <div className='info-items'>
           {role === "Doctor" && 
           <span className='profile-title'>Department:</span>
           }
           {role === "Doctor" &&
           <span className='profile-title-value'>Public Health </span> 
           }
           </div>
        </div>
        <div className="profile-update-btn-container">
         <ManageProfile
         name={"Profile"}
         />
        </div>
    </div>
  )
}

export default Profile
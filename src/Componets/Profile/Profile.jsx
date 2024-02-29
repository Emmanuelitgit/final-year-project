import React from 'react'
import "./style.css"

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
            <h4 className='profile-title'>Name:</h4> 
            <span className='profile-title-value'>{user} Yidana</span>
            </div>
            <div className='info-items'>
            <h4 className='profile-title'>Email:</h4>
            <span className='profile-title-value'>eyidana001@gmail.com</span>
            </div>
            <div className="info-items">
            <h4 className='profile-title'>Phone:</h4>
            <span className='profile-title-value'>0597893082</span>
            </div>
            <div className="info-items">
            <h4 className='profile-title'>Address:</h4>
            <span className='profile-title-value'>University of Ghana, legon</span>
            </div>
            <div className="info-items">
            <h4 className='profile-title'>Role:</h4>
            <span className='profile-title-value'>Medical Doctor</span>
            </div>
           <div className='info-items'>
           {role === "Doctor" && <h4 className='profile-title'>Department:</h4>}
           <span className='profile-title-value'>Public Health </span>
           </div>
        </div>
        <div className="profile-update-btn-container">
        <button className='profile-update-btn'>Update Profile</button>
        </div>
    </div>
  )
}

export default Profile
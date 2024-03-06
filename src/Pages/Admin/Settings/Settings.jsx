import React from 'react'
import ManageSettings from './ManageSettings';


const Settings = () => {
  return (
    <div className='settings-container'>
      <div className='setting-item'>
        <div className="setting-title">
        <span >Sytem Name:</span>
        </div>
       <div className="setting-value">
       <span>Clinic Management System</span>
       </div>
      </div>
      <div className='setting-item'>
        <span className='setting-title'>Sytem Email:</span>
        <span className='setting-value'>eyidana001@gmail.com</span>
      </div>
      <div className='setting-item'>
        <span className='setting-title'>Address:</span>
        <span className='setting-value'>Zangu-vuga, walewale, N/E</span>
      </div>
      <div className='setting-item'>
        <span className='setting-title'>Phone:</span>
        <span className='setting-value'>+233597893082</span>
      </div>
      <div className='setting-item'>
        <span className='setting-title'>Currency:</span>
        <span className='setting-value'>GHC</span>
      </div>
      <div className='setting-item'>
        <span className='setting-title'>Language:</span>
        <span className='setting-value'>English</span>
      </div>
      <div className='setting-item-btn'>
        <ManageSettings
        name={"System"}
        />
      </div>
    </div>
  )
}

export default Settings
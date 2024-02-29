import React from 'react'
import "./style.css";

const Panelbar = () => {
  return (
    <div className='panel-main-container'>
    <div className='panel-container'>
        <div className='panel-type-container'>
            <h4 className='panel-type-name'>Dashboard</h4>
        </div>
        <div className='panels-container'>
            <div className='panel-name-container'>
                <span className='panel-name'>Doctor</span>
                <span className='panel-value'>16</span>
            </div>
            <div className="vertical-line"></div>
            <div className='panel-name-container'>
                <span className='panel-name'>Nurse</span>
                <span className='panel-value'>16</span>
            </div>
            <div className="vertical-line"></div>
            <div className='panel-name-container'>
                <span className='panel-name'>Pharmacist</span>
                <span className='panel-value'>16</span>
            </div>
            <div className="vertical-line"></div>
            <div className='panel-name-container'>
                <span className='panel-name'>Laboratorist</span>
                <span className='panel-value'>16</span>
            </div>
            <div className="vertical-line"></div>
            <div className='panel-name-container'>
                <span className='panel-name'>Radiographer</span>
                <span className='panel-value'>16</span>
            </div>
            <div className="vertical-line"></div>
            <div className='panel-name-container'>
                <span className='panel-name'>Accountant</span>
                <span className='panel-value'>16</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Panelbar
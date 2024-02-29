import React from 'react';
import Navbar from "../NavBar/Navbar";
import DoctorSidebar from "../Sidebar/DoctorSidebar"
import Panelbar from '../Panelbar/Panelbar';

const DoctorNavs = () => {
  return (
    <div>
      <Navbar/>
      <Panelbar/>
      <DoctorSidebar/>
    </div>
  )
}

export default DoctorNavs
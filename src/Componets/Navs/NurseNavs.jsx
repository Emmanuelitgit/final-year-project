import React from 'react';
import Navbar from "../NavBar/Navbar";
import Panelbar from '../Panelbar/Panelbar';
import NurseSidebar from '../Sidebar/NurseSidebar';

const NurseNavs = () => {
  return (
    <div>
      <Navbar/>
      <Panelbar/>
      <NurseSidebar/>
    </div>
  )
}

export default NurseNavs;
import React from 'react';
import Navbar from "../NavBar/Navbar";
import Panelbar from '../Panelbar/Panelbar';
import LaboratoristSidebar from '../Sidebar/LaboratoristSidebar';


const LaboratoristNavs = () => {
  return (
    <div>
      <Navbar/>
      <Panelbar/>
      <LaboratoristSidebar/>
    </div>
  )
}

export default LaboratoristNavs;
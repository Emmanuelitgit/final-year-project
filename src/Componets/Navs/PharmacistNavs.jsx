import React from 'react';
import Navbar from "../NavBar/Navbar";
import Panelbar from '../Panelbar/Panelbar';
import PharmacistSidebar from '../Sidebar/PharmacistSidebar';

const PharmacistNavs = () => {
  return (
    <div>
      <Navbar/>
      <Panelbar/>
      <PharmacistSidebar/>
    </div>
  )
}

export default PharmacistNavs;
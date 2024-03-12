import React from 'react';
import Navbar from "../NavBar/Navbar";
import Panelbar from '../Panelbar/Panelbar';
import RadiographerSidebar from '../Sidebar/RadiographerSidebar';

const RadiographerNavs = () => {
  return (
    <div>
      <Navbar/>
      <Panelbar/>
      <RadiographerSidebar/>
    </div>
  )
}

export default RadiographerNavs;
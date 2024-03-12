import React from 'react';
import Navbar from "../NavBar/Navbar";
import Panelbar from '../Panelbar/Panelbar';
import AccountantSidebar from '../Sidebar/AccountantSidebar';


const AccountantNavs = () => {
  return (
    <div>
      <Navbar/>
      <Panelbar/>
      <AccountantSidebar/>
    </div>
  )
}

export default AccountantNavs;
import React from 'react';
import Navbar from "../NavBar/Navbar";
import AdminSidebar from "../Sidebar/AdminSidebar"
import Panelbar from '../Panelbar/Panelbar';

const AdminNavs = () => {
  return (
    <div>
      <Navbar/>
      <Panelbar/>
      <AdminSidebar/>
    </div>
  )
}

export default AdminNavs
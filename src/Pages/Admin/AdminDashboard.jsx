import React from 'react';
import DashboardBoxes from '../../Componets/DashboardBoxes/DashboardBoxes';
import Charts from "../../Componets/Charts/Charts";


const AdminDashboard = () => {
//  const token = localStorage.getItem("token");
//   console.log(token)

  return (
    <div className='admin-container'>
      <DashboardBoxes/>
      <Charts/>
    </div>
  )
}

export default AdminDashboard
import React from 'react';
import "../src/Componets/Style/style.css"
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import AdminNavs from "./Componets/Navs/AdminNavs"
import Login from "./Pages/Login/Login";
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard"
import Register from "./Pages/Register/Register";
import Payment from "./Componets/Payment/Payment"
import PatientList from "./Componets/Patient/PatientList"
import DoctorList from "./Pages/Admin/Doctor/DoctorList"
import DepartmentList from './Pages/Admin/Department/DepartmentList';
import NurseList from "./Pages/Admin/Nurse/NurseList"
import AppointmentList from "./Componets/Appointment/AppointmentList"
import AccountantList from "./Pages/Admin/Accountant/AccountantList"
import PharmacistList from "./Pages/Admin/Pharmacist/PharmacistList"
import LaboratoristList from "./Pages/Admin/Laboratorist/LaboratoristList"
import RadiographerList from "./Pages/Admin/Radiographer.jsx/RadiographerList"
import BedAllotmentList from "./Componets/BedWard/BedAllotmentList"
import BirthReport from "./Componets/Report/BirthReport"
import DeathReport from "./Componets/Report/DeathReport"
import BloodBank from "./Componets/BloodBank/BloodBank"
import BloodDonorList from "./Componets/BloodBank/BloodDonorList"
import BedList from "./Componets/BedWard/BedList"
import NoticeBoard from "./Pages/Admin/Notice/NoticeBoard"
import OperationReport from "./Componets/Report/OperationReport"
import MedicineList from "./Componets/Medicine/MedicineList"
import DoctorNavs from './Componets/Navs/DoctorNavs';
import DoctorDashboard from "./Pages/Doctor/DoctorDashboard"
import PrescriptionList from './Componets/Prescription/PrescriptionList';
import RequestList from './Componets/Labs/RequestList';
import ResultList from './Componets/Labs/ResultList';
import NurseDashboard from './Pages/Nurse/NurseDashboard';
import NurseNavs from './Componets/Navs/NurseNavs';
import InvoiceList from './Componets/Payment/InvoiceList';
import VitalList from './Componets/Vital/VitalList';
import Profile from './Componets/Profile/Profile';
import Settings from './Pages/Admin/Settings/Settings';
import PharmacistNavs from './Componets/Navs/PharmacistNavs';
import PharmacistDashboard from './Pages/Pharmacist/PharmacistDashboard';
import MedicineCategory from './Componets/Medicine/MedicineCategory';
import LaboratoristNavs from './Componets/Navs/LaboratoristNavs';
import AccountantNavs from './Componets/Navs/AccountantNavs';
import AccountantDashboard from './Pages/Accountant/AccountantDashboard';
import RadiographerNavs from './Componets/Navs/RadiographerNavs';
import RadiographerDashboard from './Pages/Radiographer/RadiographerDashboard';
import ScanRequestList from './Componets/Scan/ScanRequestList';
import ScanReport from "./Componets/Scan/ScanReport"


const Admin =()=>{
 return(
  <> 
  <AdminNavs/>
  <Outlet/>
  </>
 )
}

const Doctor =()=>{
  return(
   <> 
   <DoctorNavs/>
   <Outlet/>
   </>
  )
 }

 const Nurse =()=>{
  return(
   <> 
   <NurseNavs/>
   <Outlet/>
   </>
  )
 }

 const Pharmacist =()=>{
  return(
   <> 
   <PharmacistNavs/>
   <Outlet/>
   </>
  )
 }

 const Laboratorist =()=>{
  return(
   <> 
   <LaboratoristNavs/>
   <Outlet/>
   </>
  )
 }

 const Radiographer =()=>{
  return(
   <> 
   <RadiographerNavs/>
   <Outlet/>
   </>
  )
 }

 const Accountant =()=>{
  return(
   <> 
   <AccountantNavs/>
   <Outlet/>
   </>
  )
 }

const router = createBrowserRouter([

    // ADMIN MODULE NAVOGATION HERE
  {
    path: "/admin",
    element: <Admin/>,
    children: [
      { path: "/admin/dashboard", element: <AdminDashboard /> },
      { path: "/admin/department-list", element: <DepartmentList /> },
      { path: "/admin/doctor-list", element: <DoctorList /> },
      { path: "/admin/payment-list", element: <Payment /> },
      { path: "/admin/patient-list", element: <PatientList /> },
      { path: "/admin/nurse-list", element: <NurseList /> },
      { path: "/admin/pharmacist-list", element: <PharmacistList /> },
      { path: "/admin/laboratorist-list", element: <LaboratoristList /> },
      { path: "/admin/radiographer-list", element: <RadiographerList /> },
      { path: "/admin/accountant-list", element: <AccountantList /> },
      { path: "/admin/operation-report", element: <OperationReport /> },
      { path: "/admin/medicine-list", element: <MedicineList /> },
      { path: "/admin/bed-list", element: <BedList /> },
      { path: "/admin/bed-allotment-list", element: <BedAllotmentList /> },
      { path: "/admin/blood-bank", element: <BloodBank /> },
      { path: "/admin/blood-donor-list", element: <BloodDonorList /> },
      { path: "/admin/notice-board", element: <NoticeBoard /> },
      { path: "/admin/birth-report", element: <BirthReport /> },
      { path: "/admin/death-report", element: <DeathReport /> },
      { path: "/admin/appointment-list", element: <AppointmentList /> },
      { path: "/admin/profile", element: <Profile /> },
      { path: "/admin/settings", element: <Settings /> },
    ]
  },

  // DOCTOR MODULE NAVIGATION HERE
  {  
    path: "/doctor",
    element: <Doctor/>,
    children:[
      {path: "/doctor/dashboard",element: <DoctorDashboard/>},
      {path: "/doctor/patient-list",element: <PatientList/>},
      {path: "/doctor/prescription-list",element: <PrescriptionList/>},
      {path: "/doctor/appointment-list",element: <AppointmentList/>},
      { path: "/doctor/bed-allotment-list", element: <BedAllotmentList /> },
      { path: "/doctor/bed-list", element: <BedList /> },
      { path: "/doctor/blood-bank", element: <BloodBank /> },
      { path: "/doctor/blood-donor-list", element: <BloodDonorList /> },
      { path: "/doctor/birth-report", element: <BirthReport /> },
      { path: "/doctor/death-report", element: <DeathReport /> },
      { path: "/doctor/operation-report", element: <OperationReport /> },
      { path: "/doctor/lab-result", element: <ResultList /> },
      { path: "/doctor/lab-request", element: <RequestList /> },
      { path: "/doctor/profile", element: <Profile /> },
    ]
  },

  // NURSE MODULE NAVIGATION HERE
  {  
    path: "/nurse",
    element: <Nurse/>,
    children:[
      {path: "/nurse/dashboard",element: <NurseDashboard/>},
      {path: "/nurse/patient-list",element: <PatientList/>},
      {path: "/nurse/appointment-list",element: <AppointmentList/>},
      { path: "/nurse/bed-allotment-list", element: <BedAllotmentList /> },
      { path: "/nurse/bed-list", element: <BedList /> },
      { path: "/nurse/blood-bank", element: <BloodBank /> },
      { path: "/nurse/blood-donor-list", element: <BloodDonorList /> },
      { path: "/nurse/birth-report", element: <BirthReport /> },
      { path: "/nurse/death-report", element: <DeathReport /> },
      { path: "/nurse/operation-report", element: <OperationReport /> },
      { path: "/nurse/vital-list", element: <VitalList /> },
      { path: "/nurse/profile", element: <Profile /> },
    ]
  },

  // PHARMACIST MODULE NAVIGATION HERE
  {  
    path: "/pharmacist",
    element: <Pharmacist/>,
    children:[
      {path: "/pharmacist/dashboard",element: <PharmacistDashboard/>},
      {path: "/pharmacist/medicine-list",element: <MedicineList/>},
      {path: "/pharmacist/prescription-list",element: <PrescriptionList/>},
      {path: "/pharmacist/medicine-category",element: <MedicineCategory/>},
      { path: "/pharmacist/profile", element: <Profile /> },
    ]
  },

    // LABORATORIST MODULE NAVIGATION HERE
    {  
      path: "/laboratorist",
      element: <Laboratorist/>,
      children:[
        {path: "/laboratorist/dashboard",element: <PharmacistDashboard/>},
        {path: "/laboratorist/blood-bank",element: <BloodBank/>},
        {path: "/laboratorist/blood-donor",element: <BloodDonorList/>},
        {path: "/laboratorist/request-list",element: <RequestList/>},
        { path: "/laboratorist/profile", element: <Profile /> },
      ]
    },

        // RADIOGRAPHER MODULE NAVIGATION HERE
        {  
          path: "/radiographer",
          element: <Radiographer/>,
          children:[
            {path: "/radiographer/dashboard",element: <RadiographerDashboard/>},
            {path: "/radiographer/request-list",element: <ScanRequestList/>},
            {path: "/radiographer/scan-reports",element: <ScanReport/>},
          ]
        },

   // ACCOUNTANT MODULE NAVIGATION HERE
  {  
    path: "/accountant",
    element: <Accountant/>,
    children:[
      {path: "/accountant/dashboard",element: <AccountantDashboard/>},
      {path: "/accountant/payment-list",element: <Payment/>},
      {path: "/accountant/invoice-list",element: <InvoiceList/>},
      { path: "/accountant/profile", element: <Profile /> },
    ]
  },

  {path: "/register",element: <Register/>},
  {path: "/login",element: <Login/>},
])


function App() {
  return (
    <div className="App">
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;



import React from 'react'
import "./style.css";
import { Folder, Delete, Update, Add } from '@mui/icons-material';


const Button = ({ handleClickOpen,handleDelete, handleNavigate}) => {
  return (
    <div>
        <button className='view-btn' onClick={handleNavigate}><Folder/>View</button>
        <button className='delete-btn' onClick={handleDelete}><Delete/>Delete</button>
        <button className='update-btn' onClick={handleClickOpen}><Update/>Update</button>
    </div>
  )
}

export default Button
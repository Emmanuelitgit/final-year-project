import React from 'react'
import "./style.css";
import { Folder, Delete, Update, Add } from '@mui/icons-material';


const Button = () => {
  return (
    <div>
        <button className='view-btn'><Folder/>View</button>
        <button className='delete-btn'><Delete/>Delete</button>
        <button className='update-btn'><Update/>Update</button>
    </div>
  )
}

export default Button
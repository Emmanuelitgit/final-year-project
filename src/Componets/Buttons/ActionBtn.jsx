import React from 'react'
import "./style.css";
import { paymentStatus } from '../../utils/Data';
import { Folder } from '@mui/icons-material';



const ActionBtn = ({ handleClick,value, backgroundColor, icon}) => {


  return (
    <div>
        <button className='payment-status-btn' 
          onClick={handleClick}
          style={{
            backgroundColor: backgroundColor
          }}
        >
          {icon && <Folder/>}
            {value}
        </button>
    </div>
  )
}

export default ActionBtn
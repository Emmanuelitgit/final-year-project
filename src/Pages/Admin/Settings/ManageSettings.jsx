import * as React from 'react';
// import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Add } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Componets/Buttons/Button';
import { useNavigate } from "react-router-dom"



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ManageSettings({name}) {

  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState({
    name:""
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (name === undefined) {
    return null; 
  }

  const handleChange = (e) =>{
    const {name, value} = e.target
    setInput((prev)=>{
        return{
            ...prev, [name]:value
        }
    })
  }

  console.log(input)

  return (
    <React.Fragment>
     <button className='setting-btn'
      onClick={handleClickOpen}
     >
       Change Settings
    </button>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Update {name} Settings
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color:"red",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className='input-container'>
            <label htmlFor="">System Name</label>
            <input type="text"
              className='input'
              placeholder='eg Emmanuel Yidana' 
              name='name'
              value={"Clinic Management System"}
              onChange={handleChange}
            />
          </div>
          <div className='input-container'>
          <label htmlFor="">System Email</label>
          <input type="text"
            className='input'
            placeholder='eg eyidana001@gmail.com'
            value={"eyidana001@gmail.com"} 
          />
        </div>
          <div className='input-container'>
            <label htmlFor="">Phone</label>
            <input type="text"
               className='input'
               placeholder='eg 0597893082'
               value='0597893082'
            />
          </div>
          <div className='input-container'>
            <label htmlFor="" className='label'>Address</label>
            <input type="text"
               className='input'
               placeholder='University of Ghana'
               value='University of Ghana'
            />
          </div>
          <div className='input-container'>
            <label htmlFor="" className='label'>Currency</label>
            <input type="text"
               className='input'
               placeholder='USD or GHC'
               value='USD or GHC'
            />
          </div>
          <div className='input-container'>
            <label htmlFor="" className='label'>Language</label>
            <input type="text"
               className='input'
               placeholder='English'
               value={"English"}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <button autoFocus 
            onClick={handleClose}
            className='modal-btn'
            >
            Save changes
          </button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
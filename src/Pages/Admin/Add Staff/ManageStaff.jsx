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
import { Link, useNavigate } from "react-router-dom"



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ManageStaff({name, id}) {

  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    console.log(id)
  };

  const handleNavigate = () =>{
    navigate(`/view-staf/${id}`)
  }

  const handleClose = () => {
    setOpen(false);
  };
  
  if (id === undefined) {
    return null; 
  }

  if (name === undefined) {
    return null; 
  }

  console.log(id);

  return (
    <React.Fragment>
      <Button
       handleClickOpen={handleClickOpen}
       handleDelete={ handleDelete}
       handleNavigate={handleNavigate} 
      />
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Update {name}
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
            <label htmlFor="">{name} Name</label>
            <input type="text"
              className='input'
              placeholder='eg Emmanuel Yidana' 
            />
          </div>
          {name === "Doctor" &&
          <div className='input-container'>
          <label htmlFor="">Department Name</label>
          <input type="text"
            className='input'
            placeholder='eg Public Health' 
          />
        </div>
          }
          <div className='input-container'>
            <label htmlFor="">Email</label>
            <input type="text"
              className='input'
              placeholder='eg eyidana001@gmial.com'
            />
          </div>
          <div className='input-container'>
            <label htmlFor="" className='label'>Password</label>
            <input type="password"
               className='input'
               placeholder='enter a strong password'
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Phone</label>
            <input type="text"
               className='input'
               placeholder='eg 0597893082'
            />
          </div>
          <div className='input-container'>
            <label htmlFor="" className='label'>Address</label>
            <input type="text"
               className='input'
               placeholder='University of Ghana'
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
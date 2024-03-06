import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Add } from '@mui/icons-material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function AddPatient() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      { !open &&
        <Button variant="outlined" 
          onClick={handleClickOpen}
          style={{
          backgroundColor:"blue",
          color:"white",
          padding:"7px",
          cursor:"pointer",
          outline:"none",
        }}
      >
        <Add/>
        Add Patient
      </Button>}
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, width:"400px" }} id="customized-dialog-title">
         Add New Patient
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
        <DialogContent dividers >
          <div className='input-container'>
            <label htmlFor="">Patient Name</label>
            <input type="text"
              className='input'
              placeholder='eg Emmanuel Yidana' 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Email</label>
            <input type="text"
              className='input'
              placeholder='eg eyidana001@gmail.com' 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Patient Address</label>
            <input type="text"
              className='input'
              placeholder='eg University of Ghana' 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Age</label>
            <input type="number"
              className='input'
              placeholder='eg 25'
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Sex</label>
            <input type="text"
               className='input'
               placeholder='eg Male'
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Blood Group</label>
            <input type="text"
               className='input'
               placeholder='eg AB+'
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Birth Date</label>
            <input type="text"
               className='input'
               placeholder='eg 24/03/2000'
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
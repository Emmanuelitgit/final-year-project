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
import Button from '../Buttons/Button';
import { Link, useNavigate } from "react-router-dom"
import { data } from 'autoprefixer';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ManageRequest({name, id}) {

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
            <label htmlFor="">Date</label>
            <input type="date"
              className='input' 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Doctor</label>
            <input type="text"
              className='input'
              placeholder='eg Mohammed Yidana' 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Patient</label>
            <input type="text"
              className='input'
              placeholder='eg Mohammed Wadud' 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Scan Type</label>
            <input type="text"
              className='input'
              placeholder='eg Blood' 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Scan Name</label>
            <input type="text"
              className='input'
              placeholder='eg Hepatitis B' 
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
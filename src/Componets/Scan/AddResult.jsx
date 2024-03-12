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
import { useDispatch, useSelector } from 'react-redux';
import { handleResultModal } from '../../store/modalState';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function AddResult() {

 const dispatch = useDispatch();

 const handleOpen = () =>{
    dispatch(handleResultModal())
  }

  const open = useSelector((state)=>state.modal.resultModal);
  console.log(open)

  return (
    <React.Fragment>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, width:"400px" }} id="customized-dialog-title">
         Add New Result
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleOpen}
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
            <label htmlFor="">Date</label>
            <input type="date"
              className='input' 
            />
          </div>
          <div className='input-container'>
            <label htmlFor="">Radiographer</label>
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
            <label htmlFor="">Scan Report</label>
           <textarea 
            className='input'
            rows={6}
            placeholder='Write scan case or report here'
            />
          </div>
        </DialogContent>
        <DialogActions>
          <button autoFocus 
            onClick={handleOpen}
            className='modal-btn'
            >
            Save changes
          </button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
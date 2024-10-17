'use client'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, MouseEventHandler } from 'react';
import Image from 'next/image';

export default function AlertDialog({
  open,
  handleClose
}:{
  open: boolean;
  handleClose: MouseEventHandler<HTMLButtonElement>
}) {

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"lg"}
      >
        <DialogTitle id="alert-dialog-title" className='font-semibold text-2xl '>
          ProductName's
        </DialogTitle>
        <DialogContent className='grid grid-cols-2 gap-4 bg-red-300'>
          <div className='!flex justify-center p-4'>
            <Image 
              src={'/km.png'} 
              alt="products" 
              width={600} 
              height={600} 
              unoptimized
              loading="lazy"
              className="h-auto w-[500px]"
            />  
          </div>
          <DialogContentText id="alert-dialog-description" className='p-4'>
            desc
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

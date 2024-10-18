'use client'

import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { MouseEventHandler } from 'react';
import { MdClose } from 'react-icons/md';

export default function AlertDialog({
  open,
  children,
  handleClose
}:{
  open: boolean;
  children: any;
  handleClose: MouseEventHandler<HTMLButtonElement>
}) {

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={"lg"}
    >
        <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <MdClose />
      </IconButton>
      {children}
    </Dialog>
  );
}

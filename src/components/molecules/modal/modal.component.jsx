import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 16,
		minWidth: 600,
	},
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

export default function Modal({ children, open, handleClose }) {
	return (
		<div>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				{children}
			</BootstrapDialog>
		</div>
	);
}

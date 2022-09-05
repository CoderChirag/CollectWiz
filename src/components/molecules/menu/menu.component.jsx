import { Menu as MuiMenu } from '@mui/material';

const Menu = ({ children, id, anchorEl, open, handleClose, MenuListProps }) => {
	return (
		<MuiMenu
			id={id}
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			MenuListProps={MenuListProps}
		>
			{children}
		</MuiMenu>
	);
};

export default Menu;

import { Menu as MuiMenu} from "@mui/material";

const Menu = ({children, anchorEl, open, handleClose}) => {
    return(
        <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {children}
      </MuiMenu>
    )
}

export default Menu;
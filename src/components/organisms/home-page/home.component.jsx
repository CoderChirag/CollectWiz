import { useState } from 'react';
import styled from '@emotion/styled';

import {Box, Grid, Avatar, Menu, MenuItem} from '@mui/material';

import AppTitle from '../../atoms/app-title/appTitle.component';

import { signOutUser } from "../../../utils/firebase/auth/auth.util";

const StyledHr = styled.hr`
	margin-top: -10px;
    border: none;
    background-color: #ccc;
    height: 1px;
`;

const HomePage = () => {
    const [userProfileAnchorEl, setUserProfileAnchorEl] = useState(null);
    const userProfileOpen = Boolean(userProfileAnchorEl);
    const handleUserProfileClick = (event) => {
        setUserProfileAnchorEl(event.currentTarget);
    };
    const handleUserProfileClose = () => {
        setUserProfileAnchorEl(null);
    };

	return (
        <>
            <Box>
                <Grid container alignItems='center'>
                    <Grid item xs={10} md={11} >
                        <AppTitle width='8rem' widthMd='8rem' />
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <Avatar src="/broken-image.jpg" onClick={handleUserProfileClick}/>
                        <Menu
                            id="userProfileDropdown"
                            anchorEl={userProfileAnchorEl}
                            open={userProfileOpen}
                            onClose={handleUserProfileClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={signOutUser}>Logout</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
                <StyledHr />
            </Box>
        </>
	);
};

export default HomePage;

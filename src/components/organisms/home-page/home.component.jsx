import styled from '@emotion/styled';

import {Box, Grid} from '@mui/material';

import AppTitle from '../../atoms/app-title/appTitle.component';

import { signOutUser } from "../../../utils/firebase/auth/auth.util";

const StyledHr = styled.hr`
	margin-top: -10px;
    border: none;
    background-color: #ccc;
    height: 1px;
`;

const HomePage = () => {
	return (
        <>
            <Box>
                <Grid container alignItems='center'>
                    <Grid item xs={11}>
                        <AppTitle width='8rem' widthMd='10rem' />
                    </Grid>
                </Grid>
                <StyledHr />
            </Box>
        </>
	);
};

export default HomePage;

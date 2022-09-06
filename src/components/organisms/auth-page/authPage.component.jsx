import { Box, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import AppTitle from '../../atoms/app-title/appTitle.component';
import GoogleButtonLight from '../../atoms/google-button-light/googleButtonLight.component';
// import GoogleButtonDark from '../../atoms/google-button-dark/googleButtonDark.component';

const StyledHr = styled.hr`
	width: 40%;
	height: 1px;
	border: none;
	background-color: #aaa;
	margin: auto;
	@media (max-width: 768px) {
		width: 80%;
	}
`;

const AuthPage = () => {
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '20vh',
				}}
			>
				<Box >
					<Grid container justifyContent='center' alignItems='center'>
						<Grid item>
							<AppTitle width='15rem' widthMd='10rem' />
						</Grid>
					</Grid>
					<StyledHr />
				</Box>
				<Box sx={{ paddingTop: '1rem' }}>
					<Grid container justifyContent='center' alignItems='center'>
						<Grid item>
							<Typography
								variant='p'
								sx={{
									fontSize: { xs: '1.5rem', md: '2.2rem' },
									fontWeight: '200',
								}}
							>
								Login / Join Now
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Box
				sx={{
					width: '100%',
					height: '50vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box sx={{ marginTop: '25px', padding: '20px 0' }}>
					<Grid container justifyContent='center' alignItems='center'>
						<Grid item>
							<GoogleButtonLight
								scale={{ lg: 1.5, md: 1.2, sm: 1.1, xs: 1 }}
							/>
							{/* <GoogleButtonDark
								scale={{ xs: 0.8, sm: 1, lg: 1.2 }}
							/> */}
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
};

export default AuthPage;

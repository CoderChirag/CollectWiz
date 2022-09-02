import { Box, Grid } from '@mui/material';

const AuthPage = () => {
	return (
		<>
			<Box sx={{ padding: '25px 0' }}>
				<Grid container justifyContent='center' alignItems='center'>
					<Grid item>
						<img src='./assets/images/logo.png' alt='logo' />
					</Grid>
				</Grid>
			</Box>
			<br />

			<hr />

			<p> Login / join now </p>
		</>
	);
};

export default AuthPage;

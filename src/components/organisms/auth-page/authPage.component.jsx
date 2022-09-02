import { Box, Grid } from '@mui/material';
import AppTitle from '../../atoms/app-title/appTitle.component';

const AuthPage = () => {
	return (
		<>
			<Box sx={{ padding: '25px 0' }}>
				<Grid container justifyContent='center' alignItems='center'>
					<Grid item>
						<AppTitle width='20rem' />
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

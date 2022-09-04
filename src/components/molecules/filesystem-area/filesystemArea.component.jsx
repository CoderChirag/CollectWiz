import { Box, Grid, Typography, Badge } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import AddIcon from '@mui/icons-material/Add';

const FilesystemArea = () => {
	return (
		<Box
			sx={{
				padding: { lg: 8, md: 4, sm: 2, xs: 1 },
				width: '100%',
				minHeight: { xs: '78vh', sm: '85vh', md: '88vh', lg: '85vh' },
			}}
		>
			<Grid
				container
				spacing={2}
				sx={{
					justifyContent: { lg: 'flex-start', xs: 'space-evenly' },
				}}
			>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { md: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						Apps
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { md: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						Docs
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { md: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						My Test Folder
					</Typography>
				</Grid>
				{/* <Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { md: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						New Folder
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { md: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						New Folder
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { md: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						New Folder
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { md: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						New Folder
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { md: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						New Folder
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { md: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						New Folder
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { md: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						New Folder
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<FolderIcon
						sx={{
							fontSize: { lg: '5rem', xs: '4rem' },
							color: '#22a6ff',
						}}
					/>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						New Folder
					</Typography>
				</Grid>
                */}
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<Badge
						badgeContent='.pdf'
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						color='red'
						overlap='circular'
					>
						<DescriptionIcon
							sx={{
								fontSize: { md: '5rem', xs: '4rem' },
								color: '#9d9d9d',
							}}
						/>
					</Badge>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						budget.pdf
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginBottom: '30px',
					}}
				>
					<Badge
						badgeContent='.jpg'
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						color='red'
						overlap='circular'
					>
						<DescriptionIcon
							sx={{
								fontSize: { md: '5rem', xs: '4rem' },
								color: '#9d9d9d',
							}}
						/>
					</Badge>
					<Typography variant='p' sx={{ fontSize: '1.2rem' }}>
						profile.jpg
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						padding: {
							xs: '0 1.2rem !important',
							sm: '0 2rem !important',
						},
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						marginBottom: '30px',
					}}
				>
					<AddIcon
						sx={{
							fontSize: {
								md: '6rem',
								xs: '5rem',
							},
							width: { md: '5.5rem', xs: '4.5rem' },
							color: '#afb0b1',
							border: '1px dashed #9d9d9d',
							borderRadius: '10px',
							padding: '18px',
							marginLeft: '15px',
							cursor: 'pointer',
							transition: 'all 0.3s ease-in-out',
							'&:hover': {
								transform: 'scale(1.2)',
							},
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default FilesystemArea;

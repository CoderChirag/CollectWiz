import { useState, useEffect, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { UserContext } from '../../../contexts/user/user.context';

import { Box, Grid, Typography, Badge } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import AddIcon from '@mui/icons-material/Add';

import { fetchDataFromFs } from '../../../utils/firebase/fs/fs.util';

const FilesystemArea = () => {
	const location = useLocation();
	const { currentUser } = useContext(UserContext);
	const [fsData, setFsData] = useState(null);

	const fetchFsData = useMemo(
		() => async () => {
			const path =
				location.pathname[location.pathname.length - 1] === '/'
					? location.pathname
							.split('/')
							.slice(1, location.pathname.split('/').length - 1)
							.join('.')
					: location.pathname.split('/').slice(1).join('.');
			const data = await fetchDataFromFs(currentUser?.uid, path);
			if (data) {
				data.subfolders.sort((a, b) => a.createdAt - b.createdAt);
				data.files.sort((a, b) => a.createdAt - b.createdAt);
			}
			setFsData(data);
		},
		[currentUser, location]
	);

	useEffect(() => {
		fetchFsData();
	}, [fetchFsData]);

	return (
		<>
			<Box
				sx={{
					padding: { lg: 8, md: 4, sm: 2, xs: 1 },
					width: '100%',
					minHeight: {
						xs: '78vh',
						sm: '85vh',
						md: '88vh',
						lg: '85vh',
					},
				}}
			>
				<Grid
					container
					spacing={2}
					sx={{
						justifyContent: {
							lg: 'flex-start',
							xs: 'space-evenly',
						},
					}}
				>
					{fsData && (
						<>
							{fsData.subfolders.map(folder => (
								<Grid
									key={folder.name}
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
											fontSize: {
												md: '5rem',
												xs: '4rem',
											},
											color: '#22a6ff',
										}}
									/>
									<Typography
										variant='p'
										sx={{ fontSize: '1.2rem' }}
									>
										{folder.name}
									</Typography>
								</Grid>
							))}
							{fsData.files.map(file => (
								<Grid
									key={file.nameWithExt}
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
										badgeContent={file.ext}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'left',
										}}
										color='red'
										overlap='circular'
									>
										<DescriptionIcon
											sx={{
												fontSize: {
													md: '5rem',
													xs: '4rem',
												},
												color: '#9d9d9d',
											}}
										/>
									</Badge>
									<Typography
										variant='p'
										sx={{ fontSize: '1.2rem' }}
									>
										{file.nameWithExt}
									</Typography>
								</Grid>
							))}
						</>
					)}
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
		</>
	);
};

export default FilesystemArea;

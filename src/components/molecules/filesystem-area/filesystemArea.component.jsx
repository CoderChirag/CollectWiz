import { useState, useEffect, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import {
	Box,
	Grid,
	Typography,
	Badge,
	DialogContent,
	DialogActions,
	Button,
	ToggleButton as MuiToggleButton,
	TextField,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import AddIcon from '@mui/icons-material/Add';

import Modal from '../modal/modal.component';
import ModalTitle from '../../atoms/modal-title/modalTitle.component';
import ToggleButton from '../../atoms/toggle-button/toggleButton.component';

import { UserContext } from '../../../contexts/user/user.context';
import { fetchDataFromFs } from '../../../utils/firebase/fs/fs.util';
import { createNewFolder } from '../../../utils/firebase/transactions/transactions.util';

const FilesystemArea = () => {
	const location = useLocation();
	const [currPath, setCurrPath] = useState(
		location.pathname[location.pathname.length - 1] === '/'
			? location.pathname
					.split('/')
					.slice(1, location.pathname.split('/').length - 1)
					.join('.')
			: location.pathname.split('/').slice(1).join('.')
	);
	const { currentUser } = useContext(UserContext);
	const [fsData, setFsData] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [creationType, setCreationType] = useState('folder');

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const handleCreationTypeChange = (event, newCreationType) => {
		setCreationType(newCreationType);
	};

	const fetchFsData = useMemo(
		() => async () => {
			const data = await fetchDataFromFs(currentUser?.uid, currPath);
			if (data) {
				data.subfolders.sort((a, b) => a.createdAt - b.createdAt);
				data.files.sort((a, b) => a.createdAt - b.createdAt);
			}
			setFsData(data);
		},
		[currentUser, currPath]
	);

	const createFolder = async () => {
		const folderName = document
			.getElementById('new-folder-name')
			.value.trim()
			.split('.')[0];
		if (!folderName) return;
		if (fsData?.subfolders.find(folder => folder.name === folderName))
			return;
		const folderData = await createNewFolder(
			currentUser?.uid,
			currPath,
			folderName
		);
		if (folderData) {
			setFsData(prevFsData => ({
				...prevFsData,
				subfolders: [...prevFsData.subfolders, folderData],
			}));
		}
		setModalOpen(false);
	};

	useEffect(() => {
		fetchFsData();
	}, [fetchFsData]);

	useEffect(() => {
		setCurrPath(
			location.pathname[location.pathname.length - 1] === '/'
				? location.pathname
						.split('/')
						.slice(1, location.pathname.split('/').length - 1)
						.join('.')
				: location.pathname.split('/').slice(1).join('.')
		);
	}, [location]);

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
								<Link
									to={`/${currPath.split('.').join('/')}/${
										folder.name
									}`}
									key={folder.name}
									style={{
										textDecoration: 'none',
										color: 'inherit',
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
								</Link>
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
							onClick={handleModalOpen}
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
						<Modal open={modalOpen} handleClose={handleModalClose}>
							<ModalTitle
								id='customized-dialog-title'
								onClose={handleModalClose}
								sx={{ textAlign: 'center' }}
							>
								<ToggleButton
									value={creationType}
									handleChange={handleCreationTypeChange}
								>
									<MuiToggleButton value='folder'>
										Folder
									</MuiToggleButton>
									<MuiToggleButton value='file'>
										File
									</MuiToggleButton>
								</ToggleButton>
							</ModalTitle>
							<DialogContent>
								{/* <DialogContentText> */}
								<Typography variant='h6' sx={{ mb: '20px' }}>
									Create New{' '}
									{creationType.charAt(0).toUpperCase() +
										creationType.slice(1)}
								</Typography>
								{/* </DialogContentText> */}
								<TextField
									autoFocus
									margin='dense'
									id={`new-${creationType}-name`}
									label={`${
										creationType.charAt(0).toUpperCase() +
										creationType.slice(1)
									} Name`}
									type='text'
									fullWidth
									variant='standard'
								/>
							</DialogContent>
							<DialogActions>
								<Button
									autoFocus
									onClick={
										creationType === 'folder'
											? createFolder
											: null
									}
								>
									Create{' '}
									{creationType.charAt(0).toUpperCase() +
										creationType.slice(1)}
								</Button>
							</DialogActions>
						</Modal>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default FilesystemArea;

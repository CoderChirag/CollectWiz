import Navbar from '../../molecules/navbar/navbar.component';
import FilesystemArea from '../../molecules/filesystem-area/filesystemArea.component';
import BottomSearchbar from '../../molecules/bottom-searchbar/bottomSearchbar.component';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<FilesystemArea />
			<BottomSearchbar />
		</>
	);
};

export default HomePage;

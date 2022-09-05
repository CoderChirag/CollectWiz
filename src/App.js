import { Routes, Route } from 'react-router-dom';
import { createNewUserFs } from './utils/firebase/fs/fs.util';

import HomeRoute from './routes/home/home.route';
import AuthRoute from './routes/auth/auth.route';
import FileSystemRoute from './routes/filesystem/filesystem.route';
import NotFoundRoute from './routes/notfound/notfound.route';

import './App.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomeRoute />} />
			<Route path='auth' element={<AuthRoute />} />
			<Route path='root' element={<FileSystemRoute />}>
				<Route path='*' element={<FileSystemRoute />} />
			</Route>
			<Route path='*' element={<NotFoundRoute />} />
		</Routes>
	);
}

export default App;

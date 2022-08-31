import { Routes, Route } from 'react-router-dom';
import { app } from './utils/firebase/firebase.util';

import Home from './routes/home/home.route';

import './App.css';

function App() {
	return (
		<Routes>
			<Route path='*' element={<Home />} />
		</Routes>
	);
}

export default App;

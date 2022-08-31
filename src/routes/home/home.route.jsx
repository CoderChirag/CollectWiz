import { Outlet, useLocation } from 'react-router-dom';

function Home() {
	const location = useLocation();
	return (
		<div className='App'>
			<h1>Hello World</h1>
			<p>You are at: {location.pathname}</p>
			{/* <Outlet /> */}
		</div>
	);
}

export default Home;

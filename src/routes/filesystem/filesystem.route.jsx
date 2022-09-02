import { useLocation } from 'react-router-dom';

function FileSystemRoute() {
	const location = useLocation();

	return (
		<div className='App'>
			<p>{location.pathname}</p>
		</div>
	);
}

export default FileSystemRoute;

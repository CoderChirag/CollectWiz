import { useLocation } from 'react-router-dom';

import RouteProtection from '../../components/molecules/route-protection/routeProtection.component';

import { signOutUser } from '../../utils/firebase/auth/auth.util';

const FileSystemRoute = () => {
	const location = useLocation();
	return (
		<RouteProtection>
			<div className='App'>
				<p>{location.pathname}</p>
				<button onClick={signOutUser}>Sign Out</button>
			</div>
		</RouteProtection>
	);
};

export default FileSystemRoute;

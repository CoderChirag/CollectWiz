import { useLocation } from 'react-router-dom';

import RouteProtection from '../../components/molecules/route-protection/routeProtection.component';
import HomePage from '../../components/organisms/home-page/home.component';


const FileSystemRoute = () => {
	const location = useLocation();
	return (
		<RouteProtection>
			<HomePage />
		</RouteProtection>
	);
};

export default FileSystemRoute;

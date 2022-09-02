import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../../contexts/user/user.context';
import AuthPage from '../../components/organisms/auth-page/authPage.component';

const AuthRoute = () => {
	const { currentUser } = useContext(UserContext);

	return <>{currentUser ? <Navigate to='/root' /> : <AuthPage />}</>;
};

export default AuthRoute;

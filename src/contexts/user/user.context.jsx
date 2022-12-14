import { createContext, useEffect, useMemo, useReducer } from 'react';

import { USER_ACTION_TYPES } from './user.types';
import { onAuthStateChangedListener } from '../../utils/firebase/auth/auth.util';
// import { createNewUserProfileDocument } from '../../utils/firebase/users/users.util';
// import {
// 	createNewUserFs,
// } from '../../utils/firebase/fs/fs.util';
import { createNewUser } from '../../utils/firebase/transactions/transactions.util';

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => {},
});

const userReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			throw new Error(`Unhandled action type: ${type} in userReducer`);
	}
};

const INITIAL_STATE = {
	currentUser: null,
};

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

	const setCurrentUser = useMemo(
		() => user => {
			if (user) {
				window.localStorage.setItem('currentUser', user.uid);
			} else {
				window.localStorage.removeItem('currentUser');
			}
			dispatch({
				type: USER_ACTION_TYPES.SET_CURRENT_USER,
				payload: user,
			});
		},
		[dispatch]
	);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(async user => {
			console.log(user);
			if (user) {
				// await createNewUserProfileDocument(user);
				// await createNewUserFs(user.uid);
				await createNewUser(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, [setCurrentUser]);

	return (
		<UserContext.Provider
			value={{ currentUser: state.currentUser, setCurrentUser }}
		>
			{children}
		</UserContext.Provider>
	);
};

import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '../firebase.util';

export const createNewUserProfileDocument = async (
	userAuth,
	additionalData = {}
) => {
	if (!userAuth) return;
	const userDocRef = doc(db, 'users', userAuth.uid);
	try {
		const snapshot = await getDoc(userDocRef);

		if (!snapshot.exists()) {
			const {
				displayName,
				email,
				emailVerified,
				isAnonymous,
				phoneNumber,
				photoURL,
				providerData,
				providerId,
				uid,
			} = userAuth;
			const metadata = {};
			for (let i = 0; i < Object.keys(userAuth.metadata).length; i++) {
				metadata[Object.keys(userAuth.metadata)[i]] =
					userAuth.metadata[Object.keys(userAuth.metadata)[i]];
			}

			try {
				await setDoc(userDocRef, {
					displayName,
					email,
					emailVerified,
					isAnonymous,
					metadata,
					phoneNumber,
					photoURL,
					providerData,
					providerId,
					uid,
					...additionalData,
				});
			} catch (error) {
				console.log('Error creating user', error.message);
			}
		}
	} catch (e) {
		console.log('Error fetching user data', e.message);
	}
	return userDocRef;
};

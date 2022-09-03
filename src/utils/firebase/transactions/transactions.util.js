import { runTransaction, doc } from 'firebase/firestore';

import { db } from '../firebase.util';
import { signOutUser } from '../auth/auth.util';

export const createNewUser = async (userAuth, additionalData = {}) => {
	if (!userAuth) return;
	try {
		await runTransaction(db, async transaction => {
			const userDocRef = doc(db, 'users', userAuth.uid);
			const userDoc = await transaction.get(userDocRef);
			if (!userDoc.exists()) {
				// Creating New User Data
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
				for (
					let i = 0;
					i < Object.keys(userAuth.metadata).length;
					i++
				) {
					metadata[Object.keys(userAuth.metadata)[i]] =
						userAuth.metadata[Object.keys(userAuth.metadata)[i]];
				}

				transaction.set(userDocRef, {
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

				// Creating New User FS
				const fsDocRef = doc(db, 'fs', uid);
				const rootDocRef = doc(fsDocRef, 'root', 'data');
				transaction.set(rootDocRef, {
					subfolders: [],
					files: [],
				});
			}
		});
	} catch (e) {
		console.log('Transaction failed: ', e);
		signOutUser();
	}
};

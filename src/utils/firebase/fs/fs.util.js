import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '../firebase.util';

export const createNewUserFs = async uid => {
	const fsDocRef = doc(db, 'fs', uid);
	try {
		const fsDocSnapshot = await getDoc(fsDocRef);
		if (!fsDocSnapshot.exists()) {
			const rootDocRef = doc(fsDocRef, 'root', 'data');
			try {
				await setDoc(rootDocRef, {
					subfolders: [],
					files: [],
				});
			} catch (e) {
				console.log('Error creating root data', e.message);
			}
		}
	} catch (e) {
		console.log('Error fetching user fs', e.message);
	}
	return fsDocRef;
};

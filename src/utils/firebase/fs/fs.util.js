import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db, auth } from '../firebase.util';

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

export const fetchDataFromFs = async (uid, path) => {
	if (!uid) return;
	const fsDocRef = doc(db, 'fs', uid, path, 'data');
	try {
		const fsDoc = await getDoc(fsDocRef);
		if (fsDoc.exists()) {
			return fsDoc.data();
		} else {
			return {
				subfolders: [],
				files: [],
			};
		}
	} catch (e) {
		console.log('Error fetching data from fs', e.message);
		return {
			subfolders: [],
			files: [],
		};
	}
};

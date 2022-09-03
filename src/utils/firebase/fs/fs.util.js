import { doc, getDoc, setDoc, collection } from 'firebase/firestore';

import { db } from '../firebase.util';

export const createNewUserFs = async uid => {
	const fsCollectionRef = collection(db, 'fs');
	const fsDocRef = doc(fsCollectionRef, uid);
	try {
		const fsDocSnapshot = await getDoc(fsDocRef);
		if (!fsDocSnapshot.exists()) {
			console.log(true);
			try {
				await setDoc(fsDocRef, {});
				const rootCollectionRef = collection(fsDocRef, 'root');
				const rootDocRef = doc(rootCollectionRef, 'data');
				try {
					await setDoc(rootDocRef, {
						subfolders: [],
						files: [],
					});
				} catch (e) {
					console.log('Error creating root data', e.message);
				}
			} catch (e) {
				console.log('Error creating user fs doc', e.message);
			}
		}
	} catch (e) {
		console.log('Error fetching user fs', e.message);
	}
};

import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '../firebase.util';
import { fsDataConverter } from '../converters/converters.util';

export const createNewUserFs = async uid => {
	const fsDocRef = doc(db, 'fs', uid);
	try {
		const fsDocSnapshot = await getDoc(fsDocRef);
		if (!fsDocSnapshot.exists()) {
			const rootDocRef = doc(fsDocRef, 'root', 'data').withConverter(
				fsDataConverter
			);
			try {
				await setDoc(rootDocRef, {
					subfolders: [],
					files: [],
				});
				console.log('done');
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
	const fsDocRef = doc(db, 'fs', uid, path, 'data').withConverter(
		fsDataConverter
	);
	try {
		const fsDoc = await getDoc(fsDocRef);
		if (fsDoc.exists()) {
			console.log(fsDoc.data());
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

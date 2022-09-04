import { runTransaction, doc } from 'firebase/firestore';

import { db } from '../firebase.util';
import { signOutUser } from '../auth/auth.util';
import { fsDataConverter } from '../converters/converters.util';

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
				const rootDocRef = doc(fsDocRef, 'root', 'data').withConverter(
					fsDataConverter
				);
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

export const createNewFolder = async (uid, path, folderName) => {
	if (!uid) return;
	try {
		let folderData = {};
		await runTransaction(db, async transaction => {
			const fsDocRef = doc(db, 'fs', uid, path, 'data').withConverter(
				fsDataConverter
			);
			const fsDoc = await transaction.get(fsDocRef);
			folderData = {
				name: folderName,
				createdAt: Date.now(),
				creationTime: new Date(),
			};
			if (fsDoc.exists()) {
				const { subfolders, files } = fsDoc.data();
				transaction.set(fsDocRef, {
					subfolders: [...subfolders, folderData],
					files,
				});
			} else {
				transaction.set(fsDocRef, {
					subfolders: [folderData],
					files: [],
				});
			}
			const newFolderDocRef = doc(
				db,
				'fs',
				uid,
				`${path}.${folderName}`,
				'data'
			).withConverter(fsDataConverter);
			transaction.set(newFolderDocRef, {
				subfolders: [],
				files: [],
			});
		});
		return folderData;
	} catch (e) {
		console.log('Transaction failed: ', e);
		return null;
	}
};

export const createNewFile = async (uid, path, fileName) => {
	if (!uid) return;
	try {
		let fileData = {};
		await runTransaction(db, async transaction => {
			const fsDocRef = doc(db, 'fs', uid, path, 'data').withConverter(
				fsDataConverter
			);
			const fsDoc = await transaction.get(fsDocRef);
			fileData = {
				name: fileName.split('.')[0],
				ext: fileName.split('.')[1] || '',
				nameWithExt: fileName,
				createdAt: Date.now(),
				creationTime: new Date(),
			};
			if (fsDoc.exists()) {
				const { subfolders, files } = fsDoc.data();
				transaction.set(fsDocRef, {
					subfolders,
					files: [...files, fileData],
				});
			} else {
				transaction.set(fsDocRef, {
					subfolders: [],
					files: [fileData],
				});
			}
		});
		return fileData;
	} catch (e) {
		console.log('Transaction failed: ', e);
		return null;
	}
};

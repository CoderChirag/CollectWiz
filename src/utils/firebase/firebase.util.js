import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore(app);

export const createUserProfileDocument = async (
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

export const signOutUser = async () => {
	await signOut(auth);
};

export const onAuthStateChangedListener = callback => {
	return onAuthStateChanged(auth, callback);
};
signOutUser();
// const createDummyData = async () => {
// 	try {
// 		const rootRef = await addDoc(collection(db, 'root'), {
// 			subfolders: ['a', 'b'],
// 			files: [
// 				{ name: 'c', ext: '.txt', nameWithExt: 'c.txt' },
// 				{ name: 'd', ext: '.pdf', nameWithExt: 'd.pdf' },
// 			],
// 		});
// 		console.log('Document written with ID: ', rootRef.id);
// 		const aRef = await addDoc(collection(db, 'root.a'), {
// 			subfolders: ['e'],
// 			files: [
// 				{ name: 'f', ext: '.txt', nameWithExt: 'f.txt' },
// 				{ name: 'g', ext: '.pdf', nameWithExt: 'g.pdf' },
// 			],
// 		});
// 		console.log('Document written with ID: ', aRef.id);
// 		const bRef = await addDoc(collection(db, 'root.b'), {
// 			subfolders: [],
// 			files: [
// 				{ name: 'h', ext: '.txt', nameWithExt: 'h.txt' },
// 				{ name: 'i', ext: '.pdf', nameWithExt: 'i.pdf' },
// 			],
// 		});
// 		console.log('Document written with ID: ', bRef.id);
// 		const eRef = await addDoc(collection(db, 'root.a.e'), {
// 			subfolders: [],
// 			files: [
// 				{ name: 'j', ext: '.txt', nameWithExt: 'j.txt' },
// 				{ name: 'k', ext: '.pdf', nameWithExt: 'k.pdf' },
// 			],
// 		});
// 		console.log('Document written with ID: ', eRef.id);
// 	} catch (e) {
// 		console.error('Error adding document: ', e);
// 	}
// };

// createDummyData();

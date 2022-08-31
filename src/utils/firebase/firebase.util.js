import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

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
export const db = getFirestore(app);

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

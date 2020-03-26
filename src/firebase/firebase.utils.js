// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyDolrG9sEWmeLhvGLiRHbcK4zAR6v4X2_0',
	authDomain: 'crwn-db-bee5b.firebaseapp.com',
	databaseURL: 'https://crwn-db-bee5b.firebaseio.com',
	projectId: 'crwn-db-bee5b',
	storageBucket: 'crwn-db-bee5b.appspot.com',
	messagingSenderId: '909307517450',
	appId: '1:909307517450:web:34956c16ec320bf5e91df3',
	measurementId: 'G-D69RK9E4FE'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

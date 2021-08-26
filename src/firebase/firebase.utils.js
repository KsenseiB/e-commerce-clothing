import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBqc33I7Q7t1r4zwQt6z8R7hl2QFE5GnKk',
  authDomain:
    'e-commerce-clothing-db-16350.firebaseapp.com',
  projectId: 'e-commerce-clothing-db-16350',
  storageBucket: 'e-commerce-clothing-db-16350.appspot.com',
  messagingSenderId: '159870039474',
  appId: '1:159870039474:web:ac0362f1d501080c0d20ab',
  measurementId: 'G-Q3ZREP1CTY',
};

export const createUserProfileDocument = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider);

export default firebase;

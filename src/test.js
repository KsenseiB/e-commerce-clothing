import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('documentID').collection('cartItems').doc('cartItemID');

firestore.doc('/users/userId/cartItems/itemId');
firestore.collection('/users/userId/cartItems');
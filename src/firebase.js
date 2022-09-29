// yarn add firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6HRuGU3kkVNOIH_ilvTgYTU1z0egPP5A",
  authDomain: "g-mail-clone-812a4.firebaseapp.com",
  projectId: "g-mail-clone-812a4",
  storageBucket: "g-mail-clone-812a4.appspot.com",
  messagingSenderId: "111549186954",
  appId: "1:111549186954:web:c84aa06cffeba7337b3e73"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
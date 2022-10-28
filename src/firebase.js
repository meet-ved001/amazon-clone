// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "./firebase";
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyBaeKiktg7U2IIf4TUGHOeGWBYmDhQ6KUQ",
    authDomain: "challenge-dcc0b.firebaseapp.com",
    projectId: "challenge-dcc0b",
    storageBucket: "challenge-dcc0b.appspot.com",
    messagingSenderId: "417900006410",
    appId: "1:417900006410:web:9b81c8b999ec849aaf23f3",
    measurementId: "G-WKZY2GKL82"
  });

  const db= firebaseApp.firestore();

  const auth=firebase.auth();

  export {db,auth};





















  
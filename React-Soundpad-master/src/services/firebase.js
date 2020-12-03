// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";


// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var admin = require('firebase-admin');


// Your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfa23ikoLuFQzMH8-2tccfHw8q2Yinlqk",
  authDomain: "groovehero-62b58.firebaseapp.com",
  databaseURL: "https://groovehero-62b58.firebaseio.com",
  projectId: "groovehero-62b58",
  storageBucket: "groovehero-62b58.appspot.com",
  messagingSenderId: "1032642603322",
  appId: "1:1032642603322:web:8369c6cdc3cec0e4db0803"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://groovehero-62b58.firebaseio.com'
});


//let db = admin.firestore();

// Finally, export it to use it throughout your app
export default firebase;
export const myStorage = firebase.storage();
export const myFirestore = firebase.firestore();
firebase.firestore().settings({
  timestampsInSnapshots: true
});

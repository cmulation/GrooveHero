/*Prerequisites:
    Install:
        -nodejs, npm (https://nodejs.org/en/download/) (check versions: nodejs -v, npm -v)
        -firebase: npm install - g firebase-tools (check version: firebase -V)
    Initialise firebase: firebase init
    Deploy firebase: firebase deploy--only storage
    Start app: npm start from app's directory
*/

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//get firebase configurations of your app
const firebaseConfig = {
    apiKey: "AIzaSyBfa23ikoLuFQzMH8-2tccfHw8q2Yinlqk",
    authDomain: "groovehero-62b58.firebaseapp.com",
    databaseURL: "https://groovehero-62b58.firebaseio.com",
    projectId: "groovehero-62b58",
    storageBucket: "groovehero-62b58.appspot.com",
    messagingSenderId: "1032642603322",
    appId: "1:1032642603322:web:8369c6cdc3cec0e4db0803"
};

//initialize firebase
firebase.initializeApp(firebaseConfig)

//get firebase authentication and access to the firebase database for your app
//can import multiple things here
export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
//but can only export one thing as default
export default firebase//export the whole firebase library
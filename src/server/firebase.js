import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCH8SI_APmsUOe1315DPKvta5TjAHUwz1k",
    authDomain: "alibaba-a30c5.firebaseapp.com",
    projectId: "alibaba-a30c5",
    storageBucket: "alibaba-a30c5.appspot.com",
    messagingSenderId: "630879348855",
    appId: "1:630879348855:web:be0a98820b182ba1377e72",
    measurementId: "G-6KJE7RQWLX"
};

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = app.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, auth, googleProvider }
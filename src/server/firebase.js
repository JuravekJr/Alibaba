import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA2eTPqpTp6stTIMVWdiR2el67mKcXQcIU",
    authDomain: "alibaba-clone-2763d.firebaseapp.com",
    projectId: "alibaba-clone-2763d",
    storageBucket: "alibaba-clone-2763d.appspot.com",
    messagingSenderId: "279641805146",
    appId: "1:279641805146:web:74a2e40cbd54d31d36a363",
    measurementId: "G-QNWZQVND9T"
};

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = app.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, auth, googleProvider }
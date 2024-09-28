// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiwJIuIUo-rVBc4puk-7CR-bEskmqcB1w",
  authDomain: "mybooksproject-785c2.firebaseapp.com",
  projectId: "mybooksproject-785c2",
  storageBucket: "mybooksproject-785c2.appspot.com",
  messagingSenderId: "277127940627",
  appId: "1:277127940627:web:767a1019eb45cc84530de6",
  measurementId: "G-6WEBYD326R"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

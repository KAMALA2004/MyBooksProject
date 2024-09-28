// src/firebaseFirestore.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDapcUWygnUofTXa_sehHF8L6Hdqzk07v4",
  authDomain: "wingreads7-7a633.firebaseapp.com",
  projectId: "wingreads7-7a633",
  storageBucket: "wingreads7-7a633.appspot.com",
  messagingSenderId: "870256787649",
  appId: "1:870256787649:web:602d8d36a8bbb5ef199440",
  measurementId: "G-K1SPNY6G1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Export everything needed
export { firestore, collection, addDoc, updateDoc, deleteDoc, doc, getDocs };

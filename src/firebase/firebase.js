// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLWLNQ9VYRR3iuSPSkisaOyfA6NUpDoNM",
  authDomain: "shopsquire-16018.firebaseapp.com",
  projectId: "shopsquire-16018",
  storageBucket: "shopsquire-16018.appspot.com",
  messagingSenderId: "473426475932",
  appId: "1:473426475932:web:0fec39ec686b95ca57e659",
  measurementId: "G-CQWTDRS3YW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Import the methods you need from firebase/auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
 
} from "firebase/auth";

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,

};

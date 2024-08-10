// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqkLkc5b_MW2-1wgAeNbHLNz_AFYcwBVk",
  authDomain: "ai-pantry-f7f7d.firebaseapp.com",
  projectId: "ai-pantry-f7f7d",
  storageBucket: "ai-pantry-f7f7d.appspot.com",
  messagingSenderId: "425543875015",
  appId: "1:425543875015:web:77f3185052d452786a41e2",
  measurementId: "G-6EE408FVMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export {firestore}
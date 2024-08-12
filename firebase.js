// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "inventory-management-app-bf160.firebaseapp.com",
  projectId: "inventory-management-app-bf160",
  storageBucket: "inventory-management-app-bf160.appspot.com",
  messagingSenderId: "138618665845",
  appId: "1:138618665845:web:378204b74021692443313c",
  measurementId: "G-T3J8649N8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl2FuaD37om88MWZC10B2hRNzcMpm4Jjo",
  authDomain: "react-app-12ff2.firebaseapp.com",
  projectId: "react-app-12ff2",
  storageBucket: "react-app-12ff2.appspot.com",
  messagingSenderId: "356212135642",
  appId: "1:356212135642:web:457908fe9e450e00e137e3",
  measurementId: "G-0Q1DJS97RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

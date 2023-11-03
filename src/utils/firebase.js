// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-4571.firebaseapp.com",
  projectId: "netflixgpt-4571",
  storageBucket: "netflixgpt-4571.appspot.com",
  messagingSenderId: "234634087724",
  appId: "1:234634087724:web:d2376a1a5fd34e90a47089",
  measurementId: "G-V19Q9Y5PQR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

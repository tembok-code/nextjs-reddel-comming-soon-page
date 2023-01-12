// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.firebase_api_key,
  authDomain: "mavi-reddel.firebaseapp.com",
  projectId: "mavi-reddel",
  storageBucket: "mavi-reddel.appspot.com",
  messagingSenderId: "1081816256150",
  appId: "1:1081816256150:web:b149b7ea9932f59372bcb7",
  measurementId: "G-NXLMQK3M17",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const database = getFirestore(app);

// import Rebase from 're-base';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPf52XXnGYZOro_PaO7LLXKRkqj0oQofA",
  authDomain: "catch-of-the-day-7766a.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-7766a-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-7766a",
  storageBucket: "catch-of-the-day-7766a.appspot.com",
  messagingSenderId: "557166950771",
  appId: "1:557166950771:web:b2a780cebd73668a1fad06",
  measurementId: "G-HGPFYZNMXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
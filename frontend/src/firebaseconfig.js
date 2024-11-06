// Import the functions you need from the SDKs you need
var admin = require("firebase-admin");
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKTeGTtXt8gVBKc3QAD-_Twj3gtScHwlw",
  authDomain: "testoauth-6aab6.firebaseapp.com",
  projectId: "testoauth-6aab6",
  storageBucket: "testoauth-6aab6.appspot.com",
  messagingSenderId: "237777401093",
  appId: "1:237777401093:web:18e028011ca7150bbc336c",
  measurementId: "G-S78GWCBM61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

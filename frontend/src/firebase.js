// Import the functions you need from Firebase SDK
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Ensure this is correctly set in your .env file
  authDomain: "authentication-61456.firebaseapp.com",
  projectId: "authentication-61456",
  storageBucket: "authentication-61456.firebasestorage.app",
  messagingSenderId: "578025110087",
  appId: "1:578025110087:web:34c26b8dcb4257a62acf62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

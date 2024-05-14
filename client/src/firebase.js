// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-bloghector.firebaseapp.com",
  projectId: "mern-bloghector",
  storageBucket: "mern-bloghector.appspot.com",
  messagingSenderId: "916859799451",
  appId: "1:916859799451:web:61fcfff0a5b18044d3033e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "artspace-project-fa818.firebaseapp.com",
  projectId: "artspace-project-fa818",
  storageBucket: "artspace-project-fa818.appspot.com",
  messagingSenderId: "433591466838",
  appId: "1:433591466838:web:1201af15d8770edb8434f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
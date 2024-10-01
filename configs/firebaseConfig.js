// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA3-rPsuXEJazcTWgK2WePTBGo5lhC--dM",
  authDomain: "car-app-43761.firebaseapp.com",
  projectId: "car-app-43761",
  storageBucket: "car-app-43761.appspot.com",
  messagingSenderId: "793648552325",
  appId: "1:793648552325:web:a366ee1a3a2757dc1d0cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Make sure you have this line
export const storage = getStorage(app);

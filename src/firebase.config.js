// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD01sFp5vI7IfOVdITVkt8iQPvsAGfx0GY",
  authDomain: "house-marketplace-app-9a6ee.firebaseapp.com",
  projectId: "house-marketplace-app-9a6ee",
  storageBucket: "house-marketplace-app-9a6ee.appspot.com",
  messagingSenderId: "283304596511",
  appId: "1:283304596511:web:26dfb376af67efbc30b12a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
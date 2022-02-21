// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6Mw1Bi5q195TrMG_zp5uQWBq7OYfHU-I",
  authDomain: "career-assist-6f3cd.firebaseapp.com",
  projectId: "career-assist-6f3cd",
  storageBucket: "career-assist-6f3cd.appspot.com",
  messagingSenderId: "839214916277",
  appId: "1:839214916277:web:07984bae84169262f6d4fc",
  measurementId: "G-9E7N6DW4J2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

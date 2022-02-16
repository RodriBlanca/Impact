import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE6iqNM6wyXNGqs-8uS5ND7JNJhwX_3CU",
  authDomain: "impact-db-3514a.firebaseapp.com",
  projectId: "impact-db-3514a",
  storageBucket: "impact-db-3514a.appspot.com",
  messagingSenderId: "1050392872898",
  appId: "1:1050392872898:web:cbaf2f7f7e48a7331b785b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const dbData = getDatabase(app);
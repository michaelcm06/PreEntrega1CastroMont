
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.TECNOSTORE_FIREBASE_API_KEY || "",
    authDomain: "michpets-280f8.firebaseapp.com",
    projectId: "michpets-280f8",
    storageBucket: "michpets-280f8.appspot.com",
    messagingSenderId: "370339154630",
    appId: "1:370339154630:web:e9a75b506d42aabe88a5c7",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
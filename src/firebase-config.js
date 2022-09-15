import { initializeApp } from "firebase/app";
import {getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBw1cMl2AjiV2HefImFANkBMhk-P7qyKjo",
    authDomain: "agr-website-be171.firebaseapp.com",
    projectId: "agr-website-be171",
    storageBucket: "agr-website-be171.appspot.com",
    messagingSenderId: "529285864155",
    appId: "1:529285864155:web:81009734a502c8af4ccafe",
    measurementId: "G-BR5XZRRK51"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFiresore } from "firebase/firestore"
const firebaseApiKey = process.env.FIREBASE_API_KEY;


const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "react-native-recipes-26cc8.firebaseapp.com",
  projectId: "react-native-recipes-26cc8",
  storageBucket: "react-native-recipes-26cc8.appspot.com",
  messagingSenderId: "263879751382",
  appId: "1:263879751382:web:09d83c6f845326cc747b77"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFiresore(FIREBASE_APP)
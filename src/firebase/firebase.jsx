import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC04N9fSRPm1K51a7t9xtcLSjBQkSWffUc",
  authDomain: "book-summary-44953.firebaseapp.com",
  projectId: "book-summary-44953",
  storageBucket: "book-summary-44953.appspot.com",
  messagingSenderId: "723194266641",
  appId: "1:723194266641:web:0a4828edf5e166bb0f1db0",
  measurementId: "G-YL0KK3LJ9D",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

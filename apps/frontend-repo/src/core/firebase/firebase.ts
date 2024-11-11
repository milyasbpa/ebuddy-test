// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVuyCMixns5YwU0LS0NqvwRC3gw5B-Mcg",
  authDomain: "ebuddy-test-60918.firebaseapp.com",
  projectId: "ebuddy-test-60918",
  storageBucket: "ebuddy-test-60918.firebasestorage.app",
  messagingSenderId: "648478239062",
  appId: "1:648478239062:web:fb55a5e2f4702b19844ef7",
  measurementId: "G-5TDJEMTNHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);
// if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
//   connectFirestoreEmulator(db, "localhost", 8080);
// }

// Get Firebase Auth instance
export const auth = getAuth(app);
// if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
//   connectAuthEmulator(auth, "http://localhost:9099");
// }

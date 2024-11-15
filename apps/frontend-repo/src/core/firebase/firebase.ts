// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { ENVIRONMENTS } from "../environments";

const firebaseConfig = {
  apiKey: ENVIRONMENTS.FIREBASE_API_KEY,
  authDomain: ENVIRONMENTS.FIREBASE_AUTH_DOMAIN,
  projectId: ENVIRONMENTS.FIREBASE_PROJECT_ID,
  storageBucket: ENVIRONMENTS.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENVIRONMENTS.FIREBASE_MESSAGING_SENDER_ID,
  appId: ENVIRONMENTS.FIREBASE_APP_ID,
  measurementId: ENVIRONMENTS.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);
if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
  connectFirestoreEmulator(db, "localhost", 8080);
}

// Get Firebase Auth instance
export const auth = getAuth(app);
if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
}

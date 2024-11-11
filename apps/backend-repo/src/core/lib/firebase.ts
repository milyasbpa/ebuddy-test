import admin from "firebase-admin";
import path from "path";

const serviceAccount = path.join(__dirname, "..", "..", "..", "./ebuddy.json");

const adminApps = admin.apps;

if (!adminApps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Connect to Firestore Emulator if running locally
if (process.env.FIRESTORE_EMULATOR_HOST) {
  const firestore = admin.firestore();
  firestore.settings({
    host: process.env.FIRESTORE_EMULATOR_HOST,
    ssl: false, // Disable SSL when connecting to the emulator
  });
}

export const firestore = admin.firestore();

export const firebaseAdmin = admin;

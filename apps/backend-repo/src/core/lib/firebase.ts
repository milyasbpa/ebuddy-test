import admin from "firebase-admin";
import path from "path";

const serviceAccount = path.join(__dirname, "..", "..", "..", "./ebuddy.json");

const adminApps = admin.apps;

if (!adminApps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

if (process.env.ENVIRONMENT === "development") {
  process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
  process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";
}

export const firestore = admin.firestore();

export const firebaseAdmin = admin;

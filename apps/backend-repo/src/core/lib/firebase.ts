import admin from "firebase-admin";
import path from "path";

const adminApps = admin.apps;

if (!adminApps.length) {
  if (process.env.ENVIRONMENT !== "development") {
    const serviceAccount = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "./ebuddy.json"
    );
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } else {
    admin.initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
  }
}

if (process.env.ENVIRONMENT === "development") {
  process.env.FIRESTORE_EMULATOR_HOST = process.env.FIRESTORE_EMULATOR_HOST;
  process.env.FIREBASE_AUTH_EMULATOR_HOST =
    process.env.FIREBASE_AUTH_EMULATOR_HOST;
}

export const firestore = admin.firestore();

export const firebaseAdmin = admin;

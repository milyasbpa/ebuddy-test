import admin from "firebase-admin";
import path from "path";

const serviceAccount = path.join(__dirname, "./ebuddy.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const firestore = admin.firestore();
export const firebaseAdmin = admin;

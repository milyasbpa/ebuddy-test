import { firebaseAdmin, firestore } from "../../../core/lib";
import { User } from "@ebuddy-turborepo/package";

export class UserService {
  static async getUser(userId: string) {
    const userDocRef = firestore.collection("users").doc(userId);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      return null;
    }

    return userDoc.data();
  }
  static async updateUser(
    email: string,
    userId: string,
    display_name?: string
  ) {
    const userDocRef = firestore.collection("users").doc(userId);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      const payload: User = {
        user_id: userId,
        email,
        display_name: display_name ?? "",
        lastLogin: firebaseAdmin.firestore.FieldValue.serverTimestamp(),
        createdAt: firebaseAdmin.firestore.FieldValue.serverTimestamp(),
      };
      await userDocRef.set(payload);
      return { created: true };
    } else {
      await userDocRef.update({
        email: email ?? "",
        display_name: display_name ?? "",
      });
      return { created: false };
    }
  }
}

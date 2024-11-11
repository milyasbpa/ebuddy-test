import Cookies from "universal-cookie";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  UserCredential,
} from "firebase/auth";

export const signUp = async (data: {
  email: string;
  password: string;
}): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export const signIn = async (data: {
  email: string;
  password: string;
}): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, data.email, data.password)
    .then((res) => {
      const cookies = new Cookies();
      const token = (res.user as any).accessToken;
      cookies.set("token", token, { path: "/" });
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

// Google sign-in function
export const googleSignIn = async (): Promise<User | null | undefined> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // await auth.fire.collection('users').doc(uid).set({
    //     uid,
    //     email,
    //     displayName,
    //     createdAt: admin.firestore.FieldValue.serverTimestamp(),
    //   });
    return result.user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error during Google sign-in:", error.message);
      throw error;
    } else {
      console.error("Unknown error during Google sign-in");
    }
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await auth.signOut();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error signing up:", error.message);
      throw error; // Rethrow after logging
    } else {
      console.error("Unknown error signing up");
    }
  }
};

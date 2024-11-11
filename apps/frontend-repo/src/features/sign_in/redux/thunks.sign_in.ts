import { fetchPutUser } from "@/core/api/services/user";
import { googleSignIn, signIn } from "@/core/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut, User } from "firebase/auth";

export const signInWithEmailPassword = createAsyncThunk(
  "sign_in/email_password",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    return await signIn({ email: email, password: password })
      .then((res) => {
        const user = res.user;
        return { email: user.email };
      })
      .catch((err) => {
        const message =
          err.message === "Firebase: Error (auth/invalid-email)."
            ? "FAILED_LOGIN"
            : err.message;

        return rejectWithValue(message);
      });
  }
);

export const signInWithGoogle = createAsyncThunk(
  "sign_in/google",
  async (_, { rejectWithValue }) => {
    return await googleSignIn()
      .then((res) => {
        return { email: res?.email ?? "" };
      })
      .catch((err) => {
        const message = err.message ?? "";
        return rejectWithValue(message);
      });
  }
);

export const updateUser = createAsyncThunk(
  "sign_in/update_user",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    return await fetchPutUser({
      body: {
        email: email,
      },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  }
);

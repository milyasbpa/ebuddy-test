import { fetchPutUser } from "@/core/api/services/user";
import { googleSignIn, signIn, signUp } from "@/core/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export const signUpWithEmailPassword = createAsyncThunk(
  "sign_up/email_password",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    return await signUp({ email: email, password: password })
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

export const signInWithEmailPassword = createAsyncThunk(
  "sign_up/sign_in_email_password",
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
  "sign_up/google",
  async (_, { rejectWithValue }) => {
    try {
      const user: User | null | undefined = await googleSignIn();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "sign_up/update_user",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const user: User | null | undefined = await fetchPutUser({
        body: {
          email: email,
        },
      });
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

import { PayloadAction } from "@reduxjs/toolkit";
import {
  signInWithEmailPassword,
  signInWithGoogle,
  updateUser,
} from "./thunks.sign_in";
import { SignInState } from "./types.sign_in";

export const extraReducers = (builder: any) => {
  // signInWithEmailPassword
  builder
    .addCase(signInWithEmailPassword.pending, (state: SignInState) => {
      state.loading = true;
    })
    .addCase(
      signInWithEmailPassword.fulfilled,
      (state: SignInState, action: PayloadAction<{ email: string }>) => {
        state.loading = false;
        console.log(action.payload.email, "ini payload");
        // state.user = action.payload;
        state.notification.is_open = true;
        state.notification.code = "SUCCESS_SIGN_IN";
        state.notification.severity = "success";
      }
    )
    .addCase(
      signInWithEmailPassword.rejected,
      (state: SignInState, action: PayloadAction<string>) => {
        state.loading = false;
        state.notification.is_open = true;
        state.notification.code = action.payload;
        state.notification.severity = "error";
      }
    );

  // signInWithGoogle
  builder
    .addCase(signInWithGoogle.pending, (state: SignInState) => {
      state.loading = true;
    })
    .addCase(
      signInWithGoogle.fulfilled,
      (state: SignInState, action: PayloadAction<{ email: string }>) => {
        state.user = action.payload;
      }
    )
    .addCase(
      signInWithGoogle.rejected,
      (state: SignInState, action: PayloadAction<string>) => {
        state.loading = false;
        state.notification.is_open = true;
        state.notification.code = action.payload;
        state.notification.severity = "error";
      }
    );

  // updateUser
  builder
    .addCase(updateUser.pending, (state: SignInState) => {
      state.loading = true;
    })
    .addCase(
      updateUser.fulfilled,
      (state: SignInState, action: PayloadAction<{ email: string }>) => {
        state.user = action.payload;
        state.loading = false;
        state.notification.is_open = true;
        state.notification.code = "SUCCESS_SIGN_IN";
        state.notification.severity = "success";
      }
    )
    .addCase(
      updateUser.rejected,
      (state: SignInState, action: PayloadAction<string>) => {
        state.loading = false;
        state.notification.is_open = true;
        state.notification.code = action.payload;
        state.notification.severity = "error";
      }
    );
};

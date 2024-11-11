import { PayloadAction } from "@reduxjs/toolkit";
import {
  signUpWithEmailPassword,
  signInWithGoogle,
  updateUser,
  signInWithEmailPassword,
} from "./thunks.sign_up";
import { SignUpState } from "./types.sign_up";

export const extraReducers = (builder: any) => {
  // signUpWithEmailPassword
  builder
    .addCase(signUpWithEmailPassword.pending, (state: SignUpState) => {
      state.loading = true;
    })
    .addCase(
      signUpWithEmailPassword.fulfilled,
      (state: SignUpState, action: PayloadAction<{ email: string }>) => {
        state.loading = false;
        state.user = action.payload;
      }
    )
    .addCase(
      signUpWithEmailPassword.rejected,
      (state: SignUpState, action: PayloadAction<string>) => {
        state.loading = false;
        state.notification.is_open = true;
        state.notification.code = action.payload;
        state.notification.severity = "error";
      }
    );

  // signInWithEmailPassword
  builder
    .addCase(signInWithEmailPassword.pending, (state: SignUpState) => {
      state.loading = true;
    })
    .addCase(
      signInWithEmailPassword.fulfilled,
      (state: SignUpState, action: PayloadAction<{ email: string }>) => {
        state.loading = false;
        state.user = action.payload;
      }
    )
    .addCase(
      signInWithEmailPassword.rejected,
      (state: SignUpState, action: PayloadAction<string>) => {
        state.loading = false;
        state.notification.is_open = true;
        state.notification.code = action.payload;
        state.notification.severity = "error";
      }
    );

  // signInWithGoogle
  builder
    .addCase(signInWithGoogle.pending, (state: SignUpState) => {
      state.loading = true;
    })
    .addCase(
      signInWithGoogle.fulfilled,
      (state: SignUpState, action: PayloadAction<{ email: string }>) => {
        state.user = action.payload;
      }
    )
    .addCase(
      signInWithGoogle.rejected,
      (state: SignUpState, action: PayloadAction<string>) => {
        state.loading = false;
        state.notification.is_open = true;
        state.notification.code = action.payload;
        state.notification.severity = "error";
      }
    );

  // updateUser
  builder
    .addCase(updateUser.pending, (state: SignUpState) => {
      state.loading = true;
    })
    .addCase(
      updateUser.fulfilled,
      (state: SignUpState, action: PayloadAction<{ email: string }>) => {
        state.user = action.payload;
        state.loading = false;
        state.notification.is_open = true;
        state.notification.code = "SUCCESS_SIGN_UP";
        state.notification.severity = "success";
      }
    )
    .addCase(
      updateUser.rejected,
      (state: SignUpState, action: PayloadAction<string>) => {
        state.loading = false;
        state.notification.is_open = true;
        state.notification.code = action.payload;
        state.notification.severity = "error";
      }
    );
};

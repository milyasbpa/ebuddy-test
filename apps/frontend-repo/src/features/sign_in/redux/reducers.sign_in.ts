import { SignInState } from "./types.sign_in";
import { PayloadAction } from "@reduxjs/toolkit";

// notification
export const closeNotification = (state: SignInState) => {
  state.notification.is_open = false;
};
// form
export const setEmailValue = (
  state: SignInState,
  action: PayloadAction<string>
) => {
  state.form.email.value = action.payload;
};
export const setEmailError = (
  state: SignInState,
  action: PayloadAction<null | { id: string; name: string }>
) => {
  state.form.email.error = action.payload;
};
export const setPasswordValue = (
  state: SignInState,
  action: PayloadAction<string>
) => {
  state.form.password.value = action.payload;
};
export const setPasswordError = (
  state: SignInState,
  action: PayloadAction<null | { id: string; name: string }>
) => {
  state.form.password.error = action.payload;
};

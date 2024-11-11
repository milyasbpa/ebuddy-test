import { SignUpState } from "./types.sign_up";
import { PayloadAction } from "@reduxjs/toolkit";

// notification
export const closeNotification = (state: SignUpState) => {
  state.notification.is_open = false;
};
// form
export const setEmailValue = (
  state: SignUpState,
  action: PayloadAction<string>
) => {
  state.form.email.value = action.payload;
};
export const setEmailError = (
  state: SignUpState,
  action: PayloadAction<{ value: string; regex: string }>
) => {
  const regex = new RegExp(action.payload.regex);

  state.form.email.error = regex.test(action.payload.value)
    ? null
    : { id: "invalid_email" };
};
export const setPasswordValue = (
  state: SignUpState,
  action: PayloadAction<string>
) => {
  state.form.password.value = action.payload;
};
export const setPasswordError = (
  state: SignUpState,
  action: PayloadAction<{ value: string }>
) => {
  state.form.password.error =
    action.payload.value.length < 8 ? { id: "invalid_password" } : null;
};

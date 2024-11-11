import { ProfileState } from "./types.profile";
import { PayloadAction } from "@reduxjs/toolkit";

// notification
export const closeNotification = (state: ProfileState) => {
  state.notification.is_open = false;
};
// form
export const setEmailValue = (
  state: ProfileState,
  action: PayloadAction<string>
) => {
  state.form.email.value = action.payload;
};
export const setEmailError = (
  state: ProfileState,
  action: PayloadAction<null | { id: string; name: string }>
) => {
  state.form.email.error = action.payload;
};
export const setDisplayNameValue = (
  state: ProfileState,
  action: PayloadAction<string>
) => {
  state.form.display_name.value = action.payload;
};

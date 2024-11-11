import { ProfileState } from "./types.profile";

export const initialState: ProfileState = {
  user: null,
  loading: false,
  notification: {
    is_open: false,
    code: "",
    severity: "success",
  },
  form: {
    email: {
      value: "",
      error: null,
    },
    display_name: {
      value: "",
    },
  },
};

import { SignInState } from "./types.sign_in";

export const initialState: SignInState = {
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
    password: {
      value: "",
      error: null,
    },
  },
};

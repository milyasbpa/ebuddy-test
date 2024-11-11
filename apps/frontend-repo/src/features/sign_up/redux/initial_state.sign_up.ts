import { SignUpState } from "./types.sign_up";

export const initialState: SignUpState = {
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

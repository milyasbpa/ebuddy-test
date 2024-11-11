export interface SignInState {
  user: null | { email: string | null };
  loading: boolean;
  // error: string | null;
  notification: {
    is_open: boolean;
    code: string;
    severity: "success" | "error";
  };
  form: {
    email: {
      value: string;
      error: null | { id: string; name: string };
    };
    password: {
      value: string;
      error: null | { id: string; name: string };
    };
  };
}

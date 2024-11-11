export interface ProfileState {
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
    display_name: {
      value: string;
    };
  };
}

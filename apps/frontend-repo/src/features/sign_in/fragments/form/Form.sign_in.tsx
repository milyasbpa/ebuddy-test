import * as React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store.sign_in";
import { setEmailValue, setPasswordValue } from "../../redux/slice.sign_in";
import { getDictionaries } from "../../i18n";
import { CardSignIn } from "../../components/card";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@/core/app/ui/icons/google";
import { useRouter } from "next/navigation";
import {
  signInWithEmailPassword,
  signInWithGoogle,
  updateUser,
} from "../../redux";
import { AppCollectionURL } from "@/core/app/router/constants/app";

export const FormSignIn = () => {
  const router = useRouter();
  const dictionaries = getDictionaries();
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.auth);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmailValue(e.currentTarget.value));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPasswordValue(e.currentTarget.value));
  };

  const emailError = !!state.form.email.error;
  const emailErrorMessage = !state.form.email.error
    ? ""
    : dictionaries.form.email.errors.find(
        (item) => item.id === state.form.email.error?.id
      )?.message;

  const passwordError = !!state.form.password.error;
  const passwordErrorMessage = !state.form.password.error
    ? ""
    : dictionaries.form.password.errors.find(
        (item) => item.id === state.form.password.error?.id
      )?.message;

  const handleSignInWithEmailPassword = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const result = await dispatch(
      signInWithEmailPassword({
        email: state.form.email.value,
        password: state.form.password.value,
      })
    );

    if (signInWithEmailPassword.fulfilled.match(result)) {
      const updateUserResponse = await dispatch(
        updateUser({
          email: state.form.email.value,
        })
      );
      if (updateUser.fulfilled.match(updateUserResponse)) {
        router.push(AppCollectionURL.profile());
      }
    }
  };

  const handleSignInWithGoogle = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const signInWithGoogleResponse = await dispatch(signInWithGoogle());
    if (signInWithGoogle.fulfilled.match(signInWithGoogleResponse)) {
      const updateUserResponse = await dispatch(
        updateUser({
          email: signInWithGoogleResponse.payload.email ?? "",
        })
      );
      if (updateUser.fulfilled.match(updateUserResponse)) {
        router.push(AppCollectionURL.profile());
      }
    }
  };

  return (
    <CardSignIn variant="outlined">
      <Typography component="h1" variant="h5">
        {dictionaries.title}
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 3,
          display: "grid",
          gridColumn: 1,
          gap: 2,
          width: "100%",
        }}
      >
        <FormControl>
          <FormLabel htmlFor={dictionaries.form.email.name}>
            {dictionaries.form.email.label}
          </FormLabel>
          <TextField
            error={!!state.form.email.error}
            helperText={emailErrorMessage}
            id={dictionaries.form.email.id}
            type={dictionaries.form.email.type}
            name={dictionaries.form.email.id}
            placeholder={dictionaries.form.email.placeholder}
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? "error" : "primary"}
            sx={{ ariaLabel: "email" }}
            value={state.form.email.value}
            onChange={handleChangeEmail}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">
            {dictionaries.form.password.label}
          </FormLabel>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            id={dictionaries.form.password.id}
            name={dictionaries.form.password.name}
            placeholder={dictionaries.form.password.placeholder}
            type={dictionaries.form.password.type}
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? "error" : "primary"}
            value={state.form.password.value}
            onChange={handleChangePassword}
          />
        </FormControl>
        <Button
          fullWidth
          disabled={state.loading}
          variant="contained"
          onClick={handleSignInWithEmailPassword}
        >
          <Box display="flex" gap={1} alignItems={"center"}>
            {state.loading && <CircularProgress size={16} />}
            <Typography
              color="primary"
              fontWeight="bold"
              sx={{ textAlign: "center" }}
            >
              {dictionaries.form.cta.sign_in.children}
            </Typography>
          </Box>
        </Button>
        <Divider>{dictionaries.form.divider.label}</Divider>
        <Button
          disabled={state.loading}
          fullWidth
          variant="outlined"
          onClick={handleSignInWithGoogle}
        >
          <Box display="flex" gap={1} alignItems={"center"}>
            {state.loading && <CircularProgress size={16} />}
            <Google style={{ width: 16, height: 16 }} />
            {dictionaries.form.cta.sign_in_with_google.children}
          </Box>
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Don&apos;t have an account?{" "}
          <Link
            href={AppCollectionURL.signUp()}
            variant="body2"
            sx={{ alignSelf: "center" }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </CardSignIn>
  );
};

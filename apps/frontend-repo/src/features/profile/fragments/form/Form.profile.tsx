import * as React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store.profile";
import { setEmailValue, setDisplayNameValue } from "../../redux/slice.profile";
import { getDictionaries } from "../../i18n";
import { CardProfile } from "../../components/card";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@/core/app/ui/icons/google";
import { useRouter } from "next/navigation";
import { profileUpdateUser } from "../../redux";

export const FormProfile = () => {
  const router = useRouter();
  const dictionaries = getDictionaries();
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.auth);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmailValue(e.currentTarget.value));
  };

  const handleChangeDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDisplayNameValue(e.currentTarget.value));
  };

  const emailError = !!state.form.email.error;
  const emailErrorMessage = !state.form.email.error
    ? ""
    : dictionaries.form.email.errors.find(
        (item) => item.id === state.form.email.error?.id
      )?.message;

  const handleUpdateProfile = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const updateUserResponse = await dispatch(
      profileUpdateUser({
        email: state.form.email.value,
        display_name: state.form.display_name.value,
      })
    );
  };

  return (
    <CardProfile variant="outlined">
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
          <FormLabel htmlFor={dictionaries.form.display_name.name}>
            {dictionaries.form.display_name.label}
          </FormLabel>
          <TextField
            id={dictionaries.form.display_name.id}
            type={dictionaries.form.display_name.type}
            name={dictionaries.form.display_name.id}
            placeholder={dictionaries.form.display_name.placeholder}
            autoComplete={dictionaries.form.display_name.name}
            autoFocus
            fullWidth
            variant="outlined"
            color={emailError ? "error" : "primary"}
            sx={{ ariaLabel: "email" }}
            value={state.form.display_name.value}
            onChange={handleChangeDisplayName}
          />
        </FormControl>

        <Button fullWidth variant="contained" onClick={handleUpdateProfile}>
          {dictionaries.form.cta.update.children}
        </Button>
      </Box>
    </CardProfile>
  );
};

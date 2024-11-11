import AppTheme from "@/core/app/ui/theme/theme";
import { CssBaseline } from "@mui/material";
import * as React from "react";
import { ContainerSignIn } from "../components/container";
import { FormSignIn } from "../fragments/form";
import { NotificationSignIn } from "../fragments/notification";

export const SignInContainer = () => {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <ContainerSignIn>
        <NotificationSignIn />
        <FormSignIn />
      </ContainerSignIn>
    </AppTheme>
  );
};

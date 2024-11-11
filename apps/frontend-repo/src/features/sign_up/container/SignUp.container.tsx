import AppTheme from "@/core/app/ui/theme/theme";
import { CssBaseline } from "@mui/material";
import * as React from "react";
import { ContainerSignUp } from "../components/container";
import { FormSignUp } from "../fragments/form";
import { NotificationSignUp } from "../fragments/notification";

export const SignUpContainer = () => {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <ContainerSignUp>
        <NotificationSignUp />
        <FormSignUp />
      </ContainerSignUp>
    </AppTheme>
  );
};

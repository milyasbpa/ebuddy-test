import AppTheme from "@/core/app/ui/theme/theme";
import { CssBaseline } from "@mui/material";
import * as React from "react";
import { ContainerProfile } from "../components/container";
import { FormProfile } from "../fragments/form";
import { NotificationProfile } from "../fragments/notification";
import { profileGetUser, useAppDispatch } from "../redux";

export const ProfileContainer = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(profileGetUser());
  }, []);
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <ContainerProfile>
        <NotificationProfile />
        <FormProfile />
      </ContainerProfile>
    </AppTheme>
  );
};

import { Alert, Collapse } from "@mui/material";
import * as React from "react";
import { getDictionaries } from "../../i18n";
import { useAppDispatch, useAppSelector } from "../../redux/store.sign_in";
import { closeNotification } from "../../redux/slice.sign_in";

export const NotificationSignIn = () => {
  const dictionaries = getDictionaries();
  const state = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleCloseNotification = () => {
    dispatch(closeNotification());
  };

  const message =
    dictionaries.notification.items.find(
      (item) => item.id === state.notification.code
    )?.message ?? state.notification.code;

  return (
    <Collapse in={state.notification.is_open}>
      <Alert
        severity={state.notification.severity}
        onClose={() => handleCloseNotification()}
      >
        {message}
      </Alert>
    </Collapse>
  );
};

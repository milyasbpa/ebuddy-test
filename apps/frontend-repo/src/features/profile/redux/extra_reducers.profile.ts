import { PayloadAction } from "@reduxjs/toolkit";
import { profileGetUser, profileUpdateUser } from "./thunks.profile";
import { ProfileState } from "./types.profile";
import { GetUserSuccessResponseInterface } from "@/core/api/models/user";

export const extraReducers = (builder: any) => {
  // profileGetUser
  builder
    .addCase(profileGetUser.pending, (state: ProfileState) => {
      state.loading = true;
    })
    .addCase(
      profileGetUser.fulfilled,
      (
        state: ProfileState,
        action: PayloadAction<GetUserSuccessResponseInterface>
      ) => {
        state.loading = false;
        state.form.email.value = action.payload.data.email;
        state.form.display_name.value = action.payload.data.display_name ?? "";
      }
    )
    .addCase(
      profileGetUser.rejected,
      (state: ProfileState, action: PayloadAction<string>) => {
        state.loading = false;
      }
    );

  // profileUpdateUser
  builder
    .addCase(profileUpdateUser.pending, (state: ProfileState) => {
      state.loading = true;
    })
    .addCase(
      profileUpdateUser.fulfilled,
      (state: ProfileState, action: PayloadAction<{ email: string }>) => {
        state.user = action.payload;
        state.notification.is_open = true;
        state.notification.code = "SUCCESS_UPDATE_PROFILE";
        state.notification.severity = "success";
      }
    )
    .addCase(
      profileUpdateUser.rejected,
      (state: ProfileState, action: PayloadAction<string>) => {
        state.loading = false;
        state.notification.is_open = true;
        state.notification.code = action.payload;
        state.notification.severity = "error";
      }
    );
};

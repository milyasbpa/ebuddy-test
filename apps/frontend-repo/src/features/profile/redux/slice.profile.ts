"use client";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial_state.profile";
import * as reducers from "./reducers.profile";
import { extraReducers } from "./extra_reducers.profile";

const signInSlice = createSlice({
  name: "sign_in",
  initialState: initialState,
  reducers: {
    ...reducers,
  },
  extraReducers: (builder) => {
    extraReducers(builder);
  },
});

export const {
  setEmailValue,
  setEmailError,
  setDisplayNameValue,
  closeNotification,
} = signInSlice.actions;
export default signInSlice.reducer;

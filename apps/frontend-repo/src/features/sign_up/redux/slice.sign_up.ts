"use client";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial_state.sign_up";
import * as reducers from "./reducers.sign_up";
import { extraReducers } from "./extra_reducers.sign_up";

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
  setPasswordValue,
  setPasswordError,
  closeNotification,
} = signInSlice.actions;
export default signInSlice.reducer;

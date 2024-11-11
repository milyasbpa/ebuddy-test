"use client";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial_state.sign_in";
import * as reducers from "./reducers.sign_in";
import { extraReducers } from "./extra_reducers.sign_in";

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

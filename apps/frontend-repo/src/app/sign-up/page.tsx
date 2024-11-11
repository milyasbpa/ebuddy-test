"use client";
import { store } from "@/features/sign_up/redux";
import { SignUpContainer } from "@/features/sign_up/container";
import * as React from "react";
import { Provider } from "react-redux";

export default function SignUpPage() {
  return (
    <React.Suspense>
      <Provider store={store}>
        <SignUpContainer />
      </Provider>
    </React.Suspense>
  );
}

"use client";
import { SignInContainer } from "@/features/sign_in/container";
import { store } from "@/features/sign_in/redux/store.sign_in";
import { Suspense } from "react";
import { Provider } from "react-redux";

export default function SignInPage() {
  return (
    <Suspense>
      <Provider store={store}>
        <SignInContainer />
      </Provider>
    </Suspense>
  );
}

'use client'
import { ProfileContainer } from "@/features/profile/container";
import { store } from "@/features/profile/redux";
import * as React from "react";
import { Provider } from "react-redux";

export default function ProfilePage() {
  return (
    <React.Suspense>
      <Provider store={store}>
        <ProfileContainer />
      </Provider>
    </React.Suspense>
  );
}

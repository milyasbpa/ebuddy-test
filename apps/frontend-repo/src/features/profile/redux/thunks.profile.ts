import { GetUserSuccessResponseInterface } from "@/core/api/models/user";
import { fetchGetUser, fetchPutUser } from "@/core/api/services/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export const profileGetUser = createAsyncThunk(
  "profile/get_user",
  async (_, { rejectWithValue }) => {
    return await fetchGetUser()
      .then((res: GetUserSuccessResponseInterface) => {
        console.log(res, "ini email");
        return res;
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const profileUpdateUser = createAsyncThunk(
  "profile/update_user",
  async (
    { email, display_name }: { email: string; display_name?: string },
    { rejectWithValue }
  ) => {
    return await fetchPutUser({
      body: {
        email: email,
        display_name:
          (!display_name || !display_name.length) ? undefined : display_name,
      },
    })
      .then((res: GetUserSuccessResponseInterface) => {
        console.log(res, "ini email");
        return res;
      })
      .catch((err) => {
        throw err;
      });
  }
);

import { NextApiRequest, NextApiResponse } from "next";

export interface GetUserRequestInterface extends NextApiRequest {}

export type GetUserResponseInterface = NextApiResponse<
  GetUserSuccessResponseInterface | GetUserErrorResponseInterface
>;

export interface GetUserSuccessResponseInterface {
  response_code: number;
  response_status: string;
  message: string;
  data: {
    createdAt: { _seconds: number; _nanoseconds: number };
    email: string;
    lastLogin: { _seconds: number; _nanoseconds: number };
    user_id: string;
    display_name: string;
  };
  redirect: null;
}

export interface GetUserErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}

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
    created_at: string;
    email: string;
    last_login: string;
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

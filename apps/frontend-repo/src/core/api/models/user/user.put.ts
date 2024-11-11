import { NextApiRequest, NextApiResponse } from "next";

export interface PutUpdateUserRequestInterface extends NextApiRequest {
  payload?: PutUpdateUserPayloadRequestInterface;
}

export interface PutUpdateUserPayloadRequestInterface {
  body: PutUpdateUserBodyRequestInterface;
}

export type PutUpdateUserBodyRequestInterface = {
  email?: string;
  display_name?: string;
};

export type PutUpdateUserResponseInterface = NextApiResponse<
  PutUpdateUserSuccessResponseInterface | PutUpdateUserErrorResponseInterface
>;

export interface PutUpdateUserSuccessResponseInterface {
  response_code: number;
  response_status: string;
  message: string;
  data: {
    email: string;
  };
  redirect: null;
}

export interface PutUpdateUserErrorResponseInterface {
  response_code: number;
  response_status: string;
  message: string;
  errors: {
    [key: string]: string[];
  };
}

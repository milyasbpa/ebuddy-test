import { DecodedIdToken } from "firebase-admin/auth";
import { Request } from "express";

export interface AuthRequest extends Request {
  user?: DecodedIdToken;
}

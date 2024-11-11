import { Response, NextFunction } from "express";
import { firebaseAdmin } from "../lib";
import { AuthRequest } from "../type/auth-request";
import jwt from "jsonwebtoken";
import { DecodedIdToken } from "firebase-admin/auth";

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.get("Authorization");
  if (!authorization) {
    res.status(401).json({
      errors: "Unauthorized",
    });
    return;
  }
  if (!authorization.includes("Bearer ")) {
    res.status(401).json({
      errors: "Unauthorized",
    });
    return;
  }

  const token = authorization.split(" ")[1];

  if (token) {
    try {
      if (process.env.ENVIRONMENT !== "development") {
        const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
      } else {
        const decodedToken = jwt.decode(token);
        req.user = decodedToken as DecodedIdToken;
        next();
      }
    } catch (error) {
      res.status(403).json({ message: "Forbidden", error: "User not found" });
      return;
    }
  } else {
    res.status(401).json({
      errors: "Unauthorized",
    });
    return;
  }
};

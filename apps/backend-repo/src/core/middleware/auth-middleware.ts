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

  console.log(process.env.ENVIRONMENT, "ini token");
  if (token) {
    try {
      if (process.env.ENVIRONMENT !== "development") {
        console.log("ini kepanggil ga");
        const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
      } else {
        console.log("ini kepanggil ga bawah");
        const decodedToken = jwt.decode(token);
        // const user = await firebaseAdmin
        //   .auth()
        //   .getUserByEmail("user@example.com");
        // const token = await firebaseAdmin.auth().createCustomToken("aksodkas");
        // console.log("Firebase ID Token:", token);
        // const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);

        req.user = decodedToken as DecodedIdToken;
        console.log(decodedToken, "ini decoded token");
        next();
      }
      // const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
      // req.user = decodedToken;
      // console.log(decodedToken,'ini decoded token')
      // next();
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

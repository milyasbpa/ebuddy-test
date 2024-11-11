import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../error";

export const errorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const test = error instanceof ZodError;

  if (error instanceof ZodError) {
    res.status(400).json({
      errors: `Validation Error : ${JSON.stringify(error)}`,
    });
  } else if (error instanceof ResponseError) {
    res.status(error.status).json({
      errors: error.message,
    });
  } else {
    res.status(500).json({
      errors: "Internal Server Error",
    });
  }
};

import express from "express";
import { apiRouter } from "../route";
import cors from "cors";
import * as functions from "firebase-functions";

export const api = express();
api.use(express.json());
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
api.use(cors(corsOptions));

api.use(apiRouter);
export const apiFunctions = functions.https.onRequest(api);

import express from "express";
import { apiRouter } from "../route";
import cors from "cors";
import * as functions from "firebase-functions";

export const app = express();
app.use(express.json());
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(apiRouter);

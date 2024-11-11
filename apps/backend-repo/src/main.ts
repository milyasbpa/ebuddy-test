import "dotenv/config";
import { app } from "./core/application/api";
import { logger } from "./core/application/logging";
import * as functions from "firebase-functions";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
export const api = functions.https.onRequest(app);

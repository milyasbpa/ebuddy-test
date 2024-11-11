import "dotenv/config";
import { api } from "./core/application/api";
import { logger } from "./core/application/logging";
import path from "path";

const PORT = process.env.PORT || 3000;
api.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});

import { api } from "./core/application/api";
import { logger } from "./core/application/logging";
import path from "path";

api.listen(3001, () => {
  //   logger.info(path.join(__dirname, "swagger-base.yaml"));
  logger.info("Listening on port 3001");
});

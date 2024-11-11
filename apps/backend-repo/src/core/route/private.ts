import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { UserControllers } from "../../modules/user/controller/user";

export const apiRouter = express.Router();
apiRouter.use(authMiddleware);

apiRouter.get("/api/v1/user", UserControllers.get);
apiRouter.put("/api/v1/user", UserControllers.update);

import { Response, NextFunction } from "express";
import { AuthRequest } from "../../../core/type/auth-request";
import { UserService } from "../service";

export class UserControllers {
  static async get(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const user = req.user!;
      const userData = await UserService.getUser(user.user_id);

      if (userData) {
        res.status(200).json({ data: userData });
        return;
      } else {
        res.status(404).json({ message: "User Not Found" });
        return;
      }
    } catch (e) {
      next(e);
    }
  }

  static async update(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { email, display_name } = req.body;
      const user = req.user;

      if (!email || !user) {
        res.status(400).json({
          error: "Missing required fields: email",
        });
        return;
      }

      const result = await UserService.updateUser(
        email,
        user.user_id,
        display_name
      );

      if (result.created) {
        res
          .status(200)
          .json({ message: "User data created and merged into Firestore" });
        return;
      } else {
        res.status(200).json({ message: "User data updated in Firestore" });
        return;
      }
    } catch (e) {
      next(e);
    }
  }
}

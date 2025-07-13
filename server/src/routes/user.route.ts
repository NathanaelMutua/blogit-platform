import { Router } from "express";
import { updateUserInfo } from "../controllers/user.controller";
import authenticateToken from "../middlewares/validations/validateToken";

const userRouter: Router = Router();

userRouter.patch("/", authenticateToken, updateUserInfo);

export default userRouter;

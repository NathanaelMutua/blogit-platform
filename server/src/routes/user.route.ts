import { Router } from "express";
import {
  getAllUserBlogs,
  updateUserInfo,
} from "../controllers/user.controller";
import authenticateToken from "../middlewares/validations/authenticateToken";
import { getUserBlogs } from "../controllers/blogs.controller";

const userRouter: Router = Router();

userRouter.patch("/", authenticateToken, updateUserInfo);
userRouter.get("/blogs", authenticateToken, getAllUserBlogs);

export default userRouter;

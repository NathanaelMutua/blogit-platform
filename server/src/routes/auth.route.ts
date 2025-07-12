import { Router } from "express";
import registrationValidation from "../middlewares/registrationValidation";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller";
import validateUserLogin from "../middlewares/validateUserLogin";

const authRouter: Router = Router();

authRouter.post("/register", registrationValidation, registerUser);
authRouter.post("/login", validateUserLogin, loginUser);
authRouter.post("/logout", logoutUser);

export default authRouter;

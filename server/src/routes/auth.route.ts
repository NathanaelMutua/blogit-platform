import { Router } from "express";
import registrationValidation from "../middlewares/registrationValidation";
import { loginUser, registerUser } from "../controllers/auth.controller";

const authRouter: Router = Router();

authRouter.post("/register", registrationValidation, registerUser);
authRouter.post("/login", loginUser);

export default authRouter;

import { Router } from "express";
import registrationValidation from "../middlewares/registrationValidation";
import { registerUser } from "../controllers/authController";

const authRouter: Router = Router();

authRouter.post("/register", registrationValidation, registerUser);

export default authRouter;

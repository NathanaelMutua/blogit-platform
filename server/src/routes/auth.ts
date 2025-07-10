import { Router } from "express";
import registrationValidation from "../middlewares/registrationValidation/registrationValidation";
import registerUser from "../controllers/registerUser";

const authRouter: Router = Router();

authRouter.post("/register", registrationValidation, registerUser);

export default authRouter;

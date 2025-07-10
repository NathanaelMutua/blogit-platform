import { Request, Response, NextFunction } from "express";
import { myClient } from "../registrationValidation/registrationValidation";

async function validateUsernameRegistration(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username } = req.body;

  if (!username) {
    res.status(400).json({ message: "Username is required!" });
    return;
  }

  const newUsername = await myClient.user.findFirst({
    where: { username },
  });

  if (newUsername) {
    res.status(400).json({ message: "This username is in use, pick another." });
  }

  next();
}

export default validateUsernameRegistration;

import { NextFunction, Request, Response } from "express";
import { myClient } from "./registrationValidation";

async function validateEmailRegistration(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: "Email is required!" });
    return;
  }

  const usedEmail = await myClient.user.findFirst({
    where: { email },
  });

  if (usedEmail) {
    res
      .status(400)
      .json({ message: "Email is already used, do you want to SIGN IN?" });
    return;
  }

  next();
}

export default validateEmailRegistration;

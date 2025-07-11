import { Request, Response, NextFunction } from "express";
import { myClient } from "../registrationValidation";

async function validateUsernameRegistration(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username } = req.body;

  if (!username) {
    res
      .status(400)
      .json({
        game_of_throws: "Username is required!",
        support: "nathanael.mutus.m@gmail.com",
      });
    return;
  }

  const newUsername = await myClient.user.findFirst({
    where: { username },
  });

  if (newUsername) {
    res
      .status(400)
      .json({
        game_of_throws: "This username is in use, pick another.",
        support: "nathanael.mutus.m@gmail.com",
      });
  }

  next();
}

export default validateUsernameRegistration;

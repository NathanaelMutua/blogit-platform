import { NextFunction, Request, Response } from "express";

function validatePasswordLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { password } = req.body;

  if (!password) {
    res
      .status(400)
      .json({ game_of_throws: "Kindly don't forget the password 👇🏽" });
  }

  next();
}

export default validatePasswordLogin;

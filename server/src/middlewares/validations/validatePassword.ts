import { Request, Response, NextFunction } from "express";
import zxcvbn from "zxcvbn";

const validatePassword = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { password } = req.body;

  const result = zxcvbn(password);

  if (password.length < 5) {
    res.status(400).json({
      game_of_throws: "Password must be at least 6 characters",
      support: "nathanael.mutus.m@gmail.com",
    });
  }

  if (result.score < 3) {
    res.status(400).json({
      game_of_throws: `Weak Password! ${result.feedback.suggestions[0]}`,
      support: "nathanael.mutus.m@gmail.com",
    });
    return;
  }
  next();
};

export default validatePassword;

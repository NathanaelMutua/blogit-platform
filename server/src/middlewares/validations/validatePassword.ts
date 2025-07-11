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
    res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  if (result.score < 3) {
    res.status(400).json({
      message: `Weak Password! ${result.feedback.suggestions[0]}`,
    });
    return;
  }
  next();
};

export default validatePassword;

import { Request, Response, NextFunction } from "express";

function validateUserIdentifierLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userIdentifier } = req.body;

  if (!userIdentifier) {
    res.status(400).json({ game_of_throws: "Email / Username is required!" });
    return;
  }

  next();
}

export default validateUserIdentifierLogin;

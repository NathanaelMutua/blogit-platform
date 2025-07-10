import { Response, Request, NextFunction } from "express";

function validateUserRegistrationNames(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { firstName, lastName } = req.body;

  // firstName validation
  if (!firstName) {
    res.status(400).json({ message: "First name is required!" });
    return;
  }

  if (firstName.length < 3) {
    res
      .status(400)
      .json({ message: "First name should be at least 3 letters" });
    return;
  }

  // lastName Validation
  if (!lastName) {
    res.status(400).json({ message: "Last name is required!" });
    return;
  }

  next();
}

export default validateUserRegistrationNames;

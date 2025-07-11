import { Response, Request, NextFunction } from "express";

function validateUserRegistrationNames(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { firstName, lastName } = req.body;

  // firstName validation
  if (!firstName) {
    res
      .status(400)
      .json({
        game_of_throws: "First name is required!",
        support: "nathanael.mutus.m@gmail.com",
      });
    return;
  }

  if (firstName.length < 3) {
    res
      .status(400)
      .json({
        game_of_throws: "First name should be at least 3 letters",
        support: "nathanael.mutus.m@gmail.com",
      });
    return;
  }

  // lastName Validation
  if (!lastName) {
    res
      .status(400)
      .json({
        game_of_throws: "Last name is required!",
        support: "nathanael.mutus.m@gmail.com",
      });
    return;
  }

  next();
}

export default validateUserRegistrationNames;

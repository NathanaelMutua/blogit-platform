import z, { parse, string } from "zod";
import { Request, Response, NextFunction } from "express";

const imageUrl = z.url().startsWith("https");

function validateProfileImage(req: Request, res: Response, next: NextFunction) {
  const { profileImage } = req.body;

  const parsedPassword = imageUrl.safeParse(profileImage);

  if (!parsedPassword.success) {
    res.status(400).json({
      game_of_throws: `${parsedPassword.error.issues[0].message}; Profile image must be a safe URL`,
      support: "nathanael.mutus.m@gmail.com",
    });
    return;
  }

  next();
}

export default validateProfileImage;

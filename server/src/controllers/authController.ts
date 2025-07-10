import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const myClient = new PrismaClient();

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, username, password, profileImage } =
      req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await myClient.user.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
        profileImage,
      },
    });

    res.status(201).json({ message: "User registered successfully!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "An Error Occurred!" });
  }
};

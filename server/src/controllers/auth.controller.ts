import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const myClient = new PrismaClient();

// user sign-up implementation

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

    res.status(201).json({ game_of_throws: "User registered successfully!" });
  } catch (e) {
    // console.log(e);
    res.status(500).json({
      game_of_throws: "Something went wrong. Please Try again",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

// user sign-in implementation

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { userIdentifier, password } = req.body;
    const matchedUser = await myClient.user.findFirst({
      where: {
        OR: [{ email: userIdentifier }, { username: userIdentifier }],
      },
    });

    if (!matchedUser) {
      res.status(400).json({
        game_of_throws:
          "Incorrect credentials. Do you want to SIGN UP instead?",
        support: "nathanael.mutua.m@gmail.com",
      });
      return;
    }

    const passwordMatch = bcrypt.compareSync(password, matchedUser.password);

    if (!passwordMatch) {
      res.status(400).json({
        game_of_throws:
          "Incorrect credentials. Do you want to SIGN UP instead?",
        support: "nathanael.mutua.m@gmail.com",
      });
      return;
    }

    const {
      password: loginPassword,
      dateJoined,
      lastUpdate,
      ...userDetails
    } = matchedUser;

    const token = jwt.sign(userDetails, process.env.JWT_SECRET!);
    res
      .cookie("authToken", token, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
        path: "/",
        secure: false, // for local development, set to true in production with HTTPS
      })
      .json(userDetails);
  } catch (e) {
    res.status(500).json({
      game_of_throws: "Something went wrong. Please Try again",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

// user log-out implementation

export const logoutUser = async (req: Request, res: Response) => {
  try {
    res
      .cookie("authToken", "", {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        expires: new Date(0),
        secure: false, // for local development, set to true in production with HTTPS
      })
      .json({ game_of_throws: "Logged out successfully✅" });
  } catch (e) {
    res.status(500).json({
      game_of_throws: "Something went wrong. Please Try again",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

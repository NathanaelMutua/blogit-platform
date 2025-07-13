import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AuthenticatedRequest } from "../middlewares/validations/validateToken";

const myClient = new PrismaClient();

// function to update user primary information
export const updateUserInfo = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { firstName, lastName, username, email, profileImage } = req.body;
    const userId = req.user?.id;

    // no need for me to have this in a seperate middleware
    if (!userId) {
      res.status(401).json({
        game_of_throws: "Unauthorized user!",
      });
      return;
    }

    const updatedUser = await myClient.user.update({
      where: { id: userId },
      data: {
        firstName,
        lastName,
        username,
        email,
        profileImage,
      },
    });

    res.status(200).json({
      game_of_throws: "User info updated successfully ✅",
      updated_user: updatedUser.username,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      game_of_throws: "An error occurred!",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

// function to update password
export const updatePassword = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    // console.log(e);
    res.status(500).json({
      game_of_throws: "An error occurred!",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

// function to get all user specific blogs
export const getAllUserBlogs = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    // console.log(e);
    res.status(500).json({
      game_of_throws: "An error occurred!",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

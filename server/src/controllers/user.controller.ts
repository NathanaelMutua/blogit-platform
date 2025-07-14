import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AuthenticatedRequest } from "../middlewares/validations/authenticateToken";
import bcrypt from "bcryptjs";

const myClient = new PrismaClient();

// function to update user primary information
export const updateUserInfo = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { firstName, lastName, username, email, profileImage } = req.body;
    const userId = req.user.id;

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
export const updatePassword = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { password, newPassword, confirmPassword } = req.body;
    const id = req.user.id;

    if (!password || !newPassword || !confirmPassword) {
      res
        .status(400)
        .json({ game_of_throws: "All password fields are required" });
      return;
    }

    if (newPassword !== confirmPassword) {
      res.status(400).json({ game_of_throws: "Recheck the entered password!" });
      return;
    }

    const currentUser = await myClient.user.findFirst({ where: { id } });

    if (!currentUser || !currentUser.password) {
      res
        .status(400)
        .json({ game_of_throws: "User not found or password missing!" });
      return;
    }

    const passwordMatch = bcrypt.compareSync(password, currentUser.password);

    if (!passwordMatch) {
      res.status(400).json({
        game_of_throws: "Incorrect current credentials!",
        support: "nathanael.mutua.m@gmail.com",
      });
      return;
    }

    const updatedHashedPassword = await bcrypt.hash(newPassword, 10);

    await myClient.user.update({
      where: { id },
      data: { password: updatedHashedPassword },
    });

    res
      .status(200)
      .json({ game_of_throws: "Password updated successfully ✅" });
  } catch (e) {
    res.status(500).json({
      game_of_throws: "An error occurred!",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

// function to get all user specific blogs
export const getAllUserBlogs = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const UserName = req.user.username;

    const allUserBlogs = await myClient.blog.findMany({
      where: {
        user: {
          is: {
            username: UserName,
            isDeleted: false,
          },
        },
      },
    });
    // console.log(req.user.username); // come back to this debuggin in a few
    res.status(200).json({
      game_of_throws: "User blogs retrieved successfully! ✅",
      userBlogs: allUserBlogs,
    });
  } catch (e) {
    // console.log(e);
    res.status(500).json({
      game_of_throws: "An error occurred!",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

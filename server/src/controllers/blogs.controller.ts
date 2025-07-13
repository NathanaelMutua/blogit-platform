import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const myClient = new PrismaClient();

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { userId, title, synopsis, content, htmlContent, featureImage } =
      req.body;

    const newBlog = await myClient.blog.create({
      data: {
        title,
        synopsis,
        content,
        htmlContent,
        featureImage,
        userId,
      },
    });
    res.status(201).json({
      game_of_throws: "Blog created successfully!✅",
      blog_title: newBlog.title,
    });
  } catch (e) {
    res.status(500).json({
      game_of_throws: "Something went wrong. Please Try again",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await myClient.blog.findMany({
      where: {
        isDeleted: false,
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            username: true, // this will prevent too much data, displaying only the name and username
          },
        },
      },
    });
    res
      .status(200)
      .json({ game_of_throws: "Blogs retrieved successfully!✅", blogs });
  } catch (e) {
    res.status(500).json({
      game_of_throws: "An error occurred",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;

    const { title, synopsis, content, htmlContent, featureImage } = req.body;

    const updatedPost = await myClient.blog.update({
      where: {
        id: blogId,
      },
      data: {
        title,
        synopsis,
        content,
        htmlContent,
        featureImage,
      },
    });
    res
      .status(200)
      .json({ game_of_throws: "Blog updated successfully!✅", updatedPost });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      game_of_throws: "An error occurred!",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UserPayload } from "../types";

const myClient = new PrismaClient();

// function to create a blog
export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, synopsis, content, htmlContent, featureImage } = req.body;
    const { id } = req.user as UserPayload;
    const newBlog = await myClient.blog.create({
      data: {
        title,
        synopsis,
        content,
        htmlContent,
        featureImage,
        userId: id,
      },
    });
    res.status(201).json({
      game_of_throws: "Blog created successfully!✅",
      blog_title: newBlog.title,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      game_of_throws: "Something went wrong. Please Try again",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

// function to get all blogs
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

// update a blog post
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
    // console.log(e);
    res.status(500).json({
      game_of_throws: "An error occurred!",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

// function to delete a blog
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;
    const deletedBlog = await myClient.blog.update({
      where: {
        id: blogId,
      },
      data: {
        isDeleted: true,
      },
    });
    res.status(200).json({
      game_of_throws: "Blog deleted successfully!❌",
      deleted_blog: deletedBlog.title,
    });
  } catch (e) {
    // console.log(e);
    res.status(500).json({
      game_of_throws: "An error occurred!",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

// function to retrieve a specific blog
export const getSpecificBlog = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;

    const specificBlog = await myClient.blog.findFirst({
      where: {
        id: blogId,
      },
    });
    res
      .status(200)
      .json({ game_of_throws: "Blog retrieved successfully!✅", specificBlog });
  } catch (e) {
    // console.log(e);
    res.status(500).json({
      game_of_throws: "An error occurred!",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
};

export const getUserBlogs = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const blogs = await myClient.blog.findMany({
      where: {
        userId: id,
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

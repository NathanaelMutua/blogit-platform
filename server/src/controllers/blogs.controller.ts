import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const myClient = new PrismaClient();

export const createBlog = async (req: Request, res: Response) => {
  // what I wanna do:
  // # create a blog post
  // which has all the blog data
  // get data from the request body
  // have a middleware to convert markdown to HTML
  // pass the featured image to cloudinary and retrieve the URL
  // add the details to the blog database

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

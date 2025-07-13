import { Router } from "express";
import { createBlog, getAllBlogs } from "../controllers/blogs.controller";
import markdownToHtml from "../middlewares/markdownToHtml";

const blogRouter: Router = Router();

blogRouter.post("/", markdownToHtml, createBlog);
blogRouter.get("/", getAllBlogs);

export default blogRouter;

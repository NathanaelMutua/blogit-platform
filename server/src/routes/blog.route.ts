import { Router } from "express";
import {
  createBlog,
  getAllBlogs,
  updateBlog,
} from "../controllers/blogs.controller";
import markdownToHtml from "../middlewares/markdownToHtml";

const blogRouter: Router = Router();

blogRouter.post("/", markdownToHtml, createBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.patch("/:blogId", updateBlog);

export default blogRouter;

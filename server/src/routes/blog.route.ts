import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateBlog,
} from "../controllers/blogs.controller";
import markdownToHtml from "../middlewares/markdownToHtml";

const blogRouter: Router = Router();

blogRouter.post("/", markdownToHtml, createBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.patch("/:blogId", markdownToHtml, updateBlog);
blogRouter.delete("/:blogId", deleteBlog);

export default blogRouter;

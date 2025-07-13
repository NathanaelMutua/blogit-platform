import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getSpecificBlog,
  updateBlog,
} from "../controllers/blogs.controller";
import markdownToHtml from "../middlewares/markdownToHtml";
import authenticateToken from "../middlewares/validations/authenticateToken";

const blogRouter: Router = Router();

blogRouter.post("/", authenticateToken, markdownToHtml, createBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.patch("/:blogId", markdownToHtml, updateBlog);
blogRouter.delete("/:blogId", deleteBlog);
blogRouter.get("/:blogId", getSpecificBlog);

export default blogRouter;

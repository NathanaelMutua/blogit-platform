import { Router } from "express";
import { createBlog } from "../controllers/blogs.controller";
import markdownToHtml from "../middlewares/markdownToHtml";

const blogRouter: Router = Router();

blogRouter.post("/", markdownToHtml, createBlog);

export default blogRouter;

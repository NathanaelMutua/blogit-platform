import { Router } from "express";
import { createBlog } from "../controllers/blogs.controller";

const blogRouter: Router = Router();

blogRouter.post("/create", createBlog);

export default blogRouter;

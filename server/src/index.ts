import express, { Express, Request, Response } from "express";
import authRouter from "./routes/auth.route";
import cors from "cors";
import blogRouter from "./routes/blog.route";
import userRouter from "./routes/user.route";
import cookieParser from "cookie-parser";
const app: Express = express();
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
const myClient = new PrismaClient();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://blogit-the-writers-platform.vercel.app"],
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    credentials: true, // Allow cookies to be sent
  })
);

app.get("/test-db", async (req, res) => {
  try {
    const users = await myClient.user.findMany();
    res.json(users);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});
app.get("/", (_req, res) => {
  res.send(`<h1>Blog Platform</h1>`);
});

app.use("/api/auth", authRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/user", userRouter);

const port = process.env.PORT || 5800;

app.listen(port, () => console.log(`App is running on port ${port}`));

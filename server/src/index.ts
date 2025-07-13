import express, { Express, Request, Response } from "express";
import authRouter from "./routes/auth.route";
import cors from "cors";
import blogRouter from "./routes/blog.route";
import userRouter from "./routes/user.route";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.get("/", (_req, res) => {
  res.send(`<h1>Blog Platform</h1>`);
});

app.use("/api/auth", authRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/user", userRouter);

const port = process.env.PORT || 5800;

app.listen(port, () => console.log(`App is running on port ${port}`));

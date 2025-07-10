import express, { Express, Request, Response } from "express";
import authRouter from "./routes/auth";

const app: Express = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send(`<h1>Blog Platform</h1>`);
});

app.use("/api/auth", authRouter);

const port = process.env.PORT || 5800;

app.listen(port, () => console.log(`App is running on port ${port}`));

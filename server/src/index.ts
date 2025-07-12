import express, { Express, Request, Response } from "express";
import authRouter from "./routes/auth.route";
import cors from "cors";

const app: Express = express();

app.use(express.json());
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

const port = process.env.PORT || 5800;

app.listen(port, () => console.log(`App is running on port ${port}`));

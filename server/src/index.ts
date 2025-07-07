import express, { Express } from "express";

const app: Express = express();

app.get("/", (_req, res) => {
  res.send(`<h1>Blog Platform</h1>`);
});

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`App is running on port ${port}`));

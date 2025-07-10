import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import registrationValidation from "./middlewares/registrationValidation/registrationValidation";

const app: Express = express();
export const myClient = new PrismaClient();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send(`<h1>Blog Platform</h1>`);
});

app.post(
  "/auth/register",
  registrationValidation,
  async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, username, password, profileImage } =
        req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      await myClient.user.create({
        data: {
          firstName,
          lastName,
          username,
          email,
          password: hashedPassword,
          profileImage,
        },
      });

      res.status(201).json({ message: "User registered successfully!" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "An Error Occurred!" });
    }
  }
);

const port = process.env.PORT || 5800;

app.listen(port, () => console.log(`App is running on port ${port}`));

import express, { Express } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import * as z from "zod";

const app: Express = express();
const myClient = new PrismaClient();

app.use(express.json());

// using zod for validation
const userSchema = z.object({
  firstName: z
    .string({ required_error: "First Name is required" })
    .refine((val) => val.length > 2, {
      message: "First Name must be more than 2 letters",
    }),
  lastName: z
    .string({ required_error: "Last Name is required" })
    .refine((val) => val.length > 0, {
      message: "Last Name is Required",
    }),
  email: z.string({ required_error: "Email is Required" }).email(),
  username: z.string(),
  password: z.string().refine((val) => val.length > 7, {
    message: "Password is must be at least 8 characters, try again!",
  }),
  profileImage: z.string().url().optional(),
});

app.get("/", (_req, res) => {
  res.send(`<h1>Blog Platform</h1>`);
});

app.post("/auth/register", async (req, res) => {
  try {
    const parsed = userSchema.safeParse(req.body);

    if (!parsed.success) {
      console.log(parsed.error);

      res
        .status(400)
        .json({ my_error: parsed.error.issues.map((issue) => issue.message) });
      return;
    }

    const { firstName, lastName, email, username, password, profileImage } =
      parsed.data;

    const newUserName = await myClient.user.findFirst({
      where: { username },
    });

    if (newUserName) {
      res.status(400).json({ message: "Username has already been used!" });
      return;
    }

    // we add the hashed password after validation
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
  } catch {
    res.status(500).json({ error: "An Error Occurred!" });
  }
});

const port = process.env.PORT || 5800;

app.listen(port, () => console.log(`App is running on port ${port}`));

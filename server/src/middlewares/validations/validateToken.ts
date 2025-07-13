import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: { id: string };
}

const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.authToken; //gets the authToken cookie that has the stored user data

  if (!token) {
    res.status(401).json({
      game_of_throws: "Sorry no token found!",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded as { id: string };
  } catch (error) {
    res.status(403).json({
      game_of_throws: "Invalid token!",
    });
  }
  next();
};

export default authenticateToken;

import { NextFunction, Request, Response } from "express";
import { getUserById } from "../../database/services/users.service";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session.userId)
    return res.status(401).send({ error: "Login First!" });

  try {
    const checkUser = await getUserById({
      userId: req.session.userId as string,
    });
    if (!checkUser) return res.status(404).send({ error: "Not authorized" });

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Server error" });
  }
};

import { Request, Response } from "express";
import { loginValidator } from "../utils/validators/login.validator";
import db from "../database";
import { and, eq } from "drizzle-orm";

export const login = async (req: Request, res: Response) => {
  const input = loginValidator.safeParse(req.body);

  if (!input.success) return res.status(400).send({ error: "Invalid inputs" });

  try {
    const checkUser = await db.query.users.findFirst({
      where: (user) =>
        and(
          eq(user.userUsername, input.data.username),
          eq(user.userPassword, input.data.password)
        ),
    });

    if (!checkUser)
      return res.status(404).send({
        error: "Username or Password is wrong!",
      });

    req.session.userId = checkUser.userId as string;
    return res.sendStatus(200);
  } catch (error) {
    return res.send(500).send({ error: "Server error" });
  }
};

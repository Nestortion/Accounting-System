import { Router } from "express";
import {
  createUser,
  getUsers,
  updateUser,
  toggleUserIsActive,
} from "../controller/users.controller.ts";

const usersRouter = Router();

//get all users
usersRouter.get("/", getUsers);

//create an users entry
usersRouter.post("/", createUser);

//update an users
usersRouter.put("/", updateUser);

//delete but update users isactive instead
usersRouter.put("/:userId", toggleUserIsActive);

export default usersRouter;

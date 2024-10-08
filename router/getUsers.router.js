import express from "express";
import { getUsers } from "../controller/users/getUsers";
import { addUsers } from "../controller/users/getUsers";
import { updatedUsers } from "../controller/users/getUsers";
import { deletedUsers } from "../controller/users/getUsers";
import { signIn } from "../controller/users/signin";
import { signUp } from "../controller/users/signup";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", addUsers);
userRouter.put("/:userid", updatedUsers);
userRouter.delete("/:userid", deletedUsers);
userRouter.post("/signIn", signIn);
userRouter.post("/signUp", signUp);

const express = require("express");

const { getUsers } = require("../controller/users/getUsers");
const { getUser } = require("../controller/users/getUser");
const { createUser } = require("../controller/users/createUser");
const { updateUser } = require("../controller/users/getUpdated");
const { deleteUser } = require("../controller/users/getDelete");

const userRouter = express.Router();

userRouter
  .get("/", getUsers)
  .get("/:id", getUser)
  .post("/addUser", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = userRouter;

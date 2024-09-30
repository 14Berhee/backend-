import express from "express";
import { userRouter } from "./router/getUsers.router";
import { categoryRouter } from "./router/getCategory.router";
import { recordRouter } from "./router/getRecord.router";

const app = express();

app.use(express.json());

const port = 8080;

app.use("/users", userRouter);
app.use("/category", categoryRouter);
app.use("/record", recordRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});

import express from "express";
import { userRouter } from "./router/getUsers.router";
import { categoryRouter } from "./router/getCategory.router";
import { recordRouter } from "./router/getRecord.router";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
const port = 8090;

app.use("/users", userRouter);
app.use("/category", categoryRouter);
app.use("/record", recordRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});

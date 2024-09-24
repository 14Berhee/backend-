import express from "express";
import { customerRouter } from "./router/customers.router";
const app = express();

app.use(express.json());

const port = 8000;

app.use("/customers", customerRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});

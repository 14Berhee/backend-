import express from "express";
import { getRecords } from "../controller/record/getRecord";
import { addRecords } from "../controller/record/getRecord";

export const recordRouter = express.Router();

recordRouter.get("/", getRecords);
recordRouter.post("/", addRecords);

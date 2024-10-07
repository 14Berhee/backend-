import express from "express";
import { getRecords } from "../controller/record/getRecord";
import { addRecords } from "../controller/record/getRecord";
import { updatedRecords } from "../controller/record/getRecord";
import { deletedRecord } from "../controller/record/getRecord";

export const recordRouter = express.Router();

recordRouter.get("/", getRecords);
recordRouter.post("/", addRecords);
recordRouter.put("/:recordid", updatedRecords);
recordRouter.delete("/:recordid", deletedRecord);

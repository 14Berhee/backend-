import express from "express";
import { getCategories } from "../controller/categories/getCategories";
import { addCategory } from "../controller/categories/getCategories";
import { updatedCategory } from "../controller/categories/getCategories";
import { deletedCategory } from "../controller/categories/getCategories";

export const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.post("/", addCategory);
categoryRouter.put("/:categoryid", updatedCategory);
categoryRouter.delete("/:categoryid", deletedCategory);

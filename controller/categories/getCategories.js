import { request, response } from "express";
import { sql } from "../../database";

export const getCategories = async (_request, response) => {
  try {
    const category = await sql`SELECT * FROM Category`;

    response.status(200).json({ data: category });
  } catch (error) {
    console.log(error);
    response.status(200);
  }
};

export const addCategory = async (request, response) => {
  const { name, description, category_img } = request.body;

  try {
    await sql`INSERT INTO Category(name , description , category_img)
    VALUES (${name} , ${description} , ${category_img})`;

    response.status(201).json({ category: request.body });
  } catch (error) {
    response.status(500).json({ message: "aldaa garlaa" });
  }
};

export const updatedCategory = async (request, response) => {
  const { categoryid } = request.params;
  const { name, description, category_img } = request.body;

  try {
    const updatedCategory = await sql`UPDATE Category
    SET name=${name} , description=${description} , category_img=${category_img}
    WHERE categoryid=${categoryid}
    RETURNING*;`;

    response.status(201).json({ category: updatedCategory[0] });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "aldaa garlaa" });
  }
};

export const deletedCategory = async (request, response) => {
  const { categoryid } = request.params;

  try {
    const deletedCategory = await sql`DELETE FROM Category 
    WHERE categoryid=${categoryid}
    RETURNING*;`;

    response.status(201).json({ category: deletedCategory[0] });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "aldaa garlaa" });
  }
};

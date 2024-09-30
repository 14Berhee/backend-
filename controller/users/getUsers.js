import { request, response } from "express";
import { sql } from "../../database";

export const getUsers = async (_request, response) => {
  try {
    const users = await sql`SELECT * FROM users`;

    response.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    response.status(200);
  }
};

export const addUsers = async (request, response) => {
  const { email, name, password, avatar_img } = request.body;

  try {
    await sql`INSERT INTO users (email , name , password , avatar_img)
  VALUES (${email} , ${name} , ${password} , ${avatar_img})`;

    response.status(200).json({ users: request.body });
  } catch (error) {
    response.status(500).json({ message: "aldaa garlaa" });
  }
};

export const updatedUsers = async (request, response) => {
  const { userid } = request.params;
  const { email, name, password, avatar_img } = request.body;

  try {
    const updatedUsers = await sql`UPDATE Users
    SET email=${email} , name=${name} , password=${password} , avatar_img=${avatar_img}
    WHERE userid=${userid} 
    RETURNING*;`;

    response.status(200).json({ users: request.body });
  } catch (error) {
    response.status(500).json({ message: "aldaa garlaa" });
  }
};

export const deletedUsers = async (request, response) => {
  const { userid } = request.params;

  try {
    const deletedUsers = await sql`DELETE FROM Users
    WHERE userid=${userid} 
    RETURNING*;`;

    response.status(200).json({ users: deletedUsers[0] });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "aldaa garlaa" });
  }
};

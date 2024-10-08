import { sql } from "../../database";

export const signUp = async (request, response) => {
  const { name, email, password, avatar_img } = request.body;

  console.log(request.body);

  try {
    const signUpUsers = await sql`
    INSERT INTO users (email, name, password, avatar_img)
    VALUES (${email}, ${name}, ${password}, ${avatar_img})
    RETURNING *;
  `;
    response.status(200).json({ users: signUpUsers[0] });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
};

import { sql } from "../../database";

export const signIn = async (request, response) => {
  const { email, password } = request.body;
  console.log(request.body);

  try {
    const users =
      await sql`SELECT * FROM users where email=${email} AND password=${password}`;

    response.status(200).json({ users: users });
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

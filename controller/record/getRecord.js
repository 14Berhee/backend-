import { request, response } from "express";
import { sql } from "../../database";

export const getRecords = async (_request, response) => {
  try {
    const record = await sql`SELECT * FROM Record`;

    response.status(200).json({ record: record });
  } catch (error) {
    console.log(error);
    response.status(200);
  }
};

export const addRecords = async (request, response) => {
  const { userid, name, amount, description, transactiontype, categoryid } =
    request.body;

  try {
    await sql`insert into Record(userId , name , amount, description, transactionType, categoryid)
    VALUES (${userid} , ${name} , ${amount}, ${description}, ${transactiontype}, ${categoryid})`;

    response.status(201).json({ record: response.body });
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

export const updatedRecords = async (request, response) => {
  const { recordid } = request.params;
  const { userid, name, amount, description, transactiontype, categoryid } =
    request.body;

  try {
    const updatedRecords = await sql`UPDATE Record 
    SET userid=${userid} , name=${name} , amount=${amount} , description=${description} , transactionType=${transactiontype}, categoryid=${categoryid}
    WHERE recordid=${recordid} RETURNING*;`;

    response.status(201).json({ record: updatedRecords[0] });
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

export const deletedRecord = async (request, response) => {
  const { recordid } = request.params;

  try {
    const deletedRecord = await sql`DELETE FROM Record
    WHERE recordid=${recordid} 
    RETURNING *;`;

    response.status(201).json({ record: deletedRecord[0] });
  } catch {
    response.status(500).json({ message: error });
  }
};

import { request, response } from "express";
import { sql } from "../../database";

export const getRecords = async (_request, response) => {
  try {
    const record = await sql`SELECT * FROM Record`;

    response.status(200).json({ data: record });
  } catch (error) {
    console.log(error);
    response.status(200);
  }
};

export const addRecords = async (request, response) => {
  const { userid, name, amount, transactiontype, description } = request.body;

  try {
    await sql`INSERT INTO Record(userid , name , amount , transactiontype , description , category)
    VALUES (userid=${userid} , name=${name} , amount=${amount} , description=${description} )
    SELECT * FROM Record WHERE transactionType=${transactiontype} ='INC'`;

    response.status(200).json({ record: response.status });
  } catch (error) {
    response.status(500).json({ message: "aldaa garlaa" });
  }
};

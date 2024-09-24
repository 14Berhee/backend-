import express from "express";
import { sql } from "../database";

export const customerRouter = express.Router();

customerRouter.get("/", async (_request, response) => {
  try {
    const customers = await sql`SELECT * FROM customers`;

    response.status(200).json({ data: customers });
  } catch (error) {
    console.log(error);
    response.status(200);
  }
});

customerRouter.post("/", async (request, response) => {
  const { firstname, lastname, email, address } = request.body;

  try {
    await sql`INSERT INTO customers (firstname , lastname , email, address)
        VALUES (${firstname} , ${lastname}  ,${email} , ${address} )`;

    response.status(201).json({ customers: request.body });
  } catch (error) {
    response.status(500).json({ message: "aldaa garlaa" });
  }
});

customerRouter.put("/:customerId", async (request, response) => {
  const { customerId } = request.params;
  const { firstname, lastname, email, address } = request.body;

  try {
    const updatedCustomer = await sql`UPDATE customers
    SET firstname=${firstname}, lastname=${lastname}, email=${email}, address=${address}
    WHERE customersId=${customerId}
    RETURNING *;
    `;

    response.status(201).json({ customer: updatedCustomer[0] });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "aldaa garlaa" });
  }
});

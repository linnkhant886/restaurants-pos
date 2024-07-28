// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// Serverless function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  if (method === "GET") {
    return res.status(200).send("OK GET menu");
  } else if (method === "POST") {
    return res.status(200).send("OK POST menu");
  } else if (method === "PUT") {
    return res.status(200).send("OK PUT menu");
  } else if (method === "DELETE") {
    return res.status(200).send("OK DELETE menu");
  }
  return res.status(405).send("Invalid method");
}

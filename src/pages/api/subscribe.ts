import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const email = req.body.email;

  try {
    await prisma?.subscription.create({
      data: {
        email: email,
      },
    });
    return res.status(200).json({ message: "Succesfully registered" });
  } catch (err: any) {
    if (err.code === "P2002") {
      return res.status(400).json({ message: "Email already exists" });
    }
    return res.status(400).json({ message: "Something went wrong" });
  }
}

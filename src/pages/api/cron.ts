import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("RUNNING THE CRON JOB");
  const registeredEmails = await prisma.subscription.findMany();
  console.log("RAN THE CRON JOB");

  console.log(registeredEmails);
}

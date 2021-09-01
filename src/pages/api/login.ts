import type { NextApiRequest, NextApiResponse } from "next";
import userModel from "~/models/userModel";

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const { email, password } = req.body;

  if (email !== userModel.email && password !== userModel.password) {
    return res.status(401).json("Error: Wrong email or password");
  }

  return res.status(200).json({ email });
};

export default handler;

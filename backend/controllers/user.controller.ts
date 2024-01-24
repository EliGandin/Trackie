import { Request, Response } from "express";
import { User } from "../models/user.model";
import { insertUser } from "../repositories/user.repository";

export const signUpUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body; // TODO: add bcrypt
    const user = new User(name, email, password);
    const data = await insertUser(user);

    return res
      .status(201)
      .json({ message: "User Created Successfully", data: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed To Create User" });
  }
};

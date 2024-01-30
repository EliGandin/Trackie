import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import {
  getUser,
  getUserById,
  insertUser,
} from "../repositories/user.repository";

export const signUpUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body; // TODO: add bcrypt

    const user = new User(name, email, password);
    const data = await insertUser(user);

    return res
      .status(201)
      .json({ message: "User Created Successfully", data: data });
  } catch (err) {
    res.status(500).json({ message: "Failed To Create User" }); //TODO: fix status code
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const userId = await getUser(email, password);
    const token = jwt.sign(
      {
        email: email,
        userId: userId,
      },
      "secret",
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .json({ message: "Successfully found a user", userId, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve user" });
  }
};

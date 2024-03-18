import { validate } from "email-validator";
import { User } from "../models/user.model";
import db from "./db/db";

const isValidNewUser = async (user: User) => {
  isValidEmail(user.email);
  isValidPassword(user.password);
};

const isValidEmail = async (email: string) => {
  if (!validate(email)) {
    throw new Error("Invalid Email");
  }

  const { rowCount } = await db.query(
    "SELECT user_id FROM users WHERE email = ($1)",
    [email]
  );

  if (rowCount) throw new Error("Email is Already in use");
  return true;
};

const isValidPassword = (password: string) => {
  if (password.length < 10)
    throw new Error("Password must be longer than 10 characters");
  return true;
};

export default isValidNewUser;

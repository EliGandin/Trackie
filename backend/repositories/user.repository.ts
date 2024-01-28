import { compare, hash } from "bcrypt";
import { User } from "../models/user.model";
import db from "../util/db";

export const getUserById = async (id: number) => {
  try {
    const data = await db.query("SELECT * FROM users WHERE user_id = ($1)", [
      id,
    ]);

    console.log(data.rows);
  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
};

export const getUser = async (email: string, password: string) => {
  try {
    const data = await db.query(
      "SELECT user_id,password FROM users WHERE email = ($1)",
      [email]
    );
    console.log(data);
    if (!data.rows[0]) {
      throw new Error("Incorrect email");
    }

    const matchingPassword = compare(data.rows[0]?.password, password);
    if (!matchingPassword) throw new Error("Incorrect password");
    return data.rows[0].user_id;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const insertUser = async (user: User) => {
  try {
    const hashedPassword = await hash(user.password, 12);
    console.log(hashedPassword);
    await db.query(
      "INSERT INTO users (name, email, password) VALUES ($1,$2,$3)",
      Object.values({ ...user, password: hashedPassword })
    );
  } catch (error) {
    throw new Error(String(error));
  }
};

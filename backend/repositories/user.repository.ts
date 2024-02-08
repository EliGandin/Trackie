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
      "SELECT user_id,password,name FROM users WHERE email = ($1)",
      [email]
    );
    if (!data.rows[0]) {
      throw new Error("Incorrect email");
    }

    const matchingPassword = await compare(password, data.rows[0]?.password);

    if (!matchingPassword) throw new Error("Incorrect password");
    return data.rows[0];
  } catch (error) {
    throw new Error(String(error));
  }
};

export const insertUser = async (user: User) => {
  try {
    const hashedPassword = await hash(user.password, 12);
    await db.query(
      "INSERT INTO users (name, email, password) VALUES ($1,$2,$3)",
      Object.values({ ...user, password: hashedPassword })
    );
  } catch (error) {
    throw new Error(String(error));
  }
};

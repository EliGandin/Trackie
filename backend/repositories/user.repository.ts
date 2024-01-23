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
  }
};

export const insertUser = async (user: User) => {
  try {
    await db.query(
      "INSERT INTO users (user_id, email, password) VALUES ($1,$2,$3)",
      Object.values(user)
    );
  } catch (error) {
    console.error(error);
  }
};

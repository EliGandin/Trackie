import { User } from "../models/user.model";
import db from "../util/db";

export const getUserById = async (id: number) => {
  try {
    const row = await db.query(
      "SELECT * FROM trackie.users WHERE user_id = ?",
      id
    );

    console.log(row[0]);
  } catch (error) {
    console.error(error);
  }
};

export const insertUser = async (user: User) => {
  try {
    await db.execute(
      "INSERT INTO trackie.users (user_id, email, password) VALUES (?,?,?)",
      Object.values(user)
    );
  } catch (error) {
    console.error(error);
  }
};

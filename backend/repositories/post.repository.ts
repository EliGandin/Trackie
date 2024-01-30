import { Post } from "../models/post.model";
import db from "../util/db";

export const getAllPosts = async () => {
  try {
    const data = await db.query("SELECT * from posts");
    console.log();
    return data.rows;
  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
};

export const getPostById = async (id: number) => {
  try {
    const data = await db.query(
      "SELECT post_id, location, user_id, story, name from posts NATURAL JOIN users WHERE post_id = ($1)",
      [id]
    );
    console.log(data.rows[0]);

    return data.rows[0];
  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
};

export const insertPost = async (post: Post) => {
  try {
    await db.query(
      "INSERT INTO posts (post_id,location,user_id,story) VALUES ($1,$2,$3,$4)",
      Object.values(post)
    );
  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
};

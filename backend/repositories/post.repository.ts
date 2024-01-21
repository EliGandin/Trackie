import { Post } from "../models/post.model";
import db from "../util/db";

export const getAllPosts = async () => {
  try {
    const rows = await db.query("SELECT * from trackie.posts");
    return rows[0];
  } catch (error) {
    console.error(error);
  }
};

export const getPostById = async (id: number) => {
  try {
    const row = await db.query(
      "SELECT * from trackie.posts WHERE post_id = ?",
      id
    );
    console.log(row[0]);

    return row[0];
  } catch (error) {
    console.error(error);
  }
};

export const insertPost = async (post: Post) => {
  try {
    await db.execute(
      "INSERT INTO trackie.posts (post_id,location,user_id,story) VALUES (?,?,?,?)",
      Object.values(post)
    );
  } catch (error) {
    console.error(error);
  }
};

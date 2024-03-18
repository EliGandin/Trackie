import { Post } from "../models/post.model";
import db from "../util/db/db";
import { getImage } from "../util/db/s3";

export const getAllPosts = async () => {
  try {
    const data = await db.query(
      "SELECT post_id, location, user_id, story, name from posts NATURAL JOIN users"
    );
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

    const image = await getImage(data.rows[0].post_id);

    return { data: data.rows[0], image };
  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
};

export const insertPost = async (post: Post) => {
  try {
    const data = await db.query(
      "INSERT INTO posts (location,user_id,story) VALUES ($1,$2,$3) RETURNING post_id",
      Object.values(post)
    );
    return data.rows[0].post_id;
  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
};

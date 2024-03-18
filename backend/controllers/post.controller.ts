import { Request, Response } from "express";

import db from "../util/db/db";
import { Post } from "../models/post.model";
import {
  getAllPosts,
  getPostById,
  insertPost,
} from "../repositories/post.repository";
import { putImage } from "../util/db/s3";

export const getIndex = async (req: Request, res: Response) => {
  try {
    const data = await getAllPosts();
    return res.status(200).json({ message: "index", data: data });
  } catch {
    console.error();
  }
};

export const getPost = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const data = await getPostById(Number(id));

    res.status(200).json({ message: "Fetched Post Successfully", data: data });
  } catch {
    console.error();
  }
};

export const addPost = async (req: Request, res: Response) => {
  try {
    const { location, userId, story } = JSON.parse(req.body.postData);
    const file = req.file;

    const post = new Post(location, userId, story);
    const postId = await insertPost(post);

    if (file) putImage(file, postId);

    return res
      .status(201)
      .json({ message: "Post Created Successfully", postId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed To Create Post" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await db.query("DELETE FROM posts WHERE id=?", [id]);
    res.status(204).json({ message: `Post ${id} Deleted Successfully` });
  } catch {
    console.error();
  }
};

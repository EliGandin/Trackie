import { Router } from "express";

import {
  getIndex,
  getPost,
  addPost,
  deletePost,
} from "../controllers/home.controller";

const router = Router();

router.get("/", getIndex);

router.get("/post/:id", getPost);

router.post("/", addPost);

router.delete("/post/:id", deletePost);

export default router;

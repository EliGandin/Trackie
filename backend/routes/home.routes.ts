import { Router } from "express";

import {
  getIndex,
  getPost,
  addPost,
  deletePost,
} from "../controllers/home.controller";

import { signUpUser } from "../controllers/user.controller"; //TODO: FIX

const router = Router();

router.get("/", getIndex);

router.get("/post/:id", getPost);

router.post("/", addPost);

router.delete("/post/:id", deletePost);

router.post("/signup", signUpUser); //TODO: TESTING PURPOSES ONLY

export default router;

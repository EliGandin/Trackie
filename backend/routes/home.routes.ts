import { Router } from "express";
import { loginUser, signUpUser } from "../controllers/user.controller"; //TODO: FIX

import {
  getIndex,
  getPost,
  addPost,
  deletePost,
} from "../controllers/home.controller";

const router = Router();

router.get("/", getIndex); //TODO: check if unneccesery

router.get("/post/:id", getPost);

router.post("/addPost", addPost);

router.delete("/post/:id", deletePost);

router.post("/signup", signUpUser); //TODO: TESTING PURPOSES ONLY

router.post("/login", loginUser);

export default router;

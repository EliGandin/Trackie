import { Router } from "express";
import { loginUser, signUpUser } from "../controllers/user.controller"; //TODO: FIX
import multer from "multer";

import {
  getIndex,
  getPost,
  addPost,
  deletePost,
} from "../controllers/post.controller";
import { uploadImage } from "../middlewares/multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.get("/", getIndex);

router.get("/post/:id", getPost);

router.post("/addPost", upload.single("image"), addPost);

router.delete("/post/:id", deletePost);

router.post("/signup", signUpUser); //TODO: TESTING PURPOSES ONLY

router.post("/login", loginUser);

export default router;

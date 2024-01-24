import { Router } from "express";
import { signUpUser } from "../controllers/user.controller";

const router = Router();

// router.get("/profile", getProfile) //TODO:

router.post("/signup", signUpUser);

export default router;
